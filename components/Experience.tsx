import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Cognifyz Technologies',
      position: 'Web Developer Intern',
      period: 'Jun 2024 - Aug 2024',
      location: 'Remote',
      description: [
        'Developed responsive web applications using React and modern JavaScript',
        'Collaborated with design team to implement pixel-perfect UI components',
        'Optimized application performance and improved loading times by 40%',
        'Participated in code reviews and maintained high coding standards'
      ]
    },
    {
      company: 'Orison Technologies',
      position: 'Full stack Developer',
      period: 'Jan 2024 - Feb 2024',
      location: 'Remote',
      description: [
        'Built custom web applications for various clients using MERN stack',
        'Implemented secure authentication and authorization systems',
        'Developed RESTful APIs and integrated third-party services',
        'Delivered projects on time while maintaining excellent client relationships'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Work Experience
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
            My professional journey showcases hands-on experience in web development and a commitment to delivering quality solutions.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={200 + index * 200}
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
              )}

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4 hidden md:block"></div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                          {exp.company}
                          {exp.website && (
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </h3>
                        <h4 className="text-xl font-semibold text-blue-600 mb-3">{exp.position}</h4>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-6 text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;