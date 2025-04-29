export default function About() {
  return (
    <section
      id="about"
      className="py-4 border-b border-[#00ffff] px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">About</h2>
      <p className="text-lg mb-4">Welcome to my digital CV!</p>
      <p className="text-lg mb-4">
        I'm a passionate Software Engineer with a knack for building awesome web
        apps. Passionate about many disciplines, I not only have a certificate
        from{" "}
        <a
          href="https://www.springboard.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00ffff] hover:underline"
        >
          Springboard
        </a>
        's Software Engineering Career Track but also a B.S. in Parks and
        Recreation, Natural Resource Management from{" "}
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
      <p className="text-lg mb-4">
        I love creating user-friendly interfaces and writing clean, efficient
        code. My journey in tech has been a thrilling ride, and I'm always eager
        to learn more and take on new challenges.
      </p>
      <p className="text-lg mb-4">
        When I'm not coding, you can find me exploring the great outdoors with
        my dog, reading or writing, or simply enjoying this beautiful world.
      </p>
      <div>
        <h3 className="text-lg font-semibold mb-2">Let's Connect!</h3>
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
    </section>
  );
}
