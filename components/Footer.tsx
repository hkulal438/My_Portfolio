import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/hkulal438',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/hrithika-kulal-92ba22316',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:hrithika846@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Hrithika Kulal
            </h3>
            <p className="text-gray-400 max-w-md mx-auto">
              Front End Developer passionate about creating innovative web solutions and beautiful user experiences.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-110 group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 flex items-center justify-center">
              Made with 
              <Heart size={16} className="mx-2 text-red-500" /> 
              by Hrithika Kulal © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;