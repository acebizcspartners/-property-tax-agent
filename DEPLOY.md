# Deployment & Next Steps — propertytaxagent.com

Reference for getting the site live at `propertytaxagent.com` and configured for search.

---

## Current state

- ✅ Code is ready locally at `C:\Users\AnkitKulshrestha\propertytaxagent.com`
- ❌ Not yet pushed to GitHub — you'll provide the repo URL
- ❌ Site is **not yet hosted** — pick a host below
- ❌ DNS for `propertytaxagent.com` not pointed yet
- ❌ Google Search Console + Google Business Profile not yet claimed

Phone CTAs route to `0431 516 783`. Schema.org JSON-LD targets Hills District + Central Coast NSW for the local pack.

---

## Step 0 — Push to GitHub

After you create the empty private repo on github.com and paste the URL:

```sh
git -C "C:\Users\AnkitKulshrestha\propertytaxagent.com" remote add origin <YOUR-REPO-URL>
git -C "C:\Users\AnkitKulshrestha\propertytaxagent.com" push -u origin main
```

A browser window may pop up for GitHub auth on the first push — sign in and the push completes. From then on it's cached.

---

## Step 1 — Pick a host

The site is pure static HTML/CSS/JS. Any of these will host it for free.

| Host | Free tier | Custom domain | Why pick it |
|---|---|---|---|
| **Cloudflare Pages** | Unlimited | Free, easy | Fastest CDN, generous limits, simple DNS if you also use Cloudflare for the domain |
| **Vercel** | 100 GB/mo bandwidth | Free | Best DX, instant previews on every commit |
| **Netlify** | 100 GB/mo bandwidth | Free | Built-in form handling (replaces `mailto:`) |
| **GitHub Pages** | Free | Free | Simplest but requires **public** repo on free plan |

**Recommendation:** Cloudflare Pages if you don't already have a host preference.

---

## Step 2 — Connect the repo

### Cloudflare Pages

1. Sign in to [dash.cloudflare.com](https://dash.cloudflare.com).
2. Workers & Pages → Create application → Pages → Connect to Git.
3. Authorise GitHub, pick your `propertytaxagent` repo.
4. Build settings:
   - Framework preset: **None**
   - Build command: *(leave blank)*
   - Build output directory: `/`
5. Save and Deploy. ~30 seconds → `*.pages.dev` URL.

### Vercel

1. [vercel.com/new](https://vercel.com/new) → Import Git Repository → pick the repo.
2. Framework Preset: **Other**. No build command, output dir `/`.
3. Deploy.

### Netlify

1. [app.netlify.com/start](https://app.netlify.com/start) → Import from Git → GitHub → pick the repo.
2. No build command. Publish directory: `/`.
3. Deploy.

### GitHub Pages

1. github.com → repo → Settings → Pages.
2. Source: Deploy from branch → `main` → `/ (root)` → Save.
3. Add a `CNAME` file at repo root containing `propertytaxagent.com` for the custom domain.

---

## Step 3 — Point the domain

1. Buy `propertytaxagent.com` at any registrar.
2. In the registrar's DNS panel, add records the host shows you — typically:
   - **CNAME** `www` → your host's URL (`*.pages.dev`, `*.vercel.app`, etc.)
   - **A** `@` → the IP your host specifies
3. Add both apex (`propertytaxagent.com`) and `www` and pick which redirects to which.
4. Wait 5–60 minutes for DNS propagation. Most hosts auto-issue Let's Encrypt SSL.

---

## Step 4 — Post-deploy SEO setup

### Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → Add property → URL prefix → `https://propertytaxagent.com`.
2. Verify via DNS TXT record.
3. Submit `https://propertytaxagent.com/sitemap.xml` once it's generated.

### Google Business Profile (Hills local pack)

1. [google.com/business](https://google.com/business) → Add business.
2. Trading name: `Property Tax Agent` (or whatever shows on the site).
3. Address: `Suite 204, 11 Solent Circuit, Norwest NSW 2153`.
4. Phone: `0431 516 783`. Hours: Mon–Fri 9am–5pm.
5. Category: **Tax preparation service** + **Accountant** + **Financial consultant**.
6. Verification by postcard takes 5–14 days.

**Note:** if you also run a Google Business Profile for Builder Accountant at the same address, you may need to use a different category or service-area boundary to avoid duplicate-listing flags.

### Rich-result validation

Paste the live URL into [search.google.com/test/rich-results](https://search.google.com/test/rich-results). Expect:
- Local Business panel (address, phone, rating, hours)
- FAQPage panel (10 questions)

---

## Optional next builds

- [ ] **Generate `sitemap.xml` + `robots.txt`** — I can do this on request
- [ ] **Add a `404.html`** custom not-found page in the brand style
- [ ] **Wire `mailto:` forms to a real backend** — Formspree, Netlify Forms, or a Cloudflare Worker
- [ ] **Replace static testimonials with a live Google Reviews widget** once GBP is verified
- [ ] **Add `og-image.png`** (1200×630 social share image) — needs designed artwork
- [ ] **Add a real square `logo.png`** referenced by the JSON-LD
- [ ] **Build more service landing pages** (e.g. `/services/cgt-property/`, `/services/smsf-property/`, `/services/land-tax/`) for paid-search splits
- [ ] **Add Google Analytics 4 or Plausible**

---

## Pushing future changes

After any edit:

```sh
git -C "C:\Users\AnkitKulshrestha\propertytaxagent.com" add <files>
git -C "C:\Users\AnkitKulshrestha\propertytaxagent.com" commit -m "Short description"
git -C "C:\Users\AnkitKulshrestha\propertytaxagent.com" push
```

If you've connected the repo to Cloudflare / Vercel / Netlify, the push auto-deploys.

---

## Quick reference

| Thing | Value |
|---|---|
| Repo | _(provide URL after creation)_ |
| Branch | `main` |
| Local path | `C:\Users\AnkitKulshrestha\propertytaxagent.com` |
| Domain | `propertytaxagent.com` (not yet purchased / pointed) |
| Phone | `0431 516 783` (international: `+61 431 516 783`) |
| Email | `admin@acebiz.com.au` |
| Office | Suite 204, 11 Solent Circuit, Norwest NSW 2153 |
| Parent firm | Ace Biz — ABN 89 168 839 076 |
| Pricing | Per-property from $399 · Portfolio package from $1,200/yr (up to 5) |
| Depreciation schedule | From $499/property |
| Service areas | Hills District + Central Coast NSW (cloud-native national) |

---

*Generated by Claude — keep this file in the repo so it travels with the project.*
