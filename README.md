# Akshatha Kulkarni — Portfolio

A responsive personal portfolio built with the Next.js App Router, TypeScript,
and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Run `npm run typecheck` for
TypeScript validation and `npm run build` for a production build.

## Update portfolio details

Edit `src/data/portfolio.ts` to update the name, introduction, education, PUC marks, skills, learning journey, projects, certifications, and
contact links. The PUC section shows the first- and second-year results
separately, calculates each percentage from its marks, and labels each result
as a distinction. Personal interests are intentionally empty until you choose
what to add.

## Add a profile photo

1. Copy your photo to `public/images/profile.jpg`.
2. In `src/data/portfolio.ts`, change `profileImage` from `null` to
   `"/images/profile.jpg"`.

The portrait will use your photo instead of the initials placeholder. If you
prefer a different filename, update both the file path and `profileImage`.

## Add certificate images and details

Copy certificate images to `public/images/certificates/`, then update the
matching entry in the `certifications` array in `src/data/portfolio.ts`. For
example:

```ts
{
  title: "Actual certificate name",
  issuer: "Microsoft",
  completedAt: "Month Year",
  image: "/images/certificates/certificate.jpg",
  certificateUrl: "/images/certificates/certificate.pdf",
  credentialUrl: "https://example.com/verify",
}
```

Only include details and links that are real. `image`, `certificateUrl`,
`credentialUrl`, and `completedAt` are optional. The Microsoft and Wadhwani
Foundation cards are placeholders until actual certificate details are added.

## Add projects

Add genuine projects to the `projects` array in `src/data/portfolio.ts`. Each
entry supports a title, description, technologies, optional thumbnail, GitHub
URL, live demo URL, and status (`"In Progress"` or `"Completed"`). Omit
unavailable links and images; the project empty state remains visible while
there are no project entries.
