import { Reveal, Section } from "./Reveal";
import { principles } from "@/lib/content";

export function Principles() {
  return (
    <Section id="principles">
      <div
        className="amb"
        style={{
          right: "-360px",
          top: "220px",
          width: "940px",
          height: "940px",
          background:
            "radial-gradient(closest-side,rgba(56,112,137,.18),transparent 72%)",
        }}
      />
      <div className="grain" />

      <div className="wrap">
        <span className="sec-k">{principles.eyebrow}</span>
        <Reveal delay={0.08}>
          <h2 className="sec-title">{principles.title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="sec-note">{principles.note}</p>
        </Reveal>

        {principles.items.map((item) => (
          <Reveal
            key={item.index}
            delay={0.08}
            className={item.align === "right" ? "prin right" : "prin"}
          >
            <div className="prin-i" aria-hidden="true">
              {item.index}
            </div>
            <div className="prin-n">{item.name}</div>
            <h3 className="prin-s">{item.statement}</h3>
            <p className="prin-p">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
