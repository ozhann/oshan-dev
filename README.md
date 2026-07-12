# ozhan.xyz

Personal site for **Özhan Yılmaz** — Senior Software Engineer in Berlin.

Built with [Astro](https://astro.build) and deployed as a Cloudflare Worker (static assets).

## Develop

```bash
cp .env.example .env   # set GITHUB_TOKEN for the contribution heatmap
npm install
npm run dev
```

`GITHUB_TOKEN` is only used at **build time** to fetch GitHub contribution data.

## Deploy

```bash
export GITHUB_TOKEN="$(gh auth token)"
export CLOUDFLARE_API_TOKEN="..."   # or use an existing `wrangler login` session
npm run deploy
```

## URLs

- Production: https://ozhan.xyz
- www: https://www.ozhan.xyz
- Preview: https://ozhan-xyz.ozhanyilmaz.workers.dev
