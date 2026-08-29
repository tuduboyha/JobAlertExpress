// Shared helpers used by both the homepage and the detail page.

// Site-wide identity, used for canonical URLs, Open Graph tags and JSON-LD
// structured data (SEO) across every page. IMPORTANT: replace `url` with your
// real domain once this site is deployed — search engines and AI crawlers
// use it to build canonical/absolute links.
const SITE = {
  name: "JobAlertExpress",
  url: "https://www.jobalertexpress.com",
  description: "Free portal for the latest Government job notifications, admit cards, results and exam syllabus.",
  logo: ""
};

// Used to suffix page/section headings with the current year (e.g. "Latest
// Jobs 2026", "SSC 2026") so the naming stays consistent across the site —
// and automatically rolls forward next year without editing every page.
const CURRENT_YEAR = new Date().getFullYear();

const CATEGORY_META = {
  job:        { label: "Latest Jobs",        badge: "Job",        color: "job",       page: "latest-jobs.html" },
  admitcard:  { label: "Admit Card",          badge: "Admit Card", color: "admitcard", page: "admit-card.html" },
  result:     { label: "Results",             badge: "Result",     color: "result",    page: "results.html" },
  syllabus:   { label: "Syllabus & Pattern",  badge: "Syllabus",   color: "syllabus",  page: "syllabus.html" }
};

// Icon shown in the colour banner at the top of every post card.
const CARD_ICONS = {
  job: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',
  admitcard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="1.8"/><line x1="14" y1="9" x2="18" y2="9"/><line x1="14" y1="13" x2="18" y2="13"/><line x1="6" y1="15.5" x2="11" y2="15.5"/></svg>',
  result: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5"/></svg>',
  syllabus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10.5 5 7.8 4.5 4 5v13c3.8-.5 6.5 0 8 1.5 1.5-1.5 4.2-2 8-1.5V5c-3.8-.5-6.5 0-8 1.5Z"/><path d="M12 6.5V20"/></svg>'
};

