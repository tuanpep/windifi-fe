#!/bin/bash

# Deployment script for Windifi Frontend
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    print_error "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Get the environment from command line argument
ENVIRONMENT=${1:-develop}

print_status "Deploying Windifi Frontend to $ENVIRONMENT environment..."

case $ENVIRONMENT in
    develop)
        print_status "Building and running with Docker Compose..."
        docker-compose up --build -d
        print_status "Application is running at http://localhost:3000"
        print_status "Health check available at http://localhost:3000/api/health"
        ;;
    *)
        print_error "Invalid environment. Use: develop"
        exit 1
        ;;
esac

print_status "Deployment completed successfully!" 