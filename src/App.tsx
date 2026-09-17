import React, { useState } from 'react';
import { Download, Gift } from 'lucide-react';
import { Training } from './types';
import { INITIAL_TRAININGS } from './data/trainings';
import { Header } from './components/Header';
import { DownloadPdf500Section } from './components/DownloadPdf500Section';
import { BonusSection } from './components/BonusSection';
import { VideoPlayerModal } from './components/VideoPlayerModal';

export default function App() {
  const [trainings] = useState<Training[]>(INITIAL_TRAININGS);
  const [activeSession, setActiveSession] = useState<'pdf500' | 'bonus'>('pdf500');
  const [activeTraining, setActiveTraining] = useState<Training | null>(null);

  const handleNavClick = (sessionId: 'pdf500' | 'bonus') => {
    setActiveSession(sessionId);
    if (sessionId === 'pdf500') {
      const el = document.getElementById('sessao-download-pdf-500');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sessionId === 'bonus') {
      const el = document.getElementById('sessao-bonus');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1120] text-slate-100 font-sans antialiased selection:bg-orange-600 selection:text-white pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Header />

        {/* Sticky 2-Session Navigation Bar (No "Todas as Sessões") */}
        <div className="sticky top-0 z-30 bg-[#0a1120]/95 backdrop-blur-md pt-2 pb-4 mb-8 border-b border-slate-800/80">
          <div className="w-full overflow-x-auto scrollbar-none pb-1">
            <div className="flex items-center gap-3 min-w-max">
              {/* 1ª Sessão: 500 Treinos de Beach Tennis */}
              <button
                onClick={() => handleNavClick('pdf500')}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all duration-150 select-none ${
                  activeSession === 'pdf500'
                    ? 'bg-[#f95700] text-white shadow-lg shadow-orange-600/40 border border-orange-400'
                    : 'bg-[#131d2e] text-slate-300 hover:text-white hover:bg-[#18253b] border border-slate-800'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>500 Treinos de Beach Tennis</span>
              </button>

              {/* 2ª Sessão: BÔNUS */}
              <button
                onClick={() => handleNavClick('bonus')}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all duration-150 select-none ${
                  activeSession === 'bonus'
                    ? 'bg-[#f95700] text-white shadow-lg shadow-orange-600/40 border border-orange-400'
                    : 'bg-[#131d2e] text-slate-300 hover:text-white hover:bg-[#18253b] border border-slate-800'
                }`}
              >
                <Gift className="w-4 h-4" />
                <span>BÔNUS</span>
              </button>
            </div>
          </div>
        </div>

        {/* 1ª Sessão: Baixar PDF 500 Treinos */}
        {activeSession === 'pdf500' && <DownloadPdf500Section />}

        {/* 2ª Sessão: BÔNUS (Os outros 2 PDFs e +20 vídeos de beach tennis) */}
        {activeSession === 'bonus' && (
          <BonusSection
            trainings={trainings}
            onSelectTraining={(t) => setActiveTraining(t)}
          />
        )}
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        training={activeTraining}
        isOpen={!!activeTraining}
        onClose={() => setActiveTraining(null)}
        isFavorite={false}
        isCompleted={false}
        onToggleFavorite={() => {}}
        onToggleCompleted={() => {}}
      />
    </div>
  );
}
