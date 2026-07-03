# blackmoldtest.com — WordPress → GitHub Pages Migration Report (v2)

**Updated:** rebuilt to use your existing Yoast SEO metadata + added schema.

## SEO — now using YOUR original data
- **30 meta descriptions** pulled directly from your Yoast settings (all 13 city pages, home, contact, what-is-mold, mold-testing, find-a-home-inspector, vendors, and the humidity-series posts) — used verbatim, not regenerated.
- **2 custom SEO titles** expanded from Yoast templates (common-contaminants-found-in-water, vendors).
- **45 focus keywords** carried in as meta keyword hints.
- Where Yoast had nothing, clean titles/descriptions are auto-generated from page content.

## Schema / structured data (AIO)
- **LocalBusiness / ProfessionalService** JSON-LD site-wide (Petaluma NAP, phone, 13 service-area cities).
- **BlogPosting/Article** JSON-LD on all 33 blog posts (headline, dates, author, publisher, canonical) — NEW, wasn't on the old site.
- FAQ schema evaluated but not added: the source Q&A wasn't in a clean, machine-readable structure, and forcing it risked invalid markup. Can be added later if you format specific FAQ sections.

## Content
- 62 real pages: home, 10 service, 13 city, 5 directory, blog index, 33 posts. Full bodies preserved.
- 4,425 spam doorway pages + ~14 empty system pages excluded.

## Technical
- Clean slugs (BOM stripped); old URLs → 34 redirect stubs (meta-refresh + canonical).
- 2 duplicate posts consolidated (canonical + noindex on the -2 versions, excluded from sitemap).
- All wpengine.com staging leaks fixed (0 remaining).
- sitemap.xml (62 URLs), robots.txt, 404.html, CNAME (www.blackmoldtest.com), .nojekyll.

## Action items
1. Replace YOUR_FORM_ID in forms with your Formspree endpoint.
2. Deploy: push CONTENTS of the folder (index.html at repo root) to your GitHub repo, enable Pages, enforce HTTPS.
3. After launch: remove the 4,425 spam URLs from Google Search Console.
4. Optional: self-host images (IMAGE-LIST.txt); consolidate the thin humidity series (THIN-CONTENT.txt).
