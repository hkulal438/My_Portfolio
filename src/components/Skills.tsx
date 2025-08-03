import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 65 },
        { name: 'HTML%', level: 85 },
        { name: 'Tailwind CSS', level: 65 },
        { name: 'JavaScript', level: 50 },
        { name: 'CSS3', level: 70 },
        { name: 'Bootstrap', level: 50 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 45 },
        { name: 'Express.js', level: 45 },
        { name: 'REST APIs', level: 50 }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', level: 55 },
        { name: 'Git/GitHub', level: 75 },
        { name: 'PHP & MYSQL', level: 55 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Technical Skills
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
            I'm proficient in a wide range of technologies and frameworks, constantly learning and adapting to new tools and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={200 + categoryIndex * 100}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
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