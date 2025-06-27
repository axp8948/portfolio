import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'A short description of the project.',
    image: 'https://picsum.photos/400/200',
    link: 'https://example.com/project-one',
    linkLabel: 'Live Demo',
  },
  {
    title: 'Project Two',
    description: 'A short description of the project.',
    image: 'https://picsum.photos/400/201',
    link: 'https://example.com/project-two',
    linkLabel: 'Live Demo',
  },
  {
    title: 'Project Three',
    description: 'A short description of the project.',
    image: 'https://picsum.photos/400/202',
    link: 'https://example.com/project-three',
    linkLabel: 'Live Demo',
  },
];

const ProjectCard = ({ title, description, image, link, linkLabel }) => (
  <div className="relative flex flex-col items-center group" style={{ perspective: '1200px' }}>
    {/* Floating Link & Line (only on hover) */}
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-1 rounded-full bg-black/80 text-white font-mono text-base shadow-lg border border-gray-200/30 transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-auto"
        style={{ transitionProperty: 'opacity, transform' }}
      >
        <span className="font-bold">{linkLabel}</span>
      </a>
      {/* Vertical Line */}
      <div className="w-0.5 h-0 bg-cyan-300/70 mt-1 transition-all duration-300 group-hover:h-8 group-hover:mt-2" />
    </div>
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
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#6b3f26] hover:text-[#a0522d] hover:underline">
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