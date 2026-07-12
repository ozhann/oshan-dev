# oshan.xyz

Personal site for **Özhan Yilmaz** — Senior Software Engineer in Berlin.

Built with [Astro](https://astro.build) and deployed to Cloudflare Pages.

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
npm run deploy
```

Custom domain: `ozhan.xyz`
