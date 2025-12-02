import React, { useEffect, useState } from 'react';
import { profile } from '../data';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white tracking-tight hover:text-emerald-400 transition-colors">
          {profile.name.split(' ')[0]}<span className="text-emerald-500">.dev</span>
        </a>

        <ul className="flex gap-8">
           <li><a href="#home" className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">Home</a></li>
           <li><a href="#resume" className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">Resume</a></li>
           <li><a href="#projects" className="text-sm font-medium text-slate-400 hover:text-emerald-400 transition-colors">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;