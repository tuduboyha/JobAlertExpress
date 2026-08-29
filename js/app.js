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

// Compact "Recruitment Name / Last Date" table below the homepage's
// "Latest Jobs" section — showing every job (not just the preview cards
// above it), split into a left and right column table, each with its own
// "Last Date" column header instead of repeating the label per row.
function renderHomeJobsList() {
  const section = document.getElementById("categoryListSection");
  if (!section) return;

  const posts = postsByCategory("job");
  if (!posts.length) {
    section.innerHTML = `<div class="empty-state">No jobs yet. Add one in data/posts.js.</div>`;
    return;
  }

  const mid = Math.ceil(posts.length / 2);
  const columns = [posts.slice(0, mid), posts.slice(mid)];

  const tableHtml = (col) => `
    <div class="info-table-wrap">
      <table class="info-table">
        <thead><tr><th>Recruitment Name</th><th>Last Date</th></tr></thead>
        <tbody>${col.map(p => `
          <tr>
            <td><a href="post.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.title)}</a></td>
            <td${p.lastDate ? ' class="text-danger"' : ""}>${p.lastDate ? formatDate(p.lastDate) : "—"}</td>
          </tr>`).join("")}</tbody>
      </table>
    </div>`;

  section.innerHTML = `
    <div class="info-table-block">
      <h3 class="info-table-heading">Latest Govt Jobs List ${CURRENT_YEAR}</h3>
      <div class="homejobs-columns">
        ${tableHtml(columns[0])}
        ${tableHtml(columns[1])}
      </div>
    </div>`;
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
  renderHomeJobsList();
});
