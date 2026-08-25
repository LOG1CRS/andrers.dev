import { Hero } from "@/components/Hero";
import { Scale } from "@/components/Scale";
import { About } from "@/components/About";
import { Principles } from "@/components/Principles";
import { Experience } from "@/components/Experience";
import { Education, Languages } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <a className="skip" href="#about">
        Skip to content
      </a>
      <Hero />
      <main>
        <Scale />
        <About />
        <Principles />
        <Experience />
        <Education />
        <Languages />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
