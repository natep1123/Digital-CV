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
            Parks and Recreation, Natural Resource Management from{" "}
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

          <div className="text-center border border-[#f5d442] rounded-lg p-2 mb-4">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[#f8f8f8] mb-2">
                Fun Fact!
              </h3>
              <p className="text-gray-300">
                I have a creative passion for writing and have a published book
                of poetry on Amazon! Currently available as an ebook, with a
                print version coming soon. Check out{" "}
                <a
                  href="https://a.co/d/cBL5e5e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5d442] hover:underline"
                >
                  "The Weight of Quiet Things"
                </a>{" "}
                and let me know what you think!
              </p>
            </div>
            <div>
              Excerpt:
              <blockquote className="text-gray-300 italic">
                "This work encompasses a collection of 33 independent pieces: 22
                titled poems and 11 fragments. It brings to light a whirlwind
                journey through love, wander, reflection and renewal. To
                dedicate this book would be a dedication to the pursuit of
                curiosity, human imagination, worlds beyond and life without
                fear of doubt. It is my hope that those who read my work find
                something of value to take with them when the journey brings
                them back to where they started."
              </blockquote>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#f8f8f8] mb-2">
              Let's Connect!
            </h3>
            <ul>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/nathaniel-perry-646bb4326/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ffff] hover:underline text-lg"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.github.com/natep1123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00ffff] hover:underline text-lg"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
