# Claw Docs

Documentation for Claw Desktop - the operator cockpit for OpenClaw agents.

## Development

```bash
pnpm install
pnpm dev
```

The docs site will be available at http://localhost:4321.

## Deployment

The docs are deployed to https://docs.claw.so via Vercel.

## Structure

- `src/content/docs/` - Documentation content in MDX
- `src/assets/` - Static assets (logos, images)
- `public/` - Public files served at root
- `config.mjs` - Site configuration (URLs, social links)
- `astro.config.mjs` - Astro/Starlight configuration
