import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Training } from '../types';
import { TrainingCard } from './TrainingCard';

interface SectionProps {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  trainings: Training[];
  onSelectTraining: (training: Training) => void;
}

export const TrainingSection: React.FC<SectionProps> = ({
  id,
  title,
  description,
  badge,
  icon: Icon,
  trainings,
  onSelectTraining
}) => {
  if (!trainings.length) return null;

  return (
    <section id={id} className="scroll-mt-28 mb-12 sm:mb-16">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-4 border-b border-slate-800/80 mb-6 gap-3">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-center text-[#f95700] shrink-0 mt-0.5 shadow-sm shadow-orange-500/10">
            <Icon className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {title}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30">
                {trainings.length} {trainings.length === 1 ? 'aula' : 'aulas'}
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 font-medium">
              {description}
            </p>
          </div>
        </div>

        <span className="text-xs font-medium uppercase tracking-wider text-slate-500 hidden sm:inline-block">
          {badge}
        </span>
      </div>

      {/* Grid of videos in this section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
        {trainings.map((training) => (
          <TrainingCard
            key={training.id}
            training={training}
            onClick={onSelectTraining}
          />
        ))}
      </div>
    </section>
  );
};
