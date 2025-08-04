# Deployment Setup Guide

This document explains the CI/CD pipeline setup and server requirements for WindiFi Frontend.

## Issues Fixed

### 1. Sudo Permission Error

**Problem**: The original pipeline used `sudo mkdir -p /opt/windifi-fe` which required password authentication.

**Solution**:

- Removed all `sudo` commands
- Changed deployment directory to `~/windifi-fe-deploy` (user's home directory)
- Ensured the deployment user is in the `docker` group for Docker permissions

### 2. Complex Manual Docker Commands

**Problem**: The pipeline used complex manual `docker run` commands with many parameters.

**Solution**:

- Replaced with `docker-compose` for better container management
- Uses existing `docker-compose.yml` and `docker-compose.prod.yml` files
- Simplified environment variable management

### 3. Overly Complex Rollback Logic

**Problem**: Complex container backup and restore logic that was error-prone.

**Solution**:

- Simplified to just stop failed containers
- Relies on docker-compose for consistent deployments
- Reduced complexity while maintaining reliability

## Server Setup Requirements

### 1. User Configuration

The deployment user on the server must:

```bash
# Add user to docker group (no sudo needed for docker commands)
sudo usermod -aG docker $USER

# Log out and back in for group changes to take effect
```

### 2. Required Software

- Docker Engine
- Docker Compose
- SSH server configured for key-based authentication

### 3. Directory Structure

The pipeline will create and use:

```
~/windifi-fe-deploy/
├── docker-compose.yml         # Copied from repo
├── docker-compose.prod.yml    # Copied from repo
├── .env                       # Generated during deployment
└── logs/                      # Docker logs
```

### 4. GitHub Secrets Required

- `SSH_PRIVATE_KEY`: Private SSH key for deployment user
- `SERVER_HOST`: Server hostname or IP address
- `SERVER_USER`: Username for SSH connection

## Pipeline Optimizations

### 1. Removed Unnecessary Steps

- Removed `driver-opts: network=host` from Docker Buildx (not needed)
- Simplified checkout to only fetch required compose files
- Reduced health check attempts from 12 to 6
- Streamlined cleanup process

### 2. Improved Error Handling

- Better error messages with context
- Proper variable scoping in SSH commands
- Graceful fallbacks for cleanup operations
- Container logs displayed on failures

### 3. Enhanced Security

- No sudo requirements
- Proper SSH key permissions (600)
- Container runs as non-root user (defined in Dockerfile)
- Read-only root filesystem in containers

## Environment-Specific Deployment

### Development Environment

- Deploys on pushes to `develop` branch
- Uses port 3000
- Uses `docker-compose.yml`
- Available at `http://server:3000`

### Production Environment

- Deploys on pushes to `main` branch
- Uses port 80
- Uses `docker-compose.prod.yml`
- Available at `http://server`

## Manual Deployment Script

A deployment script is provided at `scripts/deploy.sh` for manual deployments:

```bash
# On the server
chmod +x ~/windifi-fe-deploy/deploy.sh

# Deploy specific image
IMAGE_TAG="ghcr.io/owner/repo:tag" ./deploy.sh

# Deploy with custom settings
IMAGE_TAG="ghcr.io/owner/repo:tag" \
COMPOSE_FILE="docker-compose.prod.yml" \
APP_PORT="80" \
./deploy.sh
```

## Troubleshooting

### Common Issues

1. **Permission Denied for Docker**

   ```bash
   # Check if user is in docker group
   groups $USER

   # If not, add to docker group
   sudo usermod -aG docker $USER
   ```

2. **Container Fails to Start**

   ```bash
   # Check logs
   cd ~/windifi-fe-deploy
   docker-compose logs

   # Check container status
   docker-compose ps
   ```

3. **Health Check Failures**

   ```bash
   # Test health endpoint manually
   curl -f http://localhost:3000/api/health

   # Check if port is accessible
   netstat -tlnp | grep :3000
   ```

### Monitoring

The pipeline includes health checks that verify:

- Container starts successfully
- Health endpoint responds correctly
- Application is accessible on the configured port

Logs are automatically captured and displayed if deployment fails.
