import type { StaticImageData } from "next/image";
import anxietyDetection from "../assets/projects/anxiety-detection.webp";
import blockGraph from "../assets/projects/block-graph.webp";
import duaWebApp from "../assets/projects/dua-web-app.webp";
import nodrift from "../assets/projects/nodrift.webp";
import phoneStore from "../assets/projects/phone-store.webp";
import sepia from "../assets/projects/sepia.webp";
import taskManager from "../assets/projects/task-manager.webp";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const NAME = "Mushfiqus Salehin Afnan";
export const ROLE = "Web Developer & Clinical AI Specialist";

// The CV lives in Google Drive so it can be updated without a redeploy: replace
// the file in Drive (Manage versions keeps this ID) and the site picks it up
// within an hour. /cv.pdf proxies it for the in-page viewer.
export const RESUME_DRIVE_ID = "1_D7aZqK8ytZZWAmbEQEPhPS7Rv1uZaVa";
export const RESUME_URL = `https://drive.google.com/file/d/${RESUME_DRIVE_ID}/view`;
export const RESUME_PDF = "/cv.pdf";
export const RESUME_FILENAME = "Mushfiqus-Salehin-Afnan-CV.pdf";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/salehinafnan",
  github: "https://github.com/salehinafnan",
};

export const HERO_CONTENT = `I build fast, user-friendly web apps with React, Next.js, Node.js and TypeScript, and I work where AI meets healthcare. As a Clinical AI Specialist at Commure Bangladesh, I partner with physicians from Sutter Health and UCSF to keep patient records accurate across specialties. I have co-authored peer-reviewed research on multimodal machine learning, published by IEEE and the Journal of Universal Computer Science, and sharpened my problem solving through competitive programming.`;

export const ABOUT_TEXT = `I'm a Computer Science and Engineering graduate from International Islamic University Chittagong, and my work sits where software, data and healthcare meet. At Commure Bangladesh, I work one-on-one with clinicians in Gynecologic Oncology, ENT, Pediatrics, Orthopedics and Ophthalmology, documenting patient visits in their EHRs with proprietary AI tools. Alongside that, I build full-stack web apps, from local-first PWAs to MERN social platforms, and my research on non-intrusive anxiety detection has been published in an IEEE conference and a journal. I've guided Numerical Methods labs as a teaching assistant, and I enjoy turning complex problems into simple, reliable solutions. Outside of work, I stay active, explore new technologies and photograph my favourite moments, a hobby I also brought to the IIUC Photography Society as its Public Relations Secretary.`;

export type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  certificate?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    year: "June 2024 – Present",
    role: "Clinical AI Specialist",
    company: "Commure Bangladesh",
    description:
      "Work one-on-one with clinicians from Sutter Health and UCSF, documenting and updating patient EHRs during visits with proprietary AI tools. Experienced across Gynecologic Oncology, ENT, Pediatrics, Orthopedics and Ophthalmology.",
    technologies: ["Clinical AI", "EHR Systems", "Medical Documentation", "HIPAA"],
  },
  {
    year: "July 2022 – January 2023",
    role: "Teaching Assistant, Numerical Methods",
    company: "International Islamic University Chittagong",
    description: "Assisted and guided 7th-semester students with their lab assignments, and assessed reports, assignments and projects.",
    technologies: ["Numerical Methods", "Teaching"],
    certificate: "https://drive.google.com/file/d/1jDLBF_uvQuG37cKfaKadINdku-m5qO_c/view",
  },
];

export const EDUCATION = {
  period: "November 2018 – December 2022",
  degree: "Bachelor of Computer Science and Engineering",
  school: "International Islamic University Chittagong",
  description:
    "Graduated with a cumulative GPA of 3.429. Along the way I worked as a teaching assistant, co-authored research on multimodal anxiety detection and served as Public Relations Secretary of the IIUC Photography Society.",
  certificate: "https://drive.google.com/file/d/14YwOJYa6RjZphB9bNceQsyBgyPgVrfiy/view",
};

export type Credential = {
  kind: "certificate" | "language" | "code" | "photography";
  title: string;
  detail: string;
  links: { label: string; href: string }[];
};

