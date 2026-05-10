# Deployment

## Railway

This app is prepared for Railway with Nixpacks.

1. Create a Railway service from this repository.
2. Railway installs dependencies with npm and builds the Next.js app.
3. The service starts with `npm run start`, which binds Next.js to `0.0.0.0` and Railway's `$PORT`.
4. Railway checks `/health` before considering the deployment healthy.

## Local pre-deployment checks

Run these checks before deploying:

```bash
npm install
npm run test:ci
npm run typecheck
npm run build
npm run start
```

The GitHub Actions workflow mirrors the critical CI steps: static deployment tests, TypeScript checking, and a production Next.js build.
