import { GitlabIcon as GitHub, Linkedin, Mail, ChevronDown } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="text-white">Hi, I'm </span>
          <span className="text-purple-500">Somesh Chincholkar</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-8">Full Stack Developer</h2>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
        I'm a passionate Full Stack Developer currently pursuing my Bachelor of Technology at Vishwakarma Institute of Information Technology, Pune.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/SomeshChincholkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <GitHub size={24} />
          </a>
          <a
            href="https://linkedin.com/somesh-chincholkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:chincholkarsomeh0913@gmail.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <div className="flex justify-center">
          <a
            href="#skills"
            className="animate-bounce flex items-center justify-center w-10 h-10 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
          >
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

