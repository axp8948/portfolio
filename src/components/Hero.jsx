import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1
        className="text-7xl md:text-8xl font-extrabold bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent text-center drop-shadow-lg"
      >
        Anmol Pandey
      </h1>
      <div
        className="mt-6 text-2xl md:text-4xl font-semibold bg-gradient-to-b from-gray-400 via-gray-200 to-white bg-clip-text text-transparent text-center"
      >
        <ReactTyped
          strings={["I code.", "Then I debug.", "Then I debug the debug."]}
          typeSpeed={60}
          backSpeed={40}
          backDelay={1200}
          loop
          showCursor
          cursorChar="|"
        />
      </div>
    </div>
  );
};

export default Hero; 