// Renders a single post on post.html based on the ?id= query parameter.

function getIdFromUrl() {
  return new URLSearchParams(window.location.search).get("id");
}

// Icon-badge heading used at the top of every card/section on the detail page.
const HEADING_ICONS = {
  toc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/><circle cx="5" cy="6" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="5" cy="18" r="1"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.6" x2="15.4" y2="6.4"/><line x1="8.6" y1="13.4" x2="15.4" y2="17.6"/></svg>',
  follow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a1.9 1.9 0 0 1-3.4 0"/></svg>',
  links: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5"/></svg>',
  howto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><path d="M9 12.5 11 14.5 15.5 10"/></svg>',
  selection: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11"/><path d="M9 12h11"/><path d="M9 18h11"/><path d="M4 6l1 1 2-2"/><path d="M4 12l1 1 2-2"/><path d="M4 18l1 1 2-2"/></svg>',
  examprep: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6.5C10.5 5 7.8 4.5 4 5v13c3.8-.5 6.5 0 8 1.5 1.5-1.5 4.2-2 8-1.5V5c-3.8-.5-6.5 0-8 1.5Z"/><path d="M12 6.5V20"/></svg>',
  faq: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9.2a2.5 2.5 0 0 1 4.8 1c0 1.5-2.3 2-2.3 3.3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  jobs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',
  admitcard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="1.8"/><line x1="14" y1="9" x2="18" y2="9"/><line x1="14" y1="13" x2="18" y2="13"/><line x1="6" y1="15.5" x2="11" y2="15.5"/></svg>',
  results: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5"/></svg>',
  related: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>'
};

// Heading text per category for the "Related ..." section on the detail page.
const RELATED_LABELS = { job: "Related Jobs", admitcard: "Related Admit Cards", result: "Related Results", syllabus: "Related Syllabus" };

// Short "{Org} {Type} {Year}" label — e.g. "SSC Recruitment 2026",
// "RRB Admit Card 2026" — used to prefix every section heading on the
// detail page, matching the naming convention used by sites like
// FreeJobAlert (e.g. "TMB Recruitment 2026 Overview", "TMB Recruitment
// 2026 Important Dates", "How to Apply for TMB Recruitment 2026").
const CATEGORY_LABEL_WORD = { job: "Recruitment", admitcard: "Admit Card", result: "Result", syllabus: "Syllabus" };

function postShortLabel(post) {
  const org = orgShortName(post.organization);
  const year = (post.postedDate || "").slice(0, 4);
  const typeWord = CATEGORY_LABEL_WORD[post.category] || "";
  return [org, typeWord, year].filter(Boolean).join(" ");
}

// Posts related to the current one: same organization first, then same
// category, newest first, excluding the post itself.
function relatedPosts(post, limit = 4) {
  const others = sortedPosts().filter(p => p.id !== post.id && p.category === post.category);
  const sameOrg = others.filter(p => p.organization === post.organization);
  const rest = others.filter(p => p.organization !== post.organization);
  return [...sameOrg, ...rest].slice(0, limit);
}

function cardHeadingHtml(iconKey, text) {
  return `
    <h3 class="card-heading">
      <span class="card-heading-icon ${iconKey}">${HEADING_ICONS[iconKey] || ""}</span>
      ${escapeHtml(text)}
    </h3>`;
}

