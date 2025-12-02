
import React from 'react';
import { projects } from '../data';
import { GithubIcon, ExternalLinkIcon, CodeIcon } from './Icons';

const Portfolio: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
         <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-3">
          <span className="w-12 h-1 bg-emerald-500 rounded-full"></span>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col">
              {/* Placeholder Image Area */}
              <div className="h-48 w-full bg-slate-900 relative overflow-hidden">
                 <img 
                    src={`https://picsum.photos/seed/${project.id}/600/400`} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs font-medium text-emerald-300 bg-emerald-950/30 border border-emerald-900/50 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                     <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                       <GithubIcon className="w-4 h-4" />
                       <span>Code</span>
                     </a>
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                       <ExternalLinkIcon className="w-4 h-4" />
                       <span>Live Demo</span>
                     </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;