import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface SectionTabItem {
  id: string;
  label: string;
  count: number;
  icon?: LucideIcon;
}

interface CategoryTabsProps {
  sections: SectionTabItem[];
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  sections,
  activeSection,
  onSelectSection
}) => {
  return (
    <div className="w-full overflow-x-auto scrollbar-none pb-2 pt-1">
      <div className="flex items-center gap-2.5 min-w-max">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          const Icon = sec.icon;

          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 select-none ${
                isActive
                  ? 'bg-[#f95700] text-white shadow-md shadow-orange-600/35 border border-orange-500'
                  : 'bg-[#131d2e] text-slate-300 hover:text-white hover:bg-[#18253b] border border-slate-800'
              }`}
            >
              {Icon && (
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-white' : 'text-slate-400'
                  }`}
                />
              )}
              <span>{sec.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-md text-[11px] font-bold ${
                  isActive
                    ? 'bg-black/20 text-white'
                    : 'bg-slate-800/80 text-slate-400'
                }`}
              >
                {sec.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
