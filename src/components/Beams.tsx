"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The hero's light field: five blurred leaks over pure black, each on its own
 * loop so the motion never visibly repeats. `mirrored` flips it for the
 * contact block so the page closes the way it opened.
 */
export function Beams({ mirrored = false }: { mirrored?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [out, setOut] = useState(false);

  /* Each loop drives a 100px+ blur under a screen blend; once the field has
     scrolled away there is nothing to show for that work, so it is paused. */
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setOut(!entry.isIntersecting),
      { rootMargin: "120px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} className={out ? "beams is-out" : "beams"}>
        {mirrored ? (
          <>
            <div className="beam bm3" style={{ right: "auto", left: "-26%", top: "-30%" }} />
            <div className="beam bm1" style={{ left: "auto", right: "-30%", top: "-34%" }} />
            <div className="beam bm2" style={{ left: "auto", right: "-22%", top: "-20%" }} />
            <div className="beam bm4" style={{ right: "auto", left: "-20%", top: "24%" }} />
          </>
        ) : (
          <>
            <div className="beam bm3" />
            <div className="beam bm4" />
            <div className="beam bm1" />
            <div className="beam bm2" />
            <div className="beam bm5" />
          </>
        )}
      </div>
      <div className={mirrored ? "beam-veil mirrored" : "beam-veil"} />
      <div className="grain" />
      {!mirrored && <div className="fade-b" />}
    </>
  );
}
