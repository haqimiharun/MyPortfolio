
import React from 'react';
import { experience, skills, education, certifications, activities } from '../data';
import { BriefcaseIcon, AcademicCapIcon, BadgeCheckIcon } from './Icons';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
           <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                Experience & Skills
              </h2>
              <p className="text-slate-400 max-w-xl">
                My professional journey, educational background, and the technologies I use to build high-performance solutions.
              </p>
           </div>
           <div className="h-1 w-24 bg-emerald-500 rounded-full hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Experience & Education (8 cols) */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-500">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Work History</h3>
              </div>

              <div className="relative border-l-2 border-slate-800 ml-3 space-y-12 py-2">
                {experience.map((job) => (
                  <div key={job.id} className="relative pl-8 md:pl-12 group">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-emerald-500 bg-slate-950 group-hover:bg-emerald-500 transition-colors" />
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{job.role}</h4>
                        <h5 className="text-lg text-emerald-500/90 font-medium">{job.company}</h5>
                      </div>
                      <span className="text-xs font-mono text-slate-500 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full mt-2 sm:mt-0 whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed mb-4 text-base">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800/50 text-slate-400 border border-slate-700/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                  <AcademicCapIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Education</h3>
              </div>
              
              <div className="grid gap-6">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800 hover:border-slate-600 transition-all hover:shadow-lg hover:shadow-black/20">
                     <div className="flex flex-col sm:flex-row justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                        <span className="text-slate-400 text-sm font-mono bg-slate-950 px-2 py-1 rounded border border-slate-800">{edu.period}</span>
                     </div>
                     <p className="text-emerald-400 font-medium mb-3">{edu.degree}</p>
                     
                     <div className="space-y-2">
                       {edu.gpa && (
                         <div className="inline-block px-3 py-1 bg-emerald-500/10 rounded text-xs text-emerald-300 font-mono mb-2">
                           GPA: {edu.gpa}
                         </div>
                       )}
                       {edu.achievements.length > 0 && (
                        <ul className="space-y-1">
                            {edu.achievements.map((ach, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0"></span>
                                {ach}
                              </li>
                            ))}
                        </ul>
                       )}
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Co-Curricular & Leadership */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                  <BadgeCheckIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-100">Leadership & Co-Curricular</h3>
              </div>
              
              <div className="space-y-6">
                 {activities.map((act) => (
                    <div key={act.id} className="bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
                       <div className="flex flex-col sm:flex-row justify-between mb-1">
                          <h4 className="text-lg font-bold text-white">{act.organization}</h4>
                          <span className="text-xs font-mono text-slate-500">{act.period}</span>
                       </div>
                       <p className="text-emerald-500/80 font-medium text-sm mb-3">{act.role}</p>
                       <ul className="space-y-1">
                          {act.items.map((item, idx) => (
                             <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-700 flex-shrink-0"></span>
                                {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                 ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills & Certs (4 cols) - Sticky on Desktop */}
          <div className="lg:col-span-4 space-y-12">
             <div className="lg:sticky lg:top-24 space-y-12">
               
               {/* Skills */}
               <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
                    Technical Arsenal
                  </h3>
                  <div className="space-y-4">
                      {skills.map((skillGroup) => (
                        <div key={skillGroup.category} className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-sm">
                          <h4 className="text-slate-400 font-semibold text-xs uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                            {skillGroup.category}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((item) => (
                              <span key={item} className="px-3 py-1.5 text-sm font-medium rounded-lg bg-slate-950 text-slate-300 border border-slate-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                  </div>
               </div>

               {/* Certifications */}
               <div>
                  <h3 className="text-xl font-bold text-slate-100 mb-6">Certifications</h3>
                  <div className="space-y-3">
                     {certifications.map((cert) => (
                        <div key={cert.id} className="p-4 rounded-xl border border-slate-800 bg-slate-900/30 flex items-start gap-3 hover:bg-slate-800/50 transition-colors group">
                           <div className="mt-1 text-slate-500 group-hover:text-emerald-500 transition-colors">
                              <BadgeCheckIcon className="h-5 w-5" />
                           </div>
                           <div>
                              <h4 className="text-slate-200 font-medium text-sm leading-tight mb-1 group-hover:text-white transition-colors">{cert.name}</h4>
                              <p className="text-xs text-slate-500">{cert.issuer} • {cert.date}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
