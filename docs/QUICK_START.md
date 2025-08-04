# 🚀 Quick Start Guide

This guide provides the essential steps to get started with Windifi Frontend development.

## 📋 Prerequisites

- [ ] Node.js 20+ installed
- [ ] Git installed
- [ ] Code editor (VS Code recommended)

## ⚡ Development Setup (2 minutes)

### 1. Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd windifi-fe

# Install dependencies
npm install

# Setup development tools
./scripts/setup-commit-tools.sh
```

### 2. Start Development

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## 🔧 Essential Commands

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run type-check      # TypeScript type checking
npm run format          # Format code with Prettier
npm run test            # Run tests

# Git Workflow
npm run commit          # Interactive commit (recommended)
```

## 🏗️ Project Features

### **Frontend Stack**

- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Chakra UI for component library
- ✅ Tailwind CSS for styling
- ✅ React Query for data fetching

### **Development Tools**

- ✅ ESLint + Prettier for code quality
- ✅ Husky + lint-staged for git hooks
- ✅ Conventional commits for standardized messages
- ✅ Vitest for testing

### **Architecture**

- ✅ Feature-based folder structure
- ✅ Shared components and utilities
- ✅ Type-safe API integration
- ✅ Responsive design patterns

## 🚀 Next Steps

### For Development

1. **Read the guides:**
   - [Development Guide](./development-guide.md) - Complete workflow
   - [Quick Reference](./quick-reference.md) - Daily commands
   - [Project Structure](./project-structure.md) - Architecture overview

2. **Start coding:**
   ```bash
   # Create a new feature
   git checkout -b feature/your-feature
   npm run commit  # Use interactive commits
   ```

### For Deployment

- **[Deployment Guide](./deployment-guide.md)** - Complete CI/CD setup for Ubuntu servers

## 🛠️ Troubleshooting

### Common Setup Issues

1. **Node.js Version**

   ```bash
   node --version  # Should be 20+
   nvm use 20      # If using nvm
   ```

2. **Permission Issues**

   ```bash
   chmod +x scripts/setup-commit-tools.sh
   ```

3. **Port Already in Use**
   ```bash
   lsof -ti:3000 | xargs kill -9  # Kill process on port 3000
   ```

## 📚 Documentation

- **[Development Guide](./development-guide.md)** - Complete development workflow
- **[Quick Reference](./quick-reference.md)** - Essential commands and guidelines
- **[Deployment Guide](./deployment-guide.md)** - Production deployment setup
- **[Project Structure](./project-structure.md)** - Architecture and folder organization
- **[Linting Guide](./linting-and-formatting.md)** - Code quality setup

---

**🎉 Happy coding!** You're all set to contribute to Windifi Frontend.
