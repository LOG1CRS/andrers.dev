import { Reveal, Section } from "./Reveal";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <Section id="skills">
      <div
        className="amb"
        style={{
          right: "-340px",
          top: "260px",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(closest-side,rgba(28,77,104,.2),transparent 72%)",
        }}
      />
      <div className="grain" />

      <div className="wrap">
        <span className="sec-k">{skills.eyebrow}</span>
        <Reveal delay={0.08}>
          <h2 className="sec-title">{skills.title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="sec-note">{skills.note}</p>
        </Reveal>

        <div className="skills">
          {skills.items.map((s) => (
            <Reveal key={s.index} delay={0.08} className="skill">
              <div className="skill-head">
                <div className="skill-i">{s.index}</div>
                <h3 className="skill-n">{s.name}</h3>
              </div>
              <div>
                <div className="skill-t">{s.statement}</div>
                <p className="skill-p">{s.body}</p>
                <div className="tags">
                  {s.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
