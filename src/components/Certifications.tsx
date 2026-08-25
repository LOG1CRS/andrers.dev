import { Reveal, Section } from "./Reveal";
import { certifications } from "@/lib/content";

export function Certifications() {
  return (
    <Section id="certifications">
      <div className="grain" />
      <div className="wrap">
        <span className="sec-k">{certifications.eyebrow}</span>
        <Reveal delay={0.08}>
          <h2 className="sec-title">{certifications.title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="sec-note">{certifications.note}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="tbl" style={{ marginTop: 68 }}>
            {certifications.items.map((c) => (
              <div className="trow t-cert" key={c.year + c.name}>
                <div className="t-k">{c.year}</div>
                <div className="t-n">{c.name}</div>
                <div className="t-i">{c.issuer}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
