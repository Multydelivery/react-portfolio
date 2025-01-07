import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div className="relative bg-white min-h-screen flex items-center py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Glowing Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 blur-3xl opacity-10"></div>

        {/* About Content */}
        <div className="text-center text-gray-800">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            About <span className="text-pink-500">Me</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A visionary <span className="text-blue-500">developer</span>, creative 
            <span className="text-purple-500"> designer</span>, and innovative 
            <span className="text-pink-500"> creator</span> passionate about crafting groundbreaking solutions that shape the future.
          </p>

          {/* Social Media Icons */}
               {/* Social Media Links */}
               <div className="flex justify-center space-x-6 m-6">
                 <a
                   href="https://www.instagram.com/felipesanz17?igsh=MWNobDBiaWpoOWgxaA%3D%3D&utm_source=qr"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-300 hover:text-pink-500 transition transform hover:scale-110"
                   aria-label="Instagram"
                 >
                   <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                 </a>
                 <a
                   href="https://www.linkedin.com/in/felipe-sanz-b4b5b630b/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-300 hover:text-blue-600 transition transform hover:scale-110"
                   aria-label="LinkedIn"
                 >
                   <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
                 </a>
                 <a
                   href="https://x.com/felipeCode24"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
                   aria-label="Twitter"
                 >
                   <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
                 </a>
                 <a
                   href="https://github.com/Multydelivery"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-gray-300 hover:text-gray-400 transition transform hover:scale-110"
                   aria-label="GitHub"
                 >
                   <FontAwesomeIcon icon={faGithub} className="text-3xl" />
                 </a>
               </div>
        </div>
      </div>
    </div>
  );
};

export default About;


