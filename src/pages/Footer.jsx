import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-300 py-12 relative">
      {/* Glowing Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-blue-500 opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Branding/Logo */}
        <h2 className="text-3xl font-extrabold text-white mb-6">Connect with Me</h2>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
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

        {/* Footer Navigation */}
        <ul className="flex justify-center space-x-8 text-sm mb-6">
          <li>
            <a href="/about" className="hover:text-white transition transform hover:scale-105">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white transition transform hover:scale-105">
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:text-white transition transform hover:scale-105">
              Privacy Policy
            </a>
          </li>
        </ul>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} <span className="text-white font-bold">Felipe Sanz</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


