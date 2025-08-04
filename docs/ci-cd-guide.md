# CI/CD Pipeline Guide

This document describes the CI/CD pipeline setup for the Windifi Frontend project using GitHub Actions and Docker.

## Overview

The CI/CD pipeline consists of the following stages:

1. **Test Stage**: Runs linting, type checking, and tests
2. **Build Stage**: Builds and pushes Docker images to GitHub Container Registry
3. **Deploy Stage**: Deploys to develop environment

## Prerequisites

- GitHub repository with GitHub Actions enabled
- Docker installed locally for testing
- Access to GitHub Container Registry (automatically available for public repos)

## Pipeline Configuration

### GitHub Actions Workflow

The workflow is defined in `.github/workflows/ci-cd.yml` and triggers on:

- Push to `develop` branch
- Pull requests to `develop` branch

### Docker Configuration

- **Dockerfile**: Multi-stage build optimized for production
- **.dockerignore**: Excludes unnecessary files from build context
- **docker-compose.yml**: Local development and testing setup

## Local Development

### Running with Docker Compose

```bash
# Build and run the application
docker-compose up --build

# Run in detached mode
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down
```

### Using the Deployment Script

```bash
# Deploy locally
./scripts/deploy.sh develop
```

## Environment Setup

### Environment Variables

The application uses a simple environment configuration:

```bash
# .env.local
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
PORT=3000
```

## Deployment Targets

### Develop Environment

- **Branch**: `develop`
- **Trigger**: Push to develop branch
- **Docker Tag**: `develop-<sha>`

## Docker Images

### Image Tags

The pipeline automatically creates the following tags:

- `ghcr.io/<username>/windifi-fe:develop-<sha>`

### Image Optimization

The Dockerfile uses multi-stage builds to:

- Minimize image size
- Improve security (non-root user)
- Optimize for production deployment

## Health Checks

The application includes health check endpoints:

- **Application**: `http://localhost:3000/api/health`

## Monitoring and Logging

### Health Check Response

```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456
}
```

### Logs

- Application logs are available via Docker Compose
- Production logs should be configured based on your deployment platform

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are properly installed
   - Review Docker build logs

2. **Deployment Failures**
   - Verify environment configuration
   - Check deployment platform connectivity
   - Review deployment logs

3. **Health Check Failures**
   - Verify the application is running
   - Check port configuration
   - Review application logs

### Debug Commands

```bash
# Check Docker image
docker images | grep windifi-fe

# Run container interactively
docker run -it --rm ghcr.io/<username>/windifi-fe:develop sh

# Check container logs
docker logs <container-id>

# Test health endpoint
curl http://localhost:3000/api/health
```

## Security Considerations

- Docker images run as non-root user
- Environment variables are properly handled
- Health checks prevent deployment of unhealthy containers

## Next Steps

1. Configure your deployment platform (Kubernetes, AWS ECS, etc.)
2. Set up monitoring and alerting
3. Configure SSL certificates for production
4. Set up backup and disaster recovery procedures

## Support

For issues with the CI/CD pipeline:

1. Check GitHub Actions logs
2. Review this documentation
3. Contact the development team
