import React from 'react';
import prodifyThumb from '../assets/screenshots/prodify_thumb.png';
import whiteCoatAIThumb from '../assets/screenshots/whitecoatai_thumb.png';
import healthCostAIThumb from '../assets/screenshots/healthcost_ai_predictor.png';
import mavThreadThumb from '../assets/screenshots/mavthread.png';

const projects = [
  {
    title: 'Prodify',
    description: 'Personalized productivity app to track daily activities, notes, and goals with an AI chatbot.',
    image: prodifyThumb,
    live: 'https://the-prodify.com/',
    github: 'https://github.com/axp8948/prodify',
  },
  {
    title: 'WhiteCoatAI',
    description: 'AI agent that simplifies medical documents for everyone, with summaries, charts, and chat.',
    image: whiteCoatAIThumb,
    live: 'https://whitecoatai.tech',
    github: 'https://github.com/axp8948/whiteCoatAI',
  },
  {
    title: 'MavThread',
    description: 'MavThread is a platform for students to share their ideas, communicate, and collaborate.',
    image: mavThreadThumb,
    live: 'https://github.com/axp8948/MavThread',
    github: 'https://github.com/axp8948/MavThread',
  },
];

const ProjectCard = ({ title, description, image, live, github }) => (
  <div
    className="relative flex flex-col items-center group cursor-pointer"
    style={{ perspective: '1200px' }}
    onClick={() => live && window.open(live, '_blank')}
    tabIndex={0}
    role="button"
    onKeyPress={e => {
      if (e.key === 'Enter' && live) window.open(live, '_blank');
    }}
  >
    {/* Floating Link & Line (only on hover, only if live link exists) */}
    {live && (
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1 rounded-full bg-black/80 text-white font-mono text-base shadow-lg border border-gray-200/30 hover:bg-black/90 transition-colors duration-200 pointer-events-auto"
          onClick={e => e.stopPropagation()}
        >
          <span className="font-bold">Live Demo</span>
        </a>
        <div className="w-0.5 h-6 bg-cyan-300/70 mt-1" />
      </div>
    )}
    {/* Card */}
    <div
      className="bg-zinc-800/60 rounded-2xl overflow-hidden shadow-2xl -translate-y-1 border border-gray-200/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_8px_32px_rgba(0,255,255,0.10)]"
      style={{
        transformStyle: 'preserve-3d',
        transform: 'rotateX(0deg)',
        transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'rotateX(25deg) scale(1.05)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'rotateX(0deg)';
      }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-white italic mb-4">{description}</p>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6b3f26] hover:text-[#a0522d] hover:underline pointer-events-auto"
          onClick={e => e.stopPropagation()}
        >
          View Project
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 