# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This repository contains a Next.js 15 application called "cali-fishing-spots" - a fishing spots discovery app for California locations. The main application is located in the `cali-fishing-spots/` directory.

### Key Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with PostCSS
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **Data Layer**: Static data in `src/data/fishingSpots.ts` with TypeScript interfaces
- **Components**: React functional components with TypeScript
- **Routing**: File-based routing with dynamic routes (`/spots/[id]`)

### Directory Structure

```
cali-fishing-spots/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout with fonts
│   │   ├── page.tsx         # Home page with filtering
│   │   └── spots/[id]/      # Dynamic spot detail pages
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── FishingSpotCard.tsx
│   │   └── FilterBar.tsx
│   └── data/               # Static data and types
│       └── fishingSpots.ts # Main data source and interfaces
├── public/                 # Static assets
└── config files           # Next.js, TypeScript, ESLint, etc.
```

## Development Commands

All commands should be run from the `cali-fishing-spots/` directory:

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Data Architecture

The app uses a static data approach with:

- **FishingSpot interface**: Complete type definition with coordinates, amenities, tips, regulations
- **fishingSpots array**: All spot data with comprehensive details
- **Helper arrays**: `regions` and `fishTypes` for filtering UI

### Key Data Fields
- Location data with coordinates
- Multiple fish types per spot
- Difficulty levels (Beginner/Intermediate/Advanced)
- Seasonal information
- Amenities and tips
- Regulations and ratings

## Component Patterns

- **Client Components**: Use `'use client'` directive for interactive components
- **Server Components**: Default for static content and data fetching
- **Props**: Strict TypeScript interfaces for all component props
- **Styling**: Tailwind classes with conditional styling functions
- **State Management**: React hooks (useState, useMemo) for local state

## Routing Structure

- **Home (`/`)**: Main listing with filtering and search
- **Spot Details (`/spots/[id]`)**: Individual spot pages with full details
- **Dynamic Routes**: Use `notFound()` for invalid spot IDs

## Code Conventions

- Use TypeScript interfaces for all data structures
- Implement proper error boundaries with `notFound()`
- Follow Next.js 15 App Router patterns
- Use semantic HTML with accessibility considerations
- Implement responsive design with Tailwind breakpoints

## Development Notes

- The app uses placeholder images (`/api/placeholder/400/300`)
- No backend API - all data is static
- No authentication or user management
- Map functionality is planned but not implemented
- Uses Geist fonts from Google Fonts