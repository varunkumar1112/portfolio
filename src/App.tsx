import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Phone, 
  Mail, 
  Moon, 
  Sun,
  Code,
  GraduationCap,
  Briefcase,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const projects = [
    {
      title: "Expense Tracker",
      description: "Tool for calculating everyday expenses with an advanced tax calculator.",
      duration: "Jul 23 - Aug 23",
      technologies: ["React JS", "Firebase", "Node JS"]
    },
    {
      title: "Agrilok",
      description: "Provides crop recommendations in real time based on input.",
      duration: "Aug 23 - Sep 23",
      technologies: ["Python Flask"]
    },
    {
      title: "Real-time Voice Translator",
      description: "Provides real-time voice translation using voice recognition.",
      duration: "May 24 - Jun 24",
      technologies: ["Python"]
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "Python", level: 75 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation Bar */}
      <nav className="fixed w-full top-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <a href="#home" className="text-xl font-bold text-gray-900 dark:text-white">
              VK
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-200" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-800" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-gray-200" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-800" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-indigo-500 dark:border-indigo-400">
            <img
              src="/varun.jpg"
              alt="Varun Kumar"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Varun Kumar
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="tel:+918073715063"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Call +91 8073715063"
            >
              <Phone className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:varunkanchan512@gmail.com"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="Email varunkanchan512@gmail.com"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://github.com/phantomdeluuxe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/varun-kumar-91111a280"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-800 mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
         {/* Education */}
         <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white">Bachelor of Engineering</h3>
                <p className="text-gray-600 dark:text-gray-300">Computer Science Engineering</p>
                <p className="text-gray-600 dark:text-gray-300">Shri Madhwa Vadiraja Institute of Technology & Management, Bantakal, IN</p>
                <p className="text-gray-500 dark:text-gray-400">CGPA: 7.6</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 dark:text-white">K12 Education</h3>
                <p className="text-gray-600 dark:text-gray-300">Computer Science</p>
                <p className="text-gray-600 dark:text-gray-300">Shamili Pre University College, Udupi, IN</p>
                <p className="text-gray-500 dark:text-gray-400">Percentage: 84%</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
            </div>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 dark:bg-indigo-400 transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Duration: {project.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <div className="flex gap-4">
              <a
                href="tel:+918073715063"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Call +91 8073715063"
              >
                <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="mailto:varunkanchan512@gmail.com"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label="Email varunkanchan512@gmail.com"
              >
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Social</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/phantomdeluuxe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/varun-kumar-91111a280"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Varun Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;