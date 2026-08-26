import { Beams } from "./Beams";
import { Reveal } from "./Reveal";
import { ArrowRight, ArrowUpRight, Download } from "./Icons";
import { contact, person } from "@/lib/content";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <Beams mirrored />

      <div className="wrap">
        <Reveal delay={0.08}>
          <p className="c-sub">{contact.sub}</p>
        </Reveal>

        <Reveal delay={0.16}>
          <h2 className="c-lead">
            {contact.leadStart}
            <em>{contact.leadAccent}</em>
          </h2>
        </Reveal>

        <Reveal delay={0.24}>
          <a className="c-cta" href={`mailto:${person.email}`}>
            {person.email}
            <span className="disc" aria-hidden="true">
              <ArrowRight />
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="c-alt">
            <a href={person.linkedin.href} target="_blank" rel="noreferrer noopener">
              {person.linkedin.label}
              <ArrowUpRight />
            </a>
            <a href={person.resume.href} target="_blank" rel="noreferrer noopener">
              {person.resume.label}
              <Download />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
