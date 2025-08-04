# Development Guide

Complete guide for Windifi Frontend development workflow, git flow, and commit conventions.

## Quick Start

```bash
# Setup
git clone <repository-url>
cd windifi-fe
npm install
./scripts/setup-commit-tools.sh

# Development
npm run dev
npm run commit  # Interactive commits
```

## Git Flow

### Branch Structure

```
main (production)
├── develop (staging)
├── feature/feature-name
├── bugfix/bug-description
├── hotfix/critical-fix
└── release/v1.0.0
```

### Daily Workflow

#### 1. Start New Feature

```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# Work and commit
git add .
git commit -m "feat(auth): add login component"
git push origin feature/your-feature-name

# Create PR: feature/your-feature-name → develop
```

#### 2. Bug Fix

```bash
git checkout develop
git checkout -b bugfix/login-error
git commit -m "fix(auth): resolve login validation"
git push origin bugfix/login-error

# Create PR: bugfix/login-error → develop
```

#### 3. Hotfix (Production Issue)

```bash
git checkout main
git checkout -b hotfix/security-patch
git commit -m "fix(security): patch XSS vulnerability"
git push origin hotfix/security-patch

# Create PRs: hotfix/security-patch → main AND develop
```

#### 4. Release

```bash
git checkout develop
git checkout -b release/v1.2.0
npm version patch
git commit -m "chore: bump version to 1.2.0"
git push origin release/v1.2.0

# Create PRs: release/v1.2.0 → main AND develop
```

## Commit Messages

### Format

```
type(scope): subject

body

footer
```

### Rules

#### Header (First Line)

- **Maximum length**: 72 characters
- **Format**: `type(scope): subject`
- **Required**: type, scope, and subject

#### Type

Must be one of:

- `feat` - New feature (SemVer: **MINOR**)
- `fix` - Bug fix (SemVer: **PATCH**)
- `docs` - Documentation changes
- `style` - Code style changes (formatting, etc.)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `ci` - CI/CD changes
- `build` - Build system changes
- `revert` - Reverting previous commits

#### Scope

Must be one of:

- `auth` - Authentication related
- `ui` - UI components
- `api` - API related
- `components` - React components
- `pages` - Page components
- `hooks` - React hooks
- `utils` - Utility functions
- `types` - TypeScript types
- `deps` - Dependencies
- `config` - Configuration files
- `docs` - Documentation
- `ci` - CI/CD
- `build` - Build system
- `test` - Testing

#### Subject

- **Maximum length**: 72 characters
- **Case**: lower-case
- **No period** at the end
- **Imperative mood** (e.g., "add" not "added")

#### Body

- **Optional**
- **Separated by blank line** from header
- **Maximum line length**: 100 characters
- **Use imperative mood**

#### Footer

- **Optional**
- **Separated by blank line** from body
- **Maximum line length**: 100 characters

### Breaking Changes

#### Method 1: Using `!`

```bash
git commit -m "feat!: remove deprecated API"
git commit -m "feat(api)!: change interface"
```

#### Method 2: Using Footer

```bash
git commit -m "feat: add new auth system

BREAKING CHANGE: Login API now requires different payload"
```

### Examples

#### ✅ Good Examples

```bash
# Simple commit
git commit -m "feat(auth): add login functionality"

# With body
git commit -m "fix(ui): resolve button alignment issue" -m "- Fixed button alignment in mobile view" -m "- Updated responsive breakpoints"

# With scope
git commit -m "chore(config): update ESLint configuration" -m "- Added TypeScript rules" -m "- Configured Prettier integration"

# With body
git commit -m "feat(auth): implement JWT refresh

Add automatic token refresh to prevent timeouts.
Improves user experience by maintaining sessions.

Closes #123"

# Breaking change
git commit -m "feat(api)!: change user structure

BREAKING CHANGE: User object now has nested profile"
```

#### ❌ Bad Examples

```bash
# Too long header (over 72 characters)
git commit -m "chore: update linting and formatting configuration with ESLint and Prettier integration"

# Missing scope
git commit -m "feat: add new feature"

# Wrong case
git commit -m "Feat(UI): Add new component"

# Period at end
git commit -m "fix(api): resolve authentication issue."

# Past tense
git commit -m "feat(auth): added login functionality"
```

## Tools

### Interactive Commits (Recommended)

```bash
npm run commit
```

### Manual Commits

```bash
git commit -m "feat(auth): add login component"
```

### Check Commit Message

```bash
echo "your commit message" | npx commitlint
```

### Emergency Bypass

```bash
git commit --no-verify -m "emergency fix"
```

### Quick Reference

#### Common Patterns

```bash
# New features
git commit -m "feat(scope): add [feature name]"

# Bug fixes
git commit -m "fix(scope): resolve [issue description]"

# Documentation
git commit -m "docs(scope): update [documentation name]"

# Configuration changes
git commit -m "chore(config): update [configuration name]"

# Dependencies
git commit -m "chore(deps): update [package name]"

# UI changes
git commit -m "style(ui): update [component name] styling"
```

#### Multi-line Commits

```bash
git commit -m "type(scope): short subject" \
  -m "" \
  -m "Detailed description of changes" \
  -m "" \
  -m "- Bullet point 1" \
  -m "- Bullet point 2" \
  -m "" \
  -m "Closes #123"
```

## Best Practices

### ✅ Do's

- Use **imperative mood** ("add" not "added")
- Keep subject **under 72 characters**
- Use **lowercase** for type and scope
- Be **specific** in descriptions
- Include **scope** when relevant
- Keep branches **short-lived** (max 2-3 days)
- **Require code reviews**
- **Test before merging**
- **Keep the subject line under 50 characters** for better readability
- **Use bullet points** in the body for multiple changes
- **Reference issues** in the footer when applicable

### ❌ Don'ts

- Don't end subject with period
- Don't use past tense
- Don't be too generic
- Don't mix types in one commit
- Don't commit directly to main/develop
- Don't skip code reviews
- Don't let branches get stale
- Don't end description with period
- Don't use wrong case (PascalCase, UPPERCASE)

## Branch Protection

### Main Branch

- ✅ Require pull request reviews (2 reviewers)
- ✅ Require status checks to pass
- ✅ Require branches to be up to date
- ✅ Restrict pushes to matching branches
- ✅ Require linear history

### Develop Branch

- ✅ Require pull request reviews (1 reviewer)
- ✅ Require status checks to pass
- ✅ Restrict pushes to matching branches

### Status Checks Required

- Lint checks (`npm run lint`)
- Build checks (`npm run build`)
- Test checks (`npm test`)
- TypeScript checks (`npx tsc --noEmit`)

## Troubleshooting

### Merge Conflicts

```bash
git status  # Check conflicted files
# Edit files to resolve conflicts
git add .
git commit -m "fix: resolve merge conflicts"
```

### Reset to Remote

```bash
git fetch origin
git reset --hard origin/branch-name
```

### Edit Last Commit

```bash
git commit --amend
```

### Interactive Rebase

```bash
git rebase -i HEAD~3
```

## Environment Strategy

```
Development → Staging → Production
     ↓           ↓          ↓
   feature    develop     main
   branches    branch     branch
```

| Environment | Branch     | Purpose             |
| ----------- | ---------- | ------------------- |
| Development | feature/\* | Feature development |
| Staging     | develop    | Integration testing |
| Production  | main       | Live application    |

---

**Reference**: [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
