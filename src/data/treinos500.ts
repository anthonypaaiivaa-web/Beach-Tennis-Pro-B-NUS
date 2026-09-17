export interface TreinoItem {
  id: number;
  numberFormatted: string; // '001', '002', etc.
  title: string;
  category: string;
  categoryId: number; // 1 to 10
  skill: string;
  variationType: string;
  objective: string;
  execution: string;
  volume: string;
  level: 'Iniciante' | 'Iniciante/Intermediário' | 'Intermediário' | 'Intermediário/Avançado' | 'Avançado';
  variation: string;
}

export interface TreinoModule {
  id: number;
  title: string;
  range: string;
  startNum: number;
  endNum: number;
  description: string;
  skills: string[];
  icon: string;
}

export const TREINO_MODULES: TreinoModule[] = [
  {
    id: 1,
    title: 'Fundamentos e Controle',
    range: 'Treinos 1 a 50',
    startNum: 1,
    endNum: 50,
    description: 'Controle de bola na raquete, toques alternados de forehand e backhand, controle de altura, direção e equilíbrio.',
    skills: [
      'Controle De Bola Na Raquete',
      'Toques Alternados De Forehand E Backhand',
      'Controle De Altura',
      'Controle De Direção',
      'Equilíbrio Após O Contato',
    ],
    icon: 'Target',
  },
  {
    id: 2,
    title: 'Saque',
    range: 'Treinos 51 a 100',
    startNum: 51,
    endNum: 100,
    description: 'Saque profundo por zonas, saque no corpo, saque aberto, variação de direção e regularidade do primeiro saque.',
    skills: [
      'Saque Com Alvo Profundo',
      'Saque No Corpo',
      'Saque Aberto',
      'Variação De Direção',
      'Regularidade Do Primeiro Saque',
    ],
    icon: 'Zap',
  },
  {
    id: 3,
    title: 'Recepção',
    range: 'Treinos 101 a 150',
    startNum: 101,
    endNum: 150,
    description: 'Recepção cruzada, paralela, bloqueio contra saque forte, recepção de controle e direção ao espaço vazio.',
    skills: [
      'Recepção Cruzada',
      'Recepção Paralela',
      'Bloqueio De Saque Forte',
      'Recepção Com Controle',
      'Recepção Direcionada Ao Espaço Vazio',
    ],
    icon: 'Shield',
  },
  {
    id: 4,
    title: 'Forehand',
    range: 'Treinos 151 a 200',
    startNum: 151,
    endNum: 200,
    description: 'Forehand cruzado, paralelo, profundo, de controle e após deslocamento lateral na areia.',
    skills: [
      'Forehand Cruzado',
      'Forehand Paralelo',
      'Forehand Profundo',
      'Forehand De Controle',
      'Forehand Após Deslocamento Lateral',
    ],
    icon: 'Flame',
  },
  {
    id: 5,
    title: 'Backhand',
    range: 'Treinos 201 a 250',
    startNum: 201,
    endNum: 250,
    description: 'Backhand cruzado, paralelo, fundo de quadra, controle de bola e golpe após recuperação de base.',
    skills: [
      'Backhand Cruzado',
      'Backhand Paralelo',
      'Backhand Profundo',
      'Backhand De Controle',
      'Backhand Após Recuperação',
    ],
    icon: 'Layers',
  },
  {
    id: 6,
    title: 'Voleio e Rede',
    range: 'Treinos 251 a 300',
    startNum: 251,
    endNum: 300,
    description: 'Voleio de forehand, voleio de backhand, voleio curto (drop shot), voleio profundo e trocas rápidas na rede.',
    skills: [
      'Voleio De Forehand',
      'Voleio De Backhand',
      'Voleio Curto',
      'Voleio Profundo',
      'Troca Rápida Na Rede',
    ],
    icon: 'Sparkles',
  },
  {
    id: 7,
    title: 'Smash, Bandeja e Ataque',
    range: 'Treinos 301 a 350',
    startNum: 301,
    endNum: 350,
    description: 'Smash controlado, smash direcionado, bandeja defensiva, bandeja para retomada da rede e ataque em bola alta.',
    skills: [
      'Smash Controlado',
      'Smash Direcionado',
      'Bandeja Defensiva',
      'Bandeja Para Retomada Da Rede',
      'Ataque Em Bola Alta',
    ],
    icon: 'Crosshair',
  },
  {
    id: 8,
    title: 'Defesa e Transição',
    range: 'Treinos 351 a 400',
    startNum: 351,
    endNum: 400,
    description: 'Defesa de smash, lob defensivo de recuperação, saída do fundo para a rede e reação a bolas curtas.',
    skills: [
      'Defesa De Smash',
      'Lob Defensivo',
      'Saída Do Fundo Para A Rede',
      'Recuperação Após Bola Curta',
      'Defesa Em Deslocamento',
    ],
    icon: 'ShieldCheck',
  },
  {
    id: 9,
    title: 'Movimentação e Condicionamento',
    range: 'Treinos 401 a 450',
    startNum: 401,
    endNum: 450,
    description: 'Passos laterais na areia, arranque curto, mudanças bruscas de direção, retorno ao centro e deslocamento em dupla.',
    skills: [
      'Passos Laterais Na Areia',
      'Arranque Curto',
      'Mudança De Direção',
      'Recuperação Ao Centro',
      'Deslocamento Em Dupla',
    ],
    icon: 'Footprints',
  },
  {
    id: 10,
    title: 'Tática de Duplas e Situações de Jogo',
    range: 'Treinos 451 a 500',
    startNum: 451,
    endNum: 500,
    description: 'Ocupação de espaços, comunicação verbal, domínio do meio da quadra, construção do ponto e escolha entre ataque e controle.',
    skills: [
      'Ocupação De Espaços',
      'Comunicação Da Dupla',
      'Jogo No Meio',
      'Construção Do Ponto',
      'Decisão Ataque Versus Controle',
    ],
    icon: 'Users',
  },
];

