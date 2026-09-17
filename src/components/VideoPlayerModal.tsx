import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  Bookmark, 
  Share2, 
  Clock, 
  Dumbbell, 
  Sparkles, 
  ChevronRight,
  Volume2
} from 'lucide-react';
import { Training } from '../types';

interface VideoPlayerModalProps {
  training: Training | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  isCompleted: boolean;
  onToggleFavorite: (id: string) => void;
  onToggleCompleted: (id: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  training,
  isOpen,
  onClose,
  isFavorite,
  isCompleted,
  onToggleFavorite,
  onToggleCompleted
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(45);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeTab, setActiveTab] = useState<'drills' | 'info'>('drills');
  const [copied, setCopied] = useState(false);

  // Reset modal state when training changes
  useEffect(() => {
    setActiveStepIndex(0);
    setTimerSeconds(45);
    setIsTimerRunning(false);
  }, [training?.id]);

  // Timer interval
  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !training) return null;

  const currentStep = training.steps[activeStepIndex] || training.steps[0];

  const formatTimer = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSecs = sec % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#131d31]">
          <div className="flex items-center gap-3 pr-4">
            <span className="px-2.5 py-1 text-xs font-bold rounded-lg bg-orange-600/30 text-orange-400 border border-orange-500/30">
              {training.level}
            </span>
            <h2 className="text-white font-bold text-base sm:text-lg line-clamp-1">
              {training.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleFavorite(training.id)}
              className={`p-2 rounded-xl border transition ${
                isFavorite
                  ? 'bg-orange-500/20 text-orange-400 border-orange-500/40'
                  : 'bg-[#1a263d] text-slate-300 hover:text-white border-slate-700'
              }`}
              title={isFavorite ? 'Remover favorito' : 'Favoritar'}
            >
              <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-orange-400' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-[#1a263d] hover:bg-[#223352] text-slate-300 hover:text-white border border-slate-700 transition"
              title="Compartilhar treino"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              title="Fechar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video / Visual Demonstration Stage */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {training.videoUrl ? (
            <iframe
              src={`${training.videoUrl}?autoplay=1&mute=1&rel=0`}
              title={training.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full">
              <img
                src={training.thumbnail}
                alt={training.title}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/50">
                <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-xl shadow-orange-600/50 mb-3">
                  <Play className="w-7 h-7 fill-white ml-1" />
                </div>
                <h3 className="text-white text-lg font-bold">Demonstração Interativa do Treino</h3>
                <p className="text-slate-300 text-sm max-w-md mt-1">
                  Acompanhe os drills passo a passo abaixo com o cronômetro oficial de séries.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Content Body: Tabs & Interactive Coach */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-[#0c1424]">
          {/* Top metadata row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-orange-400" />
                Duração total: <strong className="text-white">{training.duration}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Dumbbell className="w-4 h-4 text-orange-400" />
                Exercícios: <strong className="text-white">{training.exercisesCount}</strong>
              </span>
              {training.instructor && (
                <span className="text-slate-400">
                  Instrutor: <strong className="text-slate-200">{training.instructor}</strong>
                </span>
              )}
            </div>

            {/* Complete training toggle button */}
            <button
              onClick={() => onToggleCompleted(training.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
                isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Treino Concluído!' : 'Marcar como Concluído'}</span>
            </button>
          </div>

          {/* Tab selector */}
          <div className="flex items-center gap-2 mt-5 mb-4">
            <button
              onClick={() => setActiveTab('drills')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                activeTab === 'drills'
                  ? 'bg-[#1a263d] text-orange-400 border border-orange-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Passo a Passo dos Drills ({training.steps.length})
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
                activeTab === 'info'
                  ? 'bg-[#1a263d] text-orange-400 border border-orange-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Visão Geral & Dicas
            </button>
          </div>

          {activeTab === 'drills' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Exercise Step Navigation List */}
              <div className="lg:col-span-1 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Sequência do Treino
                </p>
                {training.steps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveStepIndex(idx);
                      setIsTimerRunning(false);
                      setTimerSeconds(45);
                    }}
                    className={`w-full text-left p-3 rounded-xl text-sm font-medium transition flex items-center justify-between border ${
                      activeStepIndex === idx
                        ? 'bg-orange-600/20 text-orange-300 border-orange-500/50 shadow-sm'
                        : 'bg-[#131d31] hover:bg-[#18263f] text-slate-300 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                        activeStepIndex === idx ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400'
                      }`}>
                        {idx + 1}
                      </span>
                      <span className="line-clamp-1">{step.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${activeStepIndex === idx ? 'text-orange-400' : 'text-slate-600'}`} />
                  </button>
                ))}
              </div>

              {/* Active Step Details & Timer */}
              <div className="lg:col-span-2 bg-[#131d31] border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400 bg-orange-950/60 px-2.5 py-1 rounded-md border border-orange-500/30">
                      Drill {activeStepIndex + 1} de {training.steps.length}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Meta: {currentStep.repsOrDuration}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {currentStep.title}
                  </h4>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {currentStep.description}
                  </p>

                  {currentStep.coachingTip && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm">
                      <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-300 font-semibold">Dica do Treinador: </strong>
                        {currentStep.coachingTip}
                      </div>
                    </div>
                  )}
                </div>

                {/* Interactive Timer & Drill Controls */}
                <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                  {/* Timer display */}
                  <div className="flex items-center gap-3">
                    <div className="text-2xl sm:text-3xl font-mono font-black text-orange-400 bg-[#0c1424] px-4 py-1.5 rounded-xl border border-slate-700">
                      {formatTimer(timerSeconds)}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                        className={`p-2.5 rounded-xl text-white font-semibold transition ${
                          isTimerRunning
                            ? 'bg-amber-600 hover:bg-amber-500'
                            : 'bg-orange-600 hover:bg-orange-500'
                        }`}
                        title={isTimerRunning ? 'Pausar' : 'Iniciar'}
                      >
                        {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                      </button>

                      <button
                        onClick={() => {
                          setIsTimerRunning(false);
                          setTimerSeconds(45);
                        }}
                        className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                        title="Reiniciar (45s)"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => setTimerSeconds((prev) => prev + 30)}
                        className="px-2.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition"
                        title="Adicionar 30 segundos"
                      >
                        +30s
                      </button>
                    </div>
                  </div>

                  {/* Next drill button */}
                  {activeStepIndex < training.steps.length - 1 ? (
                    <button
                      onClick={() => {
                        setActiveStepIndex(prev => prev + 1);
                        setIsTimerRunning(false);
                        setTimerSeconds(45);
                      }}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-orange-600 hover:bg-orange-500 text-white text-sm font-semibold rounded-xl shadow-md transition ml-auto"
                    >
                      <span>Próximo Drill</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => onToggleCompleted(training.id)}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold rounded-xl shadow-md transition ml-auto"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Finalizar Treino</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#131d31] border border-slate-800 rounded-2xl p-5 space-y-4">
              <h4 className="text-white font-bold text-base">Sobre este Treino</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {training.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-sm">
                <div className="p-3.5 rounded-xl bg-[#0c1424] border border-slate-800">
                  <h5 className="font-semibold text-orange-400 mb-1">Equipamentos Recomendados</h5>
                  <p className="text-slate-300 text-xs">
                    Raquete de Beach Tennis de carbono ou kevlar, 3 a 6 bolinhas estágio 2 (laranja), sapatilha de areia (opcional para areia muito quente/fria).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0c1424] border border-slate-800">
                  <h5 className="font-semibold text-orange-400 mb-1">Dica de Hidratação</h5>
                  <p className="text-slate-300 text-xs">
                    Mantenha isotônico e água mineral gelada à beira da quadra. Areia fofa consome até 30% mais calorias e desidrata mais rápido.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal footer with copy feedback */}
        {copied && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-xl border border-orange-500/50 shadow-2xl flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Link do treino copiado para a área de transferência!
          </div>
        )}
      </div>
    </div>
  );
};