export const CREDENTIALS: Credential[] = [
  {
    kind: "certificate",
    title: "Meta Front-End Developer Professional Certificate",
    detail: "Meta · Coursera",
    links: [{ label: "Certificates", href: "https://drive.google.com/drive/folders/11_OLL31Ty4yIHFEI61PSmIo-vzMD03Eg" }],
  },
  {
    kind: "certificate",
    title: "Full Stack Web Development with MERN",
    detail: "Ostad",
    links: [{ label: "Certificate", href: "https://ostad.app/share/certificate/c5341-mushfiqus-salehin-afnan" }],
  },
  {
    kind: "certificate",
    title: "Neural Networks and Deep Learning",
    detail: "DeepLearning.AI · Coursera",
    links: [{ label: "Certificate", href: "https://coursera.org/share/47a0ff59d1e5f84e11c0543c4271c00c" }],
  },
  {
    kind: "language",
    title: "IELTS",
    detail: "Overall band score 8",
    links: [{ label: "Test report", href: "https://drive.google.com/file/d/1AlbejCHxVKZNs15H6K0j6C-fmDFTp_8H/view" }],
  },
  {
    kind: "code",
    title: "Competitive Programming",
    detail: "Algorithms and problem solving practice",
    links: [
      { label: "CodeChef", href: "https://www.codechef.com/users/salehinafnan" },
      { label: "Codeforces", href: "https://codeforces.com/profile/0utrun" },
      { label: "LeetCode", href: "https://leetcode.com/salehinafnan" },
    ],
  },
  {
    kind: "photography",
    title: "IIUC Photography Society",
    detail: "Public Relations Secretary",
    links: [],
  },
];

export type Publication = {
  date: string;
  title: string;
  authors: string[];
  venue: string;
  description: string;
  publisher: string;
  type: string;
  link: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    date: "March 2025",
    title: "Novel Multimodal Fusion Algorithm for Non-Intrusive Anxiety Detection",
    authors: ["Mahir Shadid", NAME, "Rashed Mustafa", "M. Jamshed Alam Patwary"],
    venue: "Journal of Universal Computer Science, Volume 31, Issue 4, pp. 422–442",
    description:
      "Extends TI-Fusion into a full journal study. Six classifiers, including XGBoost, SVM and Random Forest, learn from questionnaire answers while a CNN with a Real Gabor filter reads facial expressions from the KDEF and CK+ datasets. Late fusion of the two reaches 92.38% accuracy, outperforming existing multimodal methods without any intrusive testing.",
    publisher: "JUCS",
    type: "Journal article",
    link: "https://lib.jucs.org/article/127703/",
  },
  {
    date: "December 2023",
    title: "TI-Fusion: A Multimodal Anxiety Disorder Detection Method",
    authors: ["Mahir Shadid", NAME, "Muhammed J. A. Patwary"],
    venue: "2023 6th International Conference on Electrical Information and Communication Technology (EICT)",
    description:
      "Introduces TI-Fusion, which detects anxiety disorders by combining a model trained on DASS-21 questionnaire answers with a CNN trained on Gabor-filtered facial expressions, using late fusion.",
    publisher: "IEEE",
    type: "Conference paper",
    link: "https://ieeexplore.ieee.org/document/10427924",
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  // With a live link, scripts/capture-screenshots.mjs keeps this in step with the site.
  image: StaticImageData;
  live?: string;
  source: string;
  // How that script loads the site, or false to keep a screenshot made by hand.
  capture?:
    | false
    | {
        colorScheme?: "light" | "dark";
        // A backend that sleeps when idle, woken before the page loads.
        wake?: string;
        // Set before the page loads, e.g. sample data for an app that starts empty.
        localStorage?: Record<string, unknown>;
        // A selector the page must show, or the old screenshot is kept and the run fails.
        waitFor?: string;
      };
};

// The date `days` from today in Dhaka, as YYYY-MM-DD.
const dueIn = (days: number) => new Date(Date.now() + days * 864e5).toLocaleDateString("en-CA", { timeZone: "Asia/Dhaka" });

