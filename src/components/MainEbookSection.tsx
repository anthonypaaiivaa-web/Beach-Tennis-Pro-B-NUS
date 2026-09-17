import React, { useState } from 'react';
import {
  BookOpen,
  FileText,
  Search,
  CheckCircle,
  Clock,
  Target,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowUpRight,
  Dumbbell
} from 'lucide-react';
import { PDF_500_CATEGORIES, PDFCategoryInfo } from '../data/ebooks';

export const MainEbookSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PDFCategoryInfo | null>(null);

  const filteredCategories = PDF_500_CATEGORIES.filter((cat) => {
    const term = searchTerm.toLowerCase();
    return (
      cat.name.toLowerCase().includes(term) ||
      cat.description.toLowerCase().includes(term) ||
      cat.range.includes(term)
    );
  });

  return (
    <section id="sessao-500-exercicios" className="scroll-mt-24 mb-16 sm:mb-20">
      {/* Hero Showcase Card for the 500 Exercícios PDF */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#121c2e] via-[#0f172a] to-[#0a1120] border border-orange-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-orange-950/20 mb-8">
        {/* Glow ambient effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Sessão Principal • Livro Oficial
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
              BEACH TENNIS PRO
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                500 Treinos de Beach Tennis
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              Do iniciante ao avançado: <strong className="text-white font-semibold">Fundamentos, Técnica, Movimentação, Duplas, Estratégia e Condicionamento</strong>. Um manual completo de 116 páginas organizado em 10 blocos de 50 treinos progressivos cada, projetado para transformar conhecimento em quadra.
            </p>

            {/* Quick stats pills */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-200">
                <FileText className="w-4 h-4 text-orange-400" />
                <span>116 Páginas Completas</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-200">
                <Target className="w-4 h-4 text-orange-400" />
                <span>500 Treinos Práticos</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm font-semibold text-slate-200">
                <Layers className="w-4 h-4 text-orange-400" />
                <span>10 Módulos Especializados</span>
              </div>
            </div>
          </div>

          {/* PDF Book Visual Badge */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row lg:flex-col gap-4 items-stretch lg:items-end">
            <div className="relative w-full sm:w-64 p-5 rounded-2xl bg-[#0b1322]/90 border border-slate-700/80 shadow-xl flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  MANUAL OFICIAL
                </span>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Material Didático</p>
                <h4 className="text-base font-bold text-white mt-0.5">500 Treinos</h4>
                <p className="text-[11px] text-slate-400 mt-1">
                  50 treinos organizados em 10 módulos técnicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Sessions Bar */}
      <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#111a2b] border border-slate-800/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
            <Clock className="w-4 h-4 text-orange-400" />
            Sugestões de Sessões Prontas do Manual
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Monte treinos de 4 a 8 exercícios alternando técnica, movimentação e jogo:
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
            <span className="text-orange-400 font-bold block">Sessão A</span> Iniciantes (Controle + Saque)
          </div>
          <div className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
            <span className="text-orange-400 font-bold block">Sessão B</span> Intermediário (Bandeja + Dupla)
          </div>
          <div className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
            <span className="text-orange-400 font-bold block">Sessão C</span> Avançado (Reação + Smash)
          </div>
          <div className="px-3 py-2 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
            <span className="text-orange-400 font-bold block">Sessão D</span> Treino Solo (Autoalimentação)
          </div>
        </div>
      </div>

      {/* Search and Section Header for the 20 modules */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80 mb-6">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <span>Índice das 20 Áreas Técnicas</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-400 font-semibold border border-orange-500/30">
              Exercícios 1 a 500
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
            Clique em qualquer área para visualizar os objetivos, progressões e detalhes do manual.
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar área ou fundamento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-[#111a2b] border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
          />
        </div>
      </div>

      {/* 20 Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCategories.map((cat, idx) => {
          const isSelected = selectedCategory?.range === cat.range;

          return (
            <div
              key={cat.range}
              onClick={() => setSelectedCategory(isSelected ? null : cat)}
              className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-orange-500/10 border-orange-500/60 shadow-lg shadow-orange-500/10 ring-1 ring-orange-500/30'
                  : 'bg-[#111a2b] hover:bg-[#152238] border-slate-800/90 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-orange-500/15 text-orange-400 border border-orange-500/25">
                    Exercícios {cat.range}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    25 exercícios
                  </span>
                </div>

                <h4 className="text-white font-bold text-sm sm:text-base leading-snug">
                  {cat.name}
                </h4>

                <p className="text-slate-400 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs font-semibold text-orange-400 group">
                <span>{isSelected ? 'Ocultar detalhes' : 'Ver estrutura'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Category Details Modal / Drawer if a category is selected */}
      {selectedCategory && (
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-[#121f35] to-[#0f172a] border border-orange-500/40 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-700/60 gap-3">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded bg-orange-500 text-white text-xs font-bold">
                  Faixa {selectedCategory.range}
                </span>
                <h4 className="text-xl font-bold text-white">
                  {selectedCategory.name}
                </h4>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {selectedCategory.description}
              </p>
            </div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="self-start sm:self-auto px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
            >
              Fechar
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-orange-400 font-bold block mb-1">🎯 Objetivo Didático</span>
              <p className="text-slate-300 leading-relaxed">
                Desenvolver precisão e automação do movimento em diferentes zonas da quadra (cruzado, paralelo, centro e transições).
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-orange-400 font-bold block mb-1">📈 Volume & Progressão</span>
              <p className="text-slate-300 leading-relaxed">
                Séries de 3 a 5 blocos com pontuação por alvos. Simulação de pressão competitiva com placar 30-30.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-orange-400 font-bold block mb-1">💡 Dica Técnica Central</span>
              <p className="text-slate-300 leading-relaxed">
                Manter a empunhadura estável, ajuste prévio com passos curtos na areia e contato à frente do corpo.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
