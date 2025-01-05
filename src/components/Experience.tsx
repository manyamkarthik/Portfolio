import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Work Experience
        </h2>

        <div className="space-y-12">

          {/* Texas Tech University */}
          <div
            className="experience-card p-8 rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="mr-4 text-blue-500" size={20} />
              <h3 className="text-2xl font-semibold dark:text-white">Graduate Web Developer</h3>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
              <Calendar className="mr-2" size={16} />
              <span>Mar 2023 - Nov 2024</span>
              <span className="mx-2">•</span>
              <span>Texas Tech University, Lubbock</span>
            </div>

            {/* Key Contributions */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-semibold dark:text-white">Key Contributions:</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🖥️ Built interactive React-based applications for the university, focusing on student registration, course management, and event booking platforms.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔄 Implemented Redux for state management, ensuring consistent UI and reducing bugs.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🌐 Developed and integrated RESTful APIs with Node.js and Express, enabling features like student authentication and real-time event updates.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  ⚛️ Utilized React Hooks and Context API for efficient global state management across modules like course selection and user profiles.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📅 Built an event booking system in React, integrating PostgreSQL for event data storage with Express.js handling backend logic.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🧪 Wrote comprehensive unit and integration tests with Jest and React Testing Library to ensure robust application functionality.
                </li>
              </ul>
            </div>

            {/* Environment */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Environment:</strong> ReactJS, Node.js, Express, MongoDB, PostgreSQL, Redux, JWT, Git, Netlify, Heroku, Jest, React Testing Library, CSS3
            </div>
          </div>

          {/* Infosys Technologies */}
          <div
            className="experience-card p-8 rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="mr-4 text-blue-500" size={20} />
              <h3 className="text-2xl font-semibold dark:text-white">Full Stack Software Engineer</h3>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
              <Calendar className="mr-2" size={16} />
              <span>Aug 2021 - Dec 2022</span>
              <span className="mx-2">•</span>
              <span>Infosys Technologies LLC, Hyderabad</span>
            </div>

            {/* Key Contributions */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-semibold dark:text-white">Core Contributions:</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🚀 Spearheaded the development of applications using React 17, Redux, and Microservices with Spring Boot and Docker, ensuring scalability.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  💻 Built optimized React.js components with Hooks and Lazy Loading, improving load times by 40%.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📊 Designed and implemented scalable Spring Boot microservices, integrating Apache Kafka for event-driven architecture.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔗 Migrated legacy monolithic systems to AWS, enhancing fault tolerance and reducing downtime.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🛠️ Integrated CI/CD pipelines with Jenkins, managed Kubernetes for container orchestration, and automated infrastructure with Terraform.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🧑‍💻 Replaced traditional REST APIs with GraphQL, improving API response efficiency by 30%.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📈 Integrated Prometheus and Grafana for real-time monitoring, reducing issue detection time.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔐 Implemented OAuth 2.0 and JWT for secure authentication and authorization.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🧪 Followed TDD principles, ensuring robust code quality in Agile sprints.
                </li>
              </ul>
            </div>

            {/* Environment */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Environment:</strong> ReactJS, Spring Boot, Kafka, AWS (EC2, S3, RDS), Kubernetes, Prometheus, Grafana, Jenkins, Docker, GraphQL, OAuth 2.0, JWT, PostgreSQL, Agile
            </div>
          </div>

          {/* MCR Web Solutions */}
          <div
            className="experience-card p-8 rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="mr-4 text-blue-500" size={20} />
              <h3 className="text-2xl font-semibold dark:text-white">Software Engineer</h3>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
              <Calendar className="mr-2" size={16} />
              <span>Aug 2020 - Jul 2021</span>
              <span className="mx-2">•</span>
              <span>MCR Web Solutions, Bhimavaram</span>
            </div>

            {/* Key Contributions */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-semibold dark:text-white">Key Contributions:</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔧 Designed RESTful APIs with Java Spring Boot and implemented Microservices Architecture for scalability.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  💡 Built dynamic React.js interfaces using Redux Toolkit for predictable state management.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📚 Established API versioning and automated testing with JUnit and Mockito.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔐 Implemented authentication and authorization with Spring Security and JWT.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📊 Leveraged Redis for caching and optimized PostgreSQL queries, reducing database response times by 35%.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🐳 Deployed applications in Docker containers and streamlined CI/CD with Jenkins.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔄 Worked within Agile workflows, participating in stand-ups, sprints, and retrospectives.
                </li>
              </ul>
            </div>

            {/* Environment */}
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <strong>Environment:</strong> ReactJS, Java Spring Boot, Microservices, Docker, Jenkins, Redis, PostgreSQL, JUnit, Mockito, REST APIs, Agile, Git
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
