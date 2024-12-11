# Tanstack Start w/ Clerk Authentication

This is a starter project for [Tanstack Start](https://tanstack.com/start) and [Clerk Authentication](https://clerk.com/).

## Setup

Create a `.env` file and add the following:

```
VITE_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
```

```
pnpm install
```

## How we got here

1. Created a new Tanstack Start project using the [instructions](https://tanstack.com/router/latest/docs/framework/react/start/getting-started)
2. Added `@clerk/tanstack-start` with config updates specified in the [docs](https://github.com/clerk/javascript/tree/main/packages/tanstack-start)
