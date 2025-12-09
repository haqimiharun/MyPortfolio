
import React from 'react';
import { showcaseItems } from '../data';
import { ExternalLinkIcon } from './Icons';

interface DashboardShowcaseProps {
  onViewItem: (id: string) => void;
}

const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({ onViewItem }) => {
  return (
    <section id="gallery" className="py-24 bg-slate-950 relative">
       {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-12 h-1 bg-blue-500 rounded-full"></span>
                    Operational Dashboards
                </h2>
                <p className="text-slate-400 max-w-xl">
                    A visual tour of the infrastructure I build and maintain. Click on any project to view the full gallery and details.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => onViewItem(item.id)}
              className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-56 overflow-hidden relative bg-slate-950">
                <img 
                  src={item.images[0]} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                
                {/* Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
                   <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                     <ExternalLinkIcon className="w-4 h-4" /> View Gallery
                   </span>
                </div>

                {/* Tech Badges on Image */}
                <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                    {item.techBadges.map((badge) => (
                        <span key={badge} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-slate-950/80 backdrop-blur-md rounded border border-slate-700 shadow-lg">
                            {badge}
                        </span>
                    ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-blue-400 font-medium">
                   <span>{item.images.length} images available</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
