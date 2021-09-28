## NextJS-Pretty-Boilerplate-Tailwind

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]
(https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


...*But* with extra flavor 🎁

<br/>

It contains:

- TypeScript support
- Type checking at runtime (on hot-reload, see index.tsx#22 to try it)
- Tailwind with automatic pruning on build (removes unused CSS (!))
- SASS support
- Project-wide automatic formatting with Prettier for TypeScript, JS, CSS files
- Project-wide automatic type checking/rule checking with ESLint
- BasePath resolving extensions (i.e. "components/mycomponent" instead of "./components/mycomponent")
<br/>
Few extra commands (i.e. yarn [command] or npm run [command]):

- format - formats all js, jsx, ts, tsx, json, md and saves them
- lint - linting checks
- lint:fix - automatic linting for all js, ts, tsx
- lint-scss - linting checks for scss using Stylelint
- lint-scss:fix - automatic linting for scss files
- types - type checking for ts/tsx files
<br/>
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `api/hello.ts`.

The `api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
