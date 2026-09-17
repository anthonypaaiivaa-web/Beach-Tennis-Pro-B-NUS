export interface PDFExercise {
  id: number;
  title: string;
  category: string;
  level: string;
  objective: string;
  preparation: string;
  execution: string;
  volume: string;
  progression: string;
  tip: string;
}

export interface PDFCategoryInfo {
  range: string;
  name: string;
  description: string;
  count: number;
  iconName: string;
}

export const PDF_500_CATEGORIES: PDFCategoryInfo[] = [
  { range: '1-25', name: 'Fundamentos e Controle de Bola', description: 'Toques controlados, domínio de bola e estabilidade de contato na areia.', count: 25, iconName: 'Target' },
  { range: '26-50', name: 'Empunhadura e Sensibilidade', description: 'Sensibilidade de raquete, empunhadura continental e controle de altura.', count: 25, iconName: 'Hand' },
  { range: '51-75', name: 'Saque', description: 'Saque por zonas, regularidade de primeiro saque e saque sob pressão.', count: 25, iconName: 'Zap' },
  { range: '76-100', name: 'Recepção de Saque', description: 'Devolução profunda, leitura de trajetória e neutralização de saques rápidos.', count: 25, iconName: 'Shield' },
  { range: '101-125', name: 'Voleio de Forehand', description: 'Voleio compacto, controle de direção, profundidade e reposição rápida.', count: 25, iconName: 'Sparkles' },
  { range: '126-150', name: 'Voleio de Backhand', description: 'Ajuste de pés, contato adiantado e firmeza de punho do lado não dominante.', count: 25, iconName: 'Layers' },
  { range: '151-175', name: 'Smash', description: 'Leitura de bolas altas, impulsão vertical, smash potente e smash angulado.', count: 25, iconName: 'Flame' },
  { range: '176-200', name: 'Bandeja', description: 'Controle de bolas fundas sem perder a rede, avanço coordenado e precisão.', count: 25, iconName: 'Activity' },
  { range: '201-225', name: 'Defesa', description: 'Defesa de reflexo, bloqueio contra smashes rápidos e lob de recuperação.', count: 25, iconName: 'ShieldCheck' },
  { range: '226-250', name: 'Ataque e Finalização', description: 'Ataque ao espaço vazio, aceleração controlada e definição de pontos.', count: 25, iconName: 'Crosshair' },
  { range: '251-275', name: 'Movimentação e Pés', description: 'Passos de ajuste na areia, deslocamento em X, avanço e recuperação de base.', count: 25, iconName: 'Footprints' },
  { range: '276-300', name: 'Posicionamento em Dupla', description: 'Movimento em bloco, fechamento do meio e cobertura de espaços da quadra.', count: 25, iconName: 'Users' },
  { range: '301-325', name: 'Comunicação em Dupla', description: 'Comunicação verbal ativa, chamada da bola do meio e sincronia tática.', count: 25, iconName: 'MessageSquare' },
  { range: '326-350', name: 'Precisão e Direcionamento', description: 'Desafios de alvos, corredores laterais e profundidade controlada.', count: 25, iconName: 'Compass' },
  { range: '351-375', name: 'Consistência e Regularidade', description: 'Ralis longos sem erros não forçados, regularidade técnica sob fadiga.', count: 25, iconName: 'Repeat' },
  { range: '376-400', name: 'Tempo de Reação', description: 'Direção surpresa, reação curta e resposta a estímulos imprevisíveis.', count: 25, iconName: 'Timer' },
  { range: '401-425', name: 'Treinos Individuais', description: 'Autoalimentação, circuitos solo e desenvolvimento de autonomia técnica.', count: 25, iconName: 'User' },
  { range: '426-450', name: 'Treinos em Dupla', description: 'Drills cooperativos e competitivos com parceiro de jogo.', count: 25, iconName: 'Users2' },
  { range: '451-475', name: 'Situações de Jogo', description: 'Pontos condicionados, simulação de placar e tomada de decisão sob pressão.', count: 25, iconName: 'Trophy' },
  { range: '476-500', name: 'Condicionamento Aplicado', description: 'Agilidade com raquete, circuitos com cones e resistência na areia.', count: 25, iconName: 'Dumbbell' }
];

export interface BonusPDFItem {
  id: string;
  title: string;
  subtitle: string;
  pagesCount: string;
  exercisesCount: string;
  badge: string;
  accentColor: string;
  description: string;
  chapters: { title: string; count: string; desc: string }[];
  highlights: string[];
}

