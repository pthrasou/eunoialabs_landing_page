# Eunoia Labs Landing Page

## Overview

This is a marketing landing page for Eunoia Labs, a Sydney-based AI startup specializing in wellness technology. The site showcases their flagship product, Galinia - an AI-powered meditation app currently in development. Built as a single-page application with a modern tech stack, the site features a dark, futuristic design with gradient accents and glassmorphic elements that reflect the AI-forward brand identity.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript in a Vite-powered SPA (Single Page Application)

**Routing**: Client-side routing using Wouter (lightweight alternative to React Router)

**Styling Approach**: 
- Tailwind CSS for utility-first styling with dark mode support
- shadcn/ui component library (New York style variant) for pre-built UI primitives
- Custom CSS variables for theming with purple-to-cyan gradient brand colors
- Glassmorphism effects using backdrop blur and semi-transparent backgrounds

**Component Architecture**:
- Page-level components in `client/src/pages/` (Home, NotFound)
- Feature components in `client/src/components/` (Hero, About, GaliniaShowcase, Technology, Newsletter, Footer)
- Reusable UI primitives from shadcn/ui in `client/src/components/ui/`
- Example components for development reference in `client/src/components/examples/`

**State Management**: 
- TanStack Query (React Query) v5 for server state management
- React hooks for local component state
- No global state management library (Redux, Zustand) - keeping it simple

**Design System**:
- Typography: Space Grotesk for headings, Inter for body text (Google Fonts)
- Color palette: Deep space blue-black backgrounds with electric purple to cyber cyan gradients
- Custom animations for gradient shifts and glow effects
- Responsive breakpoints following Tailwind's mobile-first approach

### Backend Architecture

**Server Framework**: Express.js with TypeScript

**Development Setup**: 
- Vite dev server for HMR (Hot Module Replacement) in development
- Express serves as API backend and static file server in production
- Custom middleware for request logging and error handling

**Server Structure**:
- `server/index.ts`: Main Express app setup with middleware
- `server/routes.ts`: API route registration (currently minimal, ready for expansion)
- `server/storage.ts`: Data access layer with in-memory storage interface
- `server/vite.ts`: Vite integration for development mode

**Data Storage Pattern**:
- Storage interface (`IStorage`) for CRUD operations
- In-memory implementation (`MemStorage`) for development
- Database schema defined with Drizzle ORM ready for PostgreSQL
- User model as example (id, username, password)

**Build Process**:
- Client: Vite bundles React app to `dist/public`
- Server: esbuild bundles Express app to `dist/index.js`
- Production mode serves pre-built static files

### External Dependencies

**UI Component Library**: 
- Radix UI primitives (@radix-ui/*) for accessible, unstyled components
- shadcn/ui configuration for styled implementations
- Embla Carousel for app showcase carousel
- QRCode.react for download section QR codes

**Development Tools**:
- Vite with React plugin for fast development
- TypeScript for type safety across client and server
- Replit-specific plugins (runtime error modal, cartographer, dev banner)

**Database & ORM**:
- Drizzle ORM for type-safe database operations
- Drizzle Kit for schema migrations
- PostgreSQL dialect configured (via @neondatabase/serverless)
- Schema location: `shared/schema.ts`
- Migration output: `migrations/`

**Utilities**:
- date-fns for date manipulation
- clsx and tailwind-merge (via cn utility) for conditional classes
- class-variance-authority for component variant management
- Zod for schema validation (with drizzle-zod integration)

**Fonts**: Google Fonts (Space Grotesk, Inter) loaded via CDN in HTML

**Assets**: Logo and images stored in `attached_assets/` directory with path alias `@assets`

### Notable Architectural Decisions

**Monorepo Structure**: Client, server, and shared code in single repository with path aliases (@/, @shared/, @assets/) for clean imports

**Type Safety**: Shared TypeScript types between client and server via `shared/` directory

**API Design**: RESTful API pattern with `/api` prefix for all backend routes

**Styling Philosophy**: Dark-first design with no light mode toggle (dark mode always enabled)

**Form Handling**: React Hook Form with Zod resolvers for type-safe validation

**Authentication Ready**: User schema and storage interface prepared for auth implementation (currently using in-memory storage)

**Mobile-First Responsive**: All components built with mobile breakpoints first, scaling up to desktop