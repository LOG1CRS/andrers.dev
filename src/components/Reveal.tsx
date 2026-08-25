"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/** Fires once, when the element first comes into view. */
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    /* Anything already on screen at mount reveals straight away. Waiting on the
       observer's first callback is unreliable — a tab that is not rendering
       (backgrounded, restored, prerendered) never delivers it, and above-the-fold
       content would sit at opacity 0. */
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  /** seconds */
  delay?: number;
  /** the softer, blurred variant used for the hero headline */
  soft?: boolean;
  tag?: "div" | "span" | "p";
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  soft = false,
  tag = "div",
  className = "",
}: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  const Tag = tag as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={["reveal", soft ? "soft" : "", inView ? "is-in" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={delay ? ({ "--rd": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

/** A page section that flags itself once seen, so rules and rails can draw. */
export function Section({
  id,
  className = "",
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <section
      ref={ref}
      id={id}
      className={["sec", inView ? "is-in" : "", className].filter(Boolean).join(" ")}
    >
      {children}
    </section>
  );
}
