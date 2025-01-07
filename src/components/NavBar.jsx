import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <nav className="bg-gray-900 text-white flex items-center justify-between px-6 py-4 font-medium w-full fixed top-0 left-0 z-50 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-extrabold">
        <NavLink to="/" className="text-white-500 hover:text-purple-400 transition">
          <p className='font-bold'>Felipe Sanz</p>
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
                    ? 'bg-slate-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-purple-500'
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
        className="sm:hidden text-2xl text-pink-500 hover:text-pink-400 focus:outline-none transition"
        aria-label="Toggle menu"
      >
        {visible ? '✖' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white z-40 transition-transform duration-300 ${
          visible ? 'translate-x-0 w-2/3' : 'translate-x-full w-0'
        } shadow-lg`}
      >
        <div className="flex flex-col h-full p-6">
          <button
            onClick={() => setVisible(false)}
            className="self-end text-2xl mb-4 text-pink-500 hover:text-pink-400 transition"
            aria-label="Close menu"
          >
            ✖
          </button>
          {['HOME', 'ABOUT', 'CONTACT', 'PROJECTS'].map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setVisible(false)}
              to={`/${item.toLowerCase()}`}
              className="py-4 text-lg border-b border-gray-700 hover:text-pink-500 transition"
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

