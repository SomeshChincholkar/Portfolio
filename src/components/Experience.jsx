import { Briefcase, Calendar } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Industry Project",
      company: "Ecocentric Brainware Pvt Ltd, Pune",
      period: "Sep 2024 - Present",
      description: [
        "Developing a nutrition analysis application using Python, Django, and Flutter.",
        "Fetching food data from multiple databases and implementing algorithms to calculate nutritional values.",
        "Building a scalable backend with Django and integrating it with a Flutter-based frontend.",
      ],
    },
    {
      title: "Technical Team Member",
      company: "VIIT IOT Forum",
      period: "Aug 2024 - Present",
      description: [
        "Contributing to IoT projects and initiatives within the college forum.",
        "Collaborating with team members on technical solutions and implementations.",
        "Participating in workshops and events related to Internet of Things technologies.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Work <span className="text-purple-500">Experience</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:shadow-purple-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <div className="flex items-center">
                    <Briefcase size={20} className="text-purple-500 mr-2" />
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  </div>
                  <p className="text-gray-300 mt-1">{exp.company}</p>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar size={16} className="text-gray-400 mr-2" />
                  <span className="text-gray-400">{exp.period}</span>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

