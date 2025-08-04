This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Development Workflow

This project follows a robust git flow strategy with Conventional Commits. Please refer to our documentation:

- **[Development Guide](./docs/development-guide.md)** - Complete workflow and commit conventions
- **[Quick Reference](./docs/quick-reference.md)** - Essential commands and guidelines

### Quick Start for Developers

```bash
# Clone and setup
git clone <repository-url>
cd windifi-fe
npm install

# Setup commit message tools (recommended)
./scripts/setup-commit-tools.sh

# Start development
npm run dev
```

### Commit Message Tools

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for standardized commit messages:

```bash
# Interactive commit (recommended)
npm run commit

# Manual commit (must follow convention)
git commit -m "feat(auth): add login component"
```

**Documentation**: [Development Guide](./docs/development-guide.md) | [Quick Reference](./docs/quick-reference.md)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

This project includes a simple CI/CD pipeline using GitHub Actions and Docker.

### Quick Setup

```bash
# Run the automated setup script
./scripts/setup-deployment.sh

# This will:
# - Install dependencies
# - Create environment file
# - Configure Git hooks
```

### Quick Deployment

```bash
# Local deployment with Docker
./scripts/deploy.sh develop

# Or use Docker Compose directly
docker-compose up --build -d
```

### CI/CD Pipeline

The project uses GitHub Actions for automated testing, building, and deployment:

- **Test Stage**: Linting, type checking, and unit tests
- **Build Stage**: Docker image creation and registry push
- **Deploy Stage**: Automatic deployment to develop environment

**Documentation**: [Quick Start Guide](./docs/QUICK_START.md)

### Deployment Environment

- **Develop**: Automatically deploys from `develop` branch

### Health Checks

- Application: `http://localhost:3000/api/health`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
