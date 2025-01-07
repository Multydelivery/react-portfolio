import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12 p-20">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Building Tomorrow's <span className="text-blue-500">Web</span>, Today.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Empowering innovation through modern design, cutting-edge technology, and a futuristic vision.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start gap-4">
            <Link
              to="/about"
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition transform hover:scale-105"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-gray-700 text-white font-medium rounded-md shadow-md hover:bg-gray-600 transition transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Image/Illustration */}
        <div className="flex-1 flex flex-col items-center justify-end">
          <div className="relative rounded-full overflow-hidden shadow-lg w-64 h-64 border-4 border-orange-500 hover:scale-110 transition transform">
            <img
              src="public/images/january2025portfolioimg.JPG"
              alt="Developer"
              className="w-full h-full object-cover object-[50%_50%]"
            />
          </div>





          {/* Technology Icons */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <i className="fab fa-html5 text-orange-500 text-5xl" title="HTML5"></i>
            <i className="fab fa-css3-alt text-blue-500 text-5xl" title="CSS3"></i>
            <i className="fab fa-js text-yellow-500 text-5xl" title="JavaScript"></i>
            <i className="fab fa-react text-cyan-500 text-5xl" title="React"></i>
            <i className="fab fa-node text-green-500 text-5xl" title="Node.js"></i>
            <i className="fab fa-github text-gray-400 text-5xl" title="GitHub"></i>
            <i className="fas fa-database text-indigo-500 text-5xl" title="SQL"></i>
            <i className="fab fa-npm text-red-500 text-5xl" title="NPM"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
