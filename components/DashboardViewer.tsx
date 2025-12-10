
import React, { useState } from 'react';
import { ShowcaseItem } from '../types';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, CodeIcon } from './Icons';
import { getSimulationComponent } from './Simulations';

interface DashboardViewerProps {
  item: ShowcaseItem;
  onBack: () => void;
}

const DashboardViewer: React.FC<DashboardViewerProps> = ({ item, onBack }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'simulation' | 'gallery'>(item.demoType ? 'simulation' : 'gallery');

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % item.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };

  const simulationComponent = getSimulationComponent(item.demoType);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-200 overflow-y-auto animate-fade-in-up">
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-10 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
        >
          <div className="p-2 rounded-full bg-slate-900 border border-slate-700 group-hover:border-blue-500 transition-colors">
             <ChevronLeftIcon className="w-5 h-5" />
          </div>
          <span className="font-medium">Back to Portfolio</span>
        </button>
        
        <h2 className="hidden md:block text-lg font-bold text-white truncate max-w-md">{item.title}</h2>

        {/* View Mode Switcher */}
        <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
             {item.demoType && (
                 <button 
                    onClick={() => setViewMode('simulation')}
                    className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${viewMode === 'simulation' ? 'bg-blue-600 text-white shadow' : 'text-slate-400 hover:text-white'}`}
                 >
                    Live Demo
                 </button>
             )}
             <button 
                onClick={() => setViewMode('gallery')}
                className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${viewMode === 'gallery' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-white'}`}
             >
                Gallery
             </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
         
         {/* Left: Interactive Stage (2 cols) */}
         <div className="lg:col-span-2 space-y-4">
            
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl aspect-video group">
               
               {viewMode === 'simulation' && simulationComponent ? (
                   // Render Live Simulation
                   <div className="w-full h-full">
                        {simulationComponent}
                   </div>
               ) : (
                   // Render Static Gallery
                   <>
                       <img 
                        src={item.images[activeImageIndex]} 
                        alt={`${item.title} view ${activeImageIndex + 1}`}
                        className="w-full h-full object-contain"
                        />
                        
                        {/* Navigation Arrows (Only show if > 1 image) */}
                        {item.images.length > 1 && (
                            <>
                                <button 
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-blue-600 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0"
                                >
                                <ArrowLeftIcon className="w-6 h-6" />
                                </button>
                                <button 
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-blue-600 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 translate-x-[10px] group-hover:translate-x-0"
                                >
                                <ArrowRightIcon className="w-6 h-6" />
                                </button>
                            </>
                        )}
                        
                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-slate-300 border border-slate-700">
                        {activeImageIndex + 1} / {item.images.length}
                        </div>
                   </>
               )}

            </div>

            {/* Thumbnail Strip (Only for gallery mode) */}
            {viewMode === 'gallery' && item.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {item.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-blue-500 shadow-lg shadow-blue-500/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
         </div>

         {/* Right: Details Panel (1 col) */}
         <div className="space-y-8 animate-fade-in-up delay-100">
            <div>
               <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                 {item.title}
               </h1>
               
               <div className="flex flex-wrap gap-2 mb-6">
                 {item.techBadges.map((badge) => (
                   <span key={badge} className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-950/30 border border-blue-900/50 rounded-md">
                     {badge}
                   </span>
                 ))}
               </div>

               <div className="prose prose-invert prose-slate max-w-none">
                 <p className="text-slate-300 text-lg leading-relaxed">
                   {item.description}
                 </p>
               </div>
            </div>

            <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                 Live Demo Info
               </h3>
               {viewMode === 'simulation' ? (
                   <div className="text-sm text-slate-300 space-y-3">
                        <p className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            Simulating real-time environment.
                        </p>
                        <p className="text-slate-400 text-xs">
                            This interactive component demonstrates the logic and state management used in the actual production system.
                        </p>
                   </div>
               ) : (
                   <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                        High-resolution operational views.
                    </li>
                    <li className="flex items-start gap-3 text-slate-300 text-sm">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                        Production-grade configuration examples.
                    </li>
                    </ul>
               )}
            </div>
         </div>

      </div>
    </div>
  );
};

export default DashboardViewer;