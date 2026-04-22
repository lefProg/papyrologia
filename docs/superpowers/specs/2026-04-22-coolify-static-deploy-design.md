# Coolify Static Deploy — Design

Date: 2026-04-22
Target: `cpwmpaglt-lab.philology.uoi.gr` (uni Coolify instance)

## Problem

Deploying the Vite/React site to Coolify returns **502 Bad Gateway**. Build succeeds; Traefik cannot reach the container. The repo also carries deploy configs for Netlify, Vercel, and manual Docker that are not used.

Root cause: `docker-compose.yml` binds `3000:80` on the host and declares no Coolify labels or network, so Traefik has no route to the service.

## Goal

Make the site deployable in the simplest, most minimal way possible, targeting Coolify only.

## Approach

Use Coolify's built-in **Static** build pack. Coolify runs the install + build command, then serves the `dist/` output through its managed nginx + Traefik proxy. No Dockerfile, no nginx config, no compose file, no port mapping.

## Changes

### Files deleted
- `Dockerfile`
- `nginx.conf`
- `docker-compose.yml`
- `netlify.toml`
- `vercel.json`
- `DEPLOY.md`

### Files kept
Standard Vite project only: `package.json`, `package-lock.json`, `vite.config.ts`, `index.html`, `src/`, `public/`, tsconfig files, `eslint.config.js`, `postcss.config.js`.

### Coolify UI configuration
| Field | Value |
|---|---|
| Build Pack | `Static` |
| Install Command | `npm ci` |
| Build Command | `npm run build` |
| Publish Directory | `dist` |
| Port | `80` |

SPA client-side routing (history API fallback to `index.html`) is handled by Coolify's static server by default.

## Why not the alternatives

- **Dockerfile build pack** — keeps `Dockerfile` + `nginx.conf`. Works, but we maintain nginx ourselves for no benefit over the Static pack.
- **Fix docker-compose.yml** — add `expose: 80` + `SERVICE_FQDN_PAPYROLOGIA_80`. Fixes the 502 but keeps the most files and the most moving parts.

## Success criteria

- Redeploy on Coolify returns HTTP 200 at `https://cpwmpaglt-lab.philology.uoi.gr`
- Deep links (e.g. `/some/route`) load the SPA instead of 404
- Repo contains no deploy-specific files beyond the Coolify UI config
