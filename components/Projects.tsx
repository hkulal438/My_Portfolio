import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Virtual AI Assistant',
      description: 'An intelligent virtual assistant built with React and AI APIs, featuring natural language processing and voice commands.',
      image: 'https://images.pexels.com/photos/8566474/pexels-photo-8566474.jpeg',
      technologies: ['HTML5', 'CSS3', 'Javascript', 'Restful API'],
      liveLink: 'https://virtual-ai-assistant-frontend.vercel.app/',
      githubLink: 'https://github.com/hkulal438'
    },
    {
      title: 'Gk Groups',
      description: 'A modern, responsive portfolio website showcasing creative design and smooth animations.',
      image: 'https://images.pexels.com/photos/1637080/pexels-photo-1637080.jpeg',
      technologies: ['React', 'CSS3', 'Node.js', 'Responsive Design','MongoDB'],
      liveLink: 'https://gkgrp.com/',
      githubLink: 'https://github.com/hkulal438'
    },
    {
      title: 'Smart Weather Application',
      description: 'A dynamic web application with advanced features including real-time data visualization and user interactions.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['React', 'CSS3', 'Responsive Design', 'Restful API'],
      liveLink: 'https://smart-weather-app3.onrender.com',
      githubLink: 'https://github.com/hkulal438'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Featured Projects
          </h2>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
          <p 
            className="text-gray-600 text-lg max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Here are some of my recent projects that showcase my skills and passion for creating innovative web solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <ExternalLink size={16} className="text-gray-700" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-300"
                  >
                    <Github size={16} className="text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium text-center hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;