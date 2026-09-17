import React, { useState } from 'react';
import { X, Plus, Trash2, Dumbbell, Clock } from 'lucide-react';
import { Training, TrainingCategory, DifficultyLevel, TrainingExerciseStep } from '../types';

interface AddTrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTraining: (training: Training) => void;
}

export const AddTrainingModal: React.FC<AddTrainingModalProps> = ({
  isOpen,
  onClose,
  onAddTraining
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<TrainingCategory>('gerais');
  const [level, setLevel] = useState<DifficultyLevel>('Intermediário');
  const [duration, setDuration] = useState('15 min');
  const [instructor, setInstructor] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop');
  const [videoUrl, setVideoUrl] = useState('');
  
  const [steps, setSteps] = useState<TrainingExerciseStep[]>([
    { title: 'Aquecimento específico na areia', repsOrDuration: '3 min', description: 'Deslocamentos curtos e rotação de ombros.' }
  ]);

  if (!isOpen) return null;

  const handleAddStep = () => {
    setSteps([
      ...steps,
      { title: '', repsOrDuration: '3x 10 repetições', description: '' }
    ]);
  };

  const handleRemoveStep = (index: number) => {
    if (steps.length <= 1) return;
    setSteps(steps.filter((_, i) => i !== index));
  };

  const handleStepChange = (index: number, field: keyof TrainingExerciseStep, value: string) => {
    const updated = [...steps];
    updated[index] = { ...updated[index], [field]: value };
    setSteps(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTraining: Training = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category,
      level,
      duration: duration.trim() || '15 min',
      durationMinutes: parseInt(duration) || 15,
      thumbnail: thumbnail.trim() || 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=800&auto=format&fit=crop',
      videoUrl: videoUrl.trim() || undefined,
      instructor: instructor.trim() || undefined,
      exercisesCount: steps.length,
      description: description.trim() || 'Treino personalizado de Beach Tennis.',
      steps: steps.map((s, i) => ({
        title: s.title.trim() || `Drill ${i + 1}`,
        repsOrDuration: s.repsOrDuration || '3 séries',
        description: s.description || 'Execução do movimento com foco em postura e equilíbrio.'
      }))
    };

    onAddTraining(newTraining);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-2xl bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-[#131d31]">
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <Plus className="w-5 h-5 text-orange-500" />
            Adicionar Novo Treino de Beach Tennis
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto space-y-4 text-sm">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Título do Treino *</label>
            <input
              type="text"
              required
              placeholder="Ex: 15 exercícios para gancho e smash na areia"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#131d31] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Categoria</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as TrainingCategory)}
                className="w-full px-3.5 py-2.5 bg-[#131d31] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-orange-500"
              >
                <option value="gerais">Treinos e Exercícios Gerais</option>
                <option value="tecnicas">Técnicas e Golpes</option>
                <option value="condicionamento">Condicionamento Físico</option>
                <option value="drills">Drills e Táticas de Dupla</option>
                <option value="iniciantes">Iniciantes e Fundamentos</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Nível de Dificuldade</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as DifficultyLevel)}
                className="w-full px-3.5 py-2.5 bg-[#131d31] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-orange-500"
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
                <option value="Todos os níveis">Todos os níveis</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Duração Estimada</label>
              <input
                type="text"
                placeholder="Ex: 20 min"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#131d31] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Instrutor / Coach (Opcional)</label>
              <input
                type="text"
                placeholder="Ex: Coach Alex Sand"
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#131d31] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">URL do Vídeo (YouTube Embed ou link)</label>
            <input
              type="text"
              placeholder="https://www.youtube.com/embed/..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#131d31] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">Descrição do Treino</label>
            <textarea
              rows={2}
              placeholder="Descreva o foco do treino, benefícios e orientações gerais..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2 bg-[#131d31] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
            />
          </div>

          {/* Steps */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-slate-300 font-semibold">Exercícios / Drills ({steps.length})</label>
              <button
                type="button"
                onClick={handleAddStep}
                className="text-xs font-semibold text-orange-400 hover:text-orange-300 flex items-center gap-1"
              >
                <Plus className="w-3.5 h-3.5" /> Adicionar Exercício
              </button>
            </div>

            <div className="space-y-3">
              {steps.map((step, idx) => (
                <div key={idx} className="p-3 bg-[#131d31] border border-slate-800 rounded-xl space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-orange-400">Drill #{idx + 1}</span>
                    {steps.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveStep(idx)}
                        className="text-slate-500 hover:text-rose-400 p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      placeholder="Nome do exercício"
                      value={step.title}
                      onChange={(e) => handleStepChange(idx, 'title', e.target.value)}
                      className="sm:col-span-2 px-3 py-1.5 bg-[#0f172a] border border-slate-700 text-white rounded-lg text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Meta (ex: 3x 10 repetições)"
                      value={step.repsOrDuration}
                      onChange={(e) => handleStepChange(idx, 'repsOrDuration', e.target.value)}
                      className="px-3 py-1.5 bg-[#0f172a] border border-slate-700 text-white rounded-lg text-xs"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-400 hover:text-white text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-600/30 transition active:scale-95"
            >
              Salvar Treino
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
