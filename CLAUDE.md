# TheJPC Website Development Guide

## Commands
- `bun dev` - Start development server with Turbopack (or npm/yarn/pnpm)
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

## Code Style
- **TypeScript**: Use strict mode with proper type definitions
- **Components**: Functional components with named exports
- **Imports**: Order - React, Next.js, external libraries, internal components
- **Client/Server**: Mark client components with "use client" directive
- **Styling**: Use Tailwind CSS with design system variables
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Error Handling**: Handle loading/error states gracefully
- **File Structure**: Group by feature in src/app (Next.js App Router)
- **Utils**: Use @/lib for utility functions, use cn() for class merging
- **Paths**: Use @/ path aliases (setup in tsconfig.json)
- **Components**: Use shadcn/ui component patterns when applicable

Refer to eslint.config.mjs for specific linting rules. Follow Next.js best practices.