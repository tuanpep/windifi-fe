# Project Structure Documentation

This document describes the feature-based architecture implemented in the Windifi Frontend project.

## Overview

The project follows a **Feature-Based Structure** (also known as Domain-Driven Design) where code is organized around business features rather than technical concerns. This approach provides better scalability, maintainability, and team collaboration.

## Directory Structure

```
src/
├── features/                    # Feature modules
│   ├── auth/                   # Authentication feature
│   │   ├── components/         # Auth-specific components
│   │   │   ├── LoginForm.tsx
│   │   │   ├── RegisterForm.tsx
│   │   │   └── index.ts        # Barrel exports
│   │   ├── hooks/              # Auth-specific hooks
│   │   │   ├── useAuth.ts
│   │   │   └── index.ts
│   │   ├── services/           # Auth API services
│   │   │   ├── authService.ts
│   │   │   └── index.ts
│   │   ├── types/              # Auth-specific types
│   │   │   ├── auth.types.ts
│   │   │   └── index.ts
│   │   └── index.ts            # Feature barrel exports
│   ├── dashboard/              # Dashboard feature
│   │   ├── components/
│   │   │   ├── PortfolioCard.tsx
│   │   │   ├── AssetList.tsx
│   │   │   └── index.ts
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   │   ├── dashboard.types.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   └── common/                 # Common/shared features
│       ├── components/
│       ├── hooks/
│       ├── services/
│       ├── types/
│       └── index.ts
├── shared/                     # Shared resources
│   ├── components/             # Reusable components
│   │   ├── ui/                 # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── index.ts
│   │   ├── layout/             # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── hooks/                  # Reusable hooks
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   └── index.ts
│   ├── utils/                  # Utility functions
│   │   ├── api.ts
│   │   ├── formatters.ts
│   │   └── index.ts
│   ├── types/                  # Shared types
│   │   ├── common.types.ts
│   │   └── index.ts
│   ├── constants/              # Constants
│   │   └── api.ts
│   └── index.ts
├── stores/                     # Global state management
│   ├── authStore.ts
│   └── portfolioStore.ts
├── theme/                      # Theme configuration
│   ├── index.ts
│   └── components.ts
└── app/                        # Next.js App Router
    ├── (auth)/                 # Route groups
    │   ├── login/
    │   └── register/
    ├── (dashboard)/
    │   ├── portfolio/
    │   └── trading/
    ├── demo/                   # Demo page
    ├── layout.tsx
    └── page.tsx
```

## Feature Structure

Each feature follows a consistent internal structure:

### Components (`components/`)

- Feature-specific React components
- Each component has its own file
- Barrel exports in `index.ts` for clean imports

### Hooks (`hooks/`)

- Custom React hooks specific to the feature
- Business logic and state management
- Barrel exports in `index.ts`

### Services (`services/`)

- API calls and external service integrations
- Business logic that doesn't belong in components
- Class-based or function-based services

### Types (`types/`)

- TypeScript interfaces and types
- Feature-specific data models
- Barrel exports in `index.ts`

### Barrel Exports (`index.ts`)

- Exports all public APIs from the feature
- Enables clean imports: `import { LoginForm } from '@/features/auth'`

## Shared Resources

### Components (`shared/components/`)

- **UI Components**: Reusable UI elements (Button, Input, Modal, etc.)
- **Layout Components**: Page layout components (Header, Sidebar, etc.)

### Hooks (`shared/hooks/`)

- Reusable custom hooks (useLocalStorage, useDebounce, etc.)

### Utils (`shared/utils/`)

- **API Utilities**: HTTP client, error handling
- **Formatters**: Data formatting functions (currency, dates, etc.)

### Types (`shared/types/`)

- Common TypeScript interfaces used across features

### Constants (`shared/constants/`)

- Application constants and configuration

## Import Patterns

### Feature Imports

```typescript
// Import from a specific feature
import { LoginForm, useAuth } from '@/features/auth';
import { PortfolioCard } from '@/features/dashboard';

// Import specific types
import type { AuthUser } from '@/features/auth';
import type { PortfolioSummary } from '@/features/dashboard';
```

### Shared Imports

```typescript
// Import shared components
import { Button, Input } from '@/shared/components/ui';
import { Header } from '@/shared/components/layout';

// Import shared utilities
import { formatCurrency } from '@/shared/utils/formatters';
import { api } from '@/shared/utils/api';

// Import shared hooks
import { useLocalStorage } from '@/shared/hooks';

// Import shared types
import type { ApiResponse } from '@/shared/types';
```

## Benefits of This Structure

### 1. **Scalability**

- Easy to add new features without affecting existing code
- Clear boundaries between features
- Reduced coupling between different parts of the application

### 2. **Maintainability**

- Related code is co-located
- Easy to find and modify feature-specific code
- Clear separation of concerns

### 3. **Team Collaboration**

- Multiple teams can work on different features
- Reduced merge conflicts
- Clear ownership of code

### 4. **Code Reusability**

- Shared components and utilities are clearly separated
- Easy to identify and extract common code
- Consistent patterns across features

### 5. **Testing**

- Each feature can be tested independently
- Clear test boundaries
- Easy to mock dependencies

## Best Practices

### 1. **Feature Independence**

- Features should be as independent as possible
- Avoid cross-feature dependencies
- Use shared resources for common functionality

### 2. **Barrel Exports**

- Always use barrel exports (`index.ts`) for clean imports
- Export only what's needed by other features
- Keep internal implementation details private

### 3. **Naming Conventions**

- Use descriptive, feature-specific names
- Follow consistent naming patterns
- Use TypeScript for type safety

### 4. **File Organization**

- Keep related files close together
- Use consistent directory structure
- Group by feature, then by type

### 5. **Import Organization**

- Import from features first, then shared
- Use absolute imports with `@/` prefix
- Group imports by type (React, external, internal)

## Migration Guide

### From Type-Based Structure

1. **Identify Features**: Group related components, hooks, and services
2. **Create Feature Directories**: Set up the new directory structure
3. **Move Files**: Relocate files to their new locations
4. **Update Imports**: Fix all import statements
5. **Add Barrel Exports**: Create index files for clean imports
6. **Test**: Ensure everything still works correctly

### Common Patterns

#### Feature Component

```typescript
// src/features/auth/components/LoginForm.tsx
'use client';

import { useAuth } from '../hooks/useAuth';
import type { LoginCredentials } from '../types';

export function LoginForm() {
  // Component implementation
}
```

#### Feature Hook

```typescript
// src/features/auth/hooks/useAuth.ts
'use client';

import { AuthService } from '../services/authService';
import type { AuthState } from '../types';

export function useAuth() {
  // Hook implementation
}
```

#### Feature Service

```typescript
// src/features/auth/services/authService.ts
import { api } from '@/shared/utils/api';
import type { AuthResponse } from '../types';

export class AuthService {
  static async login(credentials: LoginCredentials): Promise<AuthResponse> {
    return api.post('/auth/login', credentials);
  }
}
```

## Demo

Visit `/demo` to see the feature-based structure in action. The demo page showcases:

- Auth feature components (LoginForm, RegisterForm)
- Dashboard feature components (PortfolioCard, AssetList)
- Shared components (Header)
- Integration between features

## Next Steps

1. **Add More Features**: Create additional features as needed
2. **Enhance Shared Resources**: Add more reusable components and utilities
3. **Implement State Management**: Add global state management with Zustand
4. **Add Testing**: Implement comprehensive testing for each feature
5. **Documentation**: Keep this documentation updated as the project evolves
