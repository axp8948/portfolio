import React from 'react';

const Projects = () => {
  return (
    <div className="text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-zinc-800/60 rounded-2xl overflow-hidden shadow-2xl -translate-y-1 transform hover:-translate-y-3 transition-all duration-300">
            <img src="https://picsum.photos/400/200" alt="Project 1" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
                Project One
              </h3>
              <p className="text-white italic mb-4">A short description of the project.</p>
              <a href="#" className="text-[#6b3f26] hover:text-[#a0522d] hover:underline">View Project</a>
            </div>
          </div>
          {/* Project Card 2 */}
          <div className="bg-zinc-800/60 rounded-2xl overflow-hidden shadow-2xl -translate-y-1 transform hover:-translate-y-3 transition-all duration-300">
            <img src="https://picsum.photos/400/201" alt="Project 2" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
                Project Two
              </h3>
              <p className="text-white italic mb-4">A short description of the project.</p>
              <a href="#" className="text-[#6b3f26] hover:text-[#a0522d] hover:underline">View Project</a>
            </div>
          </div>
          {/* Project Card 3 */}
          <div className="bg-zinc-800/60 rounded-2xl overflow-hidden shadow-2xl -translate-y-1 transform hover:-translate-y-3 transition-all duration-300">
            <img src="https://picsum.photos/400/202" alt="Project 3" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
                Project Three
              </h3>
              <p className="text-white italic mb-4">A short description of the project.</p>
              <a href="#" className="text-[#6b3f26] hover:text-[#a0522d] hover:underline">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 