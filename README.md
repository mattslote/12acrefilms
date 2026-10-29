# 12 Acre Films website

Astro static site served by a Cloudflare Worker (static assets + `/api/contact` form endpoint).

## Local dev
```
npm install
npm run dev          # Astro dev server
npm run preview      # build + run under the Worker runtime (form emails land in .wrangler/tmp)
```

## Deploy
```
npx wrangler login
npm run deploy
```

## One-time setup before the form works in production
1. **Email Routing**: Cloudflare dashboard → 12acrefilms.com → Email → Email Routing → enable, and verify the destination `matt@12acrefilms.com`. The Worker's `send_email` binding can only send to verified destinations.
2. **Turnstile**: Dashboard → Turnstile → add widget for 12acrefilms.com.
   - Put the site key in `.env` as `PUBLIC_TURNSTILE_SITEKEY=...` (then rebuild).
   - Store the secret: `npx wrangler secret put TURNSTILE_SECRET`
   - Until then the form uses Cloudflare's always-pass test key and skips the server check.

## Editing content
- `src/data/projects.json`: portfolio entries. Add `framerateEmbed` (the Framerate.tv embed/iframe URL) and the project page shows the player. `client`, `category`, and `tags` drive the filters.
- `src/data/gear.json`: gear list (searchable by name/category).
- `src/data/gallery.json`: gallery image URLs.
- `src/data/posts.json`: blog posts (a post with an empty `body` is listed but not linked).
- `public/_redirects`: old Squarespace URLs → new ones.

## Cutover from Squarespace (Name.com domain)
1. Deploy and test on the `*.workers.dev` URL.
2. Add the site in Cloudflare (Add a domain → 12acrefilms.com). Cloudflare imports existing DNS records; **check MX/TXT records** (email) match Name.com's before switching.
3. At Name.com → Domain → Nameservers: replace with the two Cloudflare nameservers.
4. In Cloudflare → Workers → 12acrefilms → Settings → Domains & Routes: add `www.12acrefilms.com` and `12acrefilms.com` as custom domains.
5. Add a redirect rule so the apex redirects to `www` (canonical is www).
6. Keep Squarespace active until the new site is confirmed live, then cancel. Note: the Squarespace *domain* is separate if it was registered there; here it's at Name.com so nothing to transfer.
