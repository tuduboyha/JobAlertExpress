// Homepage rendering: category preview sections + category filter chips.
// "View All" on each section links out to category.html?cat=... (see category.js).

const PREVIEW_COUNT = 6;

function postsByCategory(category) {
  return sortedPosts().filter(p => p.category === category);
}

// A job counts as still open as long as it has no lastDate, or that
// lastDate hasn't passed yet (both are "YYYY-MM-DD" so a plain string
// comparison works).
function isStillOpen(post) {
  const today = new Date().toISOString().slice(0, 10);
  return !post.lastDate || post.lastDate >= today;
}

function renderSection(category) {
  const meta = CATEGORY_META[category];
  const grid = document.querySelector(`.grid[data-category="${category}"]`);
  const countEl = document.querySelector(`[data-count="${category}"]`);
  if (!grid) return;

  let posts = postsByCategory(category);

  // Homepage's "Latest Jobs" cards are a curated highlight, not the full
  // list — only jobs marked popular: true (set manually in data/posts.js,
  // since a static site can't track real visitor counts) with an
  // application window that hasn't closed yet.
  if (category === "job") {
    posts = posts.filter(p => p.popular && isStillOpen(p));
  }

  const visible = posts.slice(0, PREVIEW_COUNT);

  grid.innerHTML = posts.length
    ? visible.map(cardHtml).join("")
    : `<div class="empty-state">${category === "job" ? "No popular jobs with an open application window right now." : `No posts yet in ${meta.label}. Add one in data/posts.js.`}</div>`;

  if (countEl) countEl.textContent = posts.length;
}

function renderAllSections() {
  Object.keys(CATEGORY_META).forEach(renderSection);
}

// Compact "Recruitment Name / Date" table below each homepage section's
// card grid — showing every post in that category (not just the preview
// cards above it), split into a left and right column table. Job posts
// show their application Last Date; admit card/result/syllabus posts
// don't have a meaningful deadline, so they show Posted Date instead.
function renderHomeCategoryList(category, containerId) {
  const section = document.getElementById(containerId);
  if (!section) return;

  const posts = postsByCategory(category);
  if (!posts.length) {
    section.innerHTML = `<div class="empty-state">No posts yet. Add one in data/posts.js.</div>`;
    return;
  }

  const dateLabel = category === "job" ? "Last Date" : "Posted Date";
  const dateCell = (p) => category === "job"
    ? `<td${p.lastDate ? ' class="text-danger"' : ""}>${p.lastDate ? formatDate(p.lastDate) : "—"}</td>`
    : `<td>${formatDate(p.postedDate)}</td>`;

  const mid = Math.ceil(posts.length / 2);
  const columns = [posts.slice(0, mid), posts.slice(mid)];

  const tableHtml = (col) => `
    <div class="info-table-wrap">
      <table class="info-table">
        <thead><tr><th>Recruitment Name</th><th>${dateLabel}</th></tr></thead>
        <tbody>${col.map(p => `
          <tr>
            <td><a href="post.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.title)}</a></td>
            ${dateCell(p)}
          </tr>`).join("")}</tbody>
      </table>
    </div>`;

  section.innerHTML = `
    <div class="info-table-block">
      <h3 class="info-table-heading">${CATEGORY_LIST_HEADINGS[category]} ${CURRENT_YEAR}</h3>
      <div class="homejobs-columns">
        ${tableHtml(columns[0])}
        ${tableHtml(columns[1])}
      </div>
    </div>`;
}

function renderAllHomeCategoryLists() {
  renderHomeCategoryList("job", "categoryListSection");
  renderHomeCategoryList("admitcard", "admitCardListSection");
  renderHomeCategoryList("result", "resultsListSection");
  renderHomeCategoryList("syllabus", "syllabusListSection");
}

// Horizontally-scrolling "Browse by Category" slider — one tile per sector
// (SSC, Railway, Banking, Police, Technical, ...) found in data/posts.js.
// Clicking a tile deep-links to latest-jobs.html?category=<sector>, which
// category.js reads on load to pre-apply that filter.
function renderCategorySlider() {
  const track = document.getElementById("categorySliderTrack");
  if (!track) return;

  track.innerHTML = orderedSectors().map(s => {
    const meta = sectorMeta(s);
    return `
      <a class="category-slide" href="${slugify(s)}.html" style="background:${meta.gradient}">
        <span class="category-slide-icon">${meta.icon}</span>
        <span class="category-slide-label">${escapeHtml(s)}</span>
      </a>`;
  }).join("");
}

function initCategoryChips() {
  const chips = document.querySelectorAll(".chip[data-filter]");
  const sections = document.querySelectorAll(".cat-section");

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const filter = chip.dataset.filter;
      chips.forEach(c => c.classList.toggle("active", c === chip));
      sections.forEach(sec => {
        sec.style.display = (filter === "all" || sec.dataset.section === filter) ? "" : "none";
      });
      if (filter !== "all") {
        document.getElementById(filter)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderAllSections();
  initCategoryChips();
  renderCategorySlider();
  renderAllHomeCategoryLists();

  const followWidget = document.getElementById("homeFollowWidget");
  if (followWidget) followWidget.innerHTML = joinChannelsHtml();
});