function renderDetail() {
  const wrap = document.getElementById("detailWrap");
  const id = getIdFromUrl();
  const post = id ? getPostById(id) : null;

  if (!post) {
    wrap.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1;">
        Post not found. It may have been removed. <a href="index.html">Go back home →</a>
      </div>`;
    document.title = "Post not found — JobAlertExpress";
    setMetaTag("name", "robots", "noindex, follow");
    return;
  }

  const meta = CATEGORY_META[post.category] || {};
  const label = postShortLabel(post);
  const postUrl = `/post.html?id=${encodeURIComponent(post.id)}`;
  setPageSeo({
    title: `${post.title} — JobAlertExpress`,
    description: post.shortDesc || post.title,
    path: postUrl,
    image: post.featuredImage || "",
    type: "article"
  });
  document.getElementById("breadcrumbCategory").textContent = meta.label || post.category;
  document.getElementById("breadcrumbCategory").href = meta.page || "index.html";

  const paragraphs = post.description
    .split("\n\n")
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join("");

  const datesRows = (post.importantDates || [])
    .map(d => {
      const isLastDate = /last date/i.test(d.label);
      return `<tr><td>${escapeHtml(d.label)}</td><td${isLastDate ? ' class="text-danger"' : ''}>${escapeHtml(d.value)}</td></tr>`;
    })
    .join("");

  const related = relatedPosts(post);
  const faqs = (post.faqs && post.faqs.length) ? post.faqs : defaultFaqs(post);
  const howToApply = (post.howToApply && post.howToApply.steps && post.howToApply.steps.length) ? post.howToApply : defaultHowToApply(post);
  const selectionProcess = (post.selectionProcess && post.selectionProcess.steps && post.selectionProcess.steps.length) ? post.selectionProcess : defaultSelectionProcess(post);
  const examPreparation = (post.examPreparation && post.examPreparation.tips && post.examPreparation.tips.length) ? post.examPreparation : defaultExamPreparation(post);

  // Each table normally renders inline in the article. A table with
  // section: "selection-process" or "how-to-apply" instead renders inside
  // that card, right after its steps.
  const infoTables = (post.tables || []).map((t, i) => ({ ...t, _id: `info-table-${i}` }));
  const articleTables = infoTables.filter(t => t.section !== "selection-process" && t.section !== "how-to-apply");
  const selectionTables = infoTables.filter(t => t.section === "selection-process");
  const howToApplyTables = infoTables.filter(t => t.section === "how-to-apply");

  function tableBlockHtml(t) {
    const theadHtml = `<tr>${t.columns.map(c => `<th>${escapeHtml(c)}</th>`).join("")}</tr>`;
    const tbodyHtml = t.rows.map(r => `<tr>${r.map(cell => `<td>${escapeHtml(String(cell))}</td>`).join("")}</tr>`).join("");
    return `
      <div class="info-table-block" id="${t._id}">
        <h3 class="info-table-heading">${escapeHtml(t.title)}</h3>
        <div class="info-table-wrap">
          <table class="info-table">
            <thead>${theadHtml}</thead>
            <tbody>${tbodyHtml}</tbody>
          </table>
        </div>
      </div>`;
  }

  const infoTablesHtml = articleTables.map(tableBlockHtml).join("");
  const selectionTablesHtml = selectionTables.map(tableBlockHtml).join("");
  const howToApplyTablesHtml = howToApplyTables.map(tableBlockHtml).join("");

  const tocItems = [{ id: "overview", label: "Overview" }];
  if (datesRows) tocItems.push({ id: "important-dates", label: "Important Dates" });
  articleTables.forEach(t => tocItems.push({ id: t._id, label: t.title }));
  tocItems.push({ id: "how-to-apply", label: "How to Apply" });
  howToApplyTables.forEach(t => tocItems.push({ id: t._id, label: t.title }));
  if (selectionProcess) {
    tocItems.push({ id: "selection-process", label: "Selection Process" });
    selectionTables.forEach(t => tocItems.push({ id: t._id, label: t.title }));
  }
  if (examPreparation) tocItems.push({ id: "exam-preparation", label: "Exam Preparation" });
  tocItems.push({ id: "faq", label: "Frequently Asked Questions" });
  if (related.length) tocItems.push({ id: "related-jobs", label: RELATED_LABELS[post.category] || "Related Posts" });

  const tocHtml = `
    <div class="toc-box" id="tocBox">
      <button type="button" class="toc-toggle" id="tocToggle">
        <h3>${HEADING_ICONS.toc}Table of Contents</h3>
        <svg class="toc-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <ol>${tocItems.map(t => `<li><a href="#${t.id}">${escapeHtml(t.label)}</a></li>`).join("")}</ol>
    </div>`;

  const shareOverlayHtml = shareOverlayBarHtml(post);

  const faqHtml = `
    <div class="detail-card faq-section" id="faq">
      ${cardHeadingHtml("faq", `${label} - FAQs`)}
      ${faqs.map(f => `
        <details class="faq-item">
          <summary>${escapeHtml(f.q)}</summary>
          <p>${escapeHtml(f.a)}</p>
        </details>`).join("")}
    </div>`;

  const relatedJobsHtml = related.length ? `
    <div class="detail-card" id="related-jobs">
      ${cardHeadingHtml("related", RELATED_LABELS[post.category] || "Related Posts")}
      <div class="grid related-grid">${related.map(cardHtml).join("")}</div>
    </div>` : "";

  const howToApplyHtml = `
    <div class="detail-card howto-section" id="how-to-apply">
      ${cardHeadingHtml("howto", `How to Apply for ${label}`)}
      ${howToApply.intro ? `<p class="howto-intro">${escapeHtml(howToApply.intro)}</p>` : ""}
      <ol class="howto-steps">
        ${howToApply.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}
      </ol>
      ${howToApplyTablesHtml}
    </div>`;

  const selectionProcessHtml = selectionProcess ? `
    <div class="detail-card howto-section" id="selection-process">
      ${cardHeadingHtml("selection", `${label} Selection Process`)}
      ${selectionProcess.intro ? `<p class="howto-intro">${escapeHtml(selectionProcess.intro)}</p>` : ""}
      <ol class="howto-steps">
        ${selectionProcess.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}
      </ol>
      ${selectionTablesHtml}
    </div>` : "";

  const examPreparationHtml = examPreparation ? `
    <div class="detail-card howto-section" id="exam-preparation">
      ${cardHeadingHtml("examprep", `${label} Exam Preparation`)}
      ${examPreparation.intro ? `<p class="howto-intro">${escapeHtml(examPreparation.intro)}</p>` : ""}
      <ul class="howto-steps tips-list">
        ${examPreparation.tips.map(tip => `<li>${escapeHtml(tip)}</li>`).join("")}
      </ul>
    </div>` : "";

  wrap.innerHTML = `
    <div class="left-sidebar">
      ${tocHtml}
    </div>

    <div class="main-col">
      <article class="detail-card">
        ${post.featuredImage ? `<div class="detail-banner"><img src="${post.featuredImage}" alt="${escapeHtml(post.title)}"></div>` : ""}
        <span class="badge ${post.category}">${meta.badge || post.category}</span>
        <h1>${escapeHtml(post.title)}</h1>
        <div class="org">${escapeHtml(post.organization)} &middot; Posted ${formatDate(post.postedDate)}</div>

        <div class="quick-info-block">
          <table class="dates-table">
            <tr><td>Organization</td><td>${escapeHtml(post.organization)}</td></tr>
            <tr><td>Vacancies</td><td>${escapeHtml(post.vacancies || "—")}</td></tr>
            <tr><td>Qualification</td><td>${escapeHtml(post.qualification || "—")}</td></tr>
            ${post.lastDate ? `<tr><td>Last Date</td><td class="text-danger">${formatDate(post.lastDate)}</td></tr>` : ""}
          </table>
        </div>

        <div class="desc" id="overview">
          <h3 class="info-table-heading">${escapeHtml(label)} Overview</h3>
          ${paragraphs}
        </div>
        ${datesRows ? `
        <div class="info-table-block" id="important-dates">
          <h3 class="info-table-heading">${escapeHtml(label)} Important Dates</h3>
          <div class="info-table-wrap">
            <table class="info-table">
              <thead><tr><th>Event</th><th>Date</th></tr></thead>
              <tbody>${datesRows}</tbody>
            </table>
          </div>
        </div>` : ""}

        ${infoTablesHtml}

        <div data-ad-slot="postInContent"></div>
      </article>

      <div class="side-card">
        ${cardHeadingHtml("links", `${label} Important Links`)}
        <a class="btn primary" href="${post.applyLink || '#'}" target="_blank" rel="noopener">Apply Online</a>
        <a class="btn" href="${post.officialWebsite || post.applyLink || '#'}" target="_blank" rel="noopener">Official Website</a>
        <a class="btn" href="${post.notificationLink || '#'}" target="_blank" rel="noopener">Download Notification</a>
        <a class="btn" href="index.html">← Back to Home</a>
      </div>

      ${howToApplyHtml}

      ${selectionProcessHtml}

      ${examPreparationHtml}

      ${faqHtml}

      ${relatedJobsHtml}
    </div>

    <aside>
      <div data-ad-slot="postSidebar"></div>

      <div class="side-card">
        ${cardHeadingHtml("follow", "Follow Us")}
        ${joinChannelsHtml()}
      </div>
      ${sideWidget("job", "jobs", "Latest Jobs", post.id)}
      ${sideWidget("admitcard", "admitcard", "Admit Card Download", post.id)}
      ${sideWidget("result", "results", "Results", post.id)}
    </aside>

    ${shareOverlayHtml}
  `;

  initShareButtons();
  initTocToggle();
  renderAdSlots();
  injectPostJsonLd(post, meta, faqs);
}

// Structured data (schema.org) for this post — helps Google Jobs rich results
// and gives AI/answer engines (ChatGPT, Perplexity, AI Overviews, etc.) clean,
// machine-readable facts and Q&A to cite directly ("Generative Engine Optimization").
function injectPostJsonLd(post, meta, faqs) {
  const url = `${SITE.url}/post.html?id=${encodeURIComponent(post.id)}`;

  setJsonLd("ld-breadcrumb", {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE.url}/index.html` },
      { "@type": "ListItem", position: 2, name: meta.label || post.category, item: `${SITE.url}/${meta.page || "index.html"}` },
      { "@type": "ListItem", position: 3, name: post.title, item: url }
    ]
  });

  if (faqs && faqs.length) {
    setJsonLd("ld-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      }))
    });
  }

  if (post.category === "job") {
    setJsonLd("ld-jobposting", {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: post.title,
      description: post.description,
      datePosted: post.postedDate,
      validThrough: post.lastDate ? `${post.lastDate}T23:59:59` : undefined,
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: post.organization,
        sameAs: post.applyLink || undefined
      },
      jobLocation: {
        "@type": "Place",
        address: { "@type": "PostalAddress", addressCountry: "IN" }
      },
      identifier: {
        "@type": "PropertyValue",
        name: post.organization,
        value: post.id
      },
      directApply: true
    });
  } else {
    const existing = document.getElementById("ld-jobposting");
    if (existing) existing.remove();
  }
}

