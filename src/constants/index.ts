import type { StaticImageData } from "next/image";
import blockGraph from "../assets/projects/block-graph.webp";
import nodrift from "../assets/projects/nodrift.webp";
import portfolio from "../assets/projects/portfolio.webp";
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
  // How that script loads the site.
  capture?: {
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
    source: "https://github.com/salehinafnan/random-block-graph-generator",
  },
  {
    title: "Portfolio Website",
    description:
      "This site. Server-rendered with the Next.js App Router, it ships almost no client JavaScript, animates with CSS alone and is tuned for accessibility and Core Web Vitals.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: portfolio,
    live: "https://salehinafnan.vercel.app/",
    source: "https://github.com/salehinafnan/afnan-portfolio",
    capture: { colorScheme: "dark" },
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
    title: "TI-Fusion",
    description:
      "Code behind my IEEE and JUCS papers. Detects anxiety disorders by late fusion of a CNN trained on Gabor-filtered facial expressions and a model trained on DASS-21 questionnaire answers.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "OpenCV"],
    source: "https://github.com/salehinafnan/anxiety-disorder-detection-using-multimoadal-learning",
  },
  {
    title: "Vaxin 1.0",
    description:
      "An Android app for vaccine registration and tracking. People register with their NID and check their dose dates, hospital admins schedule doses, and it adds ambulance contacts, a BMI calculator and COVID-19 news.",
    technologies: ["Java", "Android", "Firebase"],
    source: "https://github.com/salehinafnan/vaxin-1.0",
    team: true,
  },
  {
    title: "Dua & Ruqyah",
    description:
      "A Next.js front end for browsing duas by category and sub-category, backed by an Express REST API over a SQLite database.",
    technologies: ["Next.js", "Express.js", "SQLite", "Tailwind CSS"],
    source: "https://github.com/salehinafnan/dua-web-app-front-end",
  },
  {
    title: "Long-Polling Server",
    description:
      "An Express server where clients wait up to 30 seconds on a key and receive queued data, in order, the moment it is pushed.",
    technologies: ["Node.js", "Express.js"],
    source: "https://github.com/salehinafnan/backend-long-polling-server",
  },
  {
    title: "Cereal Rating Models",
    description:
      "Explores the nutrition facts of 80 breakfast cereals, then trains linear, ridge and lasso regression models to predict their ratings.",
    technologies: ["Python", "pandas", "scikit-learn", "seaborn"],
    source: "https://github.com/salehinafnan/machine-learning-implementation",
  },
  {
    title: "Campus Network",
    description:
      "A GNS3 simulation of a six-department university network, taken from static routing to OSPF, then extended with NAT and DHCP for internet access.",
    technologies: ["GNS3", "OSPF", "NAT", "DHCP"],
    source: "https://github.com/salehinafnan/campus-network-gns3",
    team: true,
  },
  {
    title: "Air Quality Monitor",
    description:
      "An Arduino Uno device that reads gas levels from an MQ-135 sensor and shows the ppm and an air-quality verdict on an LCD, designed and simulated in Proteus.",
    technologies: ["Arduino", "C++", "Proteus"],
    source: "https://github.com/salehinafnan/air-quality-sensor",
    team: true,
  },
  {
    title: "Competitive Programming",
    description:
      "Nearly 200 solutions to Codeforces and CodeChef problems, written while sharpening problem solving and algorithms.",
    technologies: ["C++", "Algorithms", "Data Structures"],
    source: "https://github.com/salehinafnan/competitive-programming",
  },
];

export const CONTACT = {
  address: "Mohanagar Project, Dhaka, Bangladesh",
  phoneNo: "+880 1301678987",
  email: "salehinafnan@gmail.com",
};
