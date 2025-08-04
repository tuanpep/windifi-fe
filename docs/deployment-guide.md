# Windifi Frontend - Enhanced CI/CD Deployment Guide

This guide covers the complete setup and deployment process for the Windifi Frontend application using the enhanced CI/CD pipeline with best practices for Ubuntu server deployment.

## 🏗️ Architecture Overview

The deployment architecture includes:

- **Quality Gate**: Comprehensive testing, linting, and security checks
- **Blue-Green Deployment**: Zero-downtime deployments with automatic rollback
- **Container Security**: Hardened Docker containers with resource limits
- **Health Monitoring**: Comprehensive health checks and validation
- **Environment Separation**: Separate configurations for development and production

## 📋 Prerequisites

### Local Development Machine

- Git
- SSH client
- Access to GitHub repository with admin permissions

### Ubuntu Server

- Ubuntu 20.04 LTS or later
- Minimum 2GB RAM, 20GB storage
- Public IP address
- SSH access with sudo privileges

## 🚀 Quick Setup

### 1. Server Setup

Run the enhanced server setup script:

```bash
# Set your server details
export SERVER_IP="your-server-ip"
export SERVER_USER="root"  # or your sudo user
export DEPLOYMENT_USER="windifi"

# Run server setup
./scripts/setup-server.sh
```

This script will:

- ✅ Update system packages and apply security hardening
- ✅ Install Docker and Docker Compose
- ✅ Configure UFW firewall
- ✅ Setup fail2ban for SSH protection
- ✅ Create deployment user with proper permissions
- ✅ Create deployment directory structure
- ✅ Setup log rotation

### 2. SSH Key Setup

Setup SSH keys for secure deployment:

```bash
./scripts/setup-ssh-keys.sh
```

This will generate SSH keys and provide instructions for GitHub secrets configuration.

### 3. GitHub Repository Configuration

Add the following secrets to your GitHub repository (`Settings > Secrets and variables > Actions`):

| Secret Name       | Description                    | Example Value                            |
| ----------------- | ------------------------------ | ---------------------------------------- |
| `SSH_PRIVATE_KEY` | SSH private key for deployment | `-----BEGIN OPENSSH PRIVATE KEY-----...` |
| `SERVER_HOST`     | Server IP address              | `192.168.1.100`                          |
| `SERVER_USER`     | Deployment user                | `windifi`                                |

### 4. Environment Configuration

On your server, configure the deployment environment:

```bash
# SSH to your server
ssh windifi@your-server-ip

# Navigate to deployment directory
cd /opt/windifi-fe

# Copy environment template
cp .env.template .env

# Edit environment file
nano .env
```

Update the `.env` file with your repository details:

```bash
# Application Configuration
NODE_ENV=production
APP_PORT=3000
CONTAINER_NAME=windifi-fe
IMAGE_TAG=latest

# GitHub Container Registry
GITHUB_REPOSITORY=your-username/windifi-fe

# Monitoring (optional)
ENABLE_MONITORING=false
```

## 🔄 CI/CD Pipeline

### Pipeline Stages

1. **Quality Gate**
   - Code linting and formatting checks
   - TypeScript type checking
   - Unit tests with coverage
   - Security audit
   - Determines deployment environment

2. **Build & Push**
   - Multi-stage Docker build with optimization
   - Advanced caching strategies
   - Security scanning
   - Push to GitHub Container Registry

3. **Deploy**
   - Pre-deployment validation
   - Blue-green deployment strategy
   - Comprehensive health checks
   - Automatic rollback on failure
   - Post-deployment cleanup

### Deployment Triggers

| Branch    | Environment | Port   | URL                       |
| --------- | ----------- | ------ | ------------------------- |
| `develop` | Development | 3000   | `http://your-server:3000` |
| `main`    | Production  | 80/443 | `http://your-server`      |

### Deployment Process

1. **Push to Repository**

   ```bash
   git push origin develop  # For development
   git push origin main     # For production
   ```

2. **Monitor Pipeline**
   - Check GitHub Actions tab for pipeline status
   - Review logs for any issues
   - Verify deployment success

3. **Verify Deployment**

   ```bash
   # Check application status
   curl http://your-server:3000/api/health

   # Or on server
   ssh windifi@your-server '/opt/windifi-fe/manage.sh status'
   ```

## 🛠️ Manual Deployment Management

The enhanced setup includes a management script for manual operations:

```bash
# SSH to your server
ssh windifi@your-server-ip

# Navigate to deployment directory
cd /opt/windifi-fe

# Available commands
./manage.sh help

# Deploy application
./manage.sh deploy

# Check status
./manage.sh status

# View logs
./manage.sh logs

# Restart application
./manage.sh restart

# Stop application
./manage.sh stop

# Cleanup old images
./manage.sh cleanup

# Create backup
./manage.sh backup
```