// Collapses the Table of Contents behind a tap on mobile (see the max-width:960px
// rule in CSS); the toggle itself has no effect on desktop, where the TOC stays
// always expanded in the sticky left sidebar.
function initTocToggle() {
  const toggle = document.getElementById("tocToggle");
  const box = document.getElementById("tocBox");
  if (!toggle || !box) return;
  toggle.addEventListener("click", () => box.classList.toggle("open"));
}

// Sensible default FAQ, used whenever a post doesn't define its own `faqs` array.
function defaultFaqs(post) {
  const org = post.organization;
  switch (post.category) {
    case "job":
      return [
        { q: `What is the last date to apply for ${post.title}?`, a: post.lastDate ? `The last date to apply online is ${formatDate(post.lastDate)}. Please apply well before the deadline.` : "Please refer to the official notification for the exact application deadline." },
        { q: "How many vacancies are there?", a: post.vacancies && post.vacancies !== "—" ? `A total of ${post.vacancies} vacancies have been announced.` : "Refer to the official notification for the detailed vacancy breakup." },
        { q: "What is the eligibility / qualification required?", a: post.qualification && post.qualification !== "—" ? `Candidates should have: ${post.qualification}. Check the official notification for post-wise eligibility.` : "Refer to the official notification for detailed eligibility criteria." },
        { q: "How can I apply online?", a: `You can apply online through the official ${org} website using the Apply / Download link on this page.` }
      ];
    case "admitcard":
      return [
        { q: "How do I download my admit card?", a: `Use the Apply / Download link on this page to reach the official ${org} portal, then log in with your registration number and date of birth to download the admit card.` },
        { q: "What documents should I carry to the exam center?", a: "Carry a printed copy of the admit card along with a valid original photo ID proof (Aadhaar Card, PAN Card, Voter ID, etc.)." },
        { q: "What if there is an error on my admit card?", a: `Contact the ${org} helpdesk or regional office immediately for correction before the exam date.` }
      ];
    case "result":
      return [
        { q: "How can I check my result?", a: `Visit the official ${org} website and use your registration number / roll number to check your result using the link on this page.` },
        { q: "What is the next step after the result?", a: "Shortlisted candidates are usually called for the next stage — document verification, skill test, or interview — as per the official schedule." },
        { q: "Where can I find the cutoff marks?", a: "Category-wise cutoff marks are usually published along with the result on the official website." }
      ];
    case "syllabus":
      return [
        { q: "Where can I download the full syllabus PDF?", a: "Use the Official Notification link on this page to download the detailed syllabus PDF." },
        { q: "Is there negative marking in this exam?", a: `Marking scheme and negative marking details (if any) are mentioned in the official ${org} notification.` },
        { q: "Which topics carry the most weightage?", a: "Refer to the topic-wise weightage table in the official syllabus PDF to plan your preparation." }
      ];
    default:
      return [];
  }
}

