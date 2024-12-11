import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Work Experience</h2>
        <div className="space-y-12">
          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex items-center mb-2">
              <Briefcase className="mr-2 text-blue-500" size={20} />
              <h3 className="text-xl font-semibold dark:text-white">Full Stack Software Engineer</h3>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
              <Calendar className="mr-2" size={16} />
              <span>Apr 2021 - Dec 2022</span>
              <span className="mx-2">•</span>
              <span>Infosys Technologies LLC, Hyderabad</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Developed and enhanced 5+ enterprise-grade web applications using Spring Boot and React.js</li>
              <li>Built responsive and reusable UI components with React.js</li>
              <li>Implemented state management using Context API and Redux patterns</li>
              <li>Created microservices with Spring Boot and integrated with REST APIs</li>
              <li>Worked with Docker for containerization and AWS services</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <div className="flex items-center mb-2">
              <Briefcase className="mr-2 text-blue-500" size={20} />
              <h3 className="text-xl font-semibold dark:text-white">Software Engineer Intern</h3>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
              <Calendar className="mr-2" size={16} />
              <span>Mar 2019 - Apr 2021</span>
              <span className="mx-2">•</span>
              <span>MCR Web Solutions, Bhimavaram</span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Created and maintained 15+ RESTful APIs using Java, Spring Boot, and Hibernate</li>
              <li>Integrated React-based front-end components with Java microservices</li>
              <li>Optimized SQL queries and database schemas in MySQL</li>
              <li>Participated in code reviews and Agile ceremonies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;