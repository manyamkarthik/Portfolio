import { Menu, Github, Linkedin  } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">Karthik Manyam</h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/manyamkarthik" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hari-karthik-manyam" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <Linkedin size={20} />
            </a>
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;