export const BONUS_PDFS: BonusPDFItem[] = [
  {
    id: 'pdf-musculacao-227',
    title: '227 Exercícios de Musculação para o Beach Tennis',
    subtitle: 'Com Vídeo Explicativo e Treino do Movimento (VITTEAM)',
    pagesCount: '52 páginas',
    exercisesCount: '227 exercícios',
    badge: 'Livro Digital Bônus',
    accentColor: '#10b981',
    description: 'Manual completo de preparação física e musculação funcional de alto rendimento. Focado no padrão do movimento (empurrar, puxar, integrados, core stability, potência e braquiação) para máxima transferência à areia sem sobrecarga de máquina.',
    chapters: [
      { title: 'Capítulo 1: Mobilidade e Estabilidade', count: '41 exercícios', desc: 'Cócoras, maior alongamento do mundo, rotação torácica e ativação escapular' },
      { title: 'Capítulo 2: Padrão Empurrar', count: '42 exercícios', desc: 'Supino em pé, desenvolvimento unilateral, agachamentos e flexões funcionais' },
      { title: 'Capítulo 3: Padrão Puxar', count: '53 exercícios', desc: 'Remadas em prancha, levantamento terra funcional, puxadas unilaterais' },
      { title: 'Capítulo 4: Exercícios Integrados', count: '11 exercícios', desc: 'Thruster, arranques com remada alta e coordenação membros superiores/inferiores' },
      { title: 'Capítulo 5: CORE Stability', count: '23 exercícios', desc: 'Pranchas dinâmicas, Pallof press e Farm Walker estabilizadores de coluna' },
      { title: 'Capítulo 6: CORE Strenght', count: '14 exercícios', desc: 'Chops e rotações em cabo/landmine para transferência rotacional de força' },
      { title: 'Capítulo 7: Potência e Pliometria', count: '16 exercícios', desc: 'Afundos pliométricos, jump lunges e saídas explosivas' },
      { title: 'Capítulo 8: Braquiação', count: '3 exercícios', desc: 'Fortalecimento de punho, cotovelo e ombro com pegada suspensa' },
      { title: 'Capítulo 9: Fortalecimentos em Geral', count: '24 exercícios', desc: 'Estabilização de cotovelo para evitar epicondilite e exercícios articulares' }
    ],
    highlights: [
      'Total de 227 exercícios catalogados por grupos funcionais',
      'Treino do movimento com transferência direta para a areia',
      'Prevenção específica de lesões em ombro, punho e cotovelo'
    ]
  },
  {
    id: 'pdf-planilha-6semanas',
    title: 'Planilha de Treino de 6 Semanas para Beach Tennis',
    subtitle: 'Periodização Completa com Treino A (Empurrar) e Treino B (Puxar)',
    pagesCount: '11 páginas',
    exercisesCount: '6 semanas de ciclos',
    badge: 'Planilha Bônus',
    accentColor: '#3b82f6',
    description: 'Periodização prática passo a passo de 6 semanas estruturada em Treino A (Empurrar) e Treino B (Puxar). Traz progressões semanais exatas de séries, repetições, escala de percepção de esforço (RPE) e intervalos de descanso.',
    chapters: [
      { title: 'Semana 1: Adaptação e Técnica', count: '2 séries x 12-15 reps', desc: 'Frequência 2x na semana, foco em estabilização e aprendizagem do gesto motor' },
      { title: 'Semana 2: Aumento de Volume', count: '3 séries x 12-15 reps', desc: 'Aumento do número de séries mantendo carga e repetições estáveis' },
      { title: 'Semana 3: Sobrecarga Progressiva', count: '3 séries x 10-12 reps', desc: 'Aumento de carga nos exercícios e redução estratégica de repetições' },
      { title: 'Semana 4: Intensidade Máxima', count: '3 séries x 8-10 reps', desc: 'Esforço nível 7-8 na escala com intervalos de até 90 segundos' },
      { title: 'Semana 5: Choque e Potência Explosiva', count: '4 séries x 10-12 reps', desc: 'Movimentos explosivos (supino explosivo, remada explosiva, puxada explosiva)' },
      { title: 'Semana 6: Consolidação de Performance', count: '4 séries x 12-16 reps', desc: 'Manutenção de séries com alta densidade e transferência direta para a quadra' }
    ],
    highlights: [
      'Estrutura pronta para academia e treinos complementares',
      'Escala de esforço guiada (RPE de 0 a 10) para cada exercício',
      'Divisão em Treino A (Empurrar) e Treino B (Puxar) em dias alternados'
    ]
  }
];
