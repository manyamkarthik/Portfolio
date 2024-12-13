
import { Github, ExternalLink, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "CineMate",
    description: "A movie app built using the TMDB API to explore popular movies and TV shows.",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["React", "Tailwind CSS", "TMDB API"],
    features: [
      "Search movies and TV shows",
      "Responsive design",
      "Detailed movie information"
    ],
    github: "https://github.com/manyamkarthik/cineMate",
    live: "https://cinemate-manyam.netlify.app"
  },
  {
    
      title: "WeatherScope",
      description: "WeatherScope is a dynamic weather application that delivers real-time weather updates for any location.",
      image: "https://images.unsplash.com/photo-1630260643564-7f9c9c140682?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      tech: ["React", "Tailwind CSS","Vite","OpenWeather API"],
      features: [
        "Real-time weather updates",
        "Location-based search",
        "Detailed weather metrics"
      ],
      github: "https://github.com/manyamkarthik/WeatherApplication",
      live: "https://weather-km.netlify.app"
    
  },
  {
    title: "TaskMate",
    description: "A task management app to efficiently organize and prioritize tasks.",
    image: "https://images.unsplash.com/photo-1570649236495-42fa5fe5c48b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    tech: ["React", "Tailwind CSS"],
    features: [
      "Task categorization",
      "Intuitive UI",
      "Mark tasks as completed"
    ],
    github: "https://github.com/manyamkarthik/taskmate-react-app",
    live: "https://taskmate-manyam.netlify.app"
  },
  {
    title: "Tic-Tac-Toe",
    description: "A simple Tic-Tac-Toe game built using React.",
    image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    tech: ["React", "CSS"],
    features: [
      "Two-player mode",
      "Interactive gameplay",
      "Responsive layout"
    ],
    github: "https://github.com/manyamkarthik/TicTacToe",
    live: null
  },
  {
    title: "E-Commerce Application",
    description: "A comprehensive e-commerce platform with advanced security and user engagement features.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tech: ["Spring Boot", "Angular", "SQL"],
    features: [
      "JWT & OAuth2 authentication",
      "SSL/TLS security",
      "50% increase in engagement"
    ],
    github: "https://github.com/manyamkarthik/E-commerce",
    live: null
  },
  {
    title: "EazyBank Application",
    description: "Microservices-based banking system with robust security and monitoring.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tech: ["Spring Boot", "Docker", "Kubernetes"],
    features: [
      "10+ microservices",
      "OAuth2 integration",
      "99% uptime"
    ],
    github: null,
    live: "https://hub.docker.com/u/karthikmanyam"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400">Some of my recent work and side projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Github size={20} className="text-gray-900" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={20} className="text-gray-900" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <Star size={16} className="mr-2 text-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;