# propertytaxagent.com

Lead-generation website for **Property Tax Agent**, a service of Ace Biz — specialist tax agents for Australian property investors and landlords.

Phone-first conversion site targeting the Hills District and Central Coast of NSW, with national coverage via cloud.

---

## Stack

Pure static site. No build step, no framework, no dependencies.

- HTML5
- Hand-written CSS (no preprocessor)
- ~50 lines of vanilla JS for sticky header, FAQ accordion, year, and click-to-call analytics hooks
- Google Fonts: Manrope (single family, variable weights)

Loads on a 3G connection. Hostable anywhere that serves static files.

---

## File structure

```
propertytaxagent.com/
├── index.html                          Main single-page site
├── styles.css                          All shared styles
├── app.js                              Progressive enhancement
├── checklist/
│   └── index.html                      Property Investor Tax Checklist (lead magnet, print-to-PDF ready)
└── services/
    └── depreciation-schedules/
        └── index.html                  Paid-search landing page
```

---

## Local preview

```sh
# Option 1 — just open the file
open index.html                         # macOS
start index.html                        # Windows

# Option 2 — serve with any static server (recommended)
python3 -m http.server 8000
# or
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deployment

Static site, zero config. See `DEPLOY.md` for full host-by-host steps. Short version:

- **Cloudflare Pages / Vercel / Netlify** — connect this repo, no build command, output dir `/`.
- **GitHub Pages** — works on public repos. Repo Settings → Pages → `main` / `/` (root).

---

## Pre-launch checklist

Things to update before going live:

- [ ] Replace `og-image.png` reference in `index.html` with a real 1200×630 PNG at the site root
- [ ] Replace `logo.png` reference in the JSON-LD with a real square logo (used by Google)
- [ ] Verify `aggregateRating.ratingCount` in JSON-LD matches the actual Google review count
- [ ] Wire `mailto:` form actions to a real form backend (Formspree, Netlify Forms, HubSpot, etc.)
- [ ] Replace static testimonials with a live Google Reviews widget once chosen
- [ ] Submit `https://propertytaxagent.com/sitemap.xml` to Google Search Console
- [ ] Create / claim the Google Business Profile for 204/11 Solent Circuit, Norwest NSW 2153

---

## Content overview

**Main site (`/index.html`)**

1. Hero — _"Keep more of every rental dollar."_ + click-to-call CTA
2. Trust strip — 4.8★, 10+ yrs, multi-state, TPB
3. Pain section — 3 property-investor pain cards
4. Services — 11 service cards including 4 specialty highlights:
   - Capital Gains Tax Planning
   - Depreciation Strategy & QS Coordination (links to landing page)
   - SMSF Property Investment
   - Foreign Resident CGT Withholding
5. More we handle — 30+ less-obvious services across 3 columns
6. How it works — 3 steps
7. Why us — 6 differentiators + 4 stat tiles
8. Pricing — two tiered cards: **Per-Property from $399** and **Portfolio Package from $1,200/yr** (up to 5 properties)
9. Testimonials — 3 cards
10. Lead magnet — Property Investor Tax Checklist
11. FAQ — 10 property-investor questions (depreciation, CGT, structures, land tax, etc.)
12. Where we work — Hills District + Central Coast suburb chips, Norwest office map embed
13. Final CTA — phone + brief-submission form
14. Footer — full nav, contact, ABN, legal

**Lead magnet (`/checklist/`)**
Interactive checklist — records to gather, deductions to claim, decisions to make, CGT prep, short-stay rules, plus 40 commonly missed deductions. Print stylesheet outputs a clean A4 PDF.

**Depreciation Schedules landing page (`/services/depreciation-schedules/`)**
Single-purpose paid-search landing page. Hero, pain, 8 deliverables, sample savings mockup, why-us, pricing ($499/property), FAQ, lead form.

---

## SEO

Built-in:
- Title + meta description on every page
- Open Graph tags for share previews
- JSON-LD structured data on `/index.html`: `AccountingService` + `LocalBusiness` + `ProfessionalService`, plus `WebSite` and `FAQPage`
- JSON-LD `Service` block on `/services/depreciation-schedules/`
- `areaServed` lists Hills District + Central Coast suburbs by name for local-pack relevance
- Canonical URLs on landing pages
- `<html lang="en-AU">` throughout

Verify after deployment with [Google Rich Results Test](https://search.google.com/test/rich-results).

---

## Brand

- Palette: charcoal `#111827` + emerald `#059669` + paper `#F8FAFC`
- Type: Manrope (variable weight, 400–800)
- Tone: tax-smart, sophisticated, no fluff — written for property investors

The brand is owned by Ace Biz. Property Tax Agent presents publicly as a sub-brand / lead funnel; footer reads _"A service of Ace Biz · ABN 89 168 839 076 · Registered Tax Agent"_.

---

## Licence

Proprietary. © Ace Biz. All rights reserved.
