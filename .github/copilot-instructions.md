# Copilot Instructions for MercadoLibre Frontend

## Project Overview
- This is a Next.js app bootstrapped with `create-next-app`.
- Main app code is in the `app/` directory, with subfolders for pages and layouts.
- UI components are organized by atomic design: `components/atoms`, `components/molecules`, `components/organisms`.
- Assets (images) are in `app/assets/` and `public/`.
- Business logic and API calls are in `libs/` (e.g., `authService.ts`, `singletonFetch.ts`).
- Data schemas and TypeScript interfaces are in `schemas/` and `interfaces/`.
- Utility functions are in `utils/`.

## Key Patterns & Conventions
- Use Next.js `Image` for optimized images (see `HeaderComponent.tsx`).
- React icons are used for UI elements (see imports in `HeaderComponent.tsx`).
- Layouts are defined in `layout.tsx` files within page folders.
- Pages are defined in `page.tsx` files, following Next.js routing conventions.
- Components follow atomic design: atoms (basic UI), molecules (composed UI), organisms (complex UI sections).
- Use TypeScript throughout; interfaces and types are in `interfaces/` and `schemas/`.
- Use Tailwind CSS for styling (see class names in components).

## Developer Workflows
- **Start dev server:** `npm run dev` (or `yarn dev`, `pnpm dev`, `bun dev`)
- **Edit main page:** `app/(webpage)/home/page.tsx` or other `page.tsx` files.
- **Global styles:** Edit `app/globals.css`.
- **Config files:** `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`.
- **Environment variables:** Copy `env.example` to `.env.local` and fill in values.

## Integration Points
- External images and icons are imported from local assets and `react-icons`.
- API/service logic is abstracted in `libs/`.
- No custom backend integration found in this repo; all logic is frontend-focused.

## Examples
- To add a new UI section, create a component in `components/organisms/` and use it in a page/layout.
- To add a new page, create a folder in `app/` and add `page.tsx` and optionally `layout.tsx`.
- For new API calls, add logic to `libs/` and types to `interfaces/`.

## References
- See `README.md` for Next.js basics and deployment info.
- See `HeaderComponent.tsx` for typical component structure and usage of assets/icons.

---
**If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.**
