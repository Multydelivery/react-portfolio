import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

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
            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-600 transition transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-400 transition transform hover:scale-110"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
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



