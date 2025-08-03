import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Sacred Heart College Madanthyar(Mangalore University)',
      period: '2022 - 2025',
      location: 'Madanthyar',
      description: 'Focused on computer science fundamentals, programming languages, and software development methodologies.',
      achievements: [
        'Relevant Coursework: Data Structures, Algorithms, Web Development',
        'Participated in coding competitions and hackathons',
       
      ]
    }
  ];

  const certifications = [
    'Frontend Web Development - Cognifyz Technologies',
    'SQL Test - HackerRank',
    'Power BI & Tableu - Simplilearn',
    'Software Engineering and Job Simulation - Forage'
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Education & Certifications
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
            My educational background and continuous learning journey in technology and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" />
              Education
            </h3>

            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                <h5 className="text-xl font-semibold text-blue-600 mb-4">{edu.institution}</h5>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{edu.description}</p>

                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 100}
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-4"></div>
                    <span className="text-gray-800 font-medium">{cert}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills highlight */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Key Learning Areas</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• Web Development</div>
                <div>• Database Design</div>
                <div>• API Development</div>
                <div>• Cloud Computing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;