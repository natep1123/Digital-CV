export default function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "SQL"],
    },
    {
      category: "Frontend",
      items: ["Next.js", "React.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "NextAuth", "Axios"],
    },
    {
      category: "Testing",
      items: ["Jest", "Mocha/Chai"],
    },
    {
      category: "Currently Working On",
      items: ["Intermediate/Advanced Next.js"],
    },
  ];

  return (
    <section id="skills" className="py-8 border-b border-[#00ffff] bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#ff00ff] mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4">
                {skillGroup.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-xs bg-gray-700 text-gray-200 px-2 py-1 rounded"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
