"use client";

import { useEffect } from "react";

// Fades [data-reveal] elements in as they scroll into view. Elements that are
// already on screen when this runs are left alone, so nothing flickers and the
// page is fully readable before (or without) JavaScript.
const RevealObserver = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const seen = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target;
          const first = !seen.has(el);
          seen.add(el);

          if (entry.isIntersecting || (first && entry.boundingClientRect.top < window.innerHeight)) {
            observer.unobserve(el);
            if (!first) el.classList.replace("reveal-pending", "reveal-in");
          } else if (first) {
            el.classList.add("reveal-pending");
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
};

export default RevealObserver;
