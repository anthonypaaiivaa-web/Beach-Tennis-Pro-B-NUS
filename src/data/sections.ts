import {
  Sparkles,
  Zap,
  Target,
  Dumbbell,
  ShieldCheck,
  TrendingUp,
  Award,
  LucideIcon
} from 'lucide-react';
import { Training } from '../types';

export interface TrainingSectionConfig {
  id: string;
  title: string;
  badge: string;
  description: string;
  icon: LucideIcon;
  trainingIds: string[];
}

export const SECTIONS_CONFIG: TrainingSectionConfig[] = [
  {
    id: 'iniciantes-fundamentos',
    title: 'Iniciantes & Fundamentos',
    badge: 'Passo a Passo',
    description: 'Aprenda do zero: empunhaduras essenciais, regras, postura correta e correção dos 5 erros mais comuns.',
    icon: Sparkles,
    trainingIds: [
      'bt-zero',
      'bt-5-erros-comuns'
    ]
  },
  {
    id: 'saque-potencia',
    title: 'Saque & Potência',
    badge: 'Golpe Inicial',
    description: 'Dicas infalíveis de toss, pronação acelerada, saque chapado de alta velocidade e saque aberto com slice.',
    icon: Zap,
    trainingIds: [
      'bt-saque-certo',
      'bt-dicas-saque-infaliveis'
    ]
  },
  {
    id: 'ataque-definicao',
    title: 'Ataque & Definição Aérea',
    badge: 'Finalização',
    description: 'Domine a mecânica de smash potente e angulado, o gancho por trás da cabeça e ataques rápidos na fita.',
    icon: Target,
    trainingIds: [
      'bt-smash',
      'bt-gancho'
    ]
  },
  {
    id: 'defesa-controle',
    title: 'Defesa & Controle de Bola',
    badge: 'Solidez',
    description: 'Diferentes tipos de defesa contra smashes, controle de bola, amorties na rede e recuperação de bolas curtas.',
    icon: ShieldCheck,
    trainingIds: [
      'bt-diferentes-tipos-defesas',
      'bt-controle-bola',
      'bt-bola-curta-smash'
    ]
  },
  {
    id: 'drills-movimentacao',
    title: 'Drills de Quadra & Movimentação',
    badge: 'Footwork & Voleio',
    description: 'Série progressiva de drills técnicos: voleios rápidos, deslocamentos em X, sincronia de pés e transições.',
    icon: TrendingUp,
    trainingIds: [
      'bt-movimentacao-quadra',
      'bt-drill-iniciante-01',
      'bt-drill-iniciante-02',
      'bt-drill-03-04',
      'bt-drill-05',
      'bt-drill-06',
      'bt-drill-07-voleio'
    ]
  },
  {
    id: 'fisico-musculacao',
    title: 'Condicionamento Físico & Musculação',
    badge: 'Performance',
    description: 'Treinos físicos na areia fofa, circuitos de queimação muscular intensa e musculação preventiva para atletas de Beach Tennis.',
    icon: Dumbbell,
    trainingIds: [
      'bt-treino-fisico-areia',
      'bt-treino-fisico-insano',
      'bt-musculacao-completo'
    ]
  },
  {
    id: 'taticas-alta-performance',
    title: 'Táticas & Nível Profissional',
    badge: 'Competição',
    description: 'Treino completo com simulação de jogo real, rotina de atletas profissionais e estratégias táticas para vencer mais partidas.',
    icon: Award,
    trainingIds: [
      'bt-taticas-vencer-jogos',
      'bt-treino-completo',
      'bt-profissionais-masculino'
    ]
  }
];

export function getSectionTrainings(allTrainings: Training[]) {
  const trainingMap = new Map(allTrainings.map((t) => [t.id, t]));

  return SECTIONS_CONFIG.map((section) => ({
    ...section,
    trainings: section.trainingIds
      .map((id) => trainingMap.get(id))
      .filter((t): t is Training => Boolean(t))
  }));
}
