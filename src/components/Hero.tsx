import { Beams } from "./Beams";
import { Nav } from "./Nav";
import { Reveal } from "./Reveal";
import { ArrowDown } from "./Icons";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <header style={{ position: "relative" }}>
      <Beams />
      <Nav />

      <div className="hero" id="hero">
        <div className="hero-in">
          <div className="hero-col">
            <h1 className="h1">
              {hero.lines.map((line, i) => (
                <Reveal key={line.accent + i} tag="span" soft delay={0.08 * (i + 1)} className="ln">
                  <span className="w">{line.muted}</span> <span className="a">{line.accent}</span>
                </Reveal>
              ))}
            </h1>

            <Reveal delay={0.44}>
              <p className="sub">{hero.sub}</p>
            </Reveal>

            <Reveal delay={0.56}>
              <div className="hero-actions">
                <a href={hero.primary.href} className="btn btn-p">
                  {hero.primary.label}
                </a>
                <a href={hero.secondary.href} className="btn btn-s down">
                  {hero.secondary.label}
                  <ArrowDown />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  );
}
