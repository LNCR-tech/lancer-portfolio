# Lancer Celicious — Portfolio

This is a Vite + React portfolio for Lancer Celicious, built with Tailwind CSS, Framer Motion, and Lucide icons. It's structured for deployment to Vercel.

Quick start

```bash
npm install
npm run dev    # local dev
npm run build  # production build
npm run preview # preview the production build
```

Deployment

- Connect this repository to Vercel and use the default build command `npm run build`. The output directory is `dist`.

Project structure highlights

- `src/components` — UI components and page sections
- `src/context/ThemeContext.jsx` — theme provider with localStorage
- `src/hooks` — `useTheme` and `useScrollSpy`
- `src/data` — projects, skills, certifications
- `tailwind.config.js` — custom theme extensions

Notes

- Light/dark theme persists under key `lancer-theme`.
- Particle canvas respects `prefers-reduced-motion` and cleans up on unmount.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
