# JobAlertExpress — Site Guide

Complete reference for how this site works and the rules to follow when maintaining it. Read [README.md](README.md) first for the quick-start; this file goes deeper.

## 1. Core idea

Static site, no backend/build step/database. The **only** files you normally edit are:

- `data/posts.js` — every job/admit-card/result/syllabus post
- `data/ads.js` — every ad slot on the site

Everything else (cards, pages, filters, tables) renders automatically from those two files.

## 2. Adding a new post

**Always create a brand-new object in the `POSTS` array — never edit an existing post to turn it into a different notification.** Only edit an existing post when correcting/refining details of *that same* notification (wrong date, missing section, etc.).

Steps:
1. Copy an existing post object in `data/posts.js`, paste it as a new entry, give it a new unique `id`.
2. Fill in the fields per the FIELD GUIDE comment at the top of `data/posts.js`.
3. `postedDate` = the date **this post was added to JobAlertExpress** (usually today), not necessarily the date the recruiting organisation released the notification. The organisation's own release date belongs in `importantDates` as a `"Notification Date"` entry. Sorting (newest-first, everywhere on the site) is based on `postedDate`.
4. `category` must be exactly one of: `job`, `admitcard`, `result`, `syllabus`.
5. `sector` (optional) controls which sector tile/page the post shows up under on the homepage and which dedicated page it belongs to — see §4.
6. `popular: true` (job posts only) — see §5.
7. Add a matching `<url>` entry to `sitemap.xml` (`lastmod` = `postedDate`).

### Writing content from a real notification (PDF, official website, etc.)

- Read the source document fully before writing anything.
- Write descriptions/tables in your **own words**, based on the official document's facts. Don't closely paraphrase a third-party article (e.g. FreeJobAlert, Sarkari Result) — copying their sentence structure/phrasing is a copyright risk even if reworded slightly. Facts and numbers are fine to reuse; their specific prose is not.
- Optional per-post fields (`tables`, `howToApply`, `selectionProcess`, `examPreparation`, `faqs`) let you add real structured detail (vacancy breakdowns, eligibility tables, exam pattern, application fee, etc.) instead of relying on the generic auto-generated defaults. See the FIELD GUIDE comment in `data/posts.js` for the exact shape of each.
- A `tables` entry with `section: "selection-process"` or `section: "how-to-apply"` renders inside that specific card instead of the main article body.

## 3. Post detail page heading language

Every section heading on `post.html` (Overview, Important Dates, How to Apply, Selection Process, FAQs, etc.) is auto-generated as **"{Org} {Type} {Year} {Section}"** (e.g. "SBI Recruitment 2026 Overview", "RRB Admit Card 2026 - FAQs") via `postShortLabel()` in `js/detail.js`. This is automatic — you don't set it per post, it's derived from `organization`, `category`, and `postedDate`'s year.

## 4. Sectors and their dedicated pages

Each `sector` value gets its own homepage tile (in "Browse by Category") and its own dedicated page showing every post (any category) tagged with that sector.

Current sectors, in display order: **Banking, SSC, Railway, Police & Defence, Technical, Medical & Health, Others**.

To add a new sector:
1. Add an icon + gradient entry to `SECTOR_META` in `js/common.js`.
2. Add the sector name to `SECTOR_ORDER` in `js/app.js` (controls tile/pill display order).
3. Create `{slug}.html` (slug = `slugify(sectorName)`, e.g. "Police & Defence" → `police-defence.html`) by copying an existing sector page (e.g. `ssc.html`) and changing `data-sector`, the title/meta text, and the `sectorBar` colour.
4. Add the new page to `sitemap.xml`.
5. Set `sector: "Your New Sector"` on the relevant posts.

A post with no `sector` field automatically falls back to the **Others** page/tile.

## 5. Homepage "Latest Jobs" — popular vs full list

- The homepage's **Latest Jobs card section** shows only posts with `popular: true` (job category only) whose `lastDate` hasn't passed. Since this is a static site with no real visitor analytics, `popular` is set manually — base it on your own judgement/traffic knowledge.
- The **"Latest Govt Jobs List 2026"** table right below it shows **every** job post (not filtered by `popular`), split into two columns, each row showing just the title and Last Date.
- If a new job post isn't showing where expected, check: `category` is exactly `"job"`, `popular: true` is set (for the cards section), and do a hard refresh (Ctrl+Shift+R) — this is a static site so the browser can cache old JS/data files.

## 6. Ads

Everything ad-related is controlled from `data/ads.js` — never hardcode ad content into an HTML file. Slots: `homeTop`, `homeMiddle`, `homeBottom`, `categoryTop`, `categorySidebar` (Latest Jobs page only), `postInContent`, `postSidebar`. Current placeholder ads promote TuduInfotech (dummy content) — replace `code`/`imageUrl` per slot when real ads are ready.

## 7. File structure

- `index.html` — homepage (category slider, popular jobs, list table, per-category preview sections)
- `latest-jobs.html` / `admit-card.html` / `results.html` / `syllabus.html` — the 4 fixed category pages
- `ssc.html`, `railway.html`, `banking.html`, `police-defence.html`, `technical.html`, `medical-health.html`, `others.html` — sector pages
- `post.html` — single post detail page
- `about.html`, `contact.html` — static pages
- `data/posts.js` — all post content (§2)
- `data/ads.js` — all ad content (§6)
- `js/common.js` — shared helpers, site-wide config (`SITE`, `CATEGORY_META`, `SECTOR_META`), search, nav, `cardHtml()`, `renderListTable()`, `renderCategoryPills()`
- `js/app.js` — homepage-only rendering (popular jobs, category slider, jobs list)
- `js/category.js` — the 4 fixed category pages' rendering
- `js/sector.js` — the 7 sector pages' rendering
- `js/detail.js` — `post.html` rendering, including all default-content generators and heading language (§3)
- `js/ads.js` — fills every `[data-ad-slot]` from `data/ads.js`
- `css/style.css` — all styling, including responsive breakpoints at 960px / 720px / 480px
- `sitemap.xml`, `robots.txt`, `llms.txt` — SEO/GEO files, keep in sync when adding pages/posts

## 8. Site identity

- Name: **JobAlertExpress**
- Domain placeholder: `https://www.jobalertexpress.com` (replace with the real domain once deployed — set in `SITE.url` in `js/common.js`, plus `sitemap.xml`/`robots.txt`/every page's canonical & OG tags)