// Icon + gradient shown on each tile of the homepage "Browse by Category"
// slider. Keyed by the `sector` value used in data/posts.js. Add an entry
// here whenever a new sector is introduced so its tile gets a proper icon
// instead of the generic fallback.
const SECTOR_META = {
  SSC:       { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/></svg>', gradient: "linear-gradient(135deg,#2563eb,#1d4ed8)" },
  Railway:   { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="12" rx="3"/><path d="M4 11h16"/><path d="M7 19l-2 3M17 19l2 3"/><circle cx="8" cy="15" r="1"/><circle cx="16" cy="15" r="1"/></svg>', gradient: "linear-gradient(135deg,#ea580c,#c2410c)" },
  Banking:   { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 21 8 3 8"/></svg>', gradient: "linear-gradient(135deg,#16a34a,#15803d)" },
  "Police & Defence": { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9 8 11 4.6-2 8-6 8-11V5Z"/></svg>', gradient: "linear-gradient(135deg,#1e40af,#1e3a8a)" },
  Technical: { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>', gradient: "linear-gradient(135deg,#7c3aed,#6d28d9)" },
  "Medical & Health": { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a2 2 0 0 0-2 2v6H4a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h6v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-6h6a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2h-6V4a2 2 0 0 0-2-2Z"/></svg>', gradient: "linear-gradient(135deg,#e11d48,#9f1239)" }
};
const SECTOR_ICON_FALLBACK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>';

// Fixed display order for "Browse by Category" (slider and pills). Any
// sector found in data/posts.js that isn't listed here is appended at the
// end, alphabetically, so a newly introduced sector never goes missing.
const SECTOR_ORDER = ["Banking", "SSC", "Railway", "Police & Defence", "Technical", "Medical & Health", "Others"];

// Every sector found in data/posts.js, ordered per SECTOR_ORDER (any
// sector not listed there is appended alphabetically at the end).
function orderedSectors() {
  return [...new Set(POSTS.map(p => p.sector).filter(Boolean))].sort((a, b) => {
    const ia = SECTOR_ORDER.indexOf(a);
    const ib = SECTOR_ORDER.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

function sectorMeta(s) {
  return SECTOR_META[s] || { icon: SECTOR_ICON_FALLBACK, gradient: "linear-gradient(135deg,var(--brand),var(--brand-dark))" };
}

// Wrapping row of pill-shaped "Browse by Category" buttons — one per
// sector. No-ops on any page without the #categoryPillsTrack container.
function renderCategoryPills() {
  const track = document.getElementById("categoryPillsTrack");
  if (!track) return;

  track.innerHTML = orderedSectors().map(s => {
    const meta = sectorMeta(s);
    return `
      <a class="category-pill" href="${slugify(s)}.html">
        <span class="category-pill-icon" style="background:${meta.gradient}">${meta.icon}</span>
        ${escapeHtml(s)}
      </a>`;
  }).join("");
}

// The site's own social media pages ("follow us" links). Edit the url values
// to point to your real profiles/channels.
const SOCIAL_LINKS = [
  { name: "WhatsApp",  url: "https://wa.me/911234567890",                    icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/></svg>' },
  { name: "Telegram",  url: "https://t.me/JobAlertExpress",                  icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 3 2.5 10.7c-1 .4-1 1.7.1 2l4.6 1.5 1.8 5.5c.3.9 1.4 1.1 2 .4l2.6-2.7 4.8 3.5c.9.6 2.1.1 2.3-1L23 4.4c.2-1.1-.9-2-2-1.4ZM8.5 14.7l9-6.5c.3-.2.6.2.3.4l-7.4 7-.3 3.2Z"/></svg>' },
  { name: "Facebook",  url: "https://facebook.com/JobAlertExpress",          icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>' },
  { name: "Instagram", url: "https://instagram.com/JobAlertExpress",         icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>' },
  { name: "YouTube",   url: "https://youtube.com/@JobAlertExpress",          icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.4-5.2c-.3-1-1-1.8-2-2C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.5c-1 .2-1.8 1-2 2C1 8.5 1 12 1 12s0 3.5.4 5.2c.2 1 1 1.8 2 2 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5c1-.2 1.7-1 2-2 .4-1.7.4-5.2.4-5.2ZM9.8 15.5v-7l6 3.5Z"/></svg>' },
  { name: "X",         url: "https://x.com/JobAlertExpress",                 icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23.3 22H16.6l-5.2-6.8L5.4 22H2.3l8-9.2L1.3 2h6.9l4.7 6.2Zm-1.2 18h1.7L7.4 3.9H5.6Z"/></svg>' }
];

function sortedPosts() {
  return [...POSTS].sort((a, b) => (a.postedDate < b.postedDate ? 1 : -1));
}

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

function getPostById(id) {
  return POSTS.find(p => p.id === id);
}

// Short form of an organization name for compact spaces (table columns,
// filter dropdowns) — pulls the first "(ABBR)" out of the full name, e.g.
// "Staff Selection Commission (SSC)" -> "SSC". Falls back to the full name
// when the organization has no abbreviation in parentheses.
function orgShortName(org) {
  const match = /\(([^)]+)\)/.exec(org || "");
  return match ? match[1] : org;
}

// The label used wherever a post's "Category" (sector) is shown or filtered
// on category pages — a post's own `sector` field (e.g. "Railway", "SSC",
// "Banking", "Defence", "Police", "Technical") if set, otherwise the
// organization's short name.
function postCategoryLabel(post) {
  return post.sector || orgShortName(post.organization);
}

// URL-safe filename for a sector page — e.g. "Police & Defence" ->
// "police-defence" (page: police-defence.html), "SSC" -> "ssc".
function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Heading shown above the quick-reference list table on each of the 4 main
// category pages (latest-jobs.html, admit-card.html, results.html, syllabus.html).
const CATEGORY_LIST_HEADINGS = {
  job:       "Latest Govt Jobs List",
  admitcard: "Latest Admit Card List",
  result:    "Latest Results List",
  syllabus:  "Latest Syllabus List"
};

// Compact "at a glance" table — recruitment name / category / posted date /
// apply start date / last date — rendered below the card grid. Used by both
// category.js (job/admitcard/result/syllabus pages) and sector.js (SSC,
// Railway, ... pages). No-ops on any page without the #categoryListSection
// container.
function renderListTable(posts, heading) {
  const section = document.getElementById("categoryListSection");
  if (!section) return;

  // Some posts list a distinct "Apply Start Date" (or similar) in their
  // importantDates table — use that when present, otherwise fall back to
  // the post's own postedDate.
  function applyStartDate(p) {
    const row = (p.importantDates || []).find(d => /start date/i.test(d.label));
    return row ? row.value : formatDate(p.postedDate);
  }

  const rows = posts.map(p => `
    <tr>
      <td><a href="post.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.title)}</a></td>
      <td>${escapeHtml(postCategoryLabel(p))}</td>
      <td>${formatDate(p.postedDate)}</td>
      <td>${escapeHtml(applyStartDate(p))}</td>
      <td${p.lastDate ? ' class="text-danger"' : ""}>${p.lastDate ? formatDate(p.lastDate) : "—"}</td>
    </tr>`).join("");

  section.innerHTML = posts.length ? `
    <div class="info-table-block quick-list-table">
      <h3 class="info-table-heading">${escapeHtml(heading)}</h3>
      <div class="info-table-wrap">
        <table class="info-table">
          <thead><tr><th>Recruitment Name</th><th>Category</th><th>Posted Date</th><th>Start Date</th><th>Last Date</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>` : `
    <div class="empty-state">No updates found for this filter.</div>`;
}

function cardHtml(post) {
  const url = `post.html?id=${encodeURIComponent(post.id)}`;

  return `
    <article class="card">
      <div class="card-banner ${post.category}">
        <span class="card-banner-decor"></span>
        <span class="card-category-badge">${escapeHtml(postCategoryLabel(post))}</span>
        <span class="card-icon-badge">${CARD_ICONS[post.category] || ""}</span>
        <h3 class="card-title"><a href="${url}">${escapeHtml(post.title)}</a></h3>
      </div>
    </article>
  `;
}

// "Follow Us" widget: just the two channel-join buttons, pulled from SOCIAL_LINKS
// above so the URLs stay editable from this one place.
function joinChannelsHtml() {
  const wa = SOCIAL_LINKS.find(s => s.name === "WhatsApp");
  const tg = SOCIAL_LINKS.find(s => s.name === "Telegram");

  return `
    <div class="join-channels">
      ${wa ? `
        <a class="join-channel-btn whatsapp" href="${wa.url}" target="_blank" rel="noopener">
          <span class="join-channel-icon">${wa.icon}</span>
          Join WhatsApp Channel
        </a>` : ""}
      ${tg ? `
        <a class="join-channel-btn telegram" href="${tg.url}" target="_blank" rel="noopener">
          <span class="join-channel-icon">${tg.icon}</span>
          Join Telegram Channel
        </a>` : ""}
    </div>`;
}

// ---------- SEO / GEO helpers ----------
// These set the tags search engines (Google, Bing) and AI answer engines
// (ChatGPT/Perplexity/Google AI Overviews etc., collectively "GEO" targets)
// read to understand, rank and cite a page. Every page calls setPageSeo()
// once with static values; post.html and category pages call it again after
// rendering their dynamic content to override the title/description/canonical.

function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", url);
}

function setJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

// title/description/path are required; image is optional (absolute URL).
function setPageSeo({ title, description, path, image, type = "website" }) {
  if (title) document.title = title;
  setMetaTag("name", "description", description);
  const url = path ? `${SITE.url}${path}` : SITE.url;
  setCanonical(url);
  setMetaTag("property", "og:title", title);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:url", url);
  setMetaTag("property", "og:type", type);
  setMetaTag("property", "og:site_name", SITE.name);
  if (image) setMetaTag("property", "og:image", image);
  setMetaTag("name", "twitter:card", image ? "summary_large_image" : "summary");
  setMetaTag("name", "twitter:title", title);
  setMetaTag("name", "twitter:description", description);
  if (image) setMetaTag("name", "twitter:image", image);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Live search used by the header search box on every page.
function initSearch() {
  const input = document.getElementById("searchInput");
  const results = document.getElementById("searchResults");
  if (!input || !results) return;

  function render(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      results.classList.remove("show");
      results.innerHTML = "";
      return;
    }
    const matches = sortedPosts()
      .filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.organization.toLowerCase().includes(q)
      )
      .slice(0, 8);

    if (matches.length === 0) {
      results.innerHTML = `<div class="sr-empty">No matching posts found.</div>`;
    } else {
      results.innerHTML = matches.map(p => {
        const meta = CATEGORY_META[p.category] || {};
        return `<a href="post.html?id=${encodeURIComponent(p.id)}">
          <span class="sr-title">${escapeHtml(p.title)}</span>
          <span class="badge ${p.category}">${meta.badge || p.category}</span>
        </a>`;
      }).join("");
    }
    results.classList.add("show");
  }

  input.addEventListener("input", () => render(input.value));
  input.addEventListener("focus", () => { if (input.value.trim()) render(input.value); });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-wrap")) results.classList.remove("show");
  });
}

function initMobileNav() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;

  const backdrop = document.createElement("div");
  backdrop.className = "nav-backdrop";
  backdrop.id = "navBackdrop";
  document.body.appendChild(backdrop);

  const closeBtn = document.createElement("button");
  closeBtn.className = "nav-close";
  closeBtn.setAttribute("aria-label", "Close menu");
  closeBtn.textContent = "✕";
  nav.prepend(closeBtn);

  function openNav() {
    nav.classList.add("open");
    backdrop.classList.add("show");
  }
  function closeNav() {
    nav.classList.remove("open");
    backdrop.classList.remove("show");
  }

  toggle.addEventListener("click", () => {
    nav.classList.contains("open") ? closeNav() : openNav();
  });
  closeBtn.addEventListener("click", closeNav);
  backdrop.addEventListener("click", closeNav);
}

// Floating "back to top" button. No-ops on pages that don't include the button markup.
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Brand-level structured data (who the site is) — present on every page so
// search engines and AI engines can recognise "JobAlertExpress" as a real,
// consistent entity rather than re-deriving it per page.
function injectSiteJsonLd() {
  setJsonLd("ld-organization", {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    sameAs: SOCIAL_LINKS.map(s => s.url)
  });
  setJsonLd("ld-website", {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/index.html?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  });
}

// Fills every <span data-year></span> with the current year — used to keep
// heading text like "Latest Jobs 2026" current without hardcoding the year.
function fillYearSpans() {
  document.querySelectorAll("[data-year]").forEach(el => { el.textContent = CURRENT_YEAR; });
}

document.addEventListener("DOMContentLoaded", () => {
  initSearch();
  initMobileNav();
  initBackToTop();
  injectSiteJsonLd();
  fillYearSpans();
  renderCategoryPills();
});
