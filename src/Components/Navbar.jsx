// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode and save preference in localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Load the user's theme preference on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  return (
    <nav className="bg-orange-200 dark:bg-gray-900 p-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Welcome Quote */}
        <h1 className="text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Welcome to the Movie Search App!
        </h1>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl dark:text-gray-200 text-gray-700  focus:outline-none border border-spacing-6 p-3 rounded-lg hover:bg-gray-800 hover:dark:bg-black hover:dark:text-white hover:text-white"
        >
          {darkMode ? <BsSunFill /> : <BsFillMoonStarsFill />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
