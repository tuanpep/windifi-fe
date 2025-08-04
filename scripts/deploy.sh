#!/bin/bash

# WindiFi Frontend Deployment Script
# This script should be placed on the deployment server

set -e

# Configuration
DEPLOY_DIR="$HOME/windifi-fe-deploy"
COMPOSE_FILE="${COMPOSE_FILE:-docker-compose.yml}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
APP_PORT="${APP_PORT:-3000}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

# Ensure user is in docker group
if ! groups | grep -q docker; then
    error "User is not in docker group. Please add user to docker group:"
    echo "sudo usermod -aG docker \$USER"
    echo "Then log out and back in."
    exit 1
fi

# Check if Docker is running
if ! docker info >/dev/null 2>&1; then
    error "Docker is not running. Please start Docker service."
    exit 1
fi

# Check if docker-compose is available
if ! command -v docker-compose >/dev/null 2>&1; then
    error "docker-compose is not installed. Please install docker-compose."
    exit 1
fi

log "Starting deployment with IMAGE_TAG=$IMAGE_TAG, COMPOSE_FILE=$COMPOSE_FILE, APP_PORT=$APP_PORT"

# Create deployment directory
mkdir -p "$DEPLOY_DIR"
cd "$DEPLOY_DIR"

# Create environment file
log "Creating environment configuration..."
cat > .env << EOF
IMAGE_TAG=$IMAGE_TAG
APP_PORT=$APP_PORT
NODE_ENV=production
CONTAINER_NAME=windifi-fe
EOF

# Pull the new image
log "Pulling Docker image: $IMAGE_TAG"
if ! docker pull "$IMAGE_TAG"; then
    error "Failed to pull image: $IMAGE_TAG"
    exit 1
fi

# Stop existing containers
log "Stopping existing containers..."
docker-compose -f "$COMPOSE_FILE" down --remove-orphans || true

# Start new containers
log "Starting new containers..."
if ! docker-compose -f "$COMPOSE_FILE" up -d; then
    error "Failed to start containers"
    docker-compose -f "$COMPOSE_FILE" logs
    exit 1
fi

# Wait for containers to be ready
log "Waiting for containers to start..."
sleep 15

# Verify containers are running
if ! docker-compose -f "$COMPOSE_FILE" ps | grep -q "Up"; then
    error "Containers failed to start properly"
    docker-compose -f "$COMPOSE_FILE" logs
    exit 1
fi

success "Deployment completed successfully!"
log "Application should be available on port $APP_PORT"

# Show container status
log "Container status:"
docker-compose -f "$COMPOSE_FILE" ps

# Clean up old images (keep last 3)
log "Cleaning up old images..."
docker images --format "table {{.Repository}}:{{.Tag}}\t{{.CreatedAt}}" | \
    grep "ghcr.io.*windifi" | \
    tail -n +4 | \
    awk '{print $1}' | \
    xargs -r docker rmi || true

docker image prune -f >/dev/null 2>&1 || true

success "Deployment and cleanup completed!"