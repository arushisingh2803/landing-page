import './App.css';
import daisy from './images/daisies.png';
import dayandnight from './images/dark-mode.png';

const App = () => {
  return (
    <div>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
            rel="stylesheet"
          />
          <title>Portfolio</title>
        </head>
        <body className="font-josefin">
          <div className="h-1/2 lg:h-screen bg-gradient-to-t from-indigo-300">
            <nav class="fixed top-0 left-0 w-full bg-white text-indigo-900 shadow-md z-10">
              <div class="container mx-auto flex items-center justify-between py-4 px-6">
                  <div class="flex items-center">
                    <img className="w-8 h-auto" src={daisy} alt="daisy" />  
                  </div>
                  <div class="flex items-center space-x-4">
                      <a href="#" class="hover:text-indigo-500">about</a>
                      <a href="#" class="hover:text-indigo-500">contact</a>
                  </div>
                  <div class="flex items-center">
                  <img className="w-8" src={dayandnight} alt="day and night" />
                  </div>
              </div>
            </nav>
          </div>
        </body>
      </html>
    </div>
  );
};

export default App;
