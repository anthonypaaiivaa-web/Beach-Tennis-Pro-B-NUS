import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="pt-8 pb-6 border-b border-slate-800/40 mb-6">
      {/* Brand section matching reference aesthetic */}
      <div>
        <div className="flex items-center gap-3">
          {/* Concentric rings logo */}
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20">
            <svg 
              className="w-8 h-8 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" stroke="currentColor" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
          
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2">
            <span>Beach Tennis</span>
            <span className="text-white font-black">Pro</span>
          </h1>
        </div>
        
        <p className="text-slate-400 text-sm mt-1.5 font-medium tracking-wide">
          Biblioteca de Treinos de Beach Tennis
        </p>
      </div>
    </header>
  );
};

