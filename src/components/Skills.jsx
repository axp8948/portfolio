import React, { useRef, useEffect, useState } from 'react';
import './Skills.css';

const skills = [
  'Python', 'JavaScript', 'Java', 'C', 'C++', 'HTML/CSS', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'Postman', 'VS Code', 'REST APIs'
];

const Skills = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-16 bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="overflow-hidden" ref={containerRef} style={{ width: '100%' }}>
          <div
            className="flex whitespace-nowrap"
            style={{
              width: contentWidth ? `${contentWidth * 2}px` : 'auto',
              animation: contentWidth ? `marquee-js ${contentWidth / 80}s linear infinite` : 'none',
            }}
          >
            <div ref={contentRef} className="flex">
              {skills.map((skill, idx) => (
                <span
                  key={skill + '-1'}
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent px-6"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex">
              {skills.map((skill, idx) => (
                <span
                  key={skill + '-2'}
                  className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent px-6"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 