#!/bin/bash

# Enhanced Server Setup Script for Windifi Frontend Deployment
set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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

print_header() {
    echo -e "${BLUE}[SETUP]${NC} $1"
}

# Server configuration - Use environment variables for flexibility
SERVER_IP="${SERVER_IP:-72.18.214.233}"
SERVER_USER="${SERVER_USER:-root}"
DEPLOYMENT_USER="${DEPLOYMENT_USER:-windifi}"

print_header "Setting up server at $SERVER_IP for Windifi Frontend deployment..."

# Validate inputs
if [[ -z "$SERVER_IP" || -z "$SERVER_USER" ]]; then
    print_error "SERVER_IP and SERVER_USER must be set"
    exit 1
fi

# Function to run command on server with timeout
run_on_server() {
    timeout 30 ssh -o ConnectTimeout=10 -o StrictHostKeyChecking=yes "$SERVER_USER@$SERVER_IP" "$1"
}

# Function to check if command exists on server
server_command_exists() {
    run_on_server "command -v $1 >/dev/null 2>&1"
}

# Function to create deployment user
create_deployment_user() {
    print_status "Creating deployment user: $DEPLOYMENT_USER"
    run_on_server "
        # Create user if it doesn't exist
        if ! id '$DEPLOYMENT_USER' &>/dev/null; then
            useradd -m -s /bin/bash '$DEPLOYMENT_USER'
            usermod -aG docker '$DEPLOYMENT_USER'
            echo '$DEPLOYMENT_USER ALL=(ALL) NOPASSWD: /usr/bin/docker, /usr/bin/docker-compose, /bin/mkdir' >> /etc/sudoers.d/windifi-deploy
            chmod 440 /etc/sudoers.d/windifi-deploy
        fi
        
        # Create .ssh directory for deployment user
        mkdir -p /home/$DEPLOYMENT_USER/.ssh
        chmod 700 /home/$DEPLOYMENT_USER/.ssh
        chown $DEPLOYMENT_USER:$DEPLOYMENT_USER /home/$DEPLOYMENT_USER/.ssh
    "
}

# Function to setup firewall
setup_firewall() {
    print_status "Configuring UFW firewall..."
    run_on_server "
        # Install UFW if not present
        apt-get update && apt-get install -y ufw
        
        # Reset UFW to defaults
        ufw --force reset
        
        # Default policies
        ufw default deny incoming
        ufw default allow outgoing
        
        # Allow SSH (current connection)
        ufw allow ssh
        
        # Allow HTTP and HTTPS
        ufw allow 80/tcp
        ufw allow 443/tcp
        
        # Allow application ports
        ufw allow 3000/tcp comment 'Windifi Development'
        
        # Enable UFW
        ufw --force enable
        
        # Show status
        ufw status verbose
    "
}

print_header "Checking server prerequisites and security..."

# System updates and security hardening
print_status "Updating system packages..."
run_on_server "
    export DEBIAN_FRONTEND=noninteractive
    apt-get update
    apt-get upgrade -y
    apt-get install -y curl wget gnupg2 software-properties-common apt-transport-https ca-certificates fail2ban unattended-upgrades
    
    # Configure automatic security updates
    echo 'Unattended-Upgrade::Automatic-Reboot \"false\";' >> /etc/apt/apt.conf.d/50unattended-upgrades
    systemctl enable unattended-upgrades
"

# Setup fail2ban for SSH protection
print_status "Configuring fail2ban for SSH protection..."
run_on_server "
    cat > /etc/fail2ban/jail.local << 'EOF'
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 3

[sshd]
enabled = true
port = ssh
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 3600
EOF
    systemctl enable fail2ban
    systemctl restart fail2ban
"

# Check if Docker is installed
if ! server_command_exists docker; then
    print_status "Installing Docker with official script..."
    run_on_server "
        # Download and run Docker installation script
        curl -fsSL https://get.docker.com -o get-docker.sh
        sh get-docker.sh
        
        # Start and enable Docker
        systemctl start docker
        systemctl enable docker
        
        # Configure Docker daemon for security and performance
        mkdir -p /etc/docker
        cat > /etc/docker/daemon.json << 'EOF'
{
  \"log-driver\": \"json-file\",
  \"log-opts\": {
    \"max-size\": \"10m\",
    \"max-file\": \"3\"
  },
  \"live-restore\": true,
  \"userland-proxy\": false,
  \"no-new-privileges\": true
}
EOF
        systemctl restart docker
        
        # Clean up installation script
        rm -f get-docker.sh
    "
    print_status "Docker installed successfully!"
else
    print_status "Docker is already installed on server"
