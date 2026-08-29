// Renders the full listing of one category. Each dedicated category page
// (latest-jobs.html, admit-card.html, results.html, syllabus.html) sets
// <body data-category="job|admitcard|result|syllabus"> and this script
// fills in the heading, count, filter bar and grid for that category.

let categoryAllPosts = [];
let categoryMeta = null;
let categoryKey = null;

function renderCategoryPage() {
  const cat = document.body.dataset.category;
  const meta = CATEGORY_META[cat];
  const grid = document.getElementById("categoryGrid");

  if (!meta) {
    document.title = "Category not found — JobAlertExpress";
    grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;">Unknown category. <a href="index.html">Go back home →</a></div>`;
    return;
  }

  categoryKey = cat;
  categoryMeta = meta;
  categoryAllPosts = sortedPosts().filter(p => p.category === cat);

  document.getElementById("categoryHeading").textContent = meta.label;
  document.getElementById("categoryTitleText").textContent = `${meta.label} ${CURRENT_YEAR}`;
  document.getElementById("categoryBar").style.background = `var(--${meta.color})`;

  renderCategoryFilterBar(categoryAllPosts);

  // Deep link support — latest-jobs.html?category=SSC (used by the homepage
  // "Browse by Category" slider) pre-applies that filter on load.
  const requestedLabel = new URLSearchParams(location.search).get("category") || "";
  const select = document.getElementById("categoryOrgFilter");
  if (select && requestedLabel && [...select.options].some(o => o.value === requestedLabel)) {
    select.value = requestedLabel;
  }
  applyCategoryFilter(select && select.value === requestedLabel ? requestedLabel : "");

  setPageSeo({
    title: `${meta.label} ${CURRENT_YEAR} — JobAlertExpress`,
    description: `${categoryAllPosts.length} latest ${meta.label.toLowerCase()} ${CURRENT_YEAR} updates on JobAlertExpress.`,
    path: `/${meta.page}`
  });
}

// Dropdown that filters the posts below by Category (sector). Lives in
// #categoryFilterBar if the page has that container (every category page).
function renderCategoryFilterBar(posts) {
  const bar = document.getElementById("categoryFilterBar");
  if (!bar) return;

  const labels = [...new Set(posts.map(postCategoryLabel))].sort();
  if (labels.length < 2) { bar.innerHTML = ""; return; }

  bar.innerHTML = `
    <label class="category-filter-label" for="categoryOrgFilter">Filter by Category</label>
    <select id="categoryOrgFilter" class="category-filter-select">
      <option value="">All Categories</option>
      ${labels.map(l => `<option value="${escapeHtml(l)}">${escapeHtml(l)}</option>`).join("")}
    </select>`;

  document.getElementById("categoryOrgFilter").addEventListener("change", (e) => {
    applyCategoryFilter(e.target.value);
  });
}

function applyCategoryFilter(label) {
  const grid = document.getElementById("categoryGrid");
  const posts = label ? categoryAllPosts.filter(p => postCategoryLabel(p) === label) : categoryAllPosts;

  document.getElementById("categoryCount").textContent = posts.length;

  grid.innerHTML = posts.length
    ? posts.map(cardHtml).join("")
    : `<div class="empty-state" style="grid-column:1/-1;">No posts found${label ? ` for "${escapeHtml(label)}"` : ""}.</div>`;

  renderListTable(posts, `${CATEGORY_LIST_HEADINGS[categoryKey] || "Latest List"} ${CURRENT_YEAR}`);

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

document.addEventListener("DOMContentLoaded", renderCategoryPage);
