const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "JavaScript", "Java", "Python", "R"],
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      category: "Python Libraries",
      skills: ["Flask", "Django", "NumPy", "Pandas", "Matplotlib", "YOLO"],
    },
    {
      category: "Other Technologies",
      skills: ["AWS", "Operating Systems", "OOPs", "Computer Networks", "DBMS", "Data Structures & Algorithms"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Technical <span className="text-purple-500">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:shadow-purple-500/20"
            >
              <h3 className="text-xl font-semibold text-purple-500 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-500 mb-4">Data Structures and Algorithms</h3>
            <p className="text-gray-300 mb-4">
              I regularly practice problem-solving and algorithmic challenges to enhance my coding skills.
            </p>
            <div className="flex items-center">
              <a
                href="https://leetcode.com/u/somesh_chincholkar/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
              >
                <span>LeetCode Profile</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

