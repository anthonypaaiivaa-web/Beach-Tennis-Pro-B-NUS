import React, { useState } from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';

export const DownloadPdf500Section: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/500-treinos-de-beach-tennis.pdf';
    link.download = '500-treinos-de-beach-tennis.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="sessao-download-pdf-500" className="scroll-mt-28 mb-20">
      {/* Toast Notification */}
      {downloadSuccess && (
        <div className="max-w-md mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Download de "500 Treinos de Beach Tennis" iniciado com sucesso!</span>
        </div>
      )}

      {/* Card alinhado no canto esquerdo e encurtado */}
      <div className="w-full max-w-md">
        <div className="p-5 sm:p-6 rounded-2xl bg-[#111a2b] border border-slate-700/80 shadow-lg flex flex-col justify-between hover:border-slate-600 transition-all">
          <div>
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="w-11 h-11 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-orange-500/15 text-orange-300 border border-orange-500/30">
                PDF 116 Páginas
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              500 Treinos de Beach Tennis
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
              Exercícios práticos para técnica, movimentação, ataque, defesa e tática de duplas. Organizados em 10 blocos de 50 treinos, do iniciante ao avançado.
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="mt-5 w-full py-2.5 px-4 rounded-xl bg-[#f95700] hover:bg-orange-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4" />
            <span>Baixar 500 Treinos de Beach Tennis (PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
