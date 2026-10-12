# Akshatha Kulkarni — Portfolio

A responsive personal portfolio built with the Next.js App Router, TypeScript,
and Tailwind CSS.

## Run locally

Install dependencies, then start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To verify a production
build, run `npm run build`; to serve that build locally, run `npm run start`.

## Update personal information

Edit `src/data/portfolio.ts`. It contains the portfolio text, skills, education,
email, and social profile URLs. Unprovided hobbies are marked as editable
placeholders; replace them with your own details when you are ready.

## Add a profile photo

Add your image as `public/profile.jpg`. The hero currently displays a designed
placeholder; in `src/components/portfolio.tsx`, replace the `.hero-art__card`
placeholder markup with Next.js's `Image` component using `src="/profile.jpg"`
and a meaningful `alt` description. The image can then be styled to fit inside
the existing `.hero-art` layout.

## Add projects

Add entries to the `projects` array in `src/data/portfolio.ts`. Each project
accepts a `title`, `description`, `technologies` array, and an optional `href`.
Project cards appear automatically when the array contains entries; the friendly
empty-state message is shown while there are no projects to display.
