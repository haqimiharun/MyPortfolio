import React from 'react';
import { experience, skills, education, certifications } from '../data';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-slate-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-3">
          <span className="w-12 h-1 bg-emerald-500 rounded-full"></span>
          Resume & Experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Experience & Education */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Experience Section */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-8 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Work History
              </h3>
              <div className="relative border-l border-slate-800 ml-3 space-y-12">
                {experience.map((job) => (
                  <div key={job.id} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-slate-950 bg-emerald-500" />
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h4 className="text-xl font-bold text-white">{job.role}</h4>
                      <span className="text-sm font-mono text-emerald-400">{job.period}</span>
                    </div>
                    
                    <h5 className="text-lg text-slate-400 mb-4">{job.company}</h5>
                    
                    <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs rounded bg-slate-900 text-slate-400 border border-slate-800">
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
              <h3 className="text-2xl font-semibold text-slate-200 mb-8 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /></svg>
                Education
              </h3>
              <div className="grid gap-6">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-slate-900/30 p-6 rounded-xl border border-slate-800 hover:border-emerald-500/30 transition-colors">
                     <div className="flex flex-col sm:flex-row justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                        <span className="text-emerald-400 text-sm font-mono">{edu.period}</span>
                     </div>
                     <p className="text-slate-300 mb-2">{edu.degree}</p>
                     {edu.gpa && <p className="text-slate-400 text-sm mb-2">CGPA: <span className="text-white">{edu.gpa}</span></p>}
                     <ul className="list-disc list-inside text-slate-400 text-sm">
                        {edu.achievements.map((ach, idx) => (
                          <li key={idx}>{ach}</li>
                        ))}
                     </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills & Certs */}
          <div className="lg:col-span-1 space-y-12">
             
             {/* Skills */}
             <div>
                <h3 className="text-xl font-semibold text-slate-200 mb-6">Technical Skills</h3>
                <div className="space-y-6">
                    {skills.map((skillGroup) => (
                      <div key={skillGroup.category} className="bg-slate-900/50 p-5 rounded-2xl border border-slate-800 backdrop-blur-sm">
                        <h4 className="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wider">{skillGroup.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.items.map((item) => (
                            <span key={item} className="px-3 py-1 text-sm rounded-full bg-slate-800 text-slate-200 border border-slate-700">
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
                <h3 className="text-xl font-semibold text-slate-200 mb-6">Certifications</h3>
                <div className="space-y-4">
                   {certifications.map((cert) => (
                      <div key={cert.id} className="p-4 rounded-xl border border-slate-800 bg-slate-900/20 flex items-start gap-3">
                         <div className="mt-1 text-emerald-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                         </div>
                         <div>
                            <h4 className="text-white font-medium text-sm leading-tight mb-1">{cert.name}</h4>
                            <p className="text-xs text-slate-500">{cert.issuer} • {cert.date}</p>
                         </div>
                      </div>
                   ))}
                </div>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;