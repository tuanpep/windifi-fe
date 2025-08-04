# 🚀 Quick Start Guide

This guide provides the essential steps to deploy your Next.js application with a simple CI/CD pipeline.

## 📋 Prerequisites

- [ ] GitHub repository with your code
- [ ] Docker installed locally
- [ ] Node.js 18+ installed

## ⚡ Quick Setup (3 minutes)

### 1. Run Automated Setup

```bash
# Clone your repository (if not already done)
git clone <your-repo-url>
cd windifi-fe

# Run the automated setup script
./scripts/setup-deployment.sh
```

This script will:

- ✅ Install all dependencies
- ✅ Create environment file (`.env.local`)
- ✅ Configure Git hooks

### 2. Test Local Deployment

```bash
# Test the application locally
./scripts/deploy.sh develop

# Verify it's working
curl http://localhost:3000/api/health
```

## 🚀 Deploy to Develop

### 1. Push to Develop Branch

```bash
git add .
git commit -m "feat: initial deployment setup"
git push origin develop
```

### 2. Monitor Deployment

- Go to your GitHub repository → Actions
- Watch the CI/CD pipeline run
- Verify deployment at `https://develop.yourdomain.com`

## 📊 What's Included

### **Simple Frontend Deployment**

- ✅ Next.js application with Docker
- ✅ Health check endpoint
- ✅ Basic security headers
- ✅ Image optimization

### **CI/CD Pipeline**

- ✅ Automated testing (lint, type-check, tests)
- ✅ Docker image building
- ✅ GitHub Container Registry
- ✅ Automatic deployment on push to develop

### **Local Development**

- ✅ Docker Compose setup
- ✅ Hot reloading
- ✅ Environment configuration

## 🔧 Configuration

### Environment Variables

The setup creates a simple `.env.local` file:

```bash
# Application
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
PORT=3000
```

### Docker Configuration

- **Dockerfile**: Multi-stage build for production
- **docker-compose.yml**: Local development setup
- **Health checks**: Automatic health monitoring

## 🛠️ Troubleshooting

### Common Issues

1. **Build Failures**

   ```bash
   # Check Node.js version
   node --version

   # Clear Docker cache
   docker system prune -a
   ```

2. **Deployment Failures**

   ```bash
   # Check GitHub Actions logs
   # Test locally first
   ./scripts/deploy.sh develop
   ```

3. **Health Check Failures**

   ```bash
   # Check application logs
   docker-compose logs windifi-fe

   # Verify environment variables
   docker-compose exec windifi-fe env
   ```

### Debug Commands

```bash
# Check Docker images
docker images | grep windifi-fe

# Test container locally
docker run -p 3000:3000 ghcr.io/your-username/windifi-fe:develop

# Check application health
curl http://localhost:3000/api/health
```

## 📚 Documentation

- **[CI/CD Guide](./ci-cd-guide.md)** - Pipeline documentation
- **[Deployment Setup Guide](./deployment-setup-guide.md)** - Detailed configuration

## 🆘 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review the detailed documentation
3. Check GitHub Actions logs
4. Contact the development team

---

**🎉 Congratulations!** Your Next.js application is now deployed with a simple CI/CD pipeline!
