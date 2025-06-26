import React from 'react';

const Projects = () => {
  return (
    <div className="text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src="https://picsum.photos/400/200" alt="Project 1" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-accent mb-2">Project One</h3>
              <p className="text-gray-400 italic mb-4">A short description of the project.</p>
              <a href="#" className="text-accent hover:underline">View Project</a>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src="https://picsum.photos/400/201" alt="Project 2" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-accent mb-2">Project Two</h3>
              <p className="text-gray-400 italic mb-4">A short description of the project.</p>
              <a href="#" className="text-accent hover:underline">View Project</a>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="bg-zinc-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src="https://picsum.photos/400/202" alt="Project 3" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-accent mb-2">Project Three</h3>
              <p className="text-gray-400 italic mb-4">A short description of the project.</p>
              <a href="#" className="text-accent hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 