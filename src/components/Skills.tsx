
import { Code, Database, Cloud, Github } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code />,
      title: "Programming Languages & Frameworks",
      skills: ["JavaScript", "Java", "Python", "SQL", "Spring Framework", "Spring Boot", "React.js", "Redux", "Next.js"]
    },
    {
      icon: <Database />,
      title: "Databases & Backend",
      skills: ["Oracle RDBMS", "PostgreSQL", "NoSQL", "Snowflake", "RESTful APIs", "Microservices"]
    },
    {
      icon: <Cloud />,
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3)", "Docker", "Kubernetes", "Prometheus", "Grafana"]
    },
    {
      icon: <Github />,
      title: "Version Control & Testing",
      skills: ["Git", "GitHub", "GitLab CI/CD", "Junit", "Selenium", "Mockito"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4 text-blue-600 dark:text-blue-400">
                {category.icon}
                <h3 className="ml-2 font-semibold dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;