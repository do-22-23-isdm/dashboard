# dashboard

## Getting Started

There are two ways to get started:

- [dev] Hot reaload in kubernetes with **skaffold**
- [local] with **pnpm**

### Skaffold

1. Start by installing Skaffold using this [link](https://skaffold.dev/docs/install/).

2. Set up a local Kubernetes cluster (e.g., using kind):

```bash
kind create cluster
```

3. Then, at the root of the project:

```bash
skaffold dev
```

4. Port forward the service to access content:

```bash
kubectl port-forward services/dashboard 3000:80
```

Open [http://localhost:3000](http://localhost:3000).

### pnpm

1. Install the dependencies:

```bash
pnpm install
```

2. Copy the env file and fill in the required values:

```bash
cp .env .env.local
```

Fill the variables: `KEYCLOAK_CLIENT_ID`, `KEYCLOAK_CLIENT_SECRET` and `KEYCLOAK_ISSUER` with the values from your Keycloak client.

3. You can run the development server:

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
- [next-intl](https://github.com/amannn/next-intl): i18n

## Notes

When deploying the Next app to production, the environment variable `NEXTAUTH_URL` must be set to the canonical URL of the website.
This is used to generate the callback URL for OAuth providers.  
(source: [Deploying to production - NextAuth.js](https://next-auth.js.org/getting-started/example#deploying-to-production))
