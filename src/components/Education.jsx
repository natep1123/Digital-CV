export default function Education() {
  const education = [
    {
      institution: "Springboard Software Engineering Career Track",
      credential: "Certificate of Completion",
      date: "Very soon",
      details: [
        "Completed 800+ hours of intensive learning, including 400+ hours of hands-on project building.",
        "Developed capstone and portfolio projects showcasing expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) + Next.js.",
        "Mastered full-stack development through real-world applications, focusing on scalable APIs and responsive frontends.",
      ],
    },
    {
      institution: "Eastern Kentucky University",
      credential: "Bachelor of Science in Parks and Recreation",
      date: "May 2024",
      details: [
        "Completed a senior internship at Lilley Cornett Woods, designing and constructing a bridge to improve accessibility for a research trail as a capstone project.",
        "Gained skills in project planning, collaboration, and practical problem-solving in outdoor environments.",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-8 border-b border-[#00ffff] bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#ff00ff] mb-8">Education</h2>
        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-2">{edu.institution}</h3>
              <p className="text-sm mb-1">{edu.credential}</p>
              <p className="text-gray-400 text-sm mb-4">{edu.date}</p>
              <ul className="list-disc list-inside text-gray-300 text-sm">
                {edu.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="mb-2">
                    {detail}
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
