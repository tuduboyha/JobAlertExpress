/*
  ============================================================
  POSTS DATA FILE
  ============================================================
  This is the ONLY file you normally need to edit to publish
  new content on the site. Add a new object to the POSTS array
  below (copy an existing one and change the values), save the
  file, and refresh the website — the new post appears
  automatically on the homepage, in search, and gets its own
  detail page at post.html?id=YOUR-ID.

  FIELD GUIDE
  ------------------------------------------------------------
  id            : unique, no spaces, e.g. "ssc-cgl-2026"
  category      : one of "job", "admitcard", "result", "syllabus"
  sector        : OPTIONAL. Broad sector this post belongs to — used
                  as the "Category" shown/filtered on category pages
                  (e.g. the Latest Jobs list), AND as the tile/page on
                  the homepage's "Browse by Category" slider (each
                  distinct sector value gets its own {slug}.html page
                  — see js/sector.js). Pick one of: "Railway", "SSC",
                  "Banking", "Police & Defence", "Technical" — or any
                  other short label you want to introduce. If left
                  out, the organization's short name (the text in
                  parentheses, e.g. "SSC") is shown instead.
  title         : headline shown on the card
  organization  : department / board / company name
  postedDate    : "YYYY-MM-DD" (used for sorting, newest first)
  lastDate      : "YYYY-MM-DD" or "" if not applicable
  popular       : OPTIONAL, job posts only. Set to true to mark this as
                  a high-traffic/trending recruitment. The homepage's
                  "Latest Jobs" card section shows ONLY posts marked
                  popular: true whose lastDate (if any) hasn't passed
                  yet — set this yourself based on your own analytics
                  (Google Analytics, etc.), since a static site has no
                  way to track real visitor counts automatically.
  vacancies     : text, e.g. "12256" or "—"
  qualification : short eligibility text
  featuredImage : OPTIONAL. URL of an image for this post — shown
                  as a banner at the top of the post's own detail
                  page only (not on the homepage/category cards).
                  Leave it out (or "") and no image is shown, same
                  as today. Use a real image URL you have rights to
                  use, or a local path like "images/my-photo.jpg"
                  if you add an images folder to the project.
  shortDesc     : 1-2 line summary shown on the card
  description   : longer text for the detail page. Use "\n\n"
                  to start a new paragraph.
  importantDates: array of {label, value} rows
  applyLink     : URL of the official apply / download page —
                  used for the "Apply Online" button
  notificationLink: URL of the official PDF notification — used
                  for the "Download Notification" button
  officialWebsite: OPTIONAL. URL of the department/organization's
                  official website, used for the "Official Website"
                  button. If left out, that button falls back to
                  applyLink (fine when both are the same site).
  faqs          : OPTIONAL. Array of {q, a} shown as an FAQ
                  accordion on the detail page. If you leave this
                  out (or set it to []), the site fills in a
                  sensible default FAQ automatically based on the
                  post's category and other fields — so every
                  post always has an FAQ section, custom or not.
  tables        : OPTIONAL. Array of structured data tables shown
                  on the detail page (vacancy break-up, fee
                  structure, exam pattern, pay scale, etc.) —
                  useful for pulling the important facts out of a
                  long notification into a scannable table instead
                  of paragraphs. Each entry is:
                    { title: "Vacancy Details",
                      columns: ["Post Code", "Discipline", "Vacancies"],
                      rows: [["BE001", "Electronics", "99"], ...] }
                  Every row array must have the same number of
                  cells as `columns`. Leave this out if the post
                  doesn't have tabular data to show.
                  Add section: "selection-process" to render a table
                  inside the Selection Process card instead of inline
                  in the main article — handy for exam pattern /
                  interview / qualifying-marks tables. Add section:
                  "how-to-apply" the same way to render it inside the
                  How to Apply card instead — handy for a Documents
                  Required table.
  howToApply    : OPTIONAL. A dedicated "How to Apply" section
                  shown as a separate box near the bottom of the
                  detail page (below Links, above FAQ). Shape:
                    { intro: "Follow these steps to apply:",
                      steps: ["Visit the official website...", ...] }
                  Leave this out and the site fills in a sensible
                  default set of steps automatically based on the
                  post's category — so every post always has a
                  How to Apply section, custom or not.
  selectionProcess: OPTIONAL. A dedicated "Selection Process"
                  section, same shape as howToApply:
                    { intro: "...", steps: ["Written Test...", ...] }
                  Shown right below How to Apply. If left out, job
                  posts get a sensible generic default (Application
                  → Written Test → Interview → Final Merit List);
                  admit card / result / syllabus posts get no
                  Selection Process section at all unless you add
                  one explicitly.
  examPreparation: OPTIONAL. A dedicated "Exam Preparation"
                  section, shown right below Selection Process:
                    { intro: "...", tips: ["Revise...", ...] }
                  If left out, job posts get generic default
                  preparation tips; admit card / result / syllabus
                  posts get no Exam Preparation section unless you
                  add one explicitly.
  ============================================================
*/

