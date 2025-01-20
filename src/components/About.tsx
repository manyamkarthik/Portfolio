import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Pic from "../assets/Pic.jpg"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
              <img
                src={Pic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-100 rounded-full -z-10 dark:bg-blue-900 " />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with a Master's in Computer Science from Texas Tech University. 
              With over 3 years of professional experience, I specialize in building scalable web applications 
              and microservices using modern technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              My expertise spans both frontend and backend development, with a strong focus on creating 
              efficient, maintainable, and user-friendly solutions. I'm particularly interested in cloud 
              technologies and DevOps practices.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900  dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Lubbock, Texas</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">3+ Years</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
