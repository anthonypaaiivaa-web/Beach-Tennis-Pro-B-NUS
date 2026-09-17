import React, { useState } from 'react';
import {
  Download,
  FileText,
  Video,
  CheckCircle,
  Sparkles,
  Target,
  Layers,
  Activity,
  Trophy,
  LayoutGrid,
  LucideIcon
} from 'lucide-react';
import { Training, TrainingCategory } from '../types';
import { TrainingCard } from './TrainingCard';
import { TrainingSection } from './TrainingSection';

interface BonusSectionProps {
  trainings: Training[];
  onSelectTraining: (training: Training) => void;
}

interface ThemeConfig {
  id: TrainingCategory;
  title: string;
  shortLabel: string;
  description: string;
  badge: string;
  icon: LucideIcon;
}

const THEMES_CONFIG: ThemeConfig[] = [
  {
    id: 'iniciantes',
    title: 'Iniciantes & Primeiros Passos',
    shortLabel: 'Iniciantes',
    description: 'Empunhaduras essenciais, regras, postura correta na areia e como evitar erros comuns.',
    badge: 'Base e Fundamentos',
    icon: Sparkles
  },
  {
    id: 'tecnicas',
    title: 'Técnicas & Fundamentos de Golpes',
    shortLabel: 'Técnicas de Golpes',
    description: 'Saque com precisão e potência, smash, gancho, voleios e técnicas atualizadas de defesa.',
    badge: 'Mecânica e Golpes',
    icon: Target
  },
  {
    id: 'drills',
    title: 'Drills Práticos & Exercícios de Quadra',
    shortLabel: 'Drills de Quadra',
    description: 'Exercícios dinâmicos em quadra, movimentação rápida, rotinas de rede e treinos de alta repetição.',
    badge: 'Dinâmica de Quadra',
    icon: Layers
  },
  {
    id: 'condicionamento',
    title: 'Condicionamento Físico & Musculação',
    shortLabel: 'Físico & Musculação',
    description: 'Treinos físicos específicos para areia pesada, resistência e fortalecimento muscular funcional.',
    badge: 'Prevenção & Força',
    icon: Activity
  },
  {
    id: 'taticas',
    title: 'Táticas de Jogo & Estratégia de Duplas',
    shortLabel: 'Táticas & Estratégia',
    description: 'Posicionamento tático, leitura da dupla adversária e tomada de decisão para vencer pontos.',
    badge: 'Inteligência de Jogo',
    icon: Trophy
  }
];