// Showcased with a screenshot. The first one is featured full width.
export const PROJECTS: Project[] = [
  {
    title: "nodrift",
    description:
      "A local-first work-hour tracker that runs entirely in the browser, with no account needed. It paces daily goals against a weekly target, detects sleep and idle time, and has a keyboard-driven command palette that understands entries like “add yesterday 9am to 5pm”. Data lives in IndexedDB with snapshot rollbacks, the app installs as an offline PWA, and optional cloud sync runs on Supabase with row-level security.",
    technologies: ["JavaScript", "IndexedDB", "Web Workers", "PWA", "Supabase", "PostgreSQL"],
    image: nodrift,
    live: "https://nodrift.vercel.app/",
    source: "https://github.com/salehinafnan/nodrift",
    capture: { colorScheme: "dark" },
  },
  {
    title: "Sepia",
    description:
      "A MERN stack photo-sharing app with email and Google sign-in. Users create, edit, like and delete posts with a photo, caption and tags in an infinite-scrolling feed, with light and dark themes on a fully responsive layout. Likes update optimistically, photos are resized in the browser before upload, and the Express 5 API validates every request with zod, rate-limits sign-ins and is covered by integration tests.",
    technologies: ["MongoDB", "Express.js", "React", "Redux Toolkit", "Node.js", "Tailwind CSS"],
    image: sepia,
    live: "https://sepia.onrender.com/",
    source: "https://github.com/salehinafnan/sepia",
    // The API is on Render's free tier, which sleeps when idle, and the app shows a notice while it wakes.
    // Each post is an <article>, so an empty feed keeps the old screenshot.
    capture: { wake: "https://sepia-server.onrender.com/", waitFor: "article" },
  },
  {
    title: "Dua Web App",
    description:
      "A bilingual English and Bangla reader for 176 duas (Islamic supplications) with Arabic text, transliteration, translation, references and recitation audio. It has full-text search that matches Bangla however it is typed, bookmarks, and reader settings for script, font size and night mode that apply before the first paint. Every category is pre-rendered from a bundled SQLite database, which also backs a cached REST API served by Next.js or a standalone Express server.",
    technologies: ["Next.js", "React", "Tailwind CSS", "SQLite", "Express.js"],
    image: duaWebApp,
    live: "https://dua-web-app-afnan.vercel.app/",
    source: "https://github.com/salehinafnan/dua-web-app",
  },
  {
    title: "Multimodal Anxiety Detection",
    description:
      "My undergraduate thesis, TI-Fusion, which detects anxiety from two modalities. A classifier grades answers to the seven anxiety items of the DASS-21 questionnaire into five severity levels, and a CNN reads facial expressions from the CK+48 and KDEF datasets through a bank of Gabor filters. A small neural network fuses both outputs into a final anxiety or no-anxiety decision, and one function runs the whole pipeline end to end.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "XGBoost", "OpenCV", "Jupyter"],
    // A diagram of the pipeline, drawn with the repo's real Gabor kernels.
    image: anxietyDetection,
    source: "https://github.com/salehinafnan/anxiety-disorder-detection-using-multimoadal-learning",
  },
  {
    title: "Task Management App",
    description:
      "A keyboard-friendly task manager with Today, Upcoming, project and tag views, each as a list or a drag-and-drop board. Quick add picks up dates, priorities and tags from entries like “Send invoice friday !high #work”, and tasks carry repeat rules, notes and subtasks. State is managed with MobX-State-Tree, saved to local storage and synced across tabs.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MobX-State-Tree", "Radix UI", "dnd-kit"],
    image: taskManager,
    live: "https://afnantask.vercel.app/",
    source: "https://github.com/salehinafnan/task-management-app",
    // The app's own example tasks. It shows due dates as "Today", "Tomorrow" and so on, so they're
    // set relative to the day of the capture.
    capture: {
      localStorage: {
        taskStore: {
          version: 2,
          projects: [
            { id: "web", name: "Website relaunch", color: "iris" },
            { id: "home", name: "Home", color: "sage" },
            { id: "read", name: "Reading list", color: "amber" },
          ],
          tasks: [
            {
              title: "Finalize landing page copy",
              notes: "Tighten the hero headline and trim the feature list to three points.",
              status: "in_progress",
              priority: "high",
              due: dueIn(0),
              projectId: "web",
              tags: ["writing"],
              subtasks: [
                { id: "s1", title: "Hero headline", done: true },
                { id: "s2", title: "Feature bullets", done: true },
                { id: "s3", title: "Pricing FAQ" },
              ],
            },
            {
              title: "Review pull requests",
              priority: "medium",
              due: dueIn(0),
              repeat: "weekdays",
              projectId: "web",
              tags: ["dev"],
            },
            { title: "Book dentist appointment", priority: "low", due: dueIn(-1), projectId: "home" },
            {
              title: "Design system audit",
              notes: "Check spacing tokens, focus states and dark mode contrast.",
              priority: "medium",
              due: dueIn(2),
              projectId: "web",
              tags: ["design"],
              subtasks: [
                { id: "s4", title: "Colors" },
                { id: "s5", title: "Typography" },
                { id: "s6", title: "Components" },
              ],
            },
            { title: "Plan weekend hike", due: dueIn(4), projectId: "home", tags: ["outdoors"] },
            { title: "Water the plants", due: dueIn(1), repeat: "weekly", projectId: "home" },
            {
              title: "Read “The Design of Everyday Things”",
              status: "in_progress",
              projectId: "read",
              tags: ["design"],
              subtasks: [
                { id: "s7", title: "Chapters 1–3", done: true },
                { id: "s8", title: "Chapters 4–5" },
                { id: "s9", title: "Chapters 6–7" },
              ],
            },
            { title: "Set up analytics dashboard", priority: "high", due: dueIn(9), projectId: "web", tags: ["dev"] },
            { title: "Renew passport", priority: "medium", projectId: "home" },
            {
              title: "Draft launch announcement",
              status: "done",
              projectId: "web",
              tags: ["writing"],
              completedAt: Date.now() - 36e5,
            },
            { title: "Order new running shoes", status: "done", projectId: "home", completedAt: Date.now() - 864e5 },
          ].map((task, order) => ({ id: `${order + 1}`, order, ...task })),
        },
      },
    },
  },
  {
    title: "Random Block Graph Generator",
    description:
      "Spawn, delete, drag and resize randomly placed blocks. Each new block is linked to its parent by a line between their centres that follows it as it moves, and deleting a block removes its whole subtree. Works with a mouse, pen or touch.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    image: blockGraph,
    live: "https://random-block-graph-generator.vercel.app/",
    source: "https://github.com/salehinafnan/random-block-graph-generator",
    // A fresh visit is one block at a random spot, so the screenshot is made by hand to show a tree.
    capture: false,
  },
  {
    title: "Phone Store",
    description:
      "A single-page phone shop with a product catalogue, product pages, an “added to cart” dialog and a cart with quantities, tax and totals. Brand filters and price sorting live in the URL, product pages deep-link by id, and the cart is a pure reducer that persists to localStorage. The dialog works from the keyboard, icons and fonts are self-hosted, and Vitest and Testing Library cover the cart logic and user flows.",
    technologies: ["React", "Vite", "React Router", "styled-components", "Bootstrap", "Vitest"],
    image: phoneStore,
    source: "https://github.com/salehinafnan/react-phone-store",
  },
];

