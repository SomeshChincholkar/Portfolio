import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      title: "LodgeScape",
      description: "An online marketplace for short-term house renting",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React.js", "Node.js", "MongoDB Atlas", "Tailwind CSS", "JWT"],
      points: [
        "Developed LodgeScape, built frontend using React.js, Tailwind and Vite.",
        "Built the backend using Node.js, Express.js, and MongoDB (hosted on MongoDB Atlas) for database management.",
        "Implemented user authentication using JWT, and deployed the server on Render.",
      ],
      liveLink: "https://lodgescape.onrender.com/",
      githubLink: "https://github.com/SomeshChincholkar",
    },
    {
      title: "Fall Detection System",
      description: "Real-time fall detection system using ESP32-CAM module",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      technologies: ["Python", "Flask", "Twilio", "Ultralytics (YOLO)", "Geopy", "OpenCV"],
      points: [
        "Developed a real-time fall detection system using an ESP32-CAM module, which streams live video to a server for processing.",
        "Implemented a YOLOv11 model, achieving 88% mAP50 accuracy on a dataset containing 4,100 images, to analyze video frames and reliably detect falls.",
        "Integrated Twilio API and geolocation services to automatically send SMS alerts with exact location details to predefined contacts whenever a fall is detected.",
      ],
      githubLink: "https://github.com/SomeshChincholkar",
    },
    {
      title: "IOT Forum Website",
      description: "Club website for college using React, Vite, and Tailwind CSS",
      image: "/placeholder.svg?height=400&width=600",
      category: "web",
      technologies: ["React.js", "Vite", "Tailwind CSS", "React Router"],
      points: [
        "Designed and developed a responsive and modern UI using Tailwind CSS for an engaging user experience.",
        "Implemented navigation and routing using React Router for seamless transitions.",
        "Developed modular React components for key sections, including Hero, About, Projects, Events, Team, and Contact.",
      ],
      liveLink: "https://iot-forum.onrender.com/",
      githubLink: "https://github.com/SomeshChincholkar",
    },
    {
      title: "Spam Detection WhatsApp Bot",
      description: "WhatsApp bot for detecting spam messages",
      image: "/placeholder.svg?height=400&width=600",
      category: "ai",
      technologies: ["Python", "Scikit-learn", "Flask", "Twilio", "Pandas"],
      points: [
        "Developed a Flask-based spam detection API that integrates with Twilio for classifying WhatsApp messages.",
        "Trained a OneVsRestClassifier with Support Vector Classifier (SVC) on a spam dataset, achieving 98%+ accuracy on test data.",
        "Implemented TF-IDF vectorization for text preprocessing and feature extraction.",
        "Designed a RESTful API endpoint to receive WhatsApp messages, analyze them for spam, and send automated responses with spam probability.",
      ],
      githubLink: "https://github.com/SomeshChincholkar",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-purple-500">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-purple-500 mx-auto"></div>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "all" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("web")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "web" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "ai" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              AI/ML Projects
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-purple-500/20"
            >

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 mb-6 space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

