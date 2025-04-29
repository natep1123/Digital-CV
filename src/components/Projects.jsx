import { projects } from "@/lib/projectsDB";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-8 border-b border-[#00ffff] bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#ff00ff] mb-4">Projects</h2>
        <span className="text-sm text-gray-400 mb-4 block">
          View my Portfolio here:{" "}
          <a
            href="https://github.com/natep1123/Portfolio"
            className="text-[#00ffff] hover:underline"
          >
            Portfolio
          </a>
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">{project.summary}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold ">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.techStack.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="text-sm bg-gray-700 text-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold ">Check It Out:</h4>
                <ul>
                  {project.githubRepo ? (
                    <li>
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00ffff] hover:underline text-sm"
                      >
                        GitHub
                      </a>
                    </li>
                  ) : null}
                  {project.deploymentLink ? (
                    <li>
                      <a
                        href={project.deploymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00ffff] hover:underline text-sm"
                      >
                        {project.deploymentLink}
                      </a>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