export type Repository = {
  title: string;
  description: string;
  technologies: string[];
  source: string;
  team?: boolean;
};

// Smaller and academic work, shown as compact cards.
export const REPOSITORIES: Repository[] = [
  {
    title: "Long-Polling Message Server",
    description:
      "An HTTP message queue built on long polling. Producers post JSON messages to a key, and consumers wait on it until a message arrives or the poll times out. Each message reaches exactly one consumer, waiting consumers are served in order, and a disconnect cancels its wait through an AbortSignal, so no message is lost. It has 17 tests.",
    technologies: ["Node.js", "Express.js", "node:test"],
    source: "https://github.com/salehinafnan/backend-long-polling-server",
  },
  {
    title: "Vaxin",
    description:
      "An Android app for managing COVID-19 vaccination in Bangladesh, with a mixed Bangla and English interface. Citizens register with their NID, see their vaccination date and download a vaccine card, while three PIN-protected admin roles assign dates, record doses and search registrations. It also lists hospitals and ambulances by division, with all data in Firebase Realtime Database.",
    technologies: ["Java", "Android", "Firebase", "Gradle"],
    source: "https://github.com/salehinafnan/vaxin-1.0",
    team: true,
  },
  {
    title: "Cereal Nutrition Analysis",
    description:
      "An analysis of 77 breakfast cereals, with Linear, Ridge and Lasso models that predict each cereal's rating from its nutrition facts. Sugar is the strongest predictor of a low rating (r = −0.76), and the rating is an exact linear formula of nine nutrients: each gram of fibre adds 3.4 points and each gram of sugar costs 0.7.",
    technologies: ["Python", "pandas", "scikit-learn", "seaborn"],
    source: "https://github.com/salehinafnan/machine-learning-implementation",
  },
  {
    title: "Air Quality Monitor",
    description:
      "An Arduino Uno air quality monitor, built for an electronics lab, that shows an MQ-135 gas sensor's reading on a 16x2 LCD and flags the air as good or bad. It averages 10 samples per update, holds a dead-band around the threshold so the status doesn't flicker, and streams readings to the Arduino Serial Plotter. The repo includes the Proteus simulation and breadboard wiring.",
    technologies: ["Arduino", "C++", "MQ-135", "Proteus"],
    source: "https://github.com/salehinafnan/air-quality-sensor",
    team: true,
  },
  {
    title: "Campus Network with OSPF",
    description:
      "A six-department campus network for the university networking lab, emulated in GNS3 with Cisco 7200 routers, VLSM addressing and single-area OSPF. Eight serial links form a partial mesh, so losing any one link leaves every LAN reachable. A Python linter checks the topology and every router and PC config, prints the addressing plan and draws the topology diagram.",
    technologies: ["GNS3", "Cisco IOS", "OSPF", "VLSM", "Python"],
    source: "https://github.com/salehinafnan/campus-network-ospf",
    team: true,
  },
  {
    title: "Campus Network with NAT & DHCP",
    description:
      "The networking lab's final project: the campus network with internet access through NAT/PAT and automatic host addressing through DHCP. Each department router serves its own DHCP pool and translates its LAN onto an uplink to the GNS3 NAT node, while OSPF runs over a ring of six serial links, one /30 each. The same Python linter validates the whole lab.",
    technologies: ["GNS3", "Cisco IOS", "NAT/PAT", "DHCP", "Python"],
    source: "https://github.com/salehinafnan/campus-network-nat",
    team: true,
  },
  {
    title: "Ostad MERN Assignments",
    description:
      "Two front-end assignments from Ostad's MERN course: a React phone store with product pages, a cart and Jest tests, and my personal portfolio site in HTML, CSS and jQuery, with a typing animation, skill bars and a contact form that opens the visitor's email app with the message filled in.",
    technologies: ["React", "React Router", "HTML/CSS", "jQuery"],
    source: "https://github.com/salehinafnan/ostad-mern-assignments",
  },
  {
    title: "Competitive Programming",
    description:
      "193 C++ solutions from CodeChef, Codeforces, LightOJ and SPOJ, organised by judge. Most are implementation and maths problems, and a few use a segmented sieve, binary search on the answer, DFS flood fill, geometry, modular inverses or prefix sums. A GitHub Actions workflow compiles every solution.",
    technologies: ["C++17", "Algorithms", "clang-format", "GitHub Actions"],
    source: "https://github.com/salehinafnan/competitive-programming",
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "34 C++ practice programs from a data structures and algorithms course, in six topic folders covering control flow and patterns, bitwise operators, number systems, functions, arrays and two LeetCode problems. A Makefile builds them, and a test suite of 51 cases checks every program in GitHub Actions CI.",
    technologies: ["C++17", "Make", "Bash", "GitHub Actions"],
    source: "https://github.com/salehinafnan/data-structure-and-algorithm",
  },
];

export const CONTACT = {
  address: "Mohanagar Project, Dhaka, Bangladesh",
  phoneNo: "+880 1301678987",
  email: "salehinafnan@gmail.com",
};
