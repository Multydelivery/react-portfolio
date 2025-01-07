import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="bg-white text-gray-800 flex items-center justify-between px-6 py-4 font-medium w-full fixed top-0 left-0 z-50 shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-extrabold">
        <NavLink to="/" className="text-gray-800 hover:text-cyan-500 transition">
          <p className="font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 border-b-4 border-cyan-500">
            <span className="text-cyan-500">Felipe</span> Sanz
          </p>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-6">
        {['HOME', 'ABOUT', 'CONTACT', 'PROJECTS'].map((item, index) => (
          <li key={index}>
            <NavLink
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-lg px-4 py-2 rounded-md transition ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-cyan-500 hover:bg-gray-100'
                }`
              }
            >
              {item}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setVisible(!visible)}
        className="sm:hidden text-2xl text-cyan-500 hover:text-purple-500 focus:outline-none transition"
        aria-label="Toggle menu"
      >
        {visible ? '✖' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white z-40 transition-transform duration-500 ${
          visible ? 'translate-x-0 w-3/4 shadow-2xl' : 'translate-x-full w-0'
        } rounded-l-lg`}
      >
        <div className="flex flex-col h-full p-6 relative">
          {/* Close Button */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-4 right-4 text-3xl text-cyan-500 hover:text-purple-500 transition"
            aria-label="Close menu"
          >
            ✖
          </button>

          {/* Glowing Header */}
          <div className="mb-8 text-center mt-10">
            <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 tracking-widest drop-shadow-lg">
              MENU
            </h1>
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col gap-8 mt-4">
            {['HOME', 'ABOUT', 'CONTACT', 'PROJECTS'].map((item, index) => (
              <li key={index} className="text-center">
                <NavLink
                  onClick={() => setVisible(false)}
                  to={`/${item.toLowerCase()}`}
                  className="text-2xl font-bold text-gray-300 hover:text-cyan-500 hover:shadow-md hover:bg-gray-800 py-2 px-6 rounded-lg transition-all"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Glowing Footer */}
          <div className="absolute bottom-8 left-0 w-full text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Felipe Sanz
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;


