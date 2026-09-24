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
export const ROLE = "Web Developer";

export const RESUME_URL =
  "https://drive.google.com/file/d/1_D7aZqK8ytZZWAmbEQEPhPS7Rv1uZaVa/view?usp=drive_link";

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/salehinafnan",
  github: "https://github.com/salehinafnan",
  instagram: "https://instagram.com/salehinafnan",
  facebook: "https://facebook.com/salehinafnan",
};

export const HERO_CONTENT = `Aspiring web developer with a passion for creating engaging and user-friendly experiences. Possess a strong foundation in diverse programming languages and frameworks, including React, Next.js, Node.js, Tailwind CSS and MongoDB. Additionally, proficiency in Machine Learning adds depth to my skill set. Able to collaborate effectively within teams and contribute to project success. Logic building expertise with problem-solving skills honed through competitive programming. Eager to learn and grow within a dynamic web development environment.`;

export const ABOUT_TEXT = `I am a dedicated and versatile web developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a passion where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and photographing my favourite moments.`;

export type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    year: "June 2024 - Present",
    role: "Clinical AI Specialist",
    company: "Augmedix Bangladesh",
    description:
      "Assist doctors across specialties by using proprietary AI technology to document and update patient EHRs during medical visits.",
    technologies: ["AI", "Documentation", "EHR"],
  },
  {
    year: "2022 - 2023",
    role: "Teaching Assistant",
    company: "International Islamic University Chittagong",
    description: `Assist and guide 7th-semester students with their lab assignments. Assess reports, assignments, and projects.`,
    technologies: ["Numerical Methods"],
  },
];

export type Publication = {
  year: string;
  title: string;
  link: string;
  description: string;
  publisher: string[];
};

export const PUBLICATION: Publication[] = [
  {
    year: "December 2023",
    title: "TI-Fusion: A Multimodal Anxiety Disorder Detection Method",
    link: "https://ieeexplore.ieee.org/document/10427924",
    description: `Published in 2023 6th International Conference on Electrical Information and Communication Technology.`,
    publisher: ["IEEE Xplore"],
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData;
  live?: string;
  source: string;
};

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
  },
  {
    title: "Sepia",
    description:
      "A MERN stack social media app. Users can sign up, sign in, and create, like and delete their own posts, with changes showing up in real time on a fully responsive layout.",
    technologies: ["MongoDB", "Express.js", "React", "Redux", "Node.js", "Material UI"],
    image: sepia,
    live: "https://sepia.onrender.com/",
    source: "https://github.com/salehinafnan/sepia",
  },
  {
    title: "Task Management App",
    description:
      "Create, edit, delete and filter tasks by status. State is managed with MobX-State-Tree and persisted to local storage.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MobX-State-Tree"],
    image: taskManager,
    live: "https://afnantask.vercel.app/",
    source: "https://github.com/salehinafnan/task-management-app",
  },
  {
    title: "Random Block Graph Generator",
    description:
      "Spawn, delete and drag randomly placed blocks. Each new block is linked to its parent by a line that follows it as it moves.",
    technologies: ["React", "TypeScript", "CSS"],
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
      "Code behind my IEEE paper. Detects anxiety disorders by late fusion of a CNN trained on Gabor-filtered facial expressions and a model trained on DASS-21 questionnaire answers.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "OpenCV"],
    source: "https://github.com/salehinafnan/anxiety-disorder-detection-using-multimoadal-learning",
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
