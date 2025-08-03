import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Hrithika,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    const mailtoLink = `mailto:hrithika846@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hrithika846@gmail.com',
      href: 'mailto:hrithika846@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7483835150',
      href: 'tel:+917483835150'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mangalore',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            data-aos="fade-up"
          >
            Get In Touch
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
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Let's Start a Conversation
            </h3>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you're a company looking to hire, or you're a fellow developer 
              wanting to collaborate, don't hesitate to reach out.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{info.label}</div>
                    <a 
                      href={info.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;