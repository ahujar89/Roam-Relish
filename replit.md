# Roam & Relish - Travel Blog

## Overview

Roam & Relish is a travel blog web application showcasing destinations, coffee culture, and travel stories. The application features a visually-rich, content-first design inspired by travel photography and storytelling platforms like Airbnb, Medium, and National Geographic. The project emphasizes elegant typography, generous whitespace, and immersive visual experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight routing library. The application supports routes for:
- Home page (`/`)
- Destinations listing (`/destinations`)
- Individual destination details (`/destination/:id`)
- Coffee culture page (`/coffee-culture`)
- About page (`/about`)

**UI Component Library**: shadcn/ui components built on Radix UI primitives, providing accessible, customizable components. The design system uses the "new-york" style variant with extensive customization through CSS variables.

**Styling Approach**: Tailwind CSS with custom design tokens defined in CSS variables for colors, spacing, and theme values. The design emphasizes:
- Typography hierarchy using Playfair Display (serif) for headers and Inter (sans-serif) for body text
- Generous spacing following a consistent scale (4, 6, 8, 12, 16, 20, 24, 32)
- Responsive grid layouts and container strategies
- Custom hover and active states through utility classes

**State Management**: TanStack Query (React Query) for server state management and data fetching, with custom query client configuration disabling automatic refetching.

**Data Architecture**: Static data stored in TypeScript files (`client/src/data/destinations.ts`) containing destination information, images, and content. This suggests a content-first approach with potential for future CMS integration.

### Backend Architecture

**Server Framework**: Express.js configured for API routes with a modular routing system.

**Development Setup**: The application uses a custom Vite middleware integration for hot module replacement (HMR) during development. In production, it serves static files built by Vite.

**Storage Layer**: Currently implements an in-memory storage system (`MemStorage`) with an interface-based design (`IStorage`) that allows for future database integration. The storage interface provides methods for:
- User retrieval by ID and username
- User creation

**API Design**: RESTful API structure with routes prefixed by `/api`. The application includes request logging middleware that captures response times and JSON payloads.

### Database Schema

**ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in `shared/schema.ts`.

**Current Schema**: Defines a `users` table with:
- UUID primary key with automatic generation
- Username (unique, required)
- Password (required)

**Validation**: Uses Zod schemas generated from Drizzle schema definitions for runtime type validation.

**Migration Strategy**: Drizzle Kit configured for schema migrations with support for push-based deployments.

### External Dependencies

**Database Provider**: Neon serverless PostgreSQL (`@neondatabase/serverless`) configured for edge deployments and serverless environments.

**Asset Management**: Images stored in an `attached_assets/generated_images/` directory, referenced through Vite's asset system with path aliases.

**Development Tools**:
- Replit-specific plugins for runtime error overlay, cartographer, and dev banner
- TypeScript with strict mode enabled
- ESBuild for server-side bundling in production

**UI Dependencies**:
- Comprehensive Radix UI component library for accessible primitives
- React Hook Form with resolvers for form validation
- Embla Carousel for image galleries
- Lucide React and React Icons for iconography
- Class Variance Authority for component variant management

**Fonts**: Google Fonts integration with multiple typefaces (DM Sans, Architects Daughter, Fira Code, Geist Mono) referenced in HTML but design guidelines specify Playfair Display and Inter as primary fonts.

### Design System

The application follows a reference-based design approach with:
- Soothing, elegant aesthetic prioritizing whitespace and visual storytelling
- Mobile-first responsive design with breakpoints at md (768px) and lg
- Custom animation utilities for hover states, elevations, and smooth transitions
- Theme support through CSS variables enabling light/dark modes
- Accessibility considerations through semantic HTML and ARIA attributes