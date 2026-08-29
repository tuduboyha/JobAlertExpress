// Renders a sector-specific listing page (ssc.html, railway.html,
// banking.html, police.html, technical.html) — shows every post across all
// categories (job/admitcard/result/syllabus) that belongs to this sector.
// The page sets <body data-sector="SSC"> (must match a `sector` value used
// in data/posts.js) and includes the usual container ids below.

let sectorAllPosts = [];
let sectorKey = null;

function renderSectorPage() {
  const sector = document.body.dataset.sector;
  const grid = document.getElementById("sectorGrid");
  if (!sector || !grid) return;

  sectorKey = sector;
  sectorAllPosts = sortedPosts().filter(p => p.sector === sector);

  document.getElementById("sectorHeading").textContent = sector;
  document.getElementById("sectorTitleText").textContent = `${sector} ${CURRENT_YEAR}`;
  document.getElementById("sectorCount").textContent = sectorAllPosts.length;

  renderSectorFilterBar(sectorAllPosts);
  applySectorFilter("");

  setPageSeo({
    title: `${sector} ${CURRENT_YEAR} — Jobs, Admit Card, Result & Syllabus — JobAlertExpress`,
    description: `${sectorAllPosts.length} latest ${sector} ${CURRENT_YEAR} updates — jobs, admit card, result and syllabus, all in one place on JobAlertExpress.`,
    path: `/${slugify(sector)}.html`
  });
}

// Dropdown that narrows the posts below by type (Job / Admit Card / Result
// / Syllabus). Lives in #sectorFilterBar.
function renderSectorFilterBar(posts) {
  const bar = document.getElementById("sectorFilterBar");
  if (!bar) return;

  const cats = [...new Set(posts.map(p => p.category))];
  if (cats.length < 2) { bar.innerHTML = ""; return; }

  bar.innerHTML = `
    <label class="category-filter-label" for="sectorTypeFilter">Filter by Type</label>
    <select id="sectorTypeFilter" class="category-filter-select">
      <option value="">All Types</option>
      ${cats.map(c => `<option value="${c}">${escapeHtml(CATEGORY_META[c].label)}</option>`).join("")}
    </select>`;

  document.getElementById("sectorTypeFilter").addEventListener("change", (e) => {
    applySectorFilter(e.target.value);
  });
}

function applySectorFilter(category) {
  const grid = document.getElementById("sectorGrid");
  const posts = category ? sectorAllPosts.filter(p => p.category === category) : sectorAllPosts;

  grid.innerHTML = posts.length
    ? posts.map(cardHtml).join("")
    : `<div class="empty-state" style="grid-column:1/-1;">No updates found${category ? ` for "${escapeHtml(CATEGORY_META[category].label)}"` : ""}.</div>`;

  renderListTable(posts, `Latest ${sectorKey} List ${CURRENT_YEAR}`);

  setJsonLd("ld-itemlist", {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE.url}/post.html?id=${encodeURIComponent(p.id)}`,
      name: p.title
    }))
  });
}

document.addEventListener("DOMContentLoaded", renderSectorPage);
