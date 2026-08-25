import { Fragment } from "react";
import { Reveal, Section } from "./Reveal";
import { education, languages } from "@/lib/content";

export function Education() {
  return (
    <Section id="education">
      <div
        className="amb"
        style={{
          left: "-300px",
          top: "40px",
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(closest-side,rgba(11,46,68,.46),transparent 72%)",
        }}
      />
      <div className="grain" />

      <div className="wrap">
        <span className="sec-k">{education.eyebrow}</span>
        <Reveal delay={0.08}>
          <h2 className="sec-title">{education.title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="sec-note">{education.note}</p>
        </Reveal>

        <div className="edu">
          <Reveal delay={0.08}>
            <div className="edu-yr">{education.years}</div>
            <div className="edu-uni">
              {education.university.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <h3 className="deg">{education.degree}</h3>
            <blockquote className="quote">{education.quote}</blockquote>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/** Its own section, sitting between Education and Certifications. Not in the nav. */
export function Languages() {
  return (
    <Section id="languages">
      <div className="grain" />
      <div className="wrap">
        <span className="sec-k">{languages.eyebrow}</span>
        <Reveal delay={0.08}>
          <h2 className="sec-title">{languages.title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="sec-note">{languages.note}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="tbl" style={{ marginTop: 68, maxWidth: 860 }}>
            {languages.items.map((l) => (
              <div className="trow t-lang" key={l.key}>
                <div className="t-k">{l.key}</div>
                <div className="t-v">{l.value}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
