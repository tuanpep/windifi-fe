#!/bin/bash

# Windifi Frontend - Commit Tools Setup Script
# This script sets up Conventional Commits tools for the project

set -e

echo "🚀 Setting up Commit Message Tools for Windifi Frontend..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies (if not already installed)
echo "📦 Checking and installing commit message tools..."
npm install

# Setup Husky
echo "🔧 Setting up Husky..."
npm run prepare

# Create commit-msg hook
echo "📝 Creating commit-msg hook..."
# Remove existing hook if it exists to prevent duplication
rm -f .husky/commit-msg
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

# Make the hook executable
chmod +x .husky/commit-msg

# Verify setup
echo "✅ Verifying setup..."

# Check if .commitlintrc.js exists
if [ -f ".commitlintrc.js" ]; then
    echo "✅ Commitlint configuration found"
else
    echo "⚠️  Warning: .commitlintrc.js not found. Please create it manually."
fi

# Check if husky hooks are set up
if [ -f ".husky/commit-msg" ]; then
    echo "✅ Husky commit-msg hook created"
else
    echo "⚠️  Warning: Husky commit-msg hook not found."
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📚 Next steps:"
echo "1. Read the development documentation:"
echo "   - docs/development-guide.md"
echo "   - docs/quick-reference.md"
echo ""
echo "2. Use interactive commits:"
echo "   npm run commit"
echo ""
echo "3. Test a commit:"
echo "   git add ."
echo "   git commit -m 'docs: add commit message documentation'"
echo ""
echo "4. If you need to bypass commitlint (emergency only):"
echo "   git commit --no-verify -m 'emergency fix'"
echo ""
echo "📖 For more information, see:"
echo "   https://www.conventionalcommits.org/en/v1.0.0/"
echo "" 