import React from 'react';

const About = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black min-h-screen flex items-center py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Glowing Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 blur-3xl opacity-20"></div>

        {/* About Content */}
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            About <span className="text-pink-500">Me</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A visionary <span className="text-blue-500">developer</span>, creative 
            <span className="text-purple-500"> designer</span>, and innovative 
            <span className="text-pink-500"> creator</span> passionate about crafting groundbreaking solutions that shape the future.
          </p>

          {/* Social Media Icons */}
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition transform hover:scale-110"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-600 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-3xl"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-3xl"></i>
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-400 transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-3xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