// Sensible default "How to Apply" steps, used whenever a post doesn't define its own `howToApply`.
function defaultHowToApply(post) {
  const org = post.organization;
  switch (post.category) {
    case "job":
      return {
        intro: `Follow these steps to apply for ${post.title}:`,
        steps: [
          `Visit the official ${org} website using the Apply Online link above.`,
          "Read the official notification carefully and check that you meet the eligibility criteria.",
          "Register / log in and fill out the online application form with accurate details.",
          "Upload the required photograph, signature and supporting documents as specified.",
          "Pay the application fee, if applicable, through the available online payment options.",
          "Review all entered details carefully, then submit the application before the last date.",
          "Save your registration number and a copy of the submitted application for future reference."
        ]
      };
    case "admitcard":
      return {
        intro: `Follow these steps to download your admit card for ${post.title}:`,
        steps: [
          `Visit the official ${org} website using the Apply Online link above.`,
          "Find the admit card / hall ticket download link for this exam.",
          "Log in using your registration number / roll number and date of birth.",
          "Download and print a clear copy of your admit card.",
          "Carry the printed admit card along with a valid original photo ID to the exam centre."
        ]
      };
    case "result":
      return {
        intro: `Follow these steps to check your result for ${post.title}:`,
        steps: [
          `Visit the official ${org} website using the Apply Online link above.`,
          "Find the result / scorecard link for this exam.",
          "Enter your registration number / roll number and date of birth as asked.",
          "View and download your result or scorecard, and save a copy for your records."
        ]
      };
    case "syllabus":
      return {
        intro: `Follow these steps to get the full syllabus for ${post.title}:`,
        steps: [
          `Visit the official ${org} website using the Official Notification link below.`,
          "Locate and download the detailed syllabus / exam pattern PDF.",
          "Go through the topic-wise weightage and marking scheme to plan your preparation."
        ]
      };
    default:
      return { intro: "", steps: [`Use the Apply Online link above to reach the official ${org} website.`] };
  }
}

