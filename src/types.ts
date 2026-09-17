export type TrainingCategory = 
  | 'gerais'
  | 'tecnicas'
  | 'condicionamento'
  | 'drills'
  | 'taticas'
  | 'iniciantes';

export type DifficultyLevel = 'Iniciante' | 'Intermediário' | 'Avançado' | 'Todos os níveis';

export interface TrainingExerciseStep {
  title: string;
  repsOrDuration: string;
  description: string;
  coachingTip?: string;
}

export interface Training {
  id: string;
  title: string;
  category: TrainingCategory;
  level: DifficultyLevel;
  duration: string; // e.g., "15 min"
  durationMinutes: number;
  thumbnail: string;
  videoUrl?: string; // YouTube embed ID or video url
  instructor?: string;
  exercisesCount: number;
  description: string;
  steps: TrainingExerciseStep[];
  isFeatured?: boolean;
}
