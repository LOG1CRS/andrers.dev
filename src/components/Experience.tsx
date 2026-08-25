import { Reveal, Section } from "./Reveal";
import { rich } from "./rich";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience">
      <div className="grain" />

      <div className="wrap">
        <span className="sec-k">{experience.eyebrow}</span>
        <Reveal delay={0.08}>
          <h2 className="sec-title">{experience.title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="sec-note">{experience.note}</p>
        </Reveal>

        <div className="roles">
          {experience.roles.map((role, i) => (
            <article className="role" key={role.date + role.company}>
              <span className="role-dot" aria-hidden="true" />
              {i < experience.roles.length - 1 && (
                <span className="role-rail" aria-hidden="true" />
              )}

              <Reveal delay={0.08}>
                <div className="role-date">{role.date}</div>
                <div className="role-co">{role.company}</div>
              </Reveal>

              <Reveal delay={0.16}>
                <h3 className="role-title">{role.title}</h3>
                <p className="role-desc">{rich(role.description)}</p>
                {role.bullets.length > 0 && (
                  <ul className="bullets">
                    {role.bullets.map((b) => (
                      <li key={b.slice(0, 32)}>{rich(b)}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