// Sensible default "Selection Process" steps, used whenever a post doesn't define its own
// `selectionProcess`. Only shown for job postings — it doesn't apply to admit cards, results
// or syllabus pages, so this returns null for those categories (post.selectionProcess can
// still override that on a per-post basis).
function defaultSelectionProcess(post) {
  if (post.category !== "job") return null;
  return {
    intro: `The typical selection process for ${post.title} is:`,
    steps: [
      "Online Application — submit the application form along with the required documents and fee before the last date.",
      "Written Examination / CBT — shortlisted or all eligible candidates appear for a written test as per the official notification.",
      "Interview / Skill Test / Document Verification — candidates who qualify the written exam are called for the next stage, as applicable for this post.",
      "Final Merit List — the final selection is based on overall performance across the stages above, as per the official notification."
    ]
  };
}

// Sensible default "Exam Preparation" tips, used whenever a post doesn't define its own
// `examPreparation`. Only shown for job postings with a written exam — returns null for
// other categories (post.examPreparation can still override that on a per-post basis).
function defaultExamPreparation(post) {
  if (post.category !== "job") return null;
  return {
    intro: `A few tips to help you prepare for ${post.title}:`,
    tips: [
      "Read the official notification and exam pattern carefully so you know the exact syllabus, marking scheme and time limits.",
      "Revise the core fundamentals of your subject thoroughly, since most exams test conceptual clarity over rote memorisation.",
      "Practice previous years' question papers and full-length mock tests to get comfortable with the difficulty level and time pressure.",
      "If there is negative marking, avoid random guessing — attempt only the questions you are reasonably confident about.",
      "Keep up with general awareness relevant to your field, as it often helps in both the written exam and any interview stage.",
      "Revise your weakest topics closer to the exam date, and get adequate rest the night before."
    ]
  };
}

