#!/bin/bash

# Deployment Setup Script for Windifi Frontend
set -e

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

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to create environment file
create_env_file() {
    local filename=".env.local"
    
    if [ -f "$filename" ]; then
        print_warning "$filename already exists. Skipping..."
        return
    fi
    
    print_status "Creating $filename..."
    
    cat > "$filename" << EOF
# Application
NODE_ENV=development
NEXT_TELEMETRY_DISABLED=1
PORT=3000
EOF
    
    print_status "$filename created successfully!"
}

# Function to check prerequisites
check_prerequisites() {
    print_header "Checking prerequisites..."
    
    local missing_tools=()
    
    if ! command_exists docker; then
        missing_tools+=("Docker")
    fi
    
    if ! command_exists docker-compose; then
        missing_tools+=("Docker Compose")
    fi
    
    if ! command_exists node; then
        missing_tools+=("Node.js")
    fi
    
    if ! command_exists npm; then
        missing_tools+=("npm")
    fi
    
    if [ ${#missing_tools[@]} -ne 0 ]; then
        print_error "Missing required tools: ${missing_tools[*]}"
        print_warning "Please install the missing tools before proceeding."
        exit 1
    fi
    
    print_status "All prerequisites are satisfied!"
}

# Function to install dependencies
install_dependencies() {
    print_header "Installing dependencies..."
    
    if [ -f "package.json" ]; then
        print_status "Installing npm dependencies..."
        npm install
        print_status "Dependencies installed successfully!"
    else
        print_error "package.json not found!"
        exit 1
    fi
}

# Function to setup git hooks
setup_git_hooks() {
    print_header "Setting up Git hooks..."
    
    if [ -f "scripts/setup-commit-tools.sh" ]; then
        print_status "Setting up commit message tools..."
        chmod +x scripts/setup-commit-tools.sh
        ./scripts/setup-commit-tools.sh
        print_status "Git hooks configured successfully!"
    else
        print_warning "Commit tools setup script not found. Skipping..."
    fi
}

# Function to display next steps
display_next_steps() {
    print_header "Setup completed successfully!"
    echo
    echo "Next steps:"
    echo "1. Test local deployment:"
    echo "   ./scripts/deploy.sh develop"
    echo
    echo "2. Push to GitHub to trigger CI/CD pipeline:"
    echo "   git add ."
    echo "   git commit -m 'feat: initial deployment setup'"
    echo "   git push origin develop"
    echo
    echo "3. Monitor deployment in GitHub Actions"
    echo
    echo "For detailed instructions, see: docs/QUICK_START.md"
}

# Main setup function
main() {
    print_header "Starting deployment setup for Windifi Frontend..."
    echo
    
    check_prerequisites
    install_dependencies
    setup_git_hooks
    create_env_file
    
    echo
    display_next_steps
}

# Run main function
main "$@" 