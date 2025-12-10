# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture Overview

This is a **single-page landing page** built with Next.js 15 using the App Router. The entire landing experience is composed of **section-based components** that are stacked vertically on the home page.

### Project Structure

- **`src/app/page.tsx`** - Main entry point that composes all landing page sections in order
- **`src/components/ui/`** - Contains all UI components, including landing page sections
- **`src/lib/utils.ts`** - Utility functions (primarily `cn()` for Tailwind class merging)

### Component Architecture

The landing page follows a **section-based composition pattern**:

1. Each major section of the landing page (Hero, WorkReality, AISolution, etc.) is a standalone component in `src/components/ui/`
2. Sections are imported and rendered sequentially in `src/app/page.tsx`
3. All sections are client components (`"use client"`) due to heavy use of animations and interactivity

**Section naming convention**: Components ending in `-section.tsx` represent major landing page sections (e.g., `before-after-section.tsx`, `pricing-section.tsx`)

### Animation & Visual Effects

This project makes extensive use of animations and visual effects:

- **Framer Motion** (`framer-motion`) - Primary animation library for component animations
- **Motion** (`motion/react`) - Used for specific animation utilities (e.g., in `glowing-effect.tsx`)
- **React Three Fiber** (`@react-three/fiber`) - 3D graphics rendering (if needed for future enhancements)
- **Custom effect components**: `glowing-effect.tsx`, `gradient-spheres.tsx`, `moving-border.tsx`

**Pattern for animated sections**:
```tsx
"use client";
import { motion } from "framer-motion";
// Component with framer-motion animations
```

### Theming

- **Dark mode only** - The site is configured with `forcedTheme="dark"` in `layout.tsx`
- Uses `next-themes` for theme management
- Tailwind CSS with custom design tokens defined in `tailwind.config.ts`
- Color system uses HSL CSS variables (e.g., `hsl(var(--background))`)

### Styling Conventions

- **Tailwind CSS** for all styling
- **`cn()` utility** (`src/lib/utils.ts`) - Merges Tailwind classes using `clsx` and `tailwind-merge`
  ```tsx
  import { cn } from "@/lib/utils";
  className={cn("base-classes", conditionalClass && "conditional-classes")}
  ```
- **Custom Tailwind plugin** - Adds all Tailwind colors as CSS variables (see `tailwind.config.ts`)

### Key Technical Details

1. **Client-side rendering**: Most components use `"use client"` directive for interactivity
2. **Path aliases**: Uses `@/` for imports (e.g., `@/components/ui/button`)
3. **Type safety**: Full TypeScript with strict mode
4. **React 19 RC**: Uses React 19.0.0-rc.1 (be aware of potential breaking changes)
5. **Language**: Landing page content is in Russian

### Component Patterns

**Animation-heavy components** (e.g., `animated-hero.tsx`):
- Use `useState` for animation state management
- Use `useEffect` for time-based animations
- Use `useMemo` for performance optimization of animation data

**Effect components** (e.g., `glowing-effect.tsx`):
- Use `memo()` for performance
- Use `useRef` for DOM manipulation and animation frame management
- Use `useCallback` for memoized event handlers
- Implement custom CSS variables via inline styles

**Section components**:
- Typically export a single named export (e.g., `export { Hero }`)
- Self-contained with their own state and animation logic
- Responsive design with mobile-first Tailwind classes

### Content Organization

The landing page follows this section order (from `src/app/page.tsx`):
1. Navigation
2. Hero
3. WorkRealitySection
4. AISolutionSection
5. TargetAudienceSection
6. ProgramSection
7. LearningProcessSection
8. BeforeAfterSection
9. ContentFactorySection
10. PricingSection
11. PricingInfoSection
12. FAQSection
13. Footer

When adding new sections, import them in `page.tsx` and place them in the appropriate position within the `<main>` element.
