import React from 'react';

const educationData = [
  {
    school: 'University of Texas at Arlington',
    location: 'Arlington, TX',
    degree: 'Honors Bachelor of Science in Computer Science',
    gpa: '3.9',
    dates: 'August 2024 – December 2026',
    activities: 'ACM, SCAI',
  },
  {
    school: 'Dallas College',
    location: 'Dallas, TX',
    degree: 'Associate of Science',
    gpa: '4.0',
    dates: 'January 2023 – May 2024',
    activities: 'PTK, STEM League',
  },
];

const Education = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          Education
        </h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400/60 via-cyan-300/30 to-transparent rounded-full shadow-lg" style={{ transform: 'translateX(-50%)', zIndex: 0 }} />
          <div className="space-y-24 w-full max-w-2xl z-10">
            {educationData.map((edu, idx) => (
              <div key={idx} className="relative flex flex-col items-center group">
                {/* 3D Card Node */}
                <div
                  className="bg-zinc-800/60 border border-gray-200/30 rounded-2xl shadow-2xl px-8 py-8 w-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_32px_rgba(0,255,255,0.10)]"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateY(-8deg) rotateX(6deg)',
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-2 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
                    {edu.school}
                  </h3>
                  <div className="text-lg md:text-xl font-semibold text-gray-300 mb-1">{edu.location}</div>
                  <div className="text-lg md:text-xl font-semibold mb-1">
                    <span className="bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
                      {edu.degree}
                    </span>
                    {', GPA '}
                    <span className="bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">{edu.gpa}</span>
                  </div>
                  <div className="text-gray-400 mb-1">{edu.dates}</div>
                  <div className="text-cyan-200 font-mono">{edu.activities}</div>
                </div>
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-full w-5 h-5 bg-cyan-300 border-4 border-zinc-900 rounded-full shadow-lg" style={{ transform: 'translate(-50%, -50%)', zIndex: 20, display: idx === educationData.length - 1 ? 'none' : 'block' }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 