// Fixed pill-shaped bar, floating bottom-center of the viewport, for sharing the post.
function shareOverlayBarHtml(post) {
  const url = window.location.href;
  const title = post.title;
  const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + " — " + url)}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const copyIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.5-1.5"/></svg>';

  return `
    <div class="share-overlay">
      <span class="share-overlay-label">${HEADING_ICONS.share}<span>Share</span></span>
      <a class="share-overlay-btn whatsapp" href="${waUrl}" target="_blank" rel="noopener" aria-label="Share on WhatsApp" title="Share on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5l-.7-1.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"/></svg>
      </a>
      <a class="share-overlay-btn facebook" href="${fbUrl}" target="_blank" rel="noopener" aria-label="Share on Facebook" title="Share on Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>
      </a>
      <a class="share-overlay-btn telegram" href="${tgUrl}" target="_blank" rel="noopener" aria-label="Share on Telegram" title="Share on Telegram">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 3 2.5 10.7c-1 .4-1 1.7.1 2l4.6 1.5 1.8 5.5c.3.9 1.4 1.1 2 .4l2.6-2.7 4.8 3.5c.9.6 2.1.1 2.3-1L23 4.4c.2-1.1-.9-2-2-1.4ZM8.5 14.7l9-6.5c.3-.2.6.2.3.4l-7.4 7-.3 3.2Z"/></svg>
      </a>
      <button class="share-overlay-btn copy" id="copyLinkBtn" type="button" aria-label="Copy link" title="Copy link">${copyIcon}</button>
    </div>`;
}

function initShareButtons() {
  const btn = document.getElementById("copyLinkBtn");
  if (!btn) return;
  const defaultIcon = btn.innerHTML;
  const checkIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      btn.innerHTML = checkIcon;
      btn.classList.add("copied");
      setTimeout(() => { btn.innerHTML = defaultIcon; btn.classList.remove("copied"); }, 2000);
    } catch (e) {
      // Clipboard API unavailable — leave the icon as-is; the URL is still visible in the address bar.
    }
  });
}

function sideWidget(category, iconKey, heading, excludeId, limit = 5) {
  const page = (CATEGORY_META[category] || {}).page || "index.html";
  return `
    <div class="side-card">
      ${cardHeadingHtml(iconKey, heading)}
      <ul class="latest-list">${sideListHtml(category, excludeId, limit)}</ul>
      <a class="view-all-link" href="${page}">View All →</a>
    </div>`;
}

function sideListHtml(category, excludeId, limit) {
  const items = sortedPosts()
    .filter(p => p.category === category && p.id !== excludeId)
    .slice(0, limit);

  if (!items.length) return `<li class="ll-empty">No posts yet.</li>`;

  return items.map(p => `
    <li>
      <a href="post.html?id=${encodeURIComponent(p.id)}">
        <span class="ll-title">${escapeHtml(p.title)}</span>
        <span class="ll-date">${formatDate(p.postedDate)}</span>
      </a>
    </li>`).join("");
}

document.addEventListener("DOMContentLoaded", renderDetail);
