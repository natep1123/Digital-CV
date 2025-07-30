import Connect from "./Connect";
import FunFact from "./FunFact";

export default function About() {
  return (
    <section
      id="about"
      className="py-8 border-b border-[#00ffff] bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#ff00ff] mb-8">About</h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
          <p className="text-[#f8f8f8] text-lg mb-4">
            Welcome to my digital CV!
          </p>
          <p className="text-gray-300 text-lg mb-4">
            I'm a passionate Software Engineer and automation specialist with
            expertise in the MERN stack, Next.js, and systematic workflow
            design. My technical foundation comes from{" "}
            <a
              href="https://www.springboard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ffff] hover:underline"
            >
              Springboard
            </a>
            's Software Engineering Career Track, complemented by a B.S. in
            Parks, Recreation, Exercise and Sports Science from{" "}
            <a
              href="https://www.eku.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ffff] hover:underline"
            >
              Eastern Kentucky University
            </a>
            .
          </p>
          <p className="text-gray-300 text-lg mb-4">
            Beyond traditional development, I've pioneered innovative approaches
            to content automation, including building complex n8n workflows that
            combine AI-powered narrative generation with multi-platform
            distribution systems. I specialize in creating systematic solutions
            for creative challenges, transforming manual processes into
            scalable, automated pipelines.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            My diverse background spans software engineering, workflow
            automation, and creative writing. I'm a published poet with a deep
            appreciation for storytelling, which uniquely positions me to bridge
            technical automation with authentic creative expression. This
            combination allows me to build systems that maintain artistic
            integrity while achieving unprecedented scale.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            When I'm not coding or designing automation workflows, you can find
            me hiking with my dog, diving into a good book, writing poetry,
            exploring the intersection of technology and creativity or soaking
            in the beauty of the great outdoors.
          </p>
          <FunFact />
          <Connect />
        </div>
      </div>
    </section>
  );
}
