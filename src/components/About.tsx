import { Fragment } from "react";
import { Reveal, Section } from "./Reveal";
import { about } from "@/lib/content";

export function About() {
  return (
    <Section id="about">
      <div
        className="amb"
        style={{
          left: "-320px",
          top: "60px",
          width: "860px",
          height: "860px",
          background:
            "radial-gradient(closest-side,rgba(28,77,104,.28),transparent 72%)",
        }}
      />
      <div className="grain" />

      <div className="wrap">
        <span className="sec-k">{about.eyebrow}</span>
        <Reveal delay={0.08}>
          <h2 className="sec-title">{about.title}</h2>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="about-body">
            {about.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <dl className="facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt className="f-lab">{f.label}</dt>
                <dd className="f-val">
                  {f.value.map((line, n) => (
                    <Fragment key={line}>
                      {n > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