## 🔒 Security Features

### Server Security

- **UFW Firewall**: Configured with minimal required ports
- **Fail2ban**: Protection against brute-force SSH attacks
- **Automatic Updates**: Security patches applied automatically
- **Non-root Deployment**: Dedicated user for deployment operations

### Container Security

- **Non-privileged User**: Containers run as non-root user (1001:1001)
- **Read-only Filesystem**: Root filesystem is read-only
- **Resource Limits**: Memory and CPU limits prevent resource exhaustion
- **Security Options**: `no-new-privileges` flag enabled
- **Minimal Attack Surface**: Only necessary ports exposed

### Network Security

- **Internal Networks**: Containers communicate via isolated network
- **Rate Limiting**: API endpoints protected with rate limiting (via Nginx)
- **Security Headers**: Comprehensive security headers configured

## 📊 Monitoring and Health Checks

### Health Check Endpoint

```bash
GET /api/health
```

Response:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600
}
```

### Container Health Checks

- **Interval**: 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3 attempts
- **Start Period**: 40 seconds

### Logging

- **JSON Format**: Structured logging for analysis
- **Log Rotation**: Automatic cleanup of old logs
- **Size Limits**: 10MB per file, 3 files retained
- **Compression**: Logs compressed to save space

## 🔄 Rollback Strategy

### Automatic Rollback

The pipeline automatically rolls back on deployment failure:

- Failed health checks trigger rollback
- Previous container is restored
- Service availability maintained

### Manual Rollback

```bash
# SSH to server
ssh windifi@your-server-ip

# Navigate to deployment directory
cd /opt/windifi-fe

# Check available images
docker images | grep windifi-fe

# Rollback to specific version
export IMAGE_TAG="develop-abc123"
./manage.sh deploy
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Deployment Fails

```bash
# Check pipeline logs in GitHub Actions
# SSH to server and check container logs
ssh windifi@your-server-ip
docker logs windifi-fe-dev  # or windifi-fe-prod

# Check system resources
df -h
free -h
```

#### 2. Health Check Fails

```bash
# Test health endpoint manually
curl -v http://localhost:3000/api/health

# Check container status
docker ps
docker inspect windifi-fe-dev
```

#### 3. Permission Issues

```bash
# Verify deployment user permissions
sudo -u windifi docker ps
sudo -u windifi ls -la /opt/windifi-fe
```

#### 4. Network Issues

```bash
# Check firewall status
sudo ufw status

# Test port connectivity
telnet your-server-ip 3000
```

### Log Analysis

```bash
# Application logs
./manage.sh logs

# System logs
sudo journalctl -u docker
sudo tail -f /var/log/nginx/error.log

# Deployment logs
ls -la /opt/windifi-fe/logs/
```

## 📈 Performance Optimization

### Docker Build Optimization

- **Multi-stage builds**: Separate build and runtime stages
- **Layer caching**: Efficient layer ordering for cache hits
- **Build cache**: GitHub Actions cache for faster builds
- **Minimal base images**: Alpine Linux for smaller image size

### Runtime Optimization

- **Resource limits**: Prevent resource exhaustion
- **Health checks**: Early detection of issues
- **Log management**: Automatic log rotation and cleanup
- **Image cleanup**: Automatic removal of old images

## 🔧 Advanced Configuration

### Production with Nginx (Optional)

For production deployments with SSL termination:

1. **Enable Nginx Profile**

   ```bash
   # Edit docker-compose.prod.yml
   docker-compose --profile production up -d
   ```

2. **SSL Certificates**

   ```bash
   # Place SSL certificates in ./ssl/ directory
   mkdir -p /opt/windifi-fe/ssl
   # Copy cert.pem and key.pem
   ```

3. **Custom Nginx Configuration**
   ```bash
   # Copy nginx.conf to server
   scp nginx.conf windifi@your-server:/opt/windifi-fe/
   ```

### Monitoring with cAdvisor (Optional)

Enable container monitoring:

```bash
# Enable monitoring profile
docker-compose --profile monitoring up -d

# Access metrics at http://your-server:8080
```

## 📚 Additional Resources

- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Ubuntu Server Security](https://ubuntu.com/server/docs/security)

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review GitHub Actions logs
3. Check server logs and system resources
4. Verify network connectivity and firewall settings

For additional help, please create an issue in the repository with:

- Error messages and logs
- Server specifications
- Deployment environment details
- Steps to reproduce the issue
