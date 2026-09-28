"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowUp, FiChevronUp } from "react-icons/fi";
import { SECTIONS } from "../constants";

// By then the header has scrolled out of view, so the pill takes over from it.
const SHOW_AFTER = 96;
// A section is the one being read once its top passes this share of the screen's height.
const READING_LINE = 0.4;
const RING = 2 * Math.PI * 8;

// A pill naming the section in view, with a ring that fills as the page scrolls, that opens into
// a list of every section. The links are plain anchors, so they work before (or without)
// JavaScript; the script only follows the scroll and opens the list. Placement and the opening
// animation are in globals.css (.chapters).
const ChapterNav = () => {
  const [active, setActive] = useState(-1);
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLButtonElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const sections = SECTIONS.map(({ id }) => document.getElementById(id));
    let frame = 0;
    const update = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(scrollY / scrollable, 0), 1) : 0;
      const line = innerHeight * READING_LINE;
      setActive(sections.findLastIndex((section) => section !== null && section.getBoundingClientRect().top <= line));
      setShown(scrollY > SHOW_AFTER);
      // Written straight to the ring, so scrolling never re-renders.
      ringRef.current?.setAttribute("stroke-dashoffset", String(RING * (1 - progress)));
    };
    const schedule = () => {
      frame ||= requestAnimationFrame(update);
    };
    schedule();
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    return () => {
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  // The closed list is clipped to the pill's shape, so it follows the pill's width.
  useEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;
    const observer = new ResizeObserver(() => nav.style.setProperty("--pill-width", `${pill.offsetWidth}px`));
    observer.observe(pill);
    return () => observer.disconnect();
  }, []);

  // Opening moves focus to the current section's link; Escape or a press outside closes the list.
  useEffect(() => {
    if (!open) return;
    const nav = navRef.current;
    (
      nav?.querySelector<HTMLElement>("#chapter-list [aria-current]") ??
      nav?.querySelector<HTMLElement>("#chapter-list a")
    )?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      pillRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!nav?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const current = SECTIONS[active];
  const position = `${active + 1} of ${SECTIONS.length}`;

  return (
    <nav
      ref={navRef}
      aria-label="Sections"
      data-hidden={(!shown && !open) || undefined}
      data-open={open || undefined}
      className="chapters"
      onBlur={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={pillRef}
        type="button"
        aria-expanded={open}
        aria-controls="chapter-list"
        // Hidden behind the open list, so Shift+Tab from the list leaves the nav instead.
        tabIndex={open ? -1 : undefined}
        onClick={() => setOpen(true)}
        className="chapter-pill glass glass-blur glass-float flex h-(--pill-height) items-center gap-2 rounded-full pr-3.5 pl-2.5 text-[0.8125rem] font-medium tracking-tight whitespace-nowrap text-fg-1 transition-[opacity,scale] duration-300 ease-spring active:scale-96"
      >
        <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4.5 shrink-0 -rotate-90 fill-none stroke-[2.25]">
          <circle cx="10" cy="10" r="8" className="stroke-line-2" />
          <circle
            ref={ringRef}
            cx="10"
            cy="10"
            r="8"
            strokeDasharray={RING}
            strokeDashoffset={RING}
            strokeLinecap="round"
            className="stroke-fg-1"
          />
        </svg>
        {current ? (
          <>
            {current.label}
            {/* Screen readers can read "3/7" as a date. */}
            <span aria-hidden="true" className="font-mono text-[0.6875rem] font-normal text-fg-4 tabular-nums">
              {active + 1}/{SECTIONS.length}
            </span>
            <span className="sr-only">, section {position}</span>
          </>
        ) : (
          "Contents"
        )}
        <FiChevronUp aria-hidden="true" className="size-3 text-fg-3 lg:rotate-180" />
      </button>

      <div id="chapter-list" className="chapter-list glass glass-blur glass-float rounded-[1.625rem] p-2">
        <p
          aria-hidden="true"
          className="flex items-baseline justify-between px-3.5 pt-2 pb-2.5 font-mono text-xs text-fg-4 tabular-nums"
        >
          <span className="text-[0.6875rem] font-medium tracking-[0.16em] text-fg-3 uppercase">Contents</span>
          {current ? position : `${SECTIONS.length} sections`}
        </p>
        <ol className="grid gap-0.5">
          {SECTIONS.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={i === active || undefined}
                onClick={() => setOpen(false)}
                className={`flex h-11 items-center gap-3.5 rounded-2xl px-3.5 text-[0.9375rem] transition-colors focus-visible:-outline-offset-2 ${
                  i === active ? "bg-fg-1/10 font-medium text-fg-1" : "text-fg-2 hover:bg-glass-hover hover:text-fg-1"
                }`}
              >
                <span className="font-mono text-[0.6875rem] font-normal tracking-[0.08em] text-fg-4 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {label}
                {i === active && <span aria-hidden="true" className="ml-auto size-1.5 rounded-full bg-fg-1" />}
              </a>
            </li>
          ))}
        </ol>
        {/* #top needs no target: it scrolls to the top of the document. */}
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="mt-1.5 flex h-10.5 items-center gap-2.5 border-t border-line-1 px-3.5 text-[0.8125rem] font-medium text-fg-3 transition-colors hover:text-fg-1 focus-visible:-outline-offset-2"
        >
          <FiArrowUp aria-hidden="true" className="size-3.5" />
          Back to top
        </a>
      </div>
    </nav>
  );
};

export default ChapterNav;
