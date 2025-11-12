# Portfolio-Brayan - AI Coding Guidelines

## Architecture Overview
This is a modern React portfolio built with **React 19 + TypeScript + Vite**, using **Tailwind CSS v4** and **shadcn/ui** components. The project follows a component-based architecture with path aliases for clean imports.

## Key Patterns & Conventions

### Path Aliases
- Use `@/` for all imports from `src/` directory
- Example: `import { cn } from "@/lib/utils"`
- Configured in `vite.config.ts` and `tsconfig.json`

### Styling System
- **Tailwind CSS v4** with custom CSS variables in `src/index.css`
- Use the `cn()` utility from `@/lib/utils` for conditional classes
- Example: `className={cn("base-class", isActive && "active-class")}`
- Theme variables defined with `--color-*` and `--radius-*` patterns

### Component Structure
- shadcn/ui setup with New York style (`components.json`)
- Component aliases: `@/components/ui`, `@/components`, `@/hooks`
- Follow React 19 patterns with modern hooks

### Build & Development
- **Development**: `npm run dev` (Vite dev server)
- **Build**: `npm run build` (TypeScript + Vite build)
- **Lint**: `npm run lint` (ESLint with React rules)
- **Preview**: `npm run preview` (Built app preview)

### TypeScript Configuration
- Strict mode enabled with unused variable detection
- Project references: separate configs for app (`tsconfig.app.json`) and Node.js (`tsconfig.node.json`)
- ES2022 target with modern module resolution

### Code Quality
- ESLint with React hooks and fast refresh plugins
- TypeScript strict checking enabled
- No unused locals/parameters allowed

## File Organization
```
src/
├── components/     # UI components (shadcn/ui compatible)
├── lib/
│   └── utils.ts    # Utility functions (cn, etc.)
├── hooks/          # Custom React hooks
├── assets/         # Static assets
└── main.tsx        # App entry point
```

## Development Workflow
1. Use `npm run dev` for development with HMR
2. Import components using `@/` aliases
3. Apply styles with Tailwind classes + `cn()` utility
4. Run `npm run lint` before commits
5. Build with `npm run build` for production

## Key Files
- `components.json`: shadcn/ui configuration
- `vite.config.ts`: Build config with path aliases
- `src/lib/utils.ts`: Core utilities (cn function)
- `src/index.css`: Tailwind setup with theme variables</content>
<parameter name="filePath">c:\Users\Bryan\Desktop\personales\portfolio-brayan\.github\copilot-instructions.md