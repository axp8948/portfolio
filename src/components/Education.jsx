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

const CARD_WIDTH = 'max-w-xl';

const Education = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          Education
        </h2>
        <div className="flex flex-col items-center w-full max-w-3xl mx-auto space-y-16">
          {educationData.map((edu, idx) => (
            <div key={idx} className="flex flex-col items-center w-full">
              <div
                className={`relative bg-zinc-800/60 border border-gray-200/30 rounded-2xl shadow-2xl px-8 py-8 w-full ${CARD_WIDTH} transition-all duration-500 group hover:shadow-[0_0_32px_0_rgba(34,211,238,0.35)] hover:ring-2 hover:ring-cyan-400/60`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 