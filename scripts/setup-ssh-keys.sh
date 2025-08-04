#!/bin/bash

# SSH Key and GitHub Secrets Setup Script
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

# Server configuration
SERVER_IP="72.18.214.233"
SERVER_USER="admin"

print_header "SSH Key and GitHub Secrets Setup for Windifi Frontend"

# Function to check if SSH key exists
check_ssh_key() {
    if [ -f ~/.ssh/id_rsa ] && [ -f ~/.ssh/id_rsa.pub ]; then
        return 0
    else
        return 1
    fi
}

# Function to generate SSH key
generate_ssh_key() {
    print_status "Generating SSH key pair..."
    
    read -p "Enter your email address: " email
    
    ssh-keygen -t rsa -b 4096 -C "$email" -f ~/.ssh/id_rsa -N ""
    
    print_status "SSH key pair generated successfully!"
}

# Function to copy SSH key to server
copy_ssh_key() {
    print_status "Copying SSH public key to server..."
    
    if ssh-copy-id $SERVER_USER@$SERVER_IP; then
        print_status "SSH key copied to server successfully!"
    else
        print_error "Failed to copy SSH key to server"
        print_warning "Please copy manually:"
        echo "ssh-copy-id $SERVER_USER@$SERVER_IP"
        exit 1
    fi
}

# Function to test SSH connection
test_ssh_connection() {
    print_status "Testing SSH connection..."
    
    if ssh -o ConnectTimeout=10 $SERVER_USER@$SERVER_IP "echo 'SSH connection successful'" 2>/dev/null; then
        print_status "SSH connection test passed!"
        return 0
    else
        print_error "SSH connection test failed"
        return 1
    fi
}

# Function to display GitHub secrets instructions
show_github_secrets_instructions() {
    print_header "GitHub Secrets Configuration Required"
    echo
    echo "Please add the following secrets to your GitHub repository:"
    echo
    echo "1. Go to your GitHub repository → Settings → Secrets and variables → Actions"
    echo "2. Add these secrets:"
    echo
    echo "   🔑 SSH_PRIVATE_KEY:"
    echo "   Copy the content below:"
    echo "   ----------------------------------------"
    cat ~/.ssh/id_rsa
    echo "   ----------------------------------------"
    echo
    echo "   👤 SERVER_USER:"
    echo "   Value: $SERVER_USER"
    echo
    echo "   🌐 SERVER_HOST:"
    echo "   Value: $SERVER_IP"
    echo
    print_warning "IMPORTANT: Copy the entire SSH private key including BEGIN and END lines!"
}

# Main setup function
main() {
    print_header "Starting SSH key setup..."
    echo
    
    # Check if SSH key exists
    if check_ssh_key; then
        print_status "SSH key pair found at ~/.ssh/id_rsa"
        read -p "Do you want to use existing keys? (y/n): " use_existing
        
        if [[ $use_existing != "y" && $use_existing != "Y" ]]; then
            print_warning "Backing up existing keys..."
            mv ~/.ssh/id_rsa ~/.ssh/id_rsa.backup.$(date +%Y%m%d_%H%M%S)
            mv ~/.ssh/id_rsa.pub ~/.ssh/id_rsa.pub.backup.$(date +%Y%m%d_%H%M%S)
            generate_ssh_key
        fi
    else
        print_status "No SSH key pair found"
        generate_ssh_key
    fi
    
    # Copy SSH key to server
    copy_ssh_key
    
    # Test SSH connection
    if test_ssh_connection; then
        print_status "SSH setup completed successfully!"
    else
        print_error "SSH setup failed. Please check your server configuration."
        exit 1
    fi
    
    echo
    show_github_secrets_instructions
    
    echo
    print_header "Next Steps:"
    echo "1. Add the GitHub secrets as shown above"
    echo "2. Run server setup: ./scripts/setup-server.sh"
    echo "3. Test deployment: git push origin develop"
    echo
    print_status "Setup completed! Follow the instructions above to configure GitHub secrets."
}

# Run main function
main "$@" 