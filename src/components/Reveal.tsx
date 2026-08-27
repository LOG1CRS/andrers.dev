"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* Every caller wants the same thresholds, so they all share one observer
   rather than standing up ~50 of them. */
const waiting = new Map<Element, () => void>();
let observer: IntersectionObserver | null = null;

function watch(el: Element, onEnter: () => void) {
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        observer!.unobserve(e.target);
        waiting.get(e.target)?.();
        waiting.delete(e.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
  );
  waiting.set(el, onEnter);
  observer.observe(el);
  return () => {
    observer?.unobserve(el);
    waiting.delete(el);
  };
}

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
    return watch(el, () => setInView(true));
  }, []);

  return { ref, inView };
}

type RevealProps = {
  children: ReactNode;
  /** seconds */
  delay?: number;
  /** the softer, blurred variant used for the hero headline — CSS path only */
  soft?: boolean;
  /** run the entrance off a CSS animation instead of the observer, so the
      content is painted without waiting for hydration. For above the fold. */
  css?: boolean;
  tag?: "div" | "span" | "p";
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  soft = false,
  css = false,
  tag = "div",
  className = "",
}: RevealProps) {
  const Tag = tag as "div";
  const style = delay ? ({ "--rd": `${delay}s` } as React.CSSProperties) : undefined;

  if (css) {
    return (
      <Tag
        className={["reveal-css", soft ? "soft" : "", className].filter(Boolean).join(" ")}
        style={style}
      >
        {children}
      </Tag>
    );
  }

  return <Observed {...{ tag, className, style }}>{children}</Observed>;
}

function Observed({
  children,
  tag,
  className,
  style,
}: {
  children: ReactNode;
  tag: "div" | "span" | "p";
  className: string;
  style?: React.CSSProperties;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  const Tag = tag as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={["reveal", inView ? "is-in" : "", className].filter(Boolean).join(" ")}
      style={style}
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