const VARIATION_NAMES = [
  'Alvos em zonas',
  'Sequência 5 + 1',
  'Relógio',
  'Desloca e executa',
  'Dupla cooperativa',
  'Comando surpresa',
  'Precisão progressiva',
  'Pressão de tempo',
  'Ponto condicionado',
  'Dupla competitiva',
];

const VARIATION_INDICES_50 = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 0, // 1-10
  2, 3, 4, 9, 5, 7, 8, 0, 1, 2, // 11-20
  4, 9, 5, 6, 7, 0, 1, 2, 3, 4, // 21-30
  5, 6, 7, 8, 0, 2, 3, 4, 9, 5, // 31-40
  7, 8, 0, 1, 2, 4, 9, 5, 6, 7  // 41-50
];

const OBJECTIVES_10 = [
  'melhorar precisão e consistência.',
  'ganhar controle sob pressão.',
  'automatizar a técnica.',
  'melhorar tomada de decisão.',
  'aumentar eficiência de deslocamento.',
  'combinar controle e agressividade.',
  'melhorar leitura da trajetória.',
  'reduzir erros não forçados.',
  'acelerar a recuperação para a próxima bola.',
  'transferir a técnica para situações reais de jogo.',
];

const VOLUMES_10 = [
  '3 séries de 8 repetições',
  '4 séries de 45 segundos',
  '4 séries de 8 bolas',
  '5 minutos contínuos',
  '3 séries de 45 segundos',
  '5 séries de 6 bolas',
  '4 blocos de 90 segundos',
  '4 séries de 6 repetições',
  '3 séries de 10 bolas',
  '3 blocos de 2 minutos',
];

const SKILL_VARIATIONS = [
  'reduza o alvo ou aumente a distância.',
  'faça alternando lados a cada bola.',
  'inclua um deslocamento lateral antes da execução.',
  'transforme a última repetição de cada série em ponto livre.',
  'conte apenas repetições que atinjam a zona definida.',
];

const EXEC_PREFIXES = [
  'Marque 3 zonas com cones. Execute a habilidade tentando alternar os alvos sem repetir a mesma zona.',
  'Faça 5 repetições controladas e a 6ª com intenção ofensiva, mantendo a mesma preparação.',
  'Distribua alvos como posições de um relógio e alterne a direção a cada repetição.',
  'Comece 2 a 3 metros fora da posição ideal, desloque-se, estabilize o corpo e execute.',
  'Em dupla, mantenha a troca viva com foco técnico e aumente gradualmente a velocidade.',
  'Um parceiro indica a direção do golpe no último instante possível, exigindo leitura e ajuste.',
  'Comece com alvo grande e reduza a área-alvo após cada série bem-sucedida.',
  'Execute a sequência dentro de um intervalo curto, sem sacrificar controle ou postura.',
  'Jogue pontos em meia quadra ou quadra inteira com uma regra que obrigue o uso da habilidade.',
  'Em dupla, pontue apenas quando a habilidade proposta for executada corretamente.',
];

export function generateAll500Treinos(): TreinoItem[] {
  const all: TreinoItem[] = [];

  for (let mIdx = 0; mIdx < 10; mIdx++) {
    const mod = TREINO_MODULES[mIdx];

    for (let k = 0; k < 50; k++) {
      const id = mIdx * 50 + k + 1;
      const numFormatted = String(id).padStart(3, '0');
      const skillIdx = k % 5;
      const skill = mod.skills[skillIdx];
      const varIdx = VARIATION_INDICES_50[k];
      const variationName = VARIATION_NAMES[varIdx];

      // Level
      let level: TreinoItem['level'] = 'Iniciante';
      if (k >= 10 && k < 20) level = 'Iniciante/Intermediário';
      else if (k >= 20 && k < 30) level = 'Intermediário';
      else if (k >= 30 && k < 40) level = 'Intermediário/Avançado';
      else if (k >= 40) level = 'Avançado';

      const p10 = k % 10;
      const objective = OBJECTIVES_10[p10];
      const volume = VOLUMES_10[p10];
      const variation = SKILL_VARIATIONS[skillIdx];
      const execPrefix = EXEC_PREFIXES[varIdx];
      const execution = `${execPrefix} O foco principal é ${skill.toLowerCase()}. Mantenha base equilibrada na areia, prepare cedo e retorne à posição de jogo após cada ação.`;

      const title = `Treino ${numFormatted} — ${skill} - ${variationName}`;

      all.push({
        id,
        numberFormatted: numFormatted,
        title,
        category: mod.title,
        categoryId: mod.id,
        skill,
        variationType: variationName,
        objective,
        execution,
        volume,
        level,
        variation,
      });
    }
  }

  return all;
}

export const ALL_500_TREINOS: TreinoItem[] = generateAll500Treinos();
