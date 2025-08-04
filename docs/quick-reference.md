# Quick Reference

Essential commands and guidelines for Windifi Frontend development.

## 🚀 Quick Start

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

## 📋 Daily Workflow

### New Feature

```bash
git checkout develop && git pull
git checkout -b feature/your-feature
# ... work ...
git add . && git commit -m "feat(auth): add login"
git push origin feature/your-feature
# Create PR: feature/your-feature → develop
```

### Bug Fix

```bash
git checkout develop && git pull
git checkout -b bugfix/login-error
# ... fix ...
git add . && git commit -m "fix(auth): resolve validation"
git push origin bugfix/login-error
# Create PR: bugfix/login-error → develop
```

### Hotfix (Production)

```bash
git checkout main && git pull
git checkout -b hotfix/security-patch
# ... fix ...
git add . && git commit -m "fix(security): patch vulnerability"
git push origin hotfix/security-patch
# Create PRs: hotfix/security-patch → main AND develop
```

## 💬 Commit Messages

### Format

```
type(scope): description
```

### Types

| Type       | Use For       | SemVer    | Example                   |
| ---------- | ------------- | --------- | ------------------------- |
| `feat`     | New feature   | **MINOR** | `feat(auth): add login`   |
| `fix`      | Bug fix       | **PATCH** | `fix(ui): resolve layout` |
| `docs`     | Documentation | None      | `docs(readme): update`    |
| `style`    | Code style    | None      | `style: format code`      |
| `refactor` | Refactoring   | None      | `refactor(api): simplify` |
| `test`     | Tests         | None      | `test(api): add tests`    |
| `chore`    | Maintenance   | None      | `chore(deps): update`     |

### Scopes

| Scope        | Use For          | Example                            |
| ------------ | ---------------- | ---------------------------------- |
| `auth`       | Authentication   | `feat(auth): add OAuth2`           |
| `ui`         | User interface   | `fix(ui): resolve layout`          |
| `api`        | API integration  | `refactor(api): simplify`          |
| `components` | React components | `feat(components): add button`     |
| `pages`      | Next.js pages    | `fix(pages): handle 404`           |
| `hooks`      | React hooks      | `feat(hooks): add useLocalStorage` |
| `utils`      | Utilities        | `refactor(utils): optimize`        |
| `types`      | TypeScript       | `feat(types): add interfaces`      |
| `deps`       | Dependencies     | `chore(deps): update React`        |

### Breaking Changes

```bash
# Method 1: Using !
git commit -m "feat!: remove deprecated API"

# Method 2: Using footer
git commit -m "feat: add new auth system

BREAKING CHANGE: API structure changed"
```

## 🛠️ Tools

### Interactive Commits (Recommended)

```bash
npm run commit
```

### Manual Commits

```bash
git commit -m "feat(auth): add login component"
```

### Emergency Bypass

```bash
git commit --no-verify -m "emergency fix"
```

## ✅ Best Practices

### Do's

- Use **imperative mood** ("add" not "added")
- Keep description **under 72 characters**
- Use **lowercase** for type and scope
- Be **specific** in descriptions
- Keep branches **short-lived** (max 2-3 days)
- **Require code reviews**
- **Test before merging**

### Don'ts

- Don't end description with period
- Don't use past tense
- Don't be too generic
- Don't commit directly to main/develop
- Don't skip code reviews

## 🔧 Troubleshooting

### Merge Conflicts

```bash
git status  # Check conflicts
# Edit files to resolve
git add . && git commit -m "fix: resolve conflicts"
```

### Reset to Remote

```bash
git fetch origin && git reset --hard origin/branch-name
```

### Edit Last Commit

```bash
git commit --amend
```

## 🌍 Environment Flow

```
Development → Staging → Production
     ↓           ↓          ↓
   feature    develop     main
   branches    branch     branch
```

## 📚 Documentation

- **[Development Guide](./development-guide.md)** - Complete development workflow
- **[Project Structure](./project-structure.md)** - Architecture and folder organization
- **[Deployment Guide](./deployment-guide.md)** - Production deployment setup

---

**Reference**: [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)
