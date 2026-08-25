"use client";

import { Fragment, type CSSProperties } from "react";
import { useInView } from "./Reveal";
import { scale } from "@/lib/content";

/* two full turns of 0-9, so every digit spins once before landing */
const STRIP = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function Figure({ value, order }: { value: string; order: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  let digit = 0;

  return (
    <div ref={ref} className={inView ? "fig is-in" : "fig"} aria-label={value}>
      {[...value].map((ch, i) => {
        if (ch === ",") {
          return (
            <span key={i} className="sep" aria-hidden="true">
              ,
            </span>
          );
        }
        if (ch === "+") {
          return (
            <span key={i} className="plus" aria-hidden="true">
              +
            </span>
          );
        }
        const delay = 0.15 + order * 0.12 + digit * 0.06;
        digit += 1;
        return (
          <span key={i} className="dg" aria-hidden="true">
            <span
              className="rl"
              style={{ "--d": 10 + Number(ch), "--dl": `${delay}s` } as CSSProperties}
            >
              {STRIP.map((n, k) => (
                <i key={k}>{n}</i>
              ))}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export function Scale() {
  return (
    <section className="scale" aria-label="Scale of work">
      <div className="wrap">
        <div className="scale-grid">
          {scale.map((item, i) => (
            <div key={item.label} className="scale-item">
              <Figure value={item.value} order={i} />
              <div>
                <div className="s-lab">{item.label}</div>
                <div className="s-q">
                  {item.qualifier.map((line, n) => (
                    <Fragment key={line}>
                      {n > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
