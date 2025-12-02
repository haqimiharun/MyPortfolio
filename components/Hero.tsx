
import React from 'react';
import { profile } from '../data';
import { GithubIcon, LinkedinIcon, MailIcon, ChevronDown, DownloadIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative pt-16">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background Gradient Blob */}
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="inline-block animate-fade-in-up">
          <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
            Analyst Programmer @ Faazmiar Technology
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white animate-fade-in-up delay-100 leading-tight">
          Hello, I'm <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            {profile.name}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-light">
          {profile.tagline}
        </p>

        <div className="flex flex-col items-center gap-6 animate-fade-in-up delay-300 pt-4">
          
          {/* Main Download Button */}
          <a 
            href={profile.resumeUrl} 
            download 
            className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
          >
            <DownloadIcon className="w-5 h-5" />
            Download Resume
          </a>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href={`mailto:${profile.email}`} className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 hover:text-emerald-400 transition-all border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 group">
              <MailIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 hover:text-emerald-400 transition-all border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 group">
              <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            {profile.github && profile.github !== "github.com" && (
              <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 hover:text-emerald-400 transition-all border border-slate-700 hover:border-emerald-500/50 hover:-translate-y-1 group">
                <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            )}
          </div>
        </div>
        
        <div className="pt-10 animate-fade-in-up delay-500">
           <div className="inline-flex items-center gap-2 text-slate-500 text-sm uppercase tracking-widest">
              <span>Scroll for more</span>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-emerald-500/50">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;