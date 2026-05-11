# Deployment

## Railway

This app is prepared for Railway with Nixpacks.

1. Create a Railway service from this repository.
2. Railway installs the pinned npm dependencies and builds the Next.js app.
3. The service starts with `npm run start`, which binds Next.js to `0.0.0.0` and Railway's `$PORT` with a local `3000` fallback.
4. Railway checks `/health` before considering the deployment healthy.

## Local pre-deployment checks

Run these checks before deploying:

```bash
npm install
npm run test:ci
npm run typecheck
npm run build
PORT=3000 npm run start
curl --fail http://127.0.0.1:3000/health
```

The GitHub Actions workflow mirrors the critical CI steps: static deployment tests, TypeScript checking, a production Next.js build, and a production smoke test against the health endpoint.
