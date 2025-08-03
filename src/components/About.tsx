import { Award, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: 'Fresher', value: '2 Internships' },
    { icon: Users, label: 'Projects Completed', value: '10+' },
    { icon: Zap, label: 'Technologies', value: '7+' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            About Me
          </h2>
          <div 
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          ></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
              alt="About Me"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div data-aos="fade-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I'm a dedicated FrontEnd Developer with a passion for creating innovative web solutions. 
              With expertise in modern technologies like React, Node.js, and cloud platforms, I transform 
              ideas into powerful digital experiences.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              My journey in technology is driven by curiosity and a commitment to continuous learning. 
              I believe in writing clean, maintainable code and creating user-centric applications that 
              make a real impact.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;