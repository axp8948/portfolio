import React from 'react';

const experiences = [
  {
    icon: '🧪',
    title: 'Research WorkShop – RobustSumm',
    org: 'University of Texas at Arlington',
    date: 'Feb 2025',
    location: 'Arlington, TX',
    description: 'Analyzed summarization model robustness using adversarial test-time attacks.',
  },
  {
    icon: '👨‍🏫',
    title: 'Summer Student Assistant',
    org: 'Upward Bound, UTA',
    date: 'Jun–Jul 2025',
    location: 'Arlington, TX',
    description: 'Mentored high school students, coordinated daily operations, and fostered a safe, growth-focused environment.',
  },
  {
    icon: '💻',
    title: 'Hackathons – UTA Datathon, UTD Finhack',
    org: '',
    date: '2024–2025',
    location: '',
    description: 'Collaborated with diverse teams to build innovative data-driven solutions under tight deadlines, sharpening teamwork and rapid prototyping skills.',
  },
];

const Experience = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          Experiences & Involvement
        </h2>
        <div className="relative flex flex-col items-center w-full max-w-3xl mx-auto">
          {/* Glowing vertical stepper */}
          <div className="absolute left-1/2 top-0 h-full z-0" style={{ transform: 'translateX(-50%)' }}>
            <div className="w-1 h-full bg-gradient-to-b from-cyan-400/80 via-cyan-300/40 to-transparent rounded-full animate-pulse shadow-[0_0_16px_2px_rgba(34,211,238,0.25)]" />
          </div>
          <div className="flex flex-col space-y-24 w-full z-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex items-center w-full min-h-[160px]">
                {/* Stepper dot */}
                <div className="absolute left-1/2 top-0 z-20" style={{ transform: 'translate(-50%, -50%)' }}>
                  <div className="w-7 h-7 bg-cyan-300 border-4 border-zinc-900 rounded-full flex items-center justify-center text-2xl shadow-lg">
                    <span>{exp.icon}</span>
                  </div>
                </div>
                {/* Card */}
                <div className="mx-auto w-full max-w-xl bg-zinc-800/60 border border-gray-200/30 rounded-2xl shadow-2xl px-8 py-8 transition-all duration-500 group hover:shadow-[0_0_32px_0_rgba(34,211,238,0.35)] hover:ring-2 hover:ring-cyan-400/60" style={{ transformStyle: 'preserve-3d', transform: 'rotateY(-6deg) rotateX(4deg)' }}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent mb-1 md:mb-0">
                      {exp.title}
                    </h3>
                    <span className="text-cyan-200 font-mono text-lg md:text-xl ml-0 md:ml-4">{exp.date}</span>
                  </div>
                  <div className="text-lg md:text-xl font-semibold text-gray-300 mb-1">{exp.org}{exp.org && exp.location && ' · '}{exp.location}</div>
                  <div className="text-gray-400 mb-2">{exp.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 