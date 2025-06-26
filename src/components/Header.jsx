import React from 'react';
import { Link } from 'react-scroll';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Header = () => (
  <header className="fixed top-4 left-0 w-full z-50 pointer-events-none">
    <nav className="flex items-center justify-between px-8 py-4 bg-black/60 backdrop-blur-md border-b border-white/10 rounded-2xl mx-4 max-w-5xl mx-auto pointer-events-auto">
      <div className="text-2xl font-bold text-white tracking-wide cursor-pointer">
        Anmol Pandey
      </div>
      <ul className="flex space-x-8">
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
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header; 