export const BonusSection: React.FC<BonusSectionProps> = ({
  trainings,
  onSelectTraining
}) => {
  const [downloadNotification, setDownloadNotification] = useState<string | null>(null);
  const [selectedThemeId, setSelectedThemeId] = useState<string>('todos');

  const handleDownload = (title: string, filename: string, content: string) => {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadNotification(`Download de "${title}" iniciado com sucesso!`);
    setTimeout(() => setDownloadNotification(null), 4000);
  };

  // Group trainings by category
  const themesWithTrainings = THEMES_CONFIG.map((theme) => {
    const themeTrainings = trainings.filter((t) => t.category === theme.id);
    return {
      ...theme,
      trainings: themeTrainings,
      count: themeTrainings.length
    };
  }).filter((theme) => theme.count > 0);

  const displayedThemes =
    selectedThemeId === 'todos'
      ? themesWithTrainings
      : themesWithTrainings.filter((t) => t.id === selectedThemeId);

  return (
    <section id="sessao-bonus" className="scroll-mt-28 mb-20">
      {/* Toast Notification for Download */}
      {downloadNotification && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold flex items-center gap-2 animate-in fade-in">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{downloadNotification}</span>
        </div>
      )}

      {/* 1. SEÇÃO DE DOWNLOAD DOS 2 PDFS */}
      <div className="mb-14">
        {/* 2 PDF Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Planilha de Treino para Beach Tennis */}
          <div className="p-6 rounded-2xl bg-[#111a2b] border border-slate-700/80 shadow-lg flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  PDF 11 Páginas
                </span>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug">
                Planilha de Treino para Beach Tennis
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Periodização de 6 semanas estruturada com Treino A (Empurrar) e Treino B (Puxar), progressão de cargas, repetições e escala de esforço guiada (RPE).
              </p>
            </div>

            <button
              onClick={() =>
                handleDownload(
                  'Planilha de Treino para Beach Tennis',
                  'Planilha_de_Treino_Beach_Tennis.txt',
                  `PLANILHA DE TREINO PARA BEACH TENNIS (6 SEMANAS)
Divisão: Treino A (Empurrar) e Treino B (Puxar)

Semana 1: Adaptação e Técnica (2 séries x 12-15 reps)
Semana 2: Aumento de Volume (3 séries x 12-15 reps)
Semana 3: Sobrecarga Progressiva (3 séries x 10-12 reps)
Semana 4: Intensidade Máxima (3 séries x 8-10 reps)
Semana 5: Potência Explosiva (4 séries x 10-12 reps)
Semana 6: Consolidação de Performance (4 séries x 12-16 reps)

© Beach Tennis Pro - Bônus Exclusivo.`
                )
              }
              className="mt-6 w-full py-3 px-4 rounded-xl bg-[#f95700] hover:bg-orange-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Baixar Planilha de Treino (PDF)</span>
            </button>
          </div>

          {/* Card 2: 227 Exercícios de Musculação para Beach Tennis */}
          <div className="p-6 rounded-2xl bg-[#111a2b] border border-slate-700/80 shadow-lg flex flex-col justify-between hover:border-slate-600 transition-all">
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  PDF 52 Páginas
                </span>
              </div>

              <h3 className="text-lg font-bold text-white leading-snug">
                227 Exercícios de Musculação para Beach Tennis
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Manual completo de fortalecimento funcional: mobilidade, padrões empurrar e puxar, estabilidade de core, potência pliométrica e prevenção de lesões de ombro e cotovelo.
              </p>
            </div>

            <button
              onClick={() =>
                handleDownload(
                  '227 Exercícios de Musculação para Beach Tennis',
                  '227_Exercicios_Musculacao_Beach_Tennis.txt',
                  `227 EXERCÍCIOS DE MUSCULAÇÃO PARA O BEACH TENNIS
Manual com Vídeo Explicativo e Treino do Movimento

Capítulos:
- Mobilidade e Estabilidade (41 exercícios)
- Padrão Empurrar (42 exercícios)
- Padrão Puxar (53 exercícios)
- Exercícios Integrados (11 exercícios)
- CORE Stability (23 exercícios)
- CORE Strength (14 exercícios)
- Potência e Pliometria (16 exercícios)
- Braquiação e Fortalecimentos Articulares (27 exercícios)

© Beach Tennis Pro - Bônus Exclusivo.`
                )
              }
              className="mt-6 w-full py-3 px-4 rounded-xl bg-[#f95700] hover:bg-orange-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Baixar 227 Exercícios de Musculação (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. +20 VÍDEO AULAS DE BEACH TENNIS ORGANIZADAS POR TEMA */}
      <div>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
              <Video className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              +20 Vídeo Aulas de Beach Tennis
            </h2>
          </div>
        </div>

        {/* Theme Filter Tabs */}
        <div className="w-full overflow-x-auto scrollbar-none pb-4 mb-8">
          <div className="flex items-center gap-2 min-w-max">
            {/* Todos os Temas Tab */}
            <button
              onClick={() => setSelectedThemeId('todos')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all select-none ${
                selectedThemeId === 'todos'
                  ? 'bg-[#f95700] text-white shadow-md shadow-orange-600/35 border border-orange-500'
                  : 'bg-[#131d2e] text-slate-300 hover:text-white hover:bg-[#18253b] border border-slate-800'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Todos os Temas</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[11px] font-extrabold ${
                  selectedThemeId === 'todos'
                    ? 'bg-black/25 text-white'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {trainings.length}
              </span>
            </button>

            {/* Individual Theme Tabs */}
            {themesWithTrainings.map((theme) => {
              const isActive = selectedThemeId === theme.id;
              const Icon = theme.icon;

              return (
                <button
                  key={theme.id}
                  onClick={() => setSelectedThemeId(theme.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all select-none ${
                    isActive
                      ? 'bg-[#f95700] text-white shadow-md shadow-orange-600/35 border border-orange-500'
                      : 'bg-[#131d2e] text-slate-300 hover:text-white hover:bg-[#18253b] border border-slate-800'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-white' : 'text-orange-400'
                    }`}
                  />
                  <span>{theme.shortLabel}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-md text-[11px] font-extrabold ${
                      isActive
                        ? 'bg-black/25 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {theme.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Themed Video Sections */}
        <div className="space-y-12 sm:space-y-16">
          {displayedThemes.map((theme) => (
            <TrainingSection
              key={theme.id}
              id={`tema-${theme.id}`}
              title={theme.title}
              description={theme.description}
              badge={theme.badge}
              icon={theme.icon}
              trainings={theme.trainings}
              onSelectTraining={onSelectTraining}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
