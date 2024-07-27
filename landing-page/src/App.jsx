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
    <div className={darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}>
      <nav className={`fixed top-0 left-0 w-full shadow-md z-10 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center">
            <img className="w-8 h-auto" src={daisy} alt="daisy" />
          </div>

          <div className="flex items-center">
            <img 
              src={darkMode ? moonIcon : sunIcon} 
              alt={darkMode ? 'Light Mode' : 'Dark Mode'}
              onClick={handleToggle}
              className="w-8 h-8 cursor-pointer"
            />
          </div>
        </div>
      </nav>

      <section id="about" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} h-max w-screen py-60 flex items-center justify-center`}>
        <div className="max-w-full top-0 left-0 text-left px-6">
          <h1 className="text-5xl font-bold mb-4 hover:italic">Hi, I am Arushi👋</h1>
          <br></br>
          <p className="text-2xl">I am a third year computer science student working towards being a software engineer!👩🏽‍💻</p>
        </div>
      </section>

      <section id="background" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} h-max w-screen py-60`}>
        <div className="max-w-full top-0 left-0 px-6">
          <h1 className="text-2xl font-bold mb-4 text-left text-blue-500 pl-20">background</h1>
          <p className="text-xl pl-60 pr-20 text-right">I am currently studying Computer Science at Technological University of Dublin. I currently cover modules such as Object Oriented Programming, Data Structures and Algorithms, Operating Systems, Databases, etc in my course. <br></br><br></br>I have a keen interest in machine learning and AI. I have been pursuing the Machine Learning Specialisation by Andrew Yang on Coursera. My goal is to further build projects to apply theoritical concepts of ML. I also like to dabble in Front-End development(made this website from scratch!). <br></br> <br></br> When I am not in front of a computer screen, I like to listen to music or read books. I am also the Secretary of the South Asian Society at TUD, where I help organise and manage cultural events for 500+ members.</p>
        </div>
      </section>

      <section id="skills" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} h-max w-screen py-60`}>
        <div className="max-w-full top-0 left-0 px-6">
          <h1 className="text-2xl font-bold mb-4 text-left text-blue-500 pl-20">skills</h1>
          <p className="text-xl pl-60 pr-20 text-right"></p>
        </div>
      </section>

      <section id="contact" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} flex w-screen items-center justify-center py-60`}>
        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="mt-6">
            <a href="" className="text-blue-600 hover:underline">LinkedIn</a>
            <span className="mx-2">|</span>
            <a href="" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </section>

      <footer className={`${darkMode ? 'bg-gray-900' : 'bg-white'} w-screen text-center py-4`}>
        <p>&copy; 2024 Arushi Singh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
