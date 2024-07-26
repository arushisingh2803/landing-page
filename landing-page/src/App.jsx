import React, { useState } from 'react';
import './App.css';
import daisy from './images/daisies.png';
import sunIcon from './images/sun.png'; 
import moonIcon from './images/moon.png'; 

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}>
      <div className="h-screen bg-white">
        <nav className={`fixed top-0 left-0 w-full shadow-md z-10 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
            <div className="flex items-center">
              <img className="w-8 h-auto" src={daisy} alt="daisy" />
            </div>

            <div className="flex items-center space-x-4">
              <a href="#about" className="hover:text-gray-200">About</a>
              <a href="#contact" className="hover:text-gray-200">Contact</a>
            </div>

            <div className="flex items-center">
              <img 
                src={darkMode ? moonIcon : sunIcon} 
                alt={darkMode ? 'Light Mode' : 'Dark Mode'}
                onClick={handleToggle}
                className="w-8 h-8 cursor-pointer"/>
            </div>
          </div>
        </nav>

        <section id="about" className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="h-screen flex items-center justify-center">
            <div className="text-left">
              <h1 className="text-4xl font-bold mb-4">Hi, I am Arushi👋</h1>
              <p className="text-xl">I am a third year computer science student working towards being a software engineer!👩🏽‍💻</p>
            </div>
          </div>
        </section>

        <section id="contact" className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div class="container mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4">Contact Me</h2>
            <div class="mt-6">
                <a href="" class="text-blue-600 hover:underline">LinkedIn</a>
                <span class="mx-2">|</span>
                <a href="" class="text-blue-600 hover:underline">GitHub</a>
            </div>
          </div>
        </section>
        
        <section id="about" className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <div className="h-screen flex items-center justify-center">
            <footer className="text-center">
            <p>&copy; 2024 Arushi Singh. All rights reserved.</p>
            </footer>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
