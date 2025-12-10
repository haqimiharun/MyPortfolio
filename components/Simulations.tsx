
import React, { useState, useEffect } from 'react';
import { BadgeCheckIcon, CodeIcon } from './Icons';

// --- GRAFANA SIMULATION ---
const MonitoringSimulation: React.FC = () => {
  const [dataPoints, setDataPoints] = useState<number[]>(Array(20).fill(20));
  const [requestRate, setRequestRate] = useState<number[]>(Array(20).fill(100));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => {
        const next = [...prev.slice(1), Math.max(10, Math.min(90, prev[prev.length - 1] + (Math.random() * 20 - 10)))];
        return next;
      });
      setRequestRate(prev => {
        const next = [...prev.slice(1), Math.max(50, Math.min(300, prev[prev.length - 1] + (Math.random() * 40 - 20)))];
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const generatePath = (data: number[], height: number, color: string) => {
    const max = Math.max(...data, 100);
    const points = data.map((val, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - (val / max) * 100;
      return `${x},${y}`;
    });
    return (
      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
         <defs>
          <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.5" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`M0,100 L0,${100 - (data[0] / max) * 100} ${points.map(p => `L${p}`).join(' ')} L100,100 Z`} fill={`url(#grad-${color})`} />
        <path d={`M0,${100 - (data[0] / max) * 100} ${points.map(p => `L${p}`).join(' ')}`} fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
    );
  };

  return (
    <div className="bg-slate-900 w-full h-full p-6 flex flex-col gap-4 overflow-hidden rounded-xl border border-slate-800">
      <div className="flex justify-between items-center border-b border-slate-800 pb-2">
         <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 font-bold text-sm tracking-widest">GRAFANA LIVE</span>
         </div>
         <span className="text-xs text-slate-500 font-mono">Auto-refresh: 1s</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
         {/* CPU Panel */}
         <div className="bg-slate-950/50 border border-slate-700/50 rounded-lg p-4 flex flex-col">
            <h4 className="text-emerald-400 text-xs font-bold uppercase mb-2">CPU Usage (Container)</h4>
            <div className="flex-1 relative">
                {generatePath(dataPoints, 100, '#10b981')}
            </div>
            <div className="mt-2 text-right text-2xl font-mono text-white">
                {Math.round(dataPoints[dataPoints.length-1])}%
            </div>
         </div>

         {/* Requests Panel */}
         <div className="bg-slate-950/50 border border-slate-700/50 rounded-lg p-4 flex flex-col">
            <h4 className="text-blue-400 text-xs font-bold uppercase mb-2">HTTP Requests / Sec</h4>
            <div className="flex-1 relative">
                {generatePath(requestRate, 100, '#3b82f6')}
            </div>
            <div className="mt-2 text-right text-2xl font-mono text-white">
                {Math.round(requestRate[requestRate.length-1])} req/s
            </div>
         </div>
      </div>
    </div>
  );
};


// --- PIPELINE SIMULATION ---
const PipelineSimulation: React.FC = () => {
  const [stages, setStages] = useState([
    { id: 1, name: 'Lint', status: 'idle' },
    { id: 2, name: 'Unit Test', status: 'idle' },
    { id: 3, name: 'Build Docker', status: 'idle' },
    { id: 4, name: 'Staging', status: 'idle' },
    { id: 5, name: 'Production', status: 'idle' },
  ]);
  const [isRunning, setIsRunning] = useState(false);

  const runPipeline = async () => {
    if (isRunning) return;
    setIsRunning(true);
    
    const newStages = stages.map(s => ({ ...s, status: 'pending' }));
    setStages(newStages);

    for (let i = 0; i < newStages.length; i++) {
        setStages(prev => prev.map((s, idx) => idx === i ? { ...s, status: 'running' } : s));
        await new Promise(r => setTimeout(r, 1000 + Math.random() * 1000)); // Simulate work
        setStages(prev => prev.map((s, idx) => idx === i ? { ...s, status: 'success' } : s));
    }
    setIsRunning(false);
  };

  const getStatusColor = (status: string) => {
      switch(status) {
          case 'idle': return 'bg-slate-800 border-slate-700 text-slate-500';
          case 'pending': return 'bg-slate-800 border-slate-600 text-slate-400';
          case 'running': return 'bg-blue-900/50 border-blue-500 text-blue-200 animate-pulse';
          case 'success': return 'bg-emerald-900/50 border-emerald-500 text-emerald-200';
          default: return 'bg-slate-800';
      }
  };

  return (
      <div className="bg-slate-900 w-full h-full p-8 flex flex-col justify-center items-center gap-8 rounded-xl border border-slate-800 relative overflow-hidden">
          {/* GitLab Header */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 flex items-center px-4 justify-between border-b border-slate-700">
             <div className="flex items-center gap-2 text-slate-300 text-xs font-mono">
                <CodeIcon className="w-4 h-4" />
                <span>pipeline / #10349234</span>
             </div>
             <span className={`text-xs px-2 py-0.5 rounded ${isRunning ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700 text-slate-400'}`}>
                {isRunning ? 'Running...' : 'Manual Trigger'}
             </span>
          </div>

          {/* Pipeline Visual */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-6">
              {stages.map((stage, idx) => (
                  <div key={stage.id} className="flex items-center">
                      <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center border-2 transition-all duration-500 ${getStatusColor(stage.status)}`}>
                          <span className="text-xs md:text-sm font-bold">{stage.name}</span>
                          {stage.status === 'success' && <BadgeCheckIcon className="w-5 h-5 md:w-6 md:h-6 mt-1" />}
                          {stage.status === 'running' && <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mt-2"></div>}
                      </div>
                      {idx < stages.length - 1 && (
                          <div className={`w-8 md:w-16 h-1 transition-colors duration-500 ${stage.status === 'success' ? 'bg-emerald-500' : 'bg-slate-700'}`}></div>
                      )}
                  </div>
              ))}
          </div>

          <button 
            onClick={runPipeline}
            disabled={isRunning}
            className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold rounded shadow-lg transition-all"
          >
            {isRunning ? 'Pipeline Running...' : 'Run Pipeline'}
          </button>
      </div>
  );
};


// --- ARCHITECTURE SIMULATION ---
const ArchitectureSimulation: React.FC = () => {
    return (
        <div className="bg-slate-950 w-full h-full p-6 relative rounded-xl border border-slate-800 flex items-center justify-center overflow-hidden">
             {/* Background Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             
             <div className="relative z-10 flex flex-col gap-12 items-center">
                 
                 {/* Internet / Nginx */}
                 <div className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-48 h-16 rounded-lg bg-emerald-900/40 border border-emerald-500 flex items-center justify-center text-emerald-400 font-bold shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all">
                        NGINX Gateway
                    </div>
                    <div className="text-xs text-slate-500 group-hover:text-emerald-500 transition-colors">Port 80/443</div>
                 </div>

                 {/* Arrow */}
                 <div className="h-8 w-px bg-slate-600"></div>

                 {/* Internal Network */}
                 <div className="p-8 border-2 border-dashed border-slate-700 rounded-3xl bg-slate-900/50 backdrop-blur-sm">
                    <div className="absolute top-[-12px] left-8 bg-slate-950 px-2 text-xs text-slate-500 uppercase tracking-widest">
                        Docker Network (Internal)
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* PHP App */}
                        <div className="flex flex-col items-center gap-2">
                             <div className="w-32 h-32 rounded-xl bg-indigo-900/20 border border-indigo-500/50 flex flex-col items-center justify-center gap-2 hover:bg-indigo-900/40 transition-colors">
                                <span className="font-bold text-indigo-300">PHP App</span>
                                <span className="text-[10px] bg-indigo-950 px-2 py-1 rounded text-indigo-400">fpm-alpine</span>
                             </div>
                        </div>

                        {/* Connection Line */}
                        <div className="w-1 md:w-8 h-8 md:h-1 bg-slate-600 self-center"></div>

                        {/* Postgres */}
                        <div className="flex flex-col items-center gap-2">
                             <div className="w-32 h-32 rounded-xl bg-blue-900/20 border border-blue-500/50 flex flex-col items-center justify-center gap-2 hover:bg-blue-900/40 transition-colors">
                                <span className="font-bold text-blue-300">PostgreSQL</span>
                                <span className="text-[10px] bg-blue-950 px-2 py-1 rounded text-blue-400">Volume Data</span>
                             </div>
                        </div>
                    </div>
                 </div>

             </div>
        </div>
    );
};

export const getSimulationComponent = (type: string | undefined) => {
    switch (type) {
        case 'monitoring': return <MonitoringSimulation />;
        case 'pipeline': return <PipelineSimulation />;
        case 'architecture': return <ArchitectureSimulation />;
        default: return null;
    }
};
