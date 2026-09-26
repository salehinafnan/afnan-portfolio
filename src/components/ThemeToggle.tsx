"use client";

import { useEffect } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

type Theme = "light" | "dark";

// Mirrors the inline script in layout.tsx, which picks the theme before first paint.
const apply = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  document
    .querySelectorAll<HTMLMetaElement>('meta[name="theme-color"]')
    .forEach((meta) => (meta.content = theme === "dark" ? "#000000" : "#fafafa"));
};

const stored = () => {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
};

// The icons and labels follow [data-theme] on <html> through CSS, so the button
// renders the same on the server and the client and never flashes the wrong state.
const ThemeToggle = ({ className }: { className?: string }) => {
  useEffect(() => {
    // Follow the system until the visitor picks a theme.
    const query = matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!stored()) apply(query.matches ? "dark" : "light");
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggle = () => {
    const next: Theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing: the choice lasts for this page view only.
    }
    apply(next);
  };

  return (
    <button type="button" onClick={toggle} title="Toggle theme" className={className}>
      <FiSun aria-hidden="true" className="hidden dark:inline" />
      <FiMoon aria-hidden="true" className="dark:hidden" />
      <span className="sr-only dark:hidden">Switch to dark mode</span>
      <span className="sr-only hidden dark:inline">Switch to light mode</span>
    </button>
  );
};

export default ThemeToggle;