const POSTS = [
  {
    id: "isro-scientist-engineer-sc-2026",
    category: "job",
    sector: "Technical",
    title: "ISRO Scientist/Engineer 'SC' Recruitment 2026 – 175 Posts (BE/B.Tech)",
    organization: "Indian Space Research Organisation (ISRO) – ISRO Centralised Recruitment Board (ICRB)",
    postedDate: "2026-08-27",
    lastDate: "2026-09-16",
    vacancies: "175",
    qualification: "BE/B.Tech or equivalent in Electronics & Communication / Mechanical / Computer Science Engineering with min. 65% aggregate marks or CGPA 6.84/10",
    shortDesc: "Online applications invited for Scientist/Engineer 'SC' posts (Level 10, Group A) in Electronics, Mechanical and Computer Science at ISRO Centres and PRL.",
    description:
      "Indian Space Research Organisation (ISRO), Department of Space, Government of India has released Advertisement No. ISRO:ICRB:03(EMC):2026 dated 27 August 2026 (Bilingual Advertisement) inviting online applications from meritorious graduates for the post of Scientist/Engineer 'SC' in Level 10 of the Pay Matrix, at constituent ISRO Centres (Group 'A' Gazetted posts) and at the autonomous body PRL — Physical Research Laboratory (Group 'A' Non-Gazetted posts).\n\nA total of 175 vacancies (tentative, subject to revision via corrigendum on www.isro.gov.in) are notified across Electronics, Mechanical and Computer Science disciplines — see the Vacancy Details table below for the full post-wise break-up. Some posts carry backlog PwBD vacancies across disability categories A to E; if a suitable candidate of the notified category is unavailable, interchange among the five categories is allowed, and thereafter the post may be filled by a non-PwBD candidate.\n\nEligibility and age limit are summarised in the tables below. Note: where a university mentions both CGPA and percentage, meeting either is sufficient; where only CGPA is mentioned, that CGPA itself must meet the norm — conversion to percentage is not permitted.\n\nOnline applications are accepted only through the official ISRO website — see the dedicated How to Apply section below for the full step-by-step process, required documents and application fee details.\n\nSelection is through a Written Test/CBT followed by an Interview — see the dedicated Selection Process section below for the full stage-by-stage process, exact exam pattern, qualifying marks and weightage.\n\nPay and allowances on selection are summarised in the table below.\n\nOther important conditions: Only Indian nationals may apply. Appointees are liable to be posted or transferred to any DOS/ISRO Centre or Unit at any time. The notified vacancy count is provisional and ICRB/ISRO reserves the right to increase, decrease, or decide not to fill the posts.",
    importantDates: [
      { label: "Notification Date", value: "27 Aug 2026" },
      { label: "Online Registration Start Date", value: "27 Aug 2026" },
      { label: "Apply Last Date", value: "16 Sep 2026 (11:55 PM)" },
      { label: "Written Test / CBT Date", value: "To be notified (call letter by e-mail only)" },
      { label: "Written Test/CBT Venues", value: "37 centres across India" },
      { label: "Answer Key Publication", value: "Within 3 working days of Written Test/CBT" },
      { label: "Answer Key Objection Window", value: "Within 5 days of answer key publication" }
    ],
    applyLink: "https://www.isro.gov.in",
    notificationLink: "#",
    tables: [
      {
        title: "Vacancy Details",
        columns: ["Post Code", "Discipline", "Centre", "Group", "Vacancies"],
        rows: [
          ["BE001", "Electronics", "ISRO Centres", "Group A (Gazetted)", "99"],
          ["BE002", "Mechanical", "ISRO Centres", "Group A (Gazetted)", "52"],
          ["BE003", "Computer Science", "ISRO Centres", "Group A (Gazetted)", "21"],
          ["BE001A", "Electronics", "PRL (Autonomous Body)", "Group A (Non-Gazetted)", "1"],
          ["BE002A", "Mechanical", "PRL (Autonomous Body)", "Group A (Non-Gazetted)", "1"],
          ["BE003A", "Computer Science", "PRL (Autonomous Body)", "Group A (Non-Gazetted)", "1"],
          ["Total", "—", "—", "—", "175"]
        ]
      },
      {
        title: "Eligibility",
        columns: ["Criteria", "Details"],
        rows: [
          ["Educational Qualification", "BE/B.Tech or equivalent in Electronics & Communication / Mechanical / Computer Science Engineering"],
          ["Minimum Marks", "65% aggregate or CGPA 6.84/10"]
        ]
      },
      {
        title: "Age Limit",
        columns: ["Criteria", "Details"],
        rows: [
          ["Age Limit", "28 years as on 16-09-2026"],
          ["Age Relaxation", "As per Govt of India orders — Central Govt employees, Ex-servicemen, PwBD"]
        ]
      },
      {
        title: "Documents Required",
        section: "how-to-apply",
        columns: ["Document", "Details"],
        rows: [
          ["Passport-size Photograph", "Recent colour photo, jpg/jpeg format, 100–200 KB — upload at application stage"],
          ["Signature", "Signed in black ink on white paper, jpg/jpeg format, 80–150 KB — upload at application stage"],
          ["Category Certificate", "SC/ST/PwBD/Ex-servicemen certificate — upload at application stage, needed for fee exemption/full refund"],
          ["Educational Certificates", "Degree certificate / final mark sheet as proof of qualification — required at Interview stage"],
          ["Age Proof", "Original age proof document — required at Interview stage"],
          ["Valid Photo ID", "Aadhaar Card / PAN Card / Voter ID / Passport, etc. — required at Interview stage"],
          ["No Objection Certificate (NOC)", "Required only if currently employed under Central/State Govt, PSU or Autonomous Body — required at Interview stage"]
        ]
      },
      {
        title: "Application Fee",
        columns: ["Category", "Application Fee", "Initial Processing Fee", "Refund (if Written Test attended)"],
        rows: [
          ["General / OBC / EWS", "₹250 (non-refundable)", "₹750", "₹500"],
          ["Women / SC / ST / PwBD / Ex-Servicemen", "Exempted", "₹750", "Full ₹750"]
        ]
      },
      {
        title: "Written Test / CBT Pattern",
        section: "selection-process",
        columns: ["Part", "Subject", "Duration", "No. of Questions", "Marking Scheme"],
        rows: [
          ["Part A", "Discipline-Specific (MCQ)", "90 minutes", "80", "+1 correct, 0 unattempted, -1/3 wrong"],
          ["Part B", "Aptitude/Ability (MCQ)", "30 minutes", "15", "No negative marking"],
          ["Total", "—", "120 minutes", "95", "100 marks"]
        ]
      },
      {
        title: "Interview Assessment (100 Marks)",
        section: "selection-process",
        columns: ["Attribute", "Marks"],
        rows: [
          ["Technical (Academic) Knowledge", "40"],
          ["General Awareness (Specialisation Area)", "20"],
          ["Presentation / Communication Skill", "20"],
          ["Comprehension", "10"],
          ["Academic Achievements (Institute Type, Performance, Rank)", "10"],
          ["Total", "100"]
        ]
      },
      {
        title: "Qualifying Criteria",
        section: "selection-process",
        columns: ["Category", "Written Test/CBT", "Interview", "Final Aggregate"],
        rows: [
          ["Unreserved", "50% each in Part A & B", "50%", "60%"],
          ["PwBD (reserved posts)", "40% each in Part A & B", "40%", "50%"]
        ]
      },
      {
        title: "Pay & Allowances",
        columns: ["Component", "Details"],
        rows: [
          ["Pay Level", "Level 10 of Pay Matrix"],
          ["Minimum Basic Pay", "₹56,100 per month"],
          ["Other Allowances", "DA, HRA, Transport Allowance as per rules"],
          ["Pension", "New Pension Scheme"],
          ["Other Benefits", "Medical facilities, subsidised canteen, limited quarters (in lieu of HRA), LTC, Group Insurance, House Building Advance"]
        ]
      }
    ],
    howToApply: {
      intro: "Follow these steps to apply for ISRO Scientist/Engineer 'SC' Recruitment 2026:",
      steps: [
        "Visit the official ISRO website (www.isro.gov.in) during the online registration window — 27 August 2026 to 16 September 2026 (11:55 PM).",
        "Register online. Applications are accepted online only; candidates registered on the National Career Service (NCS) portal and meeting the eligibility conditions may also apply following the same procedure.",
        "Fill in the application form carefully and provide a valid e-mail ID — this is mandatory, as hall tickets/call letters for the Written Test/CBT and Interview will be sent only by e-mail.",
        "Upload a recent colour passport-size photograph (jpg/jpeg, 100–200 KB) and signature (jpg/jpeg, 80–150 KB), plus the relevant category certificate (Women/SC/ST/PwBD/Ex-servicemen) if applicable.",
        "Pay the processing fee of ₹750 online via the Bharatkosh e-Payment Gateway, using Internet Banking, UPI, or a Domestic Debit Card — cash, cheque, DD and money order are not accepted.",
        "Check all entered details carefully, then submit the application before the last date — 16 September 2026 (11:55 PM). Avoid submitting multiple applications for the same post.",
        "Note down the online Registration Number generated after submission and keep it safe for future reference."
      ]
    },
    selectionProcess: {
      intro: "Selection for ISRO Scientist/Engineer 'SC' Recruitment 2026 involves the following stages:",
      steps: [
        "Written Test/CBT — held at 37 centres across India: Agartala, Ahmedabad, Bengaluru, Bhopal, Bhubaneshwar, Chandigarh/Mohali, Chennai, Dehradun, Delhi, Ernakulam, Gorakhpur, Gurugram, Guwahati, Hyderabad, Indore, Jaipur, Jammu, Jodhpur, Kanpur, Kavaratti, Kolkata, Lucknow, Mangaluru, Mumbai, Mysore, Nagpur, Patna, Port Blair, Pune, Raipur, Ranchi, Shillong, Tiruchirapalli, Thiruvananthapuram, Varanasi, Vijayawada and Visakhapatnam. See the Written Test/CBT Pattern table below for the exact structure and marking scheme.",
        "Shortlisting for Interview — based on Written Test performance, candidates are shortlisted in a 1:5 ratio (minimum 10 candidates in aggregate); reserved-category candidates are shortlisted separately, in addition to those shortlisted under the unreserved category.",
        "Interview — evaluates Technical Knowledge, General Awareness, Presentation/Communication Skill, Comprehension and Academic Achievements. See the Interview Assessment table below for the marks break-up.",
        "Final Merit List — the final panel gives 50% weightage to Written Test marks and 50% to Interview marks, subject to the qualifying aggregate shown in the Qualifying Criteria table below.",
        "Tie-Breakers — if candidates tie in the final panel, merit is decided in order by: (i) Written Test/CBT marks, (ii) marks in the essential qualification, (iii) date of birth, with the older candidate placed higher."
      ]
    },
    examPreparation: {
      intro: "A few tips to help you prepare for the ISRO Scientist/Engineer 'SC' Written Test/CBT and Interview:",
      tips: [
        "Revise your core discipline thoroughly (Electronics & Communication / Mechanical / Computer Science) — Part A carries 80 questions and is entirely discipline-specific, at BE/B.Tech level.",
        "Part A has negative marking of -1/3 for each wrong answer, so avoid guessing blindly — attempt a question only if you can eliminate at least a couple of options confidently.",
        "Practice numerical, logical, diagrammatic, abstract and deductive reasoning questions for Part B (15 questions, 30 minutes, no negative marking) — accuracy and speed both matter here.",
        "Time yourself while practicing: Part A gives roughly ~1.1 minutes per question and Part B about 2 minutes per question, so build the habit of not getting stuck on any single question.",
        "Solve previous years' ISRO Scientist/Engineer 'SC' papers, if available, to understand the difficulty level and question style.",
        "Since the Interview carries equal (50%) weightage to the Written Test in the final merit, prepare to discuss your academic projects, core subject fundamentals and general awareness in your specialisation area confidently.",
        "Keep your original certificates, ID proof and category documents organised well in advance, since they'll be needed at the Interview stage."
      ]
    },
    faqs: [
      { q: "How many total vacancies are there in ISRO Scientist/Engineer 'SC' Recruitment 2026?", a: "A total of 175 vacancies (tentative) have been notified: at ISRO Centres — 99 in Electronics (BE001), 52 in Mechanical (BE002), 21 in Computer Science (BE003); at PRL (Autonomous Body) — 1 post each in Electronics (BE001A), Mechanical (BE002A) and Computer Science (BE003A). Some vacancies include backlog PwBD reservations." },
      { q: "What is the educational qualification required?", a: "A BE/B.Tech or equivalent degree in Electronics & Communication, Mechanical, or Computer Science Engineering with a minimum of 65% aggregate marks or CGPA 6.84/10, completed within the university's stipulated course duration." },
      { q: "What is the age limit?", a: "Candidates must not exceed 28 years of age as on 16 September 2026. Age relaxation applies for serving Central Government civilian employees, Ex-servicemen and Persons with Benchmark Disabilities as per Government of India orders." },
      { q: "What is the application fee and how do I pay it?", a: "The non-refundable application fee is ₹250, but all candidates initially pay ₹750 as a processing fee, payable only online via the Bharatkosh e-Payment Gateway (Internet Banking / UPI / Domestic Debit Card). Cash, cheque, DD and money order are not accepted." },
      { q: "Is the application fee refunded?", a: "Yes, but only to candidates who appear in the Written Test/CBT. Women, SC/ST/PwBD and Ex-servicemen candidates get a full refund; all other candidates get ₹500 back (₹750 minus the ₹250 application fee). The refund goes to the bank account details submitted in the application." },
      { q: "What documents need to be uploaded with the application?", a: "A recent colour passport-size photograph (jpg/jpeg, 100–200 KB) and signature in black ink on white paper (jpg/jpeg, 80–150 KB) are mandatory. Women, SC/ST/PwBD and Ex-servicemen candidates must also upload the relevant category certificate. Original documents for qualification, age, category and NOC must be produced later when called for." },
      { q: "What is the Written Test/CBT pattern?", a: "Part A has 80 subject-specific MCQs in 90 minutes (+1 for correct, 0 for unattempted, -1/3 for wrong answers). Part B has 15 aptitude MCQs (numerical, logical, diagrammatic, abstract and deductive reasoning) in 30 minutes with no negative marking. Qualifying marks are 50% each in Part A & B for unreserved candidates, and 40% each for PwBD candidates." },
      { q: "Where will the Written Test/CBT be held?", a: "At 37 centres across India, including Agartala, Ahmedabad, Bengaluru, Bhopal, Bhubaneshwar, Chandigarh/Mohali, Chennai, Dehradun, Delhi, Hyderabad, Jaipur, Kolkata, Lucknow, Mumbai, Patna, Pune, Thiruvananthapuram, Visakhapatnam and others. ICRB reserves the right to change the venue or reallot candidates to another centre." },
      { q: "How are candidates shortlisted for Interview, and how is the Interview evaluated?", a: "Based on Written Test performance, candidates are shortlisted for Interview in a 1:5 ratio (minimum 10 candidates). The 100-mark Interview evaluates Technical Knowledge (40), General Awareness (20), Presentation/Communication (20), Comprehension (10) and Academic Achievements (10). The final panel gives 50% weightage to Written Test marks and 50% to Interview marks, with a 60% qualifying aggregate for unreserved candidates (50% for PwBD)." },
      { q: "What is the pay scale for this post?", a: "Selected candidates are appointed as Scientist/Engineer 'SC' in Level 10 of the Pay Matrix with a minimum basic pay of ₹56,100 per month, plus DA, HRA and Transport Allowance, New Pension Scheme coverage, medical facilities, subsidised canteen, LTC, Group Insurance and House Building Advance." },
      { q: "Is Travelling Allowance (TA) paid for the Written Test or Interview?", a: "No TA is paid for the Written Test/CBT. For the Interview, candidates are reimbursed to-and-fro 2nd-class train fare by the shortest route from the city mentioned in their application." },
      { q: "How can I apply for this ISRO recruitment?", a: "Applications must be submitted online only, through the official ISRO website, between 27 August 2026 and 16 September 2026 (11:55 PM). Use the Apply / Download link on this page to reach the official site." },
      { q: "Who can I contact for queries about this recruitment?", a: "For doubts not already answered in the advertisement or FAQs on the ISRO website, candidates may e-mail rmt-icrb@isro.gov.in. Queries about information already available in the advertisement/FAQs will not be replied to." }
    ]
  },
  {
    id: "ssc-cgl-2026",
    category: "job",
    sector: "SSC",
    popular: true,
    title: "SSC CGL 2026 Notification Out – 12256 Posts",
    organization: "Staff Selection Commission (SSC)",
    postedDate: "2026-08-20",
    lastDate: "2026-09-20",
    vacancies: "12256",
    qualification: "Graduate (Any Stream)",
    shortDesc: "Apply online for Combined Graduate Level Examination 2026 across various ministries and departments.",
    description:
      "Staff Selection Commission has released the official notification for Combined Graduate Level (CGL) Examination 2026 to fill 12256 vacancies in various Group B and Group C posts under different ministries.\n\nEligible candidates can apply online through the official SSC website before the last date. Candidates are advised to read the official notification carefully before applying.",
    importantDates: [
      { label: "Notification Date", value: "20 Aug 2026" },
      { label: "Apply Start Date", value: "21 Aug 2026" },
      { label: "Apply Last Date", value: "20 Sep 2026" },
      { label: "Tier-I Exam Date", value: "To be notified" }
    ],
    applyLink: "#",
    notificationLink: "#",
    faqs: [
      { q: "What is the total number of vacancies in SSC CGL 2026?", a: "SSC has announced a total of 12256 vacancies across various Group B and Group C posts under different ministries." },
      { q: "What is the last date to apply for SSC CGL 2026?", a: "The online application window closes on 20 September 2026. Candidates are advised to apply well before the deadline to avoid last-minute technical issues." },
      { q: "What is the minimum qualification required?", a: "Candidates must hold a Bachelor's degree in any stream from a recognized university. Some posts may have additional specific qualification requirements — check the official notification for post-wise details." },
      { q: "How can I apply for SSC CGL 2026?", a: "You can apply online through the official SSC website using the Apply / Download link on this page." }
    ]
  },
  {
    id: "rrb-je-2026",
    category: "job",
    sector: "Railway",
    popular: true,
    title: "RRB JE Recruitment 2026 – 3995 Posts",
    organization: "Railway Recruitment Board (RRB)",
    postedDate: "2026-08-18",
    lastDate: "2026-09-15",
    vacancies: "3995",
    qualification: "Diploma / B.E / B.Tech",
    shortDesc: "Online applications invited for Junior Engineer posts in various railway zones.",
    description:
      "Railway Recruitment Board has invited online applications for the post of Junior Engineer (JE) across multiple railway zones. Candidates with a relevant diploma or engineering degree can apply.\n\nSelection will be based on Computer Based Test (CBT), Document Verification and Medical Examination.",
    importantDates: [
      { label: "Notification Date", value: "18 Aug 2026" },
      { label: "Apply Last Date", value: "15 Sep 2026" },
      { label: "CBT 1 Exam Date", value: "To be notified" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },
  {
    id: "ibps-clerk-2026",
    category: "job",
    sector: "Banking",
    popular: true,
    title: "IBPS Clerk Recruitment 2026 – 11445 Posts",
    organization: "Institute of Banking Personnel Selection (IBPS)",
    postedDate: "2026-08-15",
    lastDate: "2026-09-10",
    vacancies: "11445",
    qualification: "Graduate (Any Stream)",
    shortDesc: "Apply online for Clerk posts in various participating public sector banks.",
    description:
      "IBPS has released the notification for recruitment of Clerks (Customer Service Associates) in participating banks across the country. Interested and eligible candidates can apply online before the last date.",
    importantDates: [
      { label: "Notification Date", value: "15 Aug 2026" },
      { label: "Apply Last Date", value: "10 Sep 2026" },
      { label: "Prelims Exam", value: "To be notified" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },
  {
    id: "sbi-junior-associate-2026",
    category: "job",
    sector: "Banking",
    popular: true,
    title: "SBI Junior Associate Recruitment 2026 – 7680 Posts",
    organization: "State Bank of India (SBI)",
    postedDate: "2026-08-29",
    lastDate: "2026-08-31",
    vacancies: "7680",
    qualification: "Graduation in Any Discipline",
    shortDesc: "Online applications invited for Junior Associate (Customer Support & Sales) posts in clerical cadre at State Bank of India.",
    description:
      "State Bank of India (SBI) has released the notification (Advertisement No. CRPD/CR/2026-27/17) for recruitment of Junior Associate (Customer Support & Sales) in clerical cadre, with 7680 regular vacancies plus 1444 backlog vacancies across various States/UTs. Candidates must be between 20 and 28 years of age as on 01.04.2026 (born between 02.04.1998 and 01.04.2006, both dates inclusive), with age relaxation available for reserved categories.\n\nCandidates can apply for vacancies of one State/UT only, can appear for the test only once under this project, and must be proficient in the specified local language of that State/UT (a Local Language Proficiency Test applies to those who haven't studied it in class 10th/12th). The starting Basic Pay is ₹26,730/-, with total starting emoluments of around ₹46,000/- per month at a metro location like Mumbai. Selected candidates will be on probation for a minimum of 6 months, and there is no provision for Inter Circle/Inter State Transfer for Junior Associates before completion of 5 years of service.",
    importantDates: [
      { label: "Notification Date", value: "11 Aug 2026" },
      { label: "Apply Start Date", value: "11 Aug 2026" },
      { label: "Apply Last Date", value: "31 Aug 2026" },
      { label: "Prelim Exam", value: "September 2026 (Tentative)" },
      { label: "Main Exam", value: "November 2026 (Tentative)" }
    ],
    tables: [
      {
        title: "Overview",
        columns: ["Particulars", "Details"],
        rows: [
          ["Organization", "State Bank of India (SBI), Central Recruitment & Promotion Department, Corporate Centre, Mumbai"],
          ["Advertisement No.", "CRPD/CR/2026-27/17"],
          ["Post Name", "Junior Associate (Customer Support & Sales)"],
          ["Cadre", "Clerical Cadre"],
          ["Total Vacancies", "7,680 Regular + 1,444 Backlog (across 24 States/UTs)"],
          ["Application Mode", "Online"],
          ["Online Registration & Fee Payment", "11.08.2026 to 31.08.2026"],
          ["Preliminary Exam (Tentative)", "September 2026"],
          ["Main Exam (Tentative)", "November 2026"],
          ["Application Fee", "₹750 (General/OBC/EWS); Nil (SC/ST/PwBD/XS/DXS)"],
          ["Age Limit", "20–28 years (as on 01.04.2026)"],
          ["Official Website", "sbi.bank.in/web/careers/current-openings"]
        ]
      },
      {
        title: "State-wise Vacancy Details",
        columns: ["Circle", "State/UT", "Local Language", "Vacancies (SC/ST/OBC/EWS/GEN/Total)", "Backlog Total"],
        rows: [
          ["Gandhinagar", "Gujarat", "Gujarati", "23/49/89/33/136/330", "305"],
          ["Bengaluru", "Karnataka", "Kannada", "121/53/205/76/305/760", "39"],
          ["Bhopal", "Madhya Pradesh", "Hindi", "16/22/16/11/48/113", "159"],
          ["Bhopal", "Chhattisgarh", "Hindi", "34/91/17/28/117/287", "64"],
          ["Bhubaneswar", "Odisha", "Odia", "176/242/132/110/440/1100", "18"],
          ["Chandigarh", "Jammu & Kashmir UT", "Urdu/Hindi", "6/9/22/8/39/84", "5"],
          ["Chandigarh", "Himachal Pradesh", "Hindi", "2/0/1/0/6/9", "16"],
          ["Chandigarh", "Ladakh UT", "Urdu/Ladakhi/Bhoti (Bodhi)", "0/0/1/0/6/7", "7"],
          ["Chennai", "Tamil Nadu", "Tamil", "267/14/380/141/608/1410", "106"],
          ["Hyderabad", "Telangana", "Telugu/Urdu", "41/18/70/26/105/260", "0"],
          ["Jaipur", "Rajasthan", "Hindi", "59/45/70/35/141/350", "75"],
          ["Kolkata", "West Bengal", "Bengali/Nepali", "127/27/122/55/224/555", "149"],
          ["Kolkata", "A&N Islands", "Hindi/English", "0/1/4/1/9/15", "10"],
          ["Kolkata", "Sikkim", "Nepali/English", "3/12/14/6/25/60", "7"],
          ["Lucknow", "Uttar Pradesh", "Hindi/Urdu", "52/2/67/25/104/250", "30"],
          ["Maharashtra/Mumbai Metro", "Maharashtra", "Marathi", "171/154/463/171/759/1718", "281"],
          ["Mumbai Metro", "Goa", "Konkani", "1/7/11/6/37/62", "1"],
          ["Guwahati", "Arunachal Pradesh", "English", "0/24/0/5/26/55", "17"],
          ["Guwahati", "Assam", "Assamese/Bengali/Bodo", "7/13/29/11/50/110", "97"],
          ["Guwahati", "Manipur", "Manipuri/English", "0/4/1/1/8/14", "9"],
          ["Guwahati", "Meghalaya", "English/Garo/Khasi", "0/10/1/2/11/24", "20"],
          ["Guwahati", "Mizoram", "Mizo", "0/14/1/3/14/32", "6"],
          ["Guwahati", "Nagaland", "English", "0/12/0/2/13/27", "15"],
          ["Guwahati", "Tripura", "Bengali/Kokborok", "8/14/0/4/22/48", "8"],
          ["—", "Total", "—", "1114/837/1716/760/3253/7680", "1444"]
        ]
      },
      {
        title: "Age Relaxation (Upper Age Limit)",
        columns: ["Category", "Age Relaxation"],
        rows: [
          ["OBC", "3 years"],
          ["SC / ST", "5 years"],
          ["PwBD (General/EWS)", "10 years"],
          ["PwBD (OBC)", "13 years"],
          ["PwBD (SC/ST)", "15 years"],
          ["Ex-Servicemen / Disabled Ex-Servicemen", "Service rendered + 3 years (max age 50)"],
          ["Widows / Divorced / Judicially Separated Women", "7 years (max 35/38/40 yrs by category)"],
          ["Trained Apprentices of SBI", "1–16 years, depending on category"]
        ]
      },
      {
        title: "Educational Qualification",
        columns: ["Criteria", "Details"],
        rows: [
          ["Essential Qualification", "Graduation in any discipline from a recognised University, or an equivalent qualification recognised by the Central Government"],
          ["Qualification Deadline", "On or before 31.12.2026"],
          ["Integrated Dual Degree (IDD)", "IDD passing date must be on or before 31.12.2026"],
          ["Final Year / Semester Candidates", "May apply provisionally; must produce proof of having passed the graduation examination on or before 31.12.2026, if selected"],
          ["Matriculate Ex-Servicemen", "Eligible if holding the Indian Army Special Certificate of Education (or the corresponding Navy/Air Force certificate) after completing 15+ years of service, dated on or before 31.12.2026"]
        ]
      },
      {
        title: "Reservation Highlights",
        columns: ["Point", "Details"],
        rows: [
          ["Persons with Benchmark Disabilities (PwBD)", "4% of posts are set aside under Section 34 of the RPWD Act, 2016, for candidates with recognised disabilities — this includes vision and hearing impairment, several locomotor conditions, mild autism spectrum disorder, intellectual disability, specific learning disability and mental illness."],
          ["Ex-Servicemen / Disabled Ex-Servicemen", "10% of vacancies go to Ex-Servicemen, with an additional 4.5% for Disabled Ex-Servicemen and the dependents of servicemen killed in action (14.5% combined). Between the two, Disabled Ex-Servicemen are considered first, then dependents of personnel killed or severely disabled in action."],
          ["How the reservation is applied", "PwBD, Ex-Servicemen and Disabled Ex-Servicemen quotas aren't a separate pool — they sit inside the vacancy numbers already allotted to each candidate's own category (SC/ST/OBC/EWS/General)."],
          ["OBC candidates", "Only candidates in the OBC 'Non-Creamy Layer' can claim OBC reservation; those in the creamy layer are treated as General and should apply under that category."],
          ["EWS candidates", "To claim an EWS seat you'll need an Income & Asset Certificate for FY 2025-26 (valid through 2026-27), issued by a competent authority in the format prescribed by the Government of India."]
        ]
      },
      {
        title: "Terms of Employment",
        columns: ["Particulars", "Details"],
        rows: [
          ["Probation", "Newly joined Junior Associates serve at least 6 months on probation and must clear the Bank's prescribed e-lessons to get confirmed — this period can run longer if performance doesn't meet the Bank's expectations."],
          ["Transfer between circles/states", "No inter-circle or inter-state transfer request is entertained for the first 5 years of service. After that, a transfer may be considered, but only in exceptional situations like extreme compassionate grounds or a spouse-related request, and purely at the Bank's discretion."],
          ["What the role involves", "Junior Associates handle customer-facing sales and support — calling on customers, providing banking and advisory services, and cross-selling products both inside and outside the branch. The job involves flexible/shift hours and a fair amount of outdoor travel."]
        ]
      },
      {
        title: "Application Fee / Intimation Charges",
        columns: ["Category", "Fee"],
        rows: [
          ["SC / ST / PwBD / XS / DXS", "Nil"],
          ["General / OBC / EWS", "₹750/-"]
        ]
      },
      {
        title: "Exam Centres (Tentative)",
        columns: ["State/UT", "Exam Centres"],
        rows: [
          ["Andaman & Nicobar Island", "Port Blair"],
          ["Andhra Pradesh", "Anantpur, Guntur/Vijayawada, Kadapa, Kakinada, Kurnool, Nellore, Rajahmundry, Tirupati, Vishakhapatnam, Vizianagaram, Chirala"],
          ["Arunachal Pradesh", "Naharlagun"],
          ["Assam", "Dibrugarh, Guwahati, Jorhat, Silchar, Tezpur"],
          ["Bihar", "Arrah, Bhagalpur, Darbhanga, Gaya, Muzaffarpur, Patna, Purnea, Aurangabad"],
          ["Chandigarh", "Mohali"],
          ["Chhattisgarh", "Bhilai/Bhilai Nagar, Bilaspur, Raipur"],
          ["Delhi NCR", "Delhi/NCR (All NCR cities)"],
          ["Goa", "Mapusa, Madgaon"],
          ["Gujarat", "Ahmedabad-Gandhinagar, Anand/Vadodara, Mehsana, Rajkot, Surat/Bardoli"],
          ["Haryana", "Ambala, Faridabad, Gurugram, Kurukshetra"],
          ["Himachal Pradesh", "Bilaspur, Hamirpur, Kangra, Kullu, Mandi, Solan, Una"],
          ["Jammu & Kashmir", "Jammu, Samba, Srinagar"],
          ["Jharkhand", "Bokaro Steel City, Dhanbad, Hazaribagh, Jamshedpur, Ranchi"],
          ["Karnataka", "Bengaluru, Belagavi (Belgaum), Kalaburagi (Gulbarga), Hubballi (Hubli)/Dharwad, Mangaluru (Mangalore), Mysuru (Mysore), Shivamogga (Shimoga), Udupi"],
          ["Kerala", "Alappuzha, Kannur, Ernakulam, Kollam, Kottayam, Kozhikode, Malappuram, Palakkad, Thiruvananthapuram, Thrissur"],
          ["Ladakh", "Leh, Kargil"],
          ["Lakshadweep", "Kavaratti"],
          ["Madhya Pradesh", "Bhopal, Gwalior, Indore, Jabalpur, Sagar, Satna, Ujjain"],
          ["Maharashtra", "Amravati, Chhatrapati Sambhaji Nagar, Dhule, Jalgaon, Kolhapur, Latur, Mumbai/Thane/Navi Mumbai/MMR, Nagpur, Nanded, Nashik, Pune, Sangli, Satara, Solapur, Ratnagiri, Chandrapur"],
          ["Manipur", "Imphal, Churachandpur, Kakching, Thoubal"],
          ["Meghalaya", "Shillong, Tura"],
          ["Mizoram", "Aizawl"],
          ["Nagaland", "Dimapur, Kohima"],
          ["Odisha", "Balasore, Berhampur-Ganjam, Bhubaneswar, Cuttack, Rourkela, Sambalpur, Dhenkanal"],
          ["Puducherry", "Puducherry"],
          ["Punjab", "Amritsar, Bhatinda, Mohali, Patiala, Phagwara"],
          ["Rajasthan", "Ajmer, Bikaner, Jaipur, Jodhpur, Kota, Sikar, Udaipur"],
          ["Sikkim", "Gangtok"],
          ["Tamil Nadu", "Chennai, Coimbatore, Cuddalore, Erode, Kanchipuram, Madurai, Nagercoil/Kanyakumari, Namakkal, Salem, Thanjavur, Tiruchirappalli, Tirunelveli, Tirupur, Vellore, Virudhunagar, Villupuram"],
          ["Telangana", "Hyderabad, Karimnagar, Khammam, Warangal"],
          ["Tripura", "Agartala"],
          ["Uttar Pradesh", "Agra, Aligarh, Bareilly, Ayodhya, Ghaziabad, Gorakhpur, Jhansi, Kanpur, Lucknow, Meerut, Moradabad, Muzaffarnagar, Noida/Greater Noida, Prayagraj, Varanasi"],
          ["Uttarakhand", "Dehradun, Haldwani, Roorkee"],
          ["West Bengal", "Asansol, Durgapur, Kolkata, Hooghly, Kalyani, Siliguri, Burdwan"]
        ]
      },
      {
        title: "Documents & Photo/Signature Specifications",
        columns: ["Document", "Specification"],
        rows: [
          ["Photograph", "Recent passport-style colour photo on a light/white background, 4.5cm x 3.5cm (200x230 px), file size 20–50 KB"],
          ["Signature", "Signed in black ink on white paper, 140x60 px, file size 10–20 KB"],
          ["Left Thumb Impression", "On white paper with black/blue ink, 3cm x 3cm (240x240 px @ 200 DPI), file size 20–50 KB"],
          ["Hand-written Declaration", "Written in English on white paper with black ink, 10cm x 5cm (800x400 px @ 200 DPI), file size 50–100 KB"]
        ]
      },
      {
        title: "SBI Junior Associate Exam Pattern",
        columns: ["Phase", "Test", "Questions", "Marks", "Duration"],
        rows: [
          ["Prelims", "English Language", "30", "30", "20 min"],
          ["Prelims", "Numerical Ability", "35", "35", "20 min"],
          ["Prelims", "Reasoning Ability", "35", "35", "20 min"],
          ["Main", "General / Financial Awareness", "50", "50", "35 min"],
          ["Main", "General English", "40", "40", "35 min"],
          ["Main", "Quantitative Aptitude", "50", "50", "45 min"],
          ["Main", "Reasoning Ability & Computer Aptitude", "50", "60", "45 min"]
        ],
        section: "selection-process"
      }
    ],
    howToApply: {
      intro: "Candidates can apply online only, through SBI's official careers website. Follow these steps:",
      steps: [
        "Visit SBI's official careers page (sbi.bank.in/web/careers/current-openings) and open the 'Recruitment of Junior Associates 2026' link.",
        "Register online with your basic details, then note down the system-generated provisional registration number and password.",
        "Fill in the application form carefully — saved data can be re-opened and edited up to three times before final submission; no changes are allowed after submission.",
        "Scan and upload your photograph, signature, left thumb impression and a hand-written declaration as per the prescribed specifications.",
        "Pay the application fee online via debit card, credit card or internet banking — Nil for SC/ST/PwBD/XS/DXS candidates, ₹750/- for General/OBC/EWS candidates.",
        "On successful payment, save and print the system-generated e-receipt and application form for your records."
      ]
    },
    selectionProcess: {
      intro: "Selection for SBI Junior Associate (Customer Support & Sales) is a three-phase process:",
      steps: [
        "Phase I – Preliminary Examination: An objective test of 100 marks (English Language, Numerical Ability, Reasoning Ability) to be completed in 1 hour, with 1/4th mark deducted for each wrong answer.",
        "Phase II – Main Examination: An objective test of 200 marks (General/Financial Awareness, General English, Quantitative Aptitude, Reasoning Ability & Computer Aptitude) to be completed in 2 hours 40 minutes.",
        "Phase III – Local Language Proficiency Test: Required only for candidates who haven't studied the specified local language of their applied State/UT in class 10th or 12th.",
        "Final merit list is prepared State-wise and category-wise based on Main Examination marks, subject to qualifying the local language test where applicable."
      ]
    },
    examPreparation: {
      intro: "A few tips to prepare for the SBI Junior Associate exam:",
      tips: [
        "Each Preliminary Exam section has its own strict 20-minute limit, so practice solving Numerical and Reasoning questions at speed under timed conditions.",
        "There's no sectional cut-off in either phase, only an overall qualifying score — aim for a balanced attempt across all sections rather than perfecting just one.",
        "Because 1/4th mark is deducted for every wrong answer, avoid guesswork on questions you're unsure of.",
        "Stay updated on Banking & Financial Awareness and current affairs for the Main Exam's General/Financial Awareness section.",
        "If you haven't studied the local language of your chosen State/UT in class 10th or 12th, start preparing early for the Local Language Proficiency Test."
      ]
    },
    faqs: [
      { q: "What is the application fee for SBI Junior Associate 2026?", a: "There is no fee for SC/ST/PwBD/XS/DXS candidates. General/OBC/EWS candidates need to pay ₹750/- as application fee/intimation charges." },
      { q: "What is the age limit for this recruitment?", a: "Candidates must be between 20 and 28 years of age as on 01.04.2026, i.e. born between 02.04.1998 and 01.04.2006, with age relaxation available for reserved categories as per government rules." },
      { q: "Is there negative marking in the exam?", a: "Yes, 1/4th of the marks assigned to a question is deducted for each wrong answer in both the Preliminary and Main Examinations." },
      { q: "Can I apply for more than one State/UT?", a: "No, candidates can apply for vacancies of only one State/UT, and can appear for the test only once under this recruitment project." },
      { q: "Do I need to know the local language of the State I'm applying to?", a: "Yes, unless you have studied the specified local language in class 10th or 12th, you will need to qualify a Local Language Proficiency Test after the Main Examination but before joining." },
      { q: "What is the starting salary for SBI Junior Associate?", a: "The starting Basic Pay is ₹26,730/-, and total starting emoluments (including DA and other allowances) are around ₹46,000/- per month at a metro location like Mumbai." }
    ],
    applyLink: "https://sbi.bank.in/web/careers/current-openings",
    notificationLink: "https://sbi.bank.in/web/careers/current-openings",
    officialWebsite: "https://sbi.bank.in/web/careers/current-openings"
  },
  {
    id: "iob-generalist-so-2026",
    category: "job",
    sector: "Banking",
    popular: true,
    title: "IOB Generalist/SO Recruitment 2026 – 291 Posts",
    organization: "Indian Overseas Bank (IOB)",
    postedDate: "2026-08-29",
    lastDate: "2026-09-15",
    vacancies: "291",
    qualification: "Varies by Post — Graduation to Engineering/MBA/Professional Degrees",
    shortDesc: "Online applications invited for Generalist and Specialist Officer posts (JMGS I, MMGS II, MMGS III) at Indian Overseas Bank.",
    description:
      "Indian Overseas Bank (IOB) has released its notification (Advt. No. HRDD/RECT/04/2026-27, dated 28 August 2026) for recruitment of Generalist and Specialist Officers across 14 posts in JMG Scale I, MMG Scale II and MMG Scale III, with 291 vacancies in total. Post Code 01 (Manager – Branch Management) is the only Generalist Officer post; the remaining 13 are Specialist Officer roles spanning IT, Information Security, Credit, Risk and related domains. Of the total, 12 posts are set aside on a horizontal basis for Persons with Benchmark Disabilities.\n\nEligibility — age, qualification and post-qualification experience — is assessed as on 01.08.2026 and varies significantly from post to post; see the tables below for the full post-wise break-up. Besides Indian citizens, subjects of Nepal/Bhutan, Tibetan refugees who arrived in India before 1 January 1962, and persons of Indian origin who have migrated with the intention of settling in India permanently are also eligible, subject to a Government eligibility certificate for these categories.\n\nSelection is through an Online Examination followed by a Personal Interview, with the final merit list based on 80% weightage to the exam and 20% to the interview. Selected candidates will be placed on the pay scales shown below, and will need to execute a Financial Service Indemnity Bond (₹2,00,000 for JMGS I, ₹2,50,000 for MMGS II & III) with a minimum 3-year service commitment.",
    importantDates: [
      { label: "Notification Date", value: "28 Aug 2026" },
      { label: "Apply Start Date", value: "29 Aug 2026" },
      { label: "Apply Last Date", value: "15 Sep 2026" },
      { label: "Online Exam Date", value: "To be notified" },
      { label: "Interview Date", value: "To be notified" }
    ],
    tables: [
      {
        title: "Overview",
        columns: ["Particulars", "Details"],
        rows: [
          ["Organization", "Indian Overseas Bank (IOB)"],
          ["Advertisement No.", "HRDD/RECT/04/2026-27"],
          ["Post Name", "Generalist / Specialist Officers (14 posts)"],
          ["Total Vacancies", "291"],
          ["Job Location", "Anywhere in India"],
          ["Application Mode", "Online"],
          ["Application Window", "29.08.2026 to 15.09.2026"],
          ["Age Limit", "22–45 years, varies by post (as on 01.08.2026)"],
          ["Selection Process", "Online Examination + Interview (80:20 weightage)"],
          ["Official Website", "iob.bank.in"]
        ]
      },
      {
        title: "Post-wise Vacancy Details",
        columns: ["Post Code", "Post Name", "Scale", "Vacancies"],
        rows: [
          ["01", "Manager (Branch Management)", "MMGS II", "100"],
          ["02", "Manager (IT)", "MMGS II", "65"],
          ["03", "Manager (Information Security)", "MMGS II", "5"],
          ["04", "Manager (Information Security Audit)", "MMGS II", "5"],
          ["05", "Senior Manager (IT)", "MMGS III", "10"],
          ["06", "Senior Manager (Information Security)", "MMGS III", "3"],
          ["07", "Senior Manager (Information Security Audit)", "MMGS III", "2"],
          ["08", "Senior Manager (Database Administrator)", "MMGS III", "10"],
          ["09", "Senior Manager (Network Administrator)", "MMGS III", "5"],
          ["10", "Senior Manager (Cyber Security Administrator)", "MMGS III", "5"],
          ["11", "Manager (Credit)", "MMGS II", "35"],
          ["12", "Senior Manager (Credit)", "MMGS III", "15"],
          ["13", "Senior Manager (Risk)", "MMGS III", "6"],
          ["14", "Assistant Manager (Security)", "JMGS I", "25"],
          ["—", "Total", "—", "291"]
        ]
      },
      {
        title: "Category-wise Vacancy Break-up",
        columns: ["Category", "Vacancies"],
        rows: [
          ["UR", "117"],
          ["OBC", "79"],
          ["SC", "46"],
          ["ST", "21"],
          ["EWS", "28"],
          ["Total", "291"],
          ["PwBD (horizontal, within above)", "12 total — HI: 4, OC: 5, VI: 2, ID: 1"]
        ]
      },
      {
        title: "Post-wise Educational Qualification",
        columns: ["Code", "Post Name", "Qualification"],
        rows: [
          ["01", "Manager (Branch Management)", "Degree in any discipline from a recognised University"],
          ["02", "Manager (IT)", "B.E./B.Tech (CS/IT/E&C/E&I), MCA or M.Sc. (CS/IT)"],
          ["03", "Manager (Information Security)", "B.E./B.Tech or M.E./M.Tech in CS/IT/E&C/Cyber Security/Info. Security"],
          ["04", "Manager (Info. Security Audit)", "B.E./B.Tech, M.E./M.Tech or MCA (as above)"],
          ["05", "Senior Manager (IT)", "B.E./B.Tech (CS/IT/E&C/E&I), MCA or M.Sc. (CS/IT)"],
          ["06", "Senior Manager (Information Security)", "B.E./B.Tech or M.E./M.Tech in CS/IT/E&C/Cyber Security/Info. Security"],
          ["07", "Senior Manager (Info. Security Audit)", "B.E./B.Tech, M.E./M.Tech or MCA (as above)"],
          ["08", "Senior Manager (Database Administrator)", "B.E./B.Tech (CS/IT/E&C/E&I), MCA or M.Sc. (CS/IT)"],
          ["09", "Senior Manager (Network Administrator)", "B.E./B.Tech, M.Tech (CS/IT/E&C/E&I) or MCA"],
          ["10", "Senior Manager (Cyber Security Administrator)", "B.E./B.Tech or M.E./M.Tech in CS/IT/E&C/Cyber Security/Info. Security"],
          ["11", "Manager (Credit)", "Bachelor's + MBA (Finance)/PGDBA/PGDBM/MMS (Finance), or CA/CMA"],
          ["12", "Senior Manager (Credit)", "Bachelor's + MBA (Finance)/PGDBA/PGDBM/MMS (Finance), or CA/CMA"],
          ["13", "Senior Manager (Risk)", "Graduation + MBA/PGDM (Finance)/PGDBF/MFM/MFC/Masters in Maths/Stats/Economics, or GARP/PRMIA certification"],
          ["14", "Assistant Manager (Security)", "Graduate + certification course (3+ months) in Computer/IT/CS"]
        ]
      },
      {
        title: "Post-wise Age Limit",
        columns: ["Code", "Post Name", "Age (Min–Max)"],
        rows: [
          ["01", "Manager (Branch Management)", "23–33 years"],
          ["02", "Manager (IT)", "25–35 years"],
          ["03", "Manager (Information Security)", "22–32 years"],
          ["04", "Manager (Info. Security Audit)", "22–32 years"],
          ["05", "Senior Manager (IT)", "28–38 years"],
          ["06", "Senior Manager (Information Security)", "25–35 years"],
          ["07", "Senior Manager (Info. Security Audit)", "25–35 years"],
          ["08", "Senior Manager (Database Administrator)", "28–38 years"],
          ["09", "Senior Manager (Network Administrator)", "25–35 years"],
          ["10", "Senior Manager (Cyber Security Administrator)", "25–35 years"],
          ["11", "Manager (Credit)", "23–33 years"],
          ["12", "Senior Manager (Credit)", "25–35 years"],
          ["13", "Senior Manager (Risk)", "25–35 years"],
          ["14", "Assistant Manager (Security)", "30–45 years"]
        ]
      },
      {
        title: "Post-wise Experience Required",
        columns: ["Code", "Post Name", "Experience"],
        rows: [
          ["01", "Manager (Branch Management)", "3 yrs as an Officer in a Scheduled Bank, incl. 2 yrs in Branch Banking"],
          ["02", "Manager (IT)", "5+ yrs IT experience, incl. 3 yrs in Banking/BFSI, with hands-on skill in one specified technology area"],
          ["03", "Manager (Information Security)", "2+ yrs across at least 3 specified security domains"],
          ["04", "Manager (Info. Security Audit)", "2+ yrs, incl. 1 yr in IS/Cyber Security Audit in Banking/BFSI, or equivalent development experience"],
          ["05", "Senior Manager (IT)", "8+ yrs IT experience, incl. 5 yrs in Banking/BFSI; CISA/CISSP/ISO 27001:LA/OSCP certification mandatory"],
          ["06", "Senior Manager (Information Security)", "5+ yrs across at least 3 specified security domains"],
          ["07", "Senior Manager (Info. Security Audit)", "5+ yrs, incl. 3 yrs in IS/Cyber Security Audit in Banking/BFSI, or equivalent development experience"],
          ["08", "Senior Manager (Database Administrator)", "8+ yrs DBA experience, incl. 5 yrs production DBA and 3 yrs in Banking/BFSI; OCA/OCP certification mandatory"],
          ["09", "Senior Manager (Network Administrator)", "5+ yrs in Network Operations incl. Cisco FTD/Checkpoint firewall security; CCNA or Checkpoint CCSE certification mandatory"],
          ["10", "Senior Manager (Cyber Security Administrator)", "5+ yrs across at least 2 specified cyber security domains"],
          ["11", "Manager (Credit)", "3 yrs post-qualification experience in a Bank/FI, incl. 2 yrs in credit"],
          ["12", "Senior Manager (Credit)", "6 yrs post-qualification experience in a Bank/FI, incl. 4 yrs in credit"],
          ["13", "Senior Manager (Risk)", "5+ yrs in a Bank/NBFC/FI in Risk, Credit, Forex, Treasury or Finance"],
          ["14", "Assistant Manager (Security)", "Retired JCO or equivalent with 5+ yrs in Armed Forces; or Inspector/Sub-Inspector-and-above rank with 5+ yrs in Paramilitary Forces or Police"]
        ]
      },
      {
        title: "Age Relaxation",
        columns: ["Category", "Age Relaxation"],
        rows: [
          ["SC / ST", "5 years"],
          ["OBC (Non-Creamy Layer)", "3 years"],
          ["PwBD", "10 years"],
          ["Persons affected by 1984 riots", "5 years"],
          ["Ex-Servicemen / Commissioned Officers (min. 5 yrs service)", "5 years"]
        ]
      },
      {
        title: "Salary / Pay Scale",
        columns: ["Scale", "Pay Scale (₹)"],
        rows: [
          ["JMGS I", "48,480 – 2000/7 – 62,480 – 2340/2 – 67,160 – 2680/7 – 85,290"],
          ["MMGS II", "64,820 – 2340/1 – 67,160 – 2680/10 – 93,960"],
          ["MMGS III", "85,920 – 2680/5 – 99,320 – 2980/2 – 1,05,280"]
        ]
      },
      {
        title: "Application Fee",
        columns: ["Category", "Fee"],
        rows: [
          ["SC / ST / PwBD", "₹175/- (incl. GST)"],
          ["All Others (incl. OBC & EWS)", "₹1,000/- (incl. GST)"]
        ]
      },
      {
        title: "Documents Required",
        columns: ["#", "Document"],
        rows: [
          ["1", "Printout of the valid Interview Call Letter"],
          ["2", "System-generated printout of the online application form"],
          ["3", "Proof of Date of Birth (Birth Certificate or Class 10 Certificate with DOB)"],
          ["4", "Photo ID Proof (Passport / Aadhaar / PAN / Driving Licence / Voter ID)"],
          ["5", "Mark sheets and certificates for educational qualifications"],
          ["6", "Work experience proof (experience certificates, appointment/relieving letters, salary slips)"],
          ["7", "Certificates for relevant professional certifications, where applicable"],
          ["8", "Caste Certificate (for SC/ST/OBC-NCL/EWS candidates, prescribed format)"],
          ["9", "Disability Certificate (for PwBD candidates, issued by the District Medical Board)"],
          ["10", "No Objection Certificate (for candidates currently in Govt./PSU/Bank service)"]
        ]
      },
      {
        title: "IOB Online Examination Pattern",
        columns: ["Applicable To", "Section", "Questions", "Duration"],
        rows: [
          ["Manager (Branch Management)", "English Language", "25", "30 min"],
          ["Manager (Branch Management)", "Professional Knowledge (Banking Law, Economy, Practices, Accounting)", "75", "90 min"],
          ["All Other Posts", "English Language", "25", "30 min"],
          ["All Other Posts", "General Awareness (Banking focus)", "25", "30 min"],
          ["All Other Posts", "Professional Knowledge (post-specific)", "50", "60 min"]
        ],
        section: "selection-process"
      }
    ],
    howToApply: {
      intro: "Candidates can apply online only, through IOB's official careers page. Follow these steps:",
      steps: [
        "Visit IOB's official website (iob.bank.in) and open the 'Careers' section.",
        "Select 'Recruitment of Generalist/Specialist Officers in Various Scales – 2026-27' and choose the post you want to apply for.",
        "Click 'Register Online' and complete first-time registration with your basic details.",
        "Note down the system-generated registration number and password sent to you by email/SMS.",
        "Upload your photograph, signature, left thumb impression and a hand-written declaration as per the prescribed specifications.",
        "Fill in the rest of the application form carefully, then click 'Complete Registration'.",
        "Pay the application fee online via debit card, credit card, internet banking or UPI.",
        "Save and print the submitted application form and payment receipt for your records."
      ]
    },
    selectionProcess: {
      intro: "Selection for IOB Generalist/Specialist Officer 2026 is a two-stage process:",
      steps: [
        "Online Examination — 100 questions/100 marks in 2 hours. For Manager (Branch Management) it covers English Language plus Professional Knowledge in Banking Law, Indian Economy, Banking Practices and Accounting; for every other post it covers English Language, General Awareness (banking-focused) and post-specific Professional Knowledge.",
        "There's no minimum qualifying mark for English Language or General Awareness, but Professional Knowledge has one — 35% for unreserved candidates, 30% for reserved candidates.",
        "1/4th of the marks allotted to a question is deducted for each wrong answer; unattempted questions carry no penalty.",
        "Personal Interview — carries 100 marks, assessing role-related industry exposure, subject knowledge and communication skills. Minimum qualifying marks: 50% for unreserved, 45% for reserved candidates.",
        "Final selection is based on a combined score — 80% weightage to the Online Examination and 20% to the Interview."
      ]
    },
    examPreparation: {
      intro: "A few tips to prepare for IOB Generalist/SO 2026:",
      tips: [
        "Since there's no sectional cut-off for English or General Awareness but Professional Knowledge has one, prioritise strengthening your post-specific subject knowledge first.",
        "Because of the 1/4th negative marking, skip questions you're genuinely unsure about rather than guessing.",
        "For Specialist Officer posts, revise the core concepts of your domain (IT, Information Security, Credit, Risk, etc.) rather than only exam-oriented material, since the Interview also tests subject depth.",
        "Keep your professional certifications (CISA, CCNA, OCA, etc., where applicable to your post) and experience documents ready early, since several posts have mandatory certification requirements.",
        "Brush up on current developments in the banking industry for the General Awareness section."
      ]
    },
    faqs: [
      { q: "How many vacancies are there in IOB Recruitment 2026?", a: "A total of 291 vacancies are notified across 14 Generalist and Specialist Officer posts in JMGS I, MMGS II and MMGS III." },
      { q: "What is the last date to apply for IOB Recruitment 2026?", a: "The online application window closes on 15 September 2026." },
      { q: "Can I apply for more than one post?", a: "Yes, you can apply for more than one post, as long as you meet the eligibility criteria for each post you apply to." },
      { q: "What is the application fee?", a: "₹175/- (inclusive of GST) for SC/ST/PwBD candidates, and ₹1,000/- (inclusive of GST) for all other candidates, including OBC and EWS." },
      { q: "What is the selection process?", a: "An Online Examination followed by a Personal Interview — the final merit list is based on 80% weightage to the exam and 20% to the interview." },
      { q: "Is there negative marking in the exam?", a: "Yes, 1/4th of the marks allotted to a question is deducted for each wrong answer; there's no penalty for questions left unattempted." }
    ],
    applyLink: "https://ibpsreg.ibps.in/iobgoaug26/",
    notificationLink: "https://www.iob.bank.in/documents/d/guest/Revised-FINAL-Web-Ad-Recruitment-Gen-Spl-2026-27",
    officialWebsite: "https://www.iob.bank.in"
  },
  {
    id: "state-police-constable-2026",
    category: "job",
    sector: "Police & Defence",
    title: "State Police Constable Recruitment 2026 – 4500 Posts",
    organization: "State Police Department",
    postedDate: "2026-08-10",
    lastDate: "2026-09-05",
    vacancies: "4500",
    qualification: "10th / 12th Pass",
    shortDesc: "Applications invited for Constable posts across the state.",
    description:
      "State Police Department has invited applications from eligible male and female candidates for the post of Constable. Selection will be through Physical Efficiency Test, Written Exam and Medical Test.",
    importantDates: [
      { label: "Notification Date", value: "10 Aug 2026" },
      { label: "Apply Last Date", value: "05 Sep 2026" },
      { label: "PET/PST Date", value: "To be notified" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },
  {
    id: "indian-army-agniveer-2026",
    category: "job",
    sector: "Police & Defence",
    title: "Indian Army Agniveer Recruitment 2026 – 10000 Posts",
    organization: "Indian Army",
    postedDate: "2026-08-24",
    lastDate: "2026-09-18",
    vacancies: "10000",
    qualification: "10th / 12th Pass",
    shortDesc: "Online applications invited for Agniveer (General Duty, Technical & Clerk) posts across the country.",
    description:
      "Indian Army has released the notification for recruitment of Agniveers under the Agnipath scheme, covering General Duty, Technical and Clerk/Store Keeper categories. Interested and eligible candidates can apply online before the last date.\n\nSelection will be based on a Common Entrance Examination, Physical Fitness Test, Physical Measurement and Medical Examination.",
    importantDates: [
      { label: "Notification Date", value: "24 Aug 2026" },
      { label: "Apply Last Date", value: "18 Sep 2026" },
      { label: "CEE Exam Date", value: "To be notified" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },

  {
    id: "ssc-chsl-admitcard-2026",
    category: "admitcard",
    sector: "SSC",
    title: "SSC CHSL Tier-1 Admit Card 2026 Released",
    organization: "Staff Selection Commission (SSC)",
    postedDate: "2026-08-22",
    lastDate: "",
    vacancies: "—",
    qualification: "As per notification",
    shortDesc: "Download your Tier-1 exam admit card / hall ticket from the official SSC regional website.",
    description:
      "SSC has released the admit card for CHSL Tier-1 examination 2026. Candidates can download their admit card using registration number and date of birth from the official regional SSC website.\n\nCarry a printed copy of the admit card along with a valid photo ID to the exam center.",
    importantDates: [
      { label: "Admit Card Released", value: "22 Aug 2026" },
      { label: "Exam Date", value: "05 Sep 2026 onwards" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },
  {
    id: "rrb-ntpc-admitcard-2026",
    category: "admitcard",
    sector: "Railway",
    title: "RRB NTPC CBT 2 Admit Card 2026 Download",
    organization: "Railway Recruitment Board (RRB)",
    postedDate: "2026-08-19",
    lastDate: "",
    vacancies: "—",
    qualification: "As per notification",
    shortDesc: "CBT-2 admit card is now available for download on the regional RRB website.",
    description:
      "Railway Recruitment Board has made the CBT-2 admit card available for candidates who qualified in CBT-1. Download the admit card using your registration credentials well before the exam date.",
    importantDates: [
      { label: "Admit Card Released", value: "19 Aug 2026" },
      { label: "CBT-2 Exam Date", value: "01 Sep 2026 onwards" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },
  {
    id: "state-nursing-admitcard-2026",
    category: "admitcard",
    sector: "Medical & Health",
    title: "State Nursing Admission Hall Ticket 2026 Out",
    organization: "State Health & Medical Education Department",
    postedDate: "2026-08-16",
    lastDate: "",
    vacancies: "—",
    qualification: "12th (Science)",
    shortDesc: "Download hall ticket for ANM/GNM entrance examination.",
    description:
      "Hall tickets for the state ANM/GNM Nursing entrance examination 2026 have been released. Candidates can download the hall ticket from the official department portal using their application number.",
    importantDates: [
      { label: "Hall Ticket Released", value: "16 Aug 2026" },
      { label: "Entrance Exam Date", value: "30 Aug 2026" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },

  {
    id: "ntpc-cbt1-result-2026",
    category: "result",
    sector: "Railway",
    title: "RRB NTPC CBT-1 Result 2026 Declared",
    organization: "Railway Recruitment Board (RRB)",
    postedDate: "2026-08-21",
    lastDate: "",
    vacancies: "—",
    qualification: "As per notification",
    shortDesc: "Check CBT-1 result, scorecard and cutoff marks region-wise.",
    description:
      "Railway Recruitment Board has declared the result for NTPC CBT-1 examination. Candidates can check their result and download the scorecard from the official RRB regional website using their registration number.",
    importantDates: [
      { label: "Result Declared", value: "21 Aug 2026" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },
  {
    id: "ssc-mts-result-2026",
    category: "result",
    sector: "SSC",
    title: "SSC MTS Final Result 2026 Out",
    organization: "Staff Selection Commission (SSC)",
    postedDate: "2026-08-14",
    lastDate: "",
    vacancies: "—",
    qualification: "As per notification",
    shortDesc: "Final merit list and result declared for Multi Tasking Staff exam.",
    description:
      "SSC has declared the final result for Multi Tasking Staff (MTS) Examination. The final merit list along with category-wise cutoff has been published on the official website.",
    importantDates: [
      { label: "Result Declared", value: "14 Aug 2026" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },
  {
    id: "state-teacher-result-2026",
    category: "result",
    sector: "Others",
    title: "State Teacher Recruitment Result 2026 – Merit List",
    organization: "State Education Department",
    postedDate: "2026-08-12",
    lastDate: "",
    vacancies: "—",
    qualification: "As per notification",
    shortDesc: "District-wise merit list published for teacher recruitment 2026.",
    description:
      "The State Education Department has published the district-wise merit list for Teacher Recruitment 2026. Candidates can check their result and merit position on the official department website.",
    importantDates: [
      { label: "Merit List Published", value: "12 Aug 2026" }
    ],
    applyLink: "#",
    notificationLink: "#"
  },

  {
    id: "ssc-cgl-syllabus-2026",
    category: "syllabus",
    sector: "SSC",
    title: "SSC CGL 2026 Syllabus & Exam Pattern (PDF)",
    organization: "Staff Selection Commission (SSC)",
    postedDate: "2026-08-13",
    lastDate: "",
    vacancies: "—",
    qualification: "—",
    shortDesc: "Subject-wise syllabus and detailed exam pattern for Tier-I and Tier-II.",
    description:
      "Detailed subject-wise syllabus for SSC CGL 2026 covering General Intelligence & Reasoning, General Awareness, Quantitative Aptitude and English Comprehension, along with the marking scheme for Tier-I and Tier-II exams.",
    importantDates: [],
    applyLink: "#",
    notificationLink: "#"
  },
  {
    id: "rrb-alp-syllabus-2026",
    category: "syllabus",
    sector: "Railway",
    title: "RRB ALP Syllabus 2026 in Hindi – CBT 1 & 2",
    organization: "Railway Recruitment Board (RRB)",
    postedDate: "2026-08-11",
    lastDate: "",
    vacancies: "—",
    qualification: "—",
    shortDesc: "Complete syllabus and topic-wise weightage for Assistant Loco Pilot exam.",
    description:
      "Complete syllabus for RRB Assistant Loco Pilot (ALP) CBT-1 and CBT-2 examinations including topic-wise weightage, recommended books and exam pattern.",
    importantDates: [],
    applyLink: "#",
    notificationLink: "#"
  },
  {
    id: "ssc-steno-syllabus-2026",
    category: "syllabus",
    sector: "SSC",
    title: "SSC Stenographer Syllabus 2026 – Skill Test & Exam Pattern",
    organization: "Staff Selection Commission (SSC)",
    postedDate: "2026-08-09",
    lastDate: "",
    vacancies: "—",
    qualification: "—",
    shortDesc: "Detailed syllabus for written exam and stenography skill test.",
    description:
      "Detailed syllabus for SSC Stenographer Grade C & D examination, including written exam topics and stenography skill test speed/accuracy requirements.",
    importantDates: [],
    applyLink: "#",
    notificationLink: "#"
  }
];
