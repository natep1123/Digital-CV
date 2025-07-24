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
            I'm a passionate Software Engineer with a knack for crafting dynamic
            web applications. My expertise stems from a certificate from{" "}
            <a
              href="https://www.springboard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ffff] hover:underline"
            >
              Springboard
            </a>
            's Software Engineering Career Track, where I honed my skills in the
            MERN stack and Next.js. My tech skills are complemented by a B.S. in
            Parks, Recreation, Exercise and Sports Science (concetration in
            Natural Resource Management) from{" "}
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
            I have a diverse skillset and broad experiences to draw from. I
            thrive on building user-friendly interfaces and writing clean,
            efficient code. My journey in tech has been an exciting adventure,
            and I'm always eager to embrace new challenges and expand my skill
            set.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            When I'm not coding, you can find me hiking with my dog, diving into
            a good book, writing, or simply soaking in the beauty of the
            outdoors.
          </p>
          <FunFact />
          <Connect />
        </div>
      </div>
    </section>
  );
}
