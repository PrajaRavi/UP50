import React from 'react';
import { Cpu, Database, Code2, Terminal, ExternalLink, Sparkles } from 'lucide-react';

const practicals = [
  {
    id: 'iot',
    title: 'IoT Practicals',
    subtitle: 'Internet of Things Lab Manual & Code Examples',
    url: 'https://ik.imagekit.io/k5imwrh1hh/rag_documents/All_Iot_practical.pdf',
    icon: <Cpu className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    shadowColor: 'hover:shadow-cyan-500/20',
    badge: 'PDF Document',
  },
  {
    id: 'dbms',
    title: 'DBMS Practicals',
    subtitle: 'Database Management Systems & SQL Queries',
    url: 'https://drive.google.com/drive/folders/1NfZxAIcIV6WfC3QcUHwrC4CbRi3t4ZaK',
    icon: <Database className="w-8 h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    shadowColor: 'hover:shadow-emerald-500/20',
    badge: 'Drive Folder',
  },
  {
    id: 'java',
    title: 'JAVA Practicals',
    subtitle: 'Object-Oriented Programming & Java Collections',
    url: 'https://ik.imagekit.io/k5imwrh1hh/java%20practical%20list.pdf',
    icon: <Code2 className="w-8 h-8 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    shadowColor: 'hover:shadow-amber-500/20',
    badge: 'PDF Document',
  },
  {
    id: 'pos',
    title: 'POS Practicals',
    subtitle: 'Principles of Operating Systems & Unix Shell Scripts',
    url: 'https://ik.imagekit.io/k5imwrh1hh/rag_documents/Os_practicles.pdf',
    icon: <Terminal className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    shadowColor: 'hover:shadow-purple-500/20',
    badge: 'PDF Document',
  },
];

export const PracticalHub = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden relative selection:bg-cyan-500 selection:text-slate-950 orbitron ">
      {/* Background Decorative Animated Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <main className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex-grow flex flex-col justify-center items-center">
        
        {/* Header Section */}
        <header className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-cyan-400 mb-6 backdrop-blur-md shadow-inner">
            <Sparkles className="w-4 h-4 animate-spin" />
            <span>Resource Directory</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent mb-4">
            Practical Workstation
          </h1>
          <p className="text-slate-400 text-base md:text-lg">
            Direct access to all lab manuals, code samples, and practical documents.
          </p>
        </header>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {practicals.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-2xl ${item.shadowColor} backdrop-blur-xl overflow-hidden`}
            >
              {/* Subtle dynamic background gradient on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 group-hover:border-slate-600 transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-400 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/40">
                    {item.badge}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800/40 text-slate-400 group-hover:text-white group-hover:bg-slate-700/60 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-white mb-1 transition-colors">
                  {item.title}
                </h2>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom accent border indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-cyan-400 transition-all duration-500" />
            </a>
          ))}
        </div>
      </main>

      {/* Footer with Animated Bold "UP50" */}
      <footer className="relative z-10 py-12 md:py-16 text-center overflow-hidden border-t border-slate-900/60 bg-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center">
          
          {/* Large Animated Title */}
          <div className="relative group cursor-default select-none">
            {/* Ambient Background Glow for Footer Text */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
            
            <h2 className="relative text-7xl sm:text-9xl md:text-[12rem] font-black tracking-tighter leading-none bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              UP50
            </h2>
          </div>

          <p className="mt-4 text-xs md:text-sm text-slate-500 tracking-widest uppercase font-semibold">
            All Rights Reserved &bull; Practical Repository
          </p>
        </div>
      </footer>

      {/* Custom Keyframe Animations for Gradient */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default PracticalHub;