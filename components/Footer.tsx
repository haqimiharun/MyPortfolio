import React from 'react';
import { profile } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Built with React, Tailwind, and Google Gemini.
        </p>
      </div>
    </footer>
  );
};

export default Footer;