fi

# Check if Docker Compose is installed
if ! server_command_exists docker-compose; then
    print_status "Installing Docker Compose..."
    run_on_server "
        # Get latest version
        COMPOSE_VERSION=\$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep 'tag_name' | cut -d'\"' -f4)
        
        # Install Docker Compose
        curl -L \"https://github.com/docker/compose/releases/download/\${COMPOSE_VERSION}/docker-compose-\$(uname -s)-\$(uname -m)\" -o /usr/local/bin/docker-compose
        chmod +x /usr/local/bin/docker-compose
        
        # Create symbolic link
        ln -sf /usr/local/bin/docker-compose /usr/bin/docker-compose
    "
    print_status "Docker Compose installed successfully!"
else
    print_status "Docker Compose is already installed on server"
fi

# Create deployment user and setup
create_deployment_user

# Setup firewall
setup_firewall

# Create deployment directory with proper permissions
print_status "Creating deployment directory..."
run_on_server "
    mkdir -p /opt/windifi-fe
    chown -R $DEPLOYMENT_USER:$DEPLOYMENT_USER /opt/windifi-fe
    chmod 755 /opt/windifi-fe
"

# Create production docker-compose file
print_status "Creating production docker-compose file..."
run_on_server "cat > /opt/windifi-fe/docker-compose.prod.yml << 'EOF'
version: '3.8'

services:
  windifi-fe:
    image: ghcr.io/\${GITHUB_REPOSITORY:-windifi-fe}:\${IMAGE_TAG:-latest}
    container_name: \${CONTAINER_NAME:-windifi-fe}
    restart: unless-stopped
    
    ports:
      - \"\${APP_PORT:-3000}:3000\"
    
    deploy:
      resources:
        limits:
          memory: 512M
          cpus: '1.0'
        reservations:
          memory: 256M
          cpus: '0.5'
    
    environment:
      - NODE_ENV=\${NODE_ENV:-production}
      - NEXT_TELEMETRY_DISABLED=1
      - PORT=3000
      - HOSTNAME=0.0.0.0
    
    healthcheck:
      test: ['CMD-SHELL', 'curl -f http://localhost:3000/api/health || exit 1']
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
    
    logging:
      driver: 'json-file'
      options:
        max-size: '10m'
        max-file: '3'
        compress: 'true'
    
    security_opt:
      - no-new-privileges:true
    
    read_only: true
    tmpfs:
      - /tmp:noexec,nosuid,size=100m
      - /app/.next/cache:noexec,nosuid,size=100m
    
    user: \"1001:1001\"
    
    networks:
      - windifi-network

networks:
  windifi-network:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
EOF"

# Create environment file template
print_status "Creating environment file template..."
run_on_server "cat > /opt/windifi-fe/.env.template << 'EOF'
# Application Configuration
NODE_ENV=production
APP_PORT=3000
CONTAINER_NAME=windifi-fe
IMAGE_TAG=latest

# GitHub Container Registry
GITHUB_REPOSITORY=your-username/windifi-fe

# Monitoring (optional)
ENABLE_MONITORING=false
EOF"

# Create deployment management script
print_status "Creating deployment management script..."
run_on_server "cat > /opt/windifi-fe/manage.sh << 'EOF'
#!/bin/bash
set -euo pipefail

SCRIPT_DIR=\"\$(cd \"\$(dirname \"\${BASH_SOURCE[0]}\")\" &> /dev/null && pwd)\"
cd \"\$SCRIPT_DIR\"

# Source environment variables
if [ -f .env ]; then
    source .env
fi

# Default values
CONTAINER_NAME=\${CONTAINER_NAME:-windifi-fe}
IMAGE_TAG=\${IMAGE_TAG:-latest}
GITHUB_REPOSITORY=\${GITHUB_REPOSITORY:-windifi-fe}

case \"\${1:-help}\" in
    deploy)
        echo \"🚀 Deploying Windifi Frontend...\"
        
        # Pull latest image
        docker pull ghcr.io/\$GITHUB_REPOSITORY:\$IMAGE_TAG
        
        # Use docker-compose for deployment
        docker-compose -f docker-compose.prod.yml up -d --remove-orphans
        
        echo \"✅ Deployment completed!\"
        echo \"🌐 Application available at: http://\$(hostname -I | awk '{print \$1}'):\${APP_PORT:-3000}\"
        ;;
        
    stop)
        echo \"🛑 Stopping application...\"
        docker-compose -f docker-compose.prod.yml down
        echo \"✅ Application stopped\"
        ;;
        
    restart)
        echo \"🔄 Restarting application...\"
        docker-compose -f docker-compose.prod.yml restart
        echo \"✅ Application restarted\"
        ;;
        
    logs)
        echo \"📋 Showing application logs...\"
        docker-compose -f docker-compose.prod.yml logs -f --tail=100
        ;;
        
    status)
        echo \"📊 Application status:\"
        docker-compose -f docker-compose.prod.yml ps
        echo \"\"
        echo \"🏥 Health check:\"
        curl -f http://localhost:\${APP_PORT:-3000}/api/health 2>/dev/null | jq . || echo \"Health check failed\"
        ;;
        
    cleanup)
        echo \"🧹 Cleaning up old images...\"
        docker image prune -f
        docker system prune -f --volumes
        echo \"✅ Cleanup completed\"
        ;;
        
    backup)
        echo \"📦 Creating backup...\"
        BACKUP_DIR=\"/opt/windifi-fe/backups/\$(date +%Y%m%d_%H%M%S)\"
        mkdir -p \"\$BACKUP_DIR\"
        docker-compose -f docker-compose.prod.yml config > \"\$BACKUP_DIR/docker-compose.yml\"
        cp .env \"\$BACKUP_DIR/\" 2>/dev/null || true
        echo \"✅ Backup created at: \$BACKUP_DIR\"
        ;;
        
    help|*)
        echo \"Windifi Frontend Deployment Manager\"
        echo \"\"
        echo \"Usage: \$0 [command]\"
        echo \"\"
        echo \"Commands:\"
        echo \"  deploy    - Deploy/update the application\"
        echo \"  stop      - Stop the application\"
        echo \"  restart   - Restart the application\"
        echo \"  logs      - Show application logs\"
        echo \"  status    - Show application status and health\"
        echo \"  cleanup   - Clean up old Docker images\"
        echo \"  backup    - Create configuration backup\"
        echo \"  help      - Show this help message\"
        ;;
esac
EOF"

run_on_server "chmod +x /opt/windifi-fe/manage.sh"

# Set proper ownership
run_on_server "chown -R $DEPLOYMENT_USER:$DEPLOYMENT_USER /opt/windifi-fe"

# Create log rotation configuration
print_status "Setting up log rotation..."
run_on_server "cat > /etc/logrotate.d/windifi-fe << 'EOF'
/var/lib/docker/containers/*/*-json.log {
    daily
    rotate 7
    compress
    delaycompress
    missingok
    notifempty
    create 644 root root
    postrotate
        /bin/kill -USR1 \$(cat /var/run/docker.pid 2>/dev/null) 2>/dev/null || true
    endscript
}
EOF"

# Test installations
print_status "Testing installations..."
run_on_server "
    docker --version
    docker-compose --version
    systemctl is-active docker
    systemctl is-active fail2ban
    ufw status
"

print_header "Server setup completed successfully!"
echo
echo "🔧 Server Configuration Summary:"
echo "   - Ubuntu server with security hardening"
echo "   - Docker and Docker Compose installed"
echo "   - UFW firewall configured"
echo "   - Fail2ban for SSH protection"
echo "   - Deployment user: $DEPLOYMENT_USER"
echo "   - Deployment directory: /opt/windifi-fe"
echo
echo "📋 Next Steps:"
echo "1. Setup SSH keys for deployment user:"
echo "   ./scripts/setup-ssh-keys.sh"
echo
echo "2. Configure GitHub repository secrets:"
echo "   - SSH_PRIVATE_KEY: SSH private key for deployment"
echo "   - SERVER_HOST: $SERVER_IP"
echo "   - SERVER_USER: $DEPLOYMENT_USER"
echo
echo "3. Update environment configuration:"
echo "   - Copy /opt/windifi-fe/.env.template to /opt/windifi-fe/.env"
echo "   - Update GITHUB_REPOSITORY with your actual repository name"
echo
echo "4. Test deployment:"
echo "   - Push to develop branch to trigger CI/CD"
echo "   - Or manually: ssh $DEPLOYMENT_USER@$SERVER_IP '/opt/windifi-fe/manage.sh deploy'"
echo
echo "🌐 Application URLs:"
echo "   - Development: http://$SERVER_IP:3000"
echo "   - Production: http://$SERVER_IP"
echo "   - Health Check: http://$SERVER_IP:3000/api/health"
echo
echo "📁 Server Files Created:"
echo "   - /opt/windifi-fe/docker-compose.prod.yml"
echo "   - /opt/windifi-fe/manage.sh"
echo "   - /opt/windifi-fe/.env.template"
echo "   - /etc/logrotate.d/windifi-fe" 