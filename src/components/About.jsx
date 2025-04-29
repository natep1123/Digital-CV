export default function About() {
  return (
    <section
      id="about"
      className="py-8 border-b border-[#00ffff] bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#ff00ff] mb-8">About</h2>
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700">
          <p className="text-[#f8f8f8] text-lg mb-4">
            Welcome to my digital CV!
          </p>
          <p className="text-gray-300 text-lg mb-4">
            I'm a passionate Software Engineer with a knack for crafting dynamic
            web applications. My expertise stems from a certificate in{" "}
            <a
              href="https://www.springboard.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00ffff] hover:underline"
            >
              Springboard
            </a>
            's Software Engineering Career Track, where I honed my skills in the
            MERN stack, complemented by a B.S. in Parks and Recreation, Natural
            Resource Management from{" "}
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
            I thrive on building user-friendly interfaces and writing clean,
            efficient code. My journey in tech has been an exciting adventure,
            and I'm always eager to embrace new challenges and expand my skill
            set.
          </p>
          <p className="text-gray-300 text-lg mb-4">
            When I'm not coding, you can find me hiking with my dog, diving into
            a good book, writing, or simply soaking in the beauty of the
            outdoors.
          </p>
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
