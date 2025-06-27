import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Education', to: 'education' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300">
      <nav
        className={`flex items-center justify-between px-8 ${isAtTop ? 'py-8' : 'py-4'} bg-black/20 backdrop-blur-md border-b border-white/10 rounded-2xl mx-4 max-w-5xl mx-auto pointer-events-auto shadow-2xl -translate-y-1 transition-all duration-300 ${isAtTop ? 'w-[98vw] max-w-[98vw] mt-4' : ''}`}
        style={{
          transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="text-2xl font-bold tracking-wide cursor-pointer bg-gradient-to-b from-gray-500 via-gray-300 to-white bg-clip-text text-transparent">
          Anmol Pandey
        </div>
        {/* Hamburger menu button (mobile only) */}
        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="text-white font-semibold cursor-pointer hover:text-accent transition-colors"
                activeClass="text-accent"
                spy={true}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile nav menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-black/80 rounded-b-2xl flex flex-col items-center py-4 space-y-4 md:hidden shadow-2xl animate-fade-in pointer-events-auto">
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-white text-xl font-semibold cursor-pointer hover:text-accent transition-colors"
                  activeClass="text-accent"
                  spy={true}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header; 