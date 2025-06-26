import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => (
  <section
    id="home"
    className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16 text-center bg-transparent"
  >
    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
      Anmol Pandey
    </h1>
    <div className="text-2xl md:text-3xl font-semibold text-white">
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
  </section>
);

export default Hero; 