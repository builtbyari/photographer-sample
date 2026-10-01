# Sanjana Chawla Photography Portfolio

A static, responsive photography portfolio built with React and Vite.

## Development

```bash
pnpm install
pnpm dev:static
```

## Checks and production build

```bash
pnpm check
pnpm build:static
```

The production site is written to `dist/public`. The selected-project list is maintained in `client/src/data/projects.ts`, with local photographs and fonts in `client/public/`.

## Netlify deployment

`netlify.toml` configures Netlify to run `pnpm run build:static` and publish `dist/public`. These repository settings replace the outdated dashboard command that used a package filter and the incorrect `dist` publish directory. The portfolio does not require the legacy Express server build.
