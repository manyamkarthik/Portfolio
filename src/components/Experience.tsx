import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Work Experience
        </h2>

        <div className="space-y-12">

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
              <span>Apr 2021 - Dec 2022</span>
              <span className="mx-2">•</span>
              <span>Infosys Technologies LLC, Hyderabad</span>
            </div>

            {/* Core Contributions */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-semibold dark:text-white">Core Contributions:</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🚀 Developed and Enhanced Web Applications using Spring Boot and React.js.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  💻 Built responsive and reusable UI components with React.js.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📊 Used Context API and Redux patterns for state management.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔗 Integrated front-end components with RESTful APIs using Axios and Fetch.
                </li>
              </ul>
            </div>

            {/* Backend Expertise */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-semibold dark:text-white">Backend Expertise:</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🛠️ Built and deployed microservices with Spring Boot and Spring Cloud.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📚 Designed relational databases with Spring Data JPA and Hibernate.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  ⚡ Implemented REST APIs for key application features.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔐 Integrated Spring Security with JWT for authentication and role-based authorization.
                </li>
              </ul>
            </div>

            {/* Testing and Deployment */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-semibold dark:text-white">Testing and Deployment:</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🧪 Wrote unit tests using JUnit and Mockito with 80%+ code coverage.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📝 Documented APIs using Swagger/OpenAPI.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔍 Integrated Spring Boot Actuator and logging for system monitoring.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔄 Supported CI/CD pipelines with Jenkins or GitHub Actions.
                </li>
              </ul>
            </div>

            {/* Cloud and DevOps */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xl font-semibold dark:text-white">Cloud and DevOps:</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  ☁️ Assisted in migrating small-scale applications to AWS (S3, EC2).
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🐳 Worked with Docker to containerize applications.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📊 Monitored applications using Prometheus and Grafana.
                </li>
              </ul>
            </div>
          </div>

          {/* MCR Web Solutions */}
          <div
            className="experience-card p-8 rounded-lg shadow-xl transform transition duration-500 ease-in-out hover:scale-105"
            data-aos="fade-up"
          >
            <div className="flex items-center mb-4">
              <Briefcase className="mr-4 text-blue-500" size={20} />
              <h3 className="text-2xl font-semibold dark:text-white">Software Engineer Intern</h3>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
              <Calendar className="mr-2" size={16} />
              <span>Mar 2019 - Apr 2021</span>
              <span className="mx-2">•</span>
              <span>MCR Web Solutions, Bhimavaram</span>
            </div>

            {/* Key Contributions */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold dark:text-white">Key Contributions:</h4>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔧 Developed  high-performing RESTful services using Spring Boot, leveraging Spring Data JPA for efficient data access.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  💡 Designed microservices using Spring Cloud with Eureka and Ribbon.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  🔐 Implemented authentication and authorization with Spring Security and JWT
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📈 Participated in Agile workflows and microservices deployment.
                </li>
                <li className="experience-item transform transition duration-500 hover:translate-x-2">
                  📚 Enhanced data performance with Spring Data JPA and optimized SQL queries.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
