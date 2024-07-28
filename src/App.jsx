

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
              className="w-8 h-8 cursor-pointer"/>
          </div>
        </div>
      </nav>

      <section id="about" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} min-h-screen w-screen py-60 flex items-center justify-center`}>
        <div className="max-w-full text-left px-6">
          <h1 className="text-5xl font-bold mb-4 hover:italic">Hi, I am Arushi👋</h1>
          <br />
          <p className="text-2xl">I am a third year computer science student working towards being a software engineer!👩🏽‍💻</p>
        </div>
      </section>

      <section id="background" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} w-screen py-20`}>
        <div className="max-w-full px-6 sm:px-20">
          <h1 className="text-2xl font-bold mb-4 text-left text-blue-400 pl-4 sm:pl-0">background</h1>
          <p className="text-xl flex pt-8 pl-4 sm:pl-0 pr-4 sm:pr-0 text-justify">
            I am currently studying Computer Science at Technological University of Dublin. I currently cover modules such as Object Oriented Programming, Data Structures and Algorithms, Operating Systems, Databases, etc in my course. <br /><br />
            I have a keen interest in machine learning and AI. I have been pursuing the Machine Learning Specialisation by Andrew Yang on Coursera. My goal is to further build projects to apply theoretical concepts of ML. I also like to dabble in Front-End development (made this website from scratch!). I achieved third place against 45 participants in a hackathon hosted by Workday.<br/><br />
            When I am not in front of a computer screen, I like to listen to music or read books. I am also the Secretary of the South Asian Society at TUD, where I help organise and manage cultural events for 500+ members.
          </p>
        </div>
      </section>

      <section id="skills" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} w-screen py-20`}>
        <div className="max-w-full px-6 sm:px-20">
          <h1 className="text-2xl font-bold mb-4 text-left text-blue-400 pl-4 sm:pl-0">skills</h1>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-right">
              <thead>
                <tr>
                  <th className="px-4 py-2">LANGUAGES</th>
                  <th className="px-4 py-2">FRAMEWORKS</th>
                  <th className="px-4 py-2">TECHNOLOGIES</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Python</td>
                  <td className="px-4 py-2">Django</td>
                  <td className="px-4 py-2">Git/GitHub</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Java</td>
                  <td className="px-4 py-2">Processing</td>
                  <td className="px-4 py-2">Bash</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">C</td>
                  <td className="px-4 py-2">Numpy</td>
                  <td className="px-4 py-2">Jira</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">JavaScript</td>
                  <td className="px-4 py-2">React</td>
                  <td className="px-4 py-2">Microsoft Suite</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">HTML/CSS</td>
                  <td className="px-4 py-2">Tailwind</td>
                  <td className="px-4 py-2">Figma</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">SQL</td>
                  <td className="px-4 py-2">WebAPI</td>
                  <td className="px-4 py-2">Postgres/SQLite</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="experience" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} w-screen py-20`}>
        <div className="max-w-full px-6 sm:px-20">
          <h1 className="text-2xl font-bold mb-4 text-left text-blue-400 pl-4 sm:pl-0">experience</h1>
          <div className="flex flex-col text-left">
            <div className="flex justify-between pl-10 py-5">
              <div>
                <h1 className="font-bold">Headstarter</h1>
                <p className='pl-10'>Software Engineering Fellow</p>
              </div>
              <div className="text-right">
                <p>July, 2024 - Present</p>
              </div>
            </div>
            <div className="flex justify-between pl-10 py-5">
              <div>
                <h1 className="font-bold">TUD Societies</h1>
                <p className='pl-10'>Secretary of South Asian Society</p>
              </div>
              <div className="text-right">
                <p>September,2023 - Present</p>
              </div>
            </div>
            <div className="flex justify-between pl-10 py-5">
              <div>
                <h1 className="font-bold">Dell Technologies</h1>
                <p className='pl-10'>Stem Aspire Mentee</p>
              </div>
              <div className="text-right">
                <p>Oct, 2023 - May, 2024</p>
              </div>
            </div>
            <div className="flex justify-between pl-10 py-5">
              <div>
                <h1 className="font-bold">RapidRatings</h1>
                <p className='pl-10'>Software Engineering Intern</p>
              </div>
              <div className="text-right">
                <p>July,2023 - August, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} w-screen py-20`}>
        <div className="max-w-full px-6 sm:px-20">
          <h1 className="text-2xl font-bold mb-4 text-left text-blue-400 pl-4 sm:pl-0">projects</h1>
          <p className="text-xl flex pt-8 pl-4 sm:pl-0 pr-4 sm:pr-0">
            upcoming!
          </p>
        </div>
      </section>
 
      <section id="contact" className={`${darkMode ? 'bg-gray-900' : 'bg-white'} flex w-screen items-center justify-center py-60`}>
        <div className="text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="mt-6">
            <a href="https://www.linkedin.com/in/arushi-singh2803/" className="text-blue-600 hover:underline">LinkedIn</a>
            <span className="mx-2">|</span>
            <a href="https://github.com/arushisingh2803" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </section>

      <footer className={`${darkMode ? 'bg-gray-900' : 'bg-white'} w-screen text-center py-4`}>
        <p>Website made using HTML5, Tailwind CSS and React</p>
        <br></br>
        <p>&copy; 2024 Arushi Singh. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

