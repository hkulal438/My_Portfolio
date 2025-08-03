import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-scroll";
import img from "../assets/1.jpg";
const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div data-aos="fade-up" data-aos-delay="200">
          <img
            src={img}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 shadow-xl ring-4 ring-white/50"
          />
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Hrithika Kulal
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            Front End Developer
          </span>{" "}
          passionate about creating innovative web solutions and beautiful user
          experiences
        </p>

        <div
          className="flex justify-center space-x-6 mb-12"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <a
            href="https://github.com/hkulal438"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <Github className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/hrithika-kulal-92ba22316"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </a>
          <a
            href="mailto:hrithika846@gmail.com"
            className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          >
            <Mail className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </a>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105"
          >
            Explore My Work
          </Link>
          <a
            href="#contact"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
