# Staycation Landing Page

simple landing page for train slicing, layouting, and responsive design.

## Tech

- [Zod](https://zod.dev/)
- [React Hooks Form](https://www.react-hook-form.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [NextJs/app dir](https://nextjs.org/docs/app)
- [TailwindCSS](https://tailwindcss.com/)

## Authors

- [@diko.dev99](https://www.github.com/dikomahendraa)

## Folder Structure

### **Atomic Design Pattern**

```
public => assets static
src
├── @types => globals types
├── app => all routes pages
├── ├── (components) => directory for components for only specific page
├── ├── page.tsx => create new route / page
├── components => common shared reusabled global component
├── ├── atoms => stand alone components
├── ├── molecules => organize component a combination from a several atoms components
├── ├── pages => organize all molecules to 1 pages
├── hooks => custom hooks
├── layouts => global layout parent
├── libs => utilities
├── service => comunicate with data json

```

## Run Locally

Clone the project

```bash
  git clone https://github.com/DikoMahendraa/staycation-landing-page
```

Go to the project directory

```bash
  cd staycation-landing-page
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
