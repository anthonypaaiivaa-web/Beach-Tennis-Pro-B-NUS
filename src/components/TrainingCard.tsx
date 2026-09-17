import React from 'react';
import { Play } from 'lucide-react';
import { Training } from '../types';

interface TrainingCardProps {
  training: Training;
  onClick: (training: Training) => void;
}

export const TrainingCard: React.FC<TrainingCardProps> = ({
  training,
  onClick
}) => {
  return (
    <div
      onClick={() => onClick(training)}
      className="group relative bg-[#131d2e] hover:bg-[#18253b] rounded-2xl overflow-hidden border border-slate-800/80 hover:border-slate-700 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col cursor-pointer"
    >
      {/* Thumbnail area with centered Play button */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        <img
          src={training.thumbnail}
          alt={training.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Centered Orange Play Button - matching reference screenshot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-[#f95700] group-hover:bg-[#ff6514] flex items-center justify-center text-white shadow-lg shadow-orange-600/40 group-hover:scale-110 transition-transform duration-150">
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </div>
        </div>
      </div>

      {/* Card Content - Clean Title area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-start">
        <h3 className="text-white font-semibold text-sm sm:text-base leading-snug line-clamp-2">
          {training.title}
        </h3>
      </div>
    </div>
  );
};

