# Linting and Formatting Setup

This document describes the linting and formatting configuration for the Windifi Frontend project.

## Overview

We use a combination of tools to ensure code quality and consistency:

- **ESLint**: For code linting and catching potential errors
- **Prettier**: For code formatting
- **prettier-plugin-organize-imports**: For automatic import organization
- **TypeScript**: For type checking

## Tools and Configuration

### Prettier

Prettier is configured to format code consistently across the project. The configuration is in `.prettierrc`:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "plugins": ["prettier-plugin-organize-imports"],
  "organizeImportsSkipDestructiveCodeActions": false
}
```

**Key Features:**

- Single quotes for strings
- Semicolons at the end of statements
- 80 character line width
- 2 spaces for indentation
- Automatic import organization

### prettier-plugin-organize-imports

This plugin automatically organizes imports using TypeScript's `organizeImports` feature. It:

- Sorts imports alphabetically
- Groups imports by type (built-in, external, internal)
- Removes unused imports
- Combines import statements from the same module

**Note:** Files containing `// organize-imports-ignore` or `// tslint:disable:ordered-imports` are skipped.

### pretty-quick

We use `pretty-quick` to format only changed files, which is much faster than formatting the entire project. It:

- Formats only files that have been modified since the last commit
- Supports staged files only (`--staged` flag)
- Can format files changed since a specific branch (`--branch` flag)
- Automatically detects file types and applies Prettier formatting
- Integrates seamlessly with git hooks and lint-staged

**Key Benefits:**

- ⚡ **Fast**: Only processes changed files
- 🎯 **Precise**: Targets exactly what you've modified
- 🔄 **Git-aware**: Understands git staging and branching
- 🛠️ **Flexible**: Multiple modes for different workflows

### ESLint

ESLint is configured with a simple but effective set of rules in `eslint.config.mjs`:

**TypeScript Rules:**

- `@typescript-eslint/no-unused-vars`: Error on unused variables (ignores variables starting with `_`)
- `@typescript-eslint/no-explicit-any`: Warning on `any` types

**React Rules:**

- `react/jsx-key`: Error on missing keys in lists
- `react/jsx-no-duplicate-props`: Error on duplicate props
- `react/jsx-no-undef`: Error on undefined JSX elements
- `react/no-array-index-key`: Warning on using array index as key

**Accessibility Rules:**

- `jsx-a11y/alt-text`: Error on missing alt text for images
- `jsx-a11y/anchor-has-content`: Error on empty anchor tags
- `jsx-a11y/anchor-is-valid`: Error on invalid anchor usage
- And more accessibility-focused rules

**General Rules:**

- `no-console`: Warning on console statements
- `no-debugger`: Error on debugger statements

## Available Scripts

### Formatting

```bash
# Format all files
npm run format

# Check formatting without making changes
npm run format:check

# Format only changed files (since last commit)
npm run format:changed

# Format only staged files
npm run format:staged

# Format files changed since main branch
npm run format:branch
```

### Linting

```bash
# Run ESLint
npm run lint

# Run ESLint and fix auto-fixable issues
npm run lint:fix
```

### Type Checking

```bash
# Run TypeScript type checking (excludes .next folder for faster performance)
npm run type-check
```

**Note:** The type-checking uses a separate TypeScript configuration (`tsconfig.type-check.json`) that excludes the `.next` folder to avoid conflicts and improve performance. This configuration extends the main `tsconfig.json` but excludes build artifacts.

## VS Code Integration

The project includes VS Code settings (`.vscode/settings.json`) that:

- Enable format on save
- Set Prettier as the default formatter
- Run ESLint fixes on save
- Organize imports on save
- Configure TypeScript preferences

### Recommended Extensions

The project includes extension recommendations (`.vscode/extensions.json`):

- **Prettier - Code formatter**: For code formatting
- **ESLint**: For linting
- **Tailwind CSS IntelliSense**: For Tailwind CSS support
- **TypeScript Importer**: For TypeScript support

## Workflow

### Development Workflow

1. **Write code** - VS Code will automatically format and lint as you save
2. **Before committing** - Run the following commands:
   ```bash
   npm run format:changed  # Format only changed files
   npm run lint
   npm run type-check
   ```

### Git Workflow with pretty-quick

**Option 1: Manual formatting before commit**

```bash
# Stage your files
git add .

# Format only staged files
npm run format:staged

# Commit
git commit -m "your message"
```

**Option 2: Automatic formatting with lint-staged**

```bash
# Just stage and commit - lint-staged will auto-format
git add .
git commit -m "your message"
```

**Option 3: Format files changed since main branch**

```bash
# Format all files changed since main branch
npm run format:branch
```

### CI/CD Integration

These commands can be integrated into your CI/CD pipeline:

```bash
npm run format:check  # Ensure code is formatted
npm run lint          # Ensure no linting errors
npm run type-check    # Ensure no type errors
```

### pretty-quick Options

**Available Commands:**

- `npm run format:changed` - Format files changed since last commit
- `npm run format:staged` - Format only staged files
- `npm run format:branch` - Format files changed since main branch

**Direct pretty-quick Usage:**

```bash
# Format changed files since last commit
npx pretty-quick

# Format only staged files
npx pretty-quick --staged

# Format files changed since specific branch
npx pretty-quick --branch main

# Format files changed since specific commit
npx pretty-quick --since HEAD~1

# Check what would be formatted (dry run)
npx pretty-quick --check
```

## Ignored Files

The following files and directories are ignored by Prettier (see `.prettierignore`):

- `node_modules/`
- Build outputs (`.next/`, `out/`, `build/`, `dist/`)
- Environment files (`.env*`)
- Log files
- Cache directories
- Package lock files

## Troubleshooting

### Common Issues

1. **Import organization not working**: Make sure you have the Prettier extension installed in VS Code
2. **ESLint errors**: Run `npm run lint:fix` to auto-fix issues
3. **Formatting conflicts**: Run `npm run format` to format all files
4. **TypeScript errors with .next folder**: The project uses a separate `tsconfig.type-check.json` for type-checking that excludes the `.next` folder. If you encounter issues, ensure you're using `npm run type-check` instead of running `tsc` directly.

### Debug Mode

To debug Prettier issues, run:

```bash
DEBUG=true npm run format
```

This will enable debug logs for the prettier-plugin-organize-imports.

## Best Practices

1. **Always run formatting before committing**
2. **Fix linting errors before pushing code**
3. **Use TypeScript for all new code**
4. **Follow the established import organization patterns**
5. **Write accessible code (follow jsx-a11y rules)**

## References

- [Prettier Documentation](https://prettier.io/docs/en/)
- [prettier-plugin-organize-imports](https://www.npmjs.com/package/prettier-plugin-organize-imports)
- [pretty-quick Documentation](https://github.com/azz/pretty-quick)
- [ESLint Documentation](https://eslint.org/docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
