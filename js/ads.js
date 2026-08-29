// Fills every <div data-ad-slot="key"></div> on the page using the
// single config in data/ads.js. Add/edit ad content there, not here.

const AD_SIZES = {
  leaderboard: { w: 970, h: 90 },
  banner:      { w: 728, h: 90 },
  rectangle:   { w: 300, h: 250 },
  mobile:      { w: 320, h: 50 }
};

function adSlotHtml(key) {
  const cfg = AD_SLOTS[key];
  if (!cfg || !cfg.enabled) return "";

  const size = AD_SIZES[cfg.size] || AD_SIZES.banner;

  if (cfg.type === "image" && cfg.imageUrl) {
    return `
      <a class="ad-slot ad-image" style="max-width:${size.w}px;" href="${cfg.linkUrl || '#'}" target="_blank" rel="noopener sponsored">
        <img src="${cfg.imageUrl}" alt="Advertisement">
      </a>`;
  }

  if (cfg.type === "code" && cfg.code) {
    return `<div class="ad-slot" style="max-width:${size.w}px;">${cfg.code}</div>`;
  }

  return `
    <div class="ad-slot ad-placeholder" style="max-width:${size.w}px; min-height:${size.h}px;">
      <span>${escapeHtml(cfg.label || "Advertisement")}</span>
      <small>${size.w} &times; ${size.h}</small>
    </div>`;
}

function renderAdSlots() {
  document.querySelectorAll("[data-ad-slot]").forEach(el => {
    const key = el.dataset.adSlot;
    const cfg = AD_SLOTS[key];
    el.innerHTML = adSlotHtml(key);
    el.style.display = (cfg && cfg.enabled) ? "" : "none";
  });
}

document.addEventListener("DOMContentLoaded", renderAdSlots);
