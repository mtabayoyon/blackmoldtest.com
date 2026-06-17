# blackmoldtest.com — WordPress → GitHub Pages Migration Report

**Date:** 2026-06-17
**Source:** WordPress / WP Engine export (WXR)
**Target:** Static site for GitHub Pages → www.blackmoldtest.com

---

## What was migrated

| Type | Count | Notes |
|------|-------|-------|
| Home page | 1 | New conversion-focused hero + original body content |
| Core service pages | 10 | Mold Testing, Pricing, Water, Soils/Metals, Virtual Tours, Contact, What Is Mold, Find a Home Inspector, Mold Testing, IAQ Accessories |
| City / local-SEO pages | 13 | SF, Petaluma, Marin, Novato, Mill Valley, Berkeley, Santa Rosa, Sausalito, Ross, Larkspur, Corte Madera, Fairfax, Stinson Beach |
| Inspector/vendor directory pages | 5 | Vendors, Inspectors, Inspector Signup, Marketing Package, List Your Business |
| Blog index | 1 | Replaces 4 paginated WP pages |
| Blog posts | 33 unique (+2 dupes) | Full bodies preserved |
| **Total real pages** | **62** | Plus 34 redirect stubs + 404 |

## What was DELETED (and why)

- **4,425 spam "doorway" pages** — auto-generated `Mold Testing and Clean Up` pages, one per US city + area-code/km² variants (e.g. `/newyork/`, `/783-842km2/`). Classic SEO-spam injection. These were NOT migrated and should be removed from Google's index (see Action Items).
- **~14 empty/system pages** — schedule-form, cform, thank-you, records-page, test-table, login, landing-page-test, confirm-subscription, etc. WordPress plumbing with no public value.

## SEO work performed

1. **Slug cleanup** — stripped the `%ef%bb%bf` byte-order-mark garbage from 8 post slugs. Old ugly URLs redirect to clean ones via meta-refresh + canonical stubs.
2. **Duplicate consolidation** — two posts existed twice (`...-insurance` / `...-insurance-2`, and `where-are-you...` / `...-2`). The `-2` versions now carry a canonical tag pointing to the keeper and are excluded from the sitemap.
3. **LocalBusiness JSON-LD schema** — added site-wide: Petaluma NAP, phone, and all 13 service-area cities.
4. **Per-page** `<title>`, meta description, canonical, Open Graph tags.
5. **sitemap.xml** — 62 clean URLs only (no spam, no dupes).
6. **robots.txt** pointing to the sitemap.
7. **Fixed all `blockmoldtest.wpengine.com` leaks** — staging-domain links/images (incl. the broken Contact nav link) normalized to the live domain.
8. **404.html** with click-to-call recovery.

## Forms

All quote/contact forms are **Formspree-ready**. Replace `YOUR_FORM_ID` in the form `action` with your Formspree endpoint (one ID works site-wide). Until then, click-to-call works everywhere.

## Images

Image `<img>` tags currently point at the **live blackmoldtest.com URLs** so nothing breaks visually on launch. See `IMAGE-LIST.txt` for the full set to download into `/assets/` later for a fully self-hosted site.

## ⚠️ Action items for you

1. **Replace `YOUR_FORM_ID`** in forms with your Formspree endpoint.
2. **Remove the 4,425 spam pages from Google** — after launch, the spam URLs will 404 (good). Optionally submit a removal request in Google Search Console and confirm the old WP sitemap is gone.
3. **Review the thin "humidity control kit" blog series (10 posts)** — flagged in `THIN-CONTENT.txt`. Recommend consolidating into one strong pillar page later.
4. **DNS / deploy** — push to your GitHub repo, confirm Pages is enabled, CNAME = www.blackmoldtest.com, enforce HTTPS.
5. **Decide www vs apex** — the CNAME file is set to `www.blackmoldtest.com` (matches your sffloodrepair pattern).
