# Project Architecture Documentation

## Overview

This React application is built with modern web development best practices and is designed as a learning project for interns. It demonstrates a scalable architecture suitable for company websites and web applications.

## Technology Stack

### Core Technologies

- **React 18** - Frontend library with latest features including Concurrent Rendering
- **TypeScript** - Type-safe JavaScript for better developer experience and fewer runtime errors
- **Vite** - Fast build tool and development server with HMR (Hot Module Replacement)

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Shadcn/ui** - High-quality, accessible component library built on Radix UI
- **Lucide React** - Beautiful, customizable icons

### Routing & State Management

- **React Router v6** - Client-side routing with nested routes and layouts
- **TanStack Query (React Query)** - Server state management, caching, and synchronization

### Development Tools

- **ESLint** - JavaScript/TypeScript linting for code quality
- **Prettier** - Code formatting for consistent style
- **TypeScript** - Static type checking

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui base components (auto-generated)
│   └── layout/         # Layout components (Header, Footer, Layout)
├── pages/              # Page components for routing
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── App.tsx             # Main application component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

### Component Organization

#### `/components/ui/`

- Contains auto-generated Shadcn/ui components
- These are base components that shouldn't be modified directly
- Examples: Button, Input, Card, Dialog, etc.

#### `/components/layout/`

- Layout-related components like Header, Footer, Sidebar
- `Layout.tsx` - Main layout wrapper with Outlet for nested routes

#### `/pages/`

- Each file represents a route/page in the application
- Import and use components from `/components/`
- Keep business logic minimal, delegate to custom hooks

#### `/hooks/`

- Custom React hooks for reusable logic
- Data fetching hooks using TanStack Query
- Form handling, local storage, etc.

#### `/lib/`

- Utility functions
- API configuration
- Constants and type definitions

## Routing Architecture

The application uses React Router v6 with a nested routing structure:

```typescript
<Route path="/" element={<Layout />}>
  <Route index element={<Index />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Route>
```

- **Layout Component**: Provides consistent header/footer across all pages
- **Nested Routes**: Pages render inside the Layout component via `<Outlet />`
- **404 Handling**: Catch-all route for unmatched URLs

## State Management Strategy

### Local State

- Use `useState` for component-local state
- Use `useReducer` for complex state logic within components

### Server State

- **TanStack Query** for all server data fetching and caching
- Automatic background refetching
- Optimistic updates and error handling
- Example usage:

```typescript
const { data, isLoading, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});
```

### Global State

- Avoid global state when possible
- Use React Context for truly global state (theme, auth, etc.)

## Styling Guidelines

### Tailwind CSS

- Use utility classes for styling
- Custom CSS only when necessary
- Responsive design with mobile-first approach

```typescript
<div className="w-full max-w-4xl mx-auto px-4 py-8 md:px-6 lg:py-12">
```

### Component Styling

- Use Shadcn/ui components as base
- Customize with Tailwind utilities
- Create custom components for repeated patterns

## Development Workflow

### Getting Started

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start development server
4. Visit `http://localhost:8080`

### Code Quality

- **ESLint**: Runs on save and before commits
- **Prettier**: Auto-formats code on save
- **TypeScript**: Provides compile-time type checking

### Adding New Features

#### 1. Creating a New Page

```typescript
// src/pages/NewPage.tsx
const NewPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1>New Page</h1>
    </div>
  );
};

export default NewPage;
```

#### 2. Adding Route

```typescript
// Add to App.tsx
<Route path="new-page" element={<NewPage />} />
```

#### 3. Creating Reusable Components

```typescript
// src/components/CustomButton.tsx
interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

const CustomButton = ({ children, onClick, variant = 'primary' }: CustomButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={variant === 'primary' ? 'bg-blue-600' : 'bg-gray-600'}
    >
      {children}
    </Button>
  );
};
```

#### 4. Data Fetching with TanStack Query

```typescript
// src/hooks/useUsers.ts
export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      return response.json();
    },
  });
};

// In component
const { data: users, isLoading, error } = useUsers();
```

## Best Practices for Interns

### 1. Component Design

- Keep components small and focused
- Use TypeScript interfaces for props
- Prefer function components over class components

### 2. Performance

- Use React.memo() for expensive components
- Lazy load pages with React.lazy()
- Optimize images and assets

### 3. Accessibility

- Use semantic HTML elements
- Add proper ARIA labels
- Ensure keyboard navigation works (Not a must)

### 4. Error Handling

- Use React Error Boundaries for component errors
- Handle loading and error states in UI
- Provide meaningful error messages

### 5. Testing (Future Enhancement)

- Write unit tests for utility functions
- Component testing with React Testing Library
- E2E testing with Playwright or Cypress

Build command: `npm run build`
Output directory: `dist/`

## Learning Resources

### For Beginners

1. [React Official Tutorial](https://react.dev/learn)
2. [TypeScript Handbook](https://www.typescriptlang.org/docs/)
3. [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### Intermediate

1. [React Router Documentation](https://reactrouter.com/)
2. [TanStack Query Guide](https://tanstack.com/query/latest)
3. [Vite Guide](https://vitejs.dev/guide/)

### Advanced

1. [React Performance Optimization](https://react.dev/learn/render-and-commit)
2. [Advanced TypeScript Patterns](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
3. [Web Performance Best Practices](https://web.dev/learn-web-vitals/)

## Contributing

When working on this project:

1. Create feature branches from `main`
2. Write descriptive commit messages
3. Test your changes locally
4. Submit pull requests for code review
5. Update documentation when adding new features
