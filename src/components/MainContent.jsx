import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

export default function MainContent() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-4 text-[#f8f8f8]">
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
