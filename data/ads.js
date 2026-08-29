/*
  ============================================================
  AD SETTINGS — the ONE place that controls every ad on the site
  ============================================================
  Every ad box across the site (homepage, category pages, post
  pages) is just an empty <div data-ad-slot="..."></div> in the
  HTML. This file decides what actually shows up inside each one.
  Edit this file only — you never need to touch any .html file
  to add, change, resize, or turn off an ad.

  Each slot below supports:
    enabled  : true/false — show or hide this slot everywhere it appears
    type     : "placeholder" | "image" | "code"
                 "placeholder" - shows a plain "Advertisement" box
                                  (use this until you have a real ad)
                 "image"       - shows a clickable banner image
                                  (set imageUrl + linkUrl)
                 "code"        - shows raw HTML/JS, e.g. a Google
                                  AdSense or affiliate ad snippet
                                  (set code)
    label    : text shown on the placeholder box
    imageUrl : banner image URL (type "image")
    linkUrl  : where the banner links to (type "image")
    code     : raw HTML/JS ad code (type "code")
    size     : "leaderboard" (970x90) | "banner" (728x90) |
               "rectangle" (300x250) | "mobile" (320x50)

  SLOTS AND WHERE THEY APPEAR
  ------------------------------------------------------------
  homeTop        - homepage, right below the hero banner
  homeMiddle     - homepage, between the Admit Card and Results sections
  homeBottom     - homepage, above the footer
  categoryTop     - top of every category page (Jobs/Admit Card/Results/Syllabus)
  categorySidebar - latest-jobs.html, right sidebar below the "Follow Us" box
  postInContent   - post detail page, inside the article content
  postSidebar     - post detail page, top of the right sidebar
  ============================================================
*/

// Dummy sample ad creatives (linking to https://tuduinfotech.com) used below
// until real ad code/images are ready. Safe to delete once you plug in real ads.
const DUMMY_AD_WIDE = `
  <a href="https://tuduinfotech.com" target="_blank" rel="noopener sponsored" style="display:flex; align-items:center; gap:14px; width:100%; min-height:90px; box-sizing:border-box; text-decoration:none; background:linear-gradient(135deg,#4f46e5,#7c3aed); color:#fff; border-radius:10px; padding:14px 20px;">
    <span style="flex-shrink:0; width:42px; height:42px; border-radius:9px; background:rgba(255,255,255,.18); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.05rem;">TI</span>
    <span style="flex:1; min-width:0;">
      <span style="display:block; font-weight:700; font-size:1rem; line-height:1.25;">TuduInfotech</span>
      <span style="display:block; font-size:.8rem; opacity:.92; margin-top:2px;">Technical Knowledge &amp; WhatsApp Channel Earning Tips</span>
    </span>
    <span style="flex-shrink:0; background:#fff; color:#4f46e5; font-weight:700; font-size:.8rem; padding:9px 18px; border-radius:20px; white-space:nowrap;">Visit Site →</span>
  </a>`;

const DUMMY_AD_RECTANGLE = `
  <a href="https://tuduinfotech.com" target="_blank" rel="noopener sponsored" style="display:flex; flex-direction:column; align-items:center; justify-content:center; gap:12px; width:100%; min-height:250px; box-sizing:border-box; text-decoration:none; background:linear-gradient(160deg,#4f46e5,#7c3aed); color:#fff; border-radius:12px; padding:28px 20px; text-align:center;">
    <span style="width:56px; height:56px; border-radius:14px; background:rgba(255,255,255,.18); display:flex; align-items:center; justify-content:center; font-weight:800; font-size:1.3rem;">TI</span>
    <span style="font-weight:700; font-size:1.15rem;">TuduInfotech</span>
    <span style="font-size:.85rem; opacity:.92; line-height:1.5;">Technical Knowledge &amp; WhatsApp Channel Earning Tips</span>
    <span style="background:#fff; color:#4f46e5; font-weight:700; font-size:.85rem; padding:10px 22px; border-radius:22px;">Visit Site →</span>
  </a>`;

const AD_SLOTS = {
  homeTop:       { enabled: true, type: "code", code: DUMMY_AD_WIDE, size: "leaderboard" },
  homeMiddle:    { enabled: true, type: "code", code: DUMMY_AD_WIDE, size: "banner" },
  homeBottom:    { enabled: true, type: "code", code: DUMMY_AD_WIDE, size: "banner" },
  categoryTop:     { enabled: true, type: "code", code: DUMMY_AD_WIDE, size: "banner" },
  categorySidebar: { enabled: true, type: "code", code: DUMMY_AD_RECTANGLE, size: "rectangle" },
  postInContent:   { enabled: true, type: "code", code: DUMMY_AD_WIDE, size: "banner" },
  postSidebar:     { enabled: true, type: "code", code: DUMMY_AD_RECTANGLE, size: "rectangle" }
};
