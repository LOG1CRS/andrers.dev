"use client";

import { useEffect, useState } from "react";
import { navItems, person, titledSections } from "@/lib/content";

export function Nav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  /* the bar condenses into a glass pill once the hero is behind you */
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* whichever section owns the viewport drives the nav and the tab title */
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const els = titledSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (!els.length) return;

    const seen = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) seen.set(e.target.id, e.intersectionRatio);
        let best: string | null = null;
        let bestRatio = 0;
        for (const [id, ratio] of seen) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        }
        setActive(bestRatio > 0.08 ? best : null);
      },
      { threshold: [0, 0.08, 0.25, 0.5, 0.75, 1] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const label = titledSections.find((s) => s.id === active)?.label;
    document.title = label ? `${person.name} · ${label}` : person.name;
  }, [active]);

  /* the sheet owns the viewport while it is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <nav className={stuck ? "nav is-stuck" : "nav"} aria-label="Primary">
        <div className="nav-in">
          <div className="nav-bar">
            <a href="#hero" className="brand">
              {person.name}
            </a>

            <div className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a href="#contact" className="nav-cta">
              Contact
            </a>

            <button
              type="button"
              className="menu-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="menu-sheet"
              onClick={() => setOpen((v) => !v)}
            >
              <i />
              <i />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="menu-sheet"
        className={open ? "sheet is-open" : "sheet"}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} tabIndex={open ? 0 : -1}>
            {item.label}
          </a>
        ))}
        <a href="#contact" tabIndex={open ? 0 : -1}>
          Contact
        </a>
      </div>
    </>
  );
}
