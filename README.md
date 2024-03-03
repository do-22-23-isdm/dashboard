# dashboard

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

And then, you can run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Dependencies

- [pnpm](https://pnpm.io/): package manager
- [next.js](https://nextjs.org/): React framework
- [NextAuth.js](https://next-auth.js.org/): authentication
- [shadcn/ui](https://ui.shadcn.com/): copy-paste components
  - [`components.json`](./components.json) configuration for shadcn-ui
  - has a dependency on [tailwindcss](https://tailwindcss.com/)
  - [`next.js` guide for shadcn/ui](https://ui.shadcn.com/docs/installation/next)
- [eslint](https://eslint.org/): linting
- [`hook-form`](https://github.com/react-hook-form/react-hook-form) & [`zod`](https://github.com/colinhacks/zod)
- state management?
- data fetching? ([`swr`](https://swr.vercel.app/)?)
