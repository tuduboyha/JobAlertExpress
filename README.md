# JobAlertExpress

A static job-recruitment website (no server/database needed) for posting government job notifications, admit cards, results, and exam syllabus.

See [GUIDE.md](GUIDE.md) for the full site guide — posting rules, sectors, ads, heading conventions, and file structure.

## How to post new content

Open [data/posts.js](data/posts.js), copy an existing object inside the `POSTS` array, paste it as a new entry, and edit the fields (`title`, `category`, `organization`, dates, description, links). Save the file and refresh the site — the new post shows up automatically on the homepage, in search, and gets its own page at `post.html?id=your-id`.

`category` must be one of: `job`, `admitcard`, `result`, `syllabus`.

## How to control ads

Every ad box on the site (homepage, category pages, post pages) is controlled from one file: [data/ads.js](data/ads.js). Edit a slot's `enabled` flag to show/hide it everywhere it appears, or set `type` to `"image"` (banner + link) or `"code"` (paste a raw AdSense/affiliate snippet) to replace the placeholder with a real ad. No HTML file needs to change.

## How to view the site

Just open [index.html](index.html) in a browser — no build step or server required.

## How to publish it online

Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, or shared hosting via FTP). No backend setup needed.

## File structure

- `index.html` — homepage
- `latest-jobs.html` / `admit-card.html` / `results.html` / `syllabus.html` — dedicated category pages
- `ssc.html`, `railway.html`, `banking.html`, `police-defence.html`, `technical.html`, `medical-health.html`, `others.html` — dedicated sector pages
- `post.html` — single post detail page
- `about.html`, `contact.html` — static pages
- `data/posts.js` — all site content (edit this to add/remove posts)
- `data/ads.js` — every ad slot's on/off switch and content (edit this to control ads)
- `js/common.js` — shared helpers + search
- `js/app.js` — homepage rendering
- `js/category.js` — the 4 fixed category pages' rendering
- `js/sector.js` — the 7 sector pages' rendering
- `js/detail.js` — detail page rendering
- `js/ads.js` — fills ad slots based on data/ads.js
- `css/style.css` — styling
