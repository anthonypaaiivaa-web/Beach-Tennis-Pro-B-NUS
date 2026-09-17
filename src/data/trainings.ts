import { Training } from '../types';

export const INITIAL_TRAININGS: Training[] = [
  {
    id: 'bt-zero',
    title: 'COMO INICIAR NO BEACH TENNIS | Aprenda do Zero a Jogar Tennis de Praia',
    category: 'iniciantes',
    level: 'Iniciante',
    duration: '15 min',
    durationMinutes: 15,
    thumbnail: 'https://img.youtube.com/vi/T17cvTJU30s/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/T17cvTJU30s',
    instructor: 'Aprenda do Zero',
    exercisesCount: 4,
    description: 'Guia completo e passo a passo para quem quer começar do zero no Beach Tennis: empunhaduras essenciais, postura correta na areia, regras básicas e os primeiros golpes na rede.',
    steps: [
      { title: 'Empunhadura Continental (Pegada Martelo)', repsOrDuration: '5 min', description: 'Como segurar a raquete corretamente para conseguir executar todos os golpes de forma fluida.', coachingTip: 'Não gire a raquete para forehand ou backhand; mantenha a empunhadura continental neutra.' },
      { title: 'Posicionamento e postura na areia', repsOrDuration: '3x 1 min', description: 'Joelhos semiflexionados, raquete na altura do peito/olhos e peso do corpo na ponta dos pés.', coachingTip: 'Mantenha-se leve e ativo, evitando afundar os calcanhares na areia.' },
      { title: 'Voleio de Direita (Forehand) e Esquerda (Backhand)', repsOrDuration: '4 séries de 10 bolas', description: 'Bloqueio à frente do corpo sem swing longo para trás, utilizando a velocidade da bola.', coachingTip: 'Movimento curto e firme na frente da linha dos olhos.' },
      { title: 'Fundamento do Saque para Iniciantes', repsOrDuration: '3 séries de 10 saques', description: 'Lançamento suave da bola e terminação para baixo, garantindo precisão e regularidade.', coachingTip: 'Foque em acertar dentro da quadra com segurança antes de tentar muita força.' }
    ],
    isFeatured: true
  },
  {
    id: 'bt-saque-certo',
    title: 'COMO SACAR NO BEACH TENNIS DE UM JEITO CERTO | Melhore Seu Saque Agora',
    category: 'tecnicas',
    level: 'Intermediário',
    duration: '12 min',
    durationMinutes: 12,
    thumbnail: 'https://img.youtube.com/vi/02jlbHDWv58/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/02jlbHDWv58',
    instructor: 'Dicas de Saque',
    exercisesCount: 4,
    description: 'Aprenda os segredos do saque no Beach Tennis de forma correta: postura dos pés, lançamento (toss) consistente, ponto de contato ideal acima da cabeça e rotação de ombros para colocar potência e efeito.',
    steps: [
      {
        title: 'Posicionamento e Base dos Pés no Saque',
        repsOrDuration: '3 min',
        description: 'Base equilibrada atrás da linha de fundo com pé não dominante à frente direcionado ao alvo.',
        coachingTip: 'Não pise na linha durante o movimento para evitar falta.'
      },
      {
        title: 'Lançamento Consistente da Bola (Toss)',
        repsOrDuration: '3 séries de 10 lançamentos',
        description: 'Lançar a bola ligeiramente à frente e na altura máxima de alcance do braço estendido.',
        coachingTip: 'Solte a bola suavemente com as pontas dos dedos sem girá-la no ar.'
      },
      {
        title: 'Ponto de Contato e Pronação do Braço',
        repsOrDuration: '4 séries de 8 saques',
        description: 'Atingir a bola no ponto mais alto com rápida pronação do punho/antebraço para gerar ângulo e velocidade.',
        coachingTip: 'Mantenha a cabeça erguida e os olhos na bola até o término do golpe.'
      },
      {
        title: 'Direcionamento: Saque no Corpo vs. Saque Aberto',
        repsOrDuration: '2 séries de 10 repetições',
        description: 'Treino de variação de alvos para dificultar a devolução da dupla adversária.',
        coachingTip: 'Alterne saques na direção do corpo do recebedor e na linha lateral.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-smash',
    title: 'Como Fazer o Smash No Beach Tennis | AULA DE BEACH TENNIS',
    category: 'tecnicas',
    level: 'Intermediário',
    duration: '14 min',
    durationMinutes: 14,
    thumbnail: 'https://img.youtube.com/vi/cJPG-oVoup8/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/cJPG-oVoup8',
    instructor: 'Técnica e Potência',
    exercisesCount: 4,
    description: 'Domine a técnica correta do Smash no Beach Tennis: movimentação e recuo rápido na areia, alinhamento do corpo de perfil, braço não dominante apontando para a bola e explosão no ponto de contato mais alto.',
    steps: [
      {
        title: 'Deslocamento Lateral e Recuo de Perfil',
        repsOrDuration: '3 séries de 1 min',
        description: 'Recuar rapidamente na areia com passos cruzados ou laterais virando os ombros de perfil.',
        coachingTip: 'Nunca recue de costas retas para não perder o equilíbrio na areia.'
      },
      {
        title: 'Armação do Golpe e Braço Não Dominante',
        repsOrDuration: '3 min de sombra',
        description: 'Levar a raquete atrás das costas em formato de troféu e apontar a mão livre diretamente para a bola.',
        coachingTip: 'O braço não dominante serve como mira e garante o equilíbrio do tronco.'
      },
      {
        title: 'Ponto de Contato e Salto/Extensão',
        repsOrDuration: '4 séries de 8 repetições',
        description: 'Buscar a bola no ponto mais alto à frente do corpo com extensão completa do braço e flexão do punho.',
        coachingTip: 'Bata com a bola ligeiramente à sua frente para direcioná-la para baixo na quadra adversária.'
      },
      {
        title: 'Variação: Smash Potente vs. Smash Angulado',
        repsOrDuration: '3 séries de 10 bolas',
        description: 'Treino de finalização alternando pancada no fundo e bola curta com ângulo nas laterais.',
        coachingTip: 'Varie a direção para evitar a antecipação da defesa da dupla adversária.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-gancho',
    title: 'Como Fazer o Gancho No Beach Tennis | AULA DE BEACH TENNIS - GANCHO',
    category: 'tecnicas',
    level: 'Intermediário',
    duration: '11 min',
    durationMinutes: 11,
    thumbnail: 'https://img.youtube.com/vi/FGxhYmTAWQs/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/FGxhYmTAWQs',
    instructor: 'Aprenda o Gancho',
    exercisesCount: 4,
    description: 'Aprenda a executar o golpe de Gancho (Hook) no Beach Tennis, essencial para defender e contra-atacar bolas altas lançadas no fundo de quadra do lado não dominante ou quando você é pego sem tempo para virar de costas.',
    steps: [
      {
        title: 'Leitura de Bola Alta e Posicionamento',
        repsOrDuration: '3 min',
        description: 'Identificar a trajetória do lob adversário e ajustar a passada para se posicionar sob a bola.',
        coachingTip: 'Mantenha os olhos fixos na bola e os pés ativos para não ser encoberto.'
      },
      {
        title: 'Empunhadura e Preparação por Trás da Cabeça',
        repsOrDuration: '3 séries de 10 repetições',
        description: 'Trazer a raquete por trás da cabeça com o cotovelo apontando para cima e punho flexível.',
        coachingTip: 'Não tente fazer um swing amplo; o movimento nasce da extensão do antebraço e chicote do punho.'
      },
      {
        title: 'Ponto de Contato e Terminação para Baixo',
        repsOrDuration: '4 séries de 8 bolas',
        description: 'Bater na bola acima ou ligeiramente atrás da linha da cabeça empurrando a trajetória para frente e para baixo.',
        coachingTip: 'Use a flexão do punho no ápice para colocar efeito e segurança na rede.'
      },
      {
        title: 'Direcionamento: Gancho Cruzado vs. Gancho Paralelo',
        repsOrDuration: '3 séries de 10 bolas',
        description: 'Trabalho de precisão buscando a paralela vazia ou a cruzada no espaço livre da quadra adversária.',
        coachingTip: 'O gancho é um golpe de precisão e recuperação tática; priorize a colocação antes da força.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-controle-bola',
    title: 'Melhorando meu Jogo No Beach Tennis | AULA DE BEACH TENNIS - CONTROLE DE BOLA',
    category: 'tecnicas',
    level: 'Todos os níveis',
    duration: '15 min',
    durationMinutes: 15,
    thumbnail: 'https://img.youtube.com/vi/bCKRs04Nixo/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/bCKRs04Nixo',
    instructor: 'Controle de Bola',
    exercisesCount: 4,
    description: 'Aprimore a sensibilidade e o controle de bola no Beach Tennis: ajustes finos na face da raquete, amortecimento de impactos fortes, altura ideal sobre a rede e regularidade em trocas de bola.',
    steps: [
      {
        title: 'Ajuste de Ângulo da Raquete e Bloqueio',
        repsOrDuration: '3 séries de 12 repetições',
        description: 'Bloquear bolas rápidas mantendo o punho firme e ajustando o ângulo da face da raquete para passar rente à rede.',
        coachingTip: 'Não tente acelerar bolas potentes; use a velocidade do adversário a seu favor.'
      },
      {
        title: 'Toque Suave e Amortie (Drop Shot)',
        repsOrDuration: '3 séries de 10 bolas',
        description: 'Amortecer o golpe na hora do impacto para fazer a bola cair suavemente perto da fita na quadra adversária.',
        coachingTip: 'Relaxe os dedos e a pegada no momento exato do contato.'
      },
      {
        title: 'Troca de Bolas em Média Distância',
        repsOrDuration: '5 min contínuos',
        description: 'Manter ralis consistentes com parceiro sem deixar a bola cair, focando em regularidade e altura segura.',
        coachingTip: 'Priorize colocar a bola no centro da quadra com margem de segurança da rede.'
      },
      {
        title: 'Controle de Profundidade: Bola Curta vs. Fundo',
        repsOrDuration: '3 séries de 10 repetições',
        description: 'Alternar intencionalmente bolas curtas para puxar a dupla rival e bolas profundas no fundo de quadra.',
        coachingTip: 'Observe a postura dos oponentes antes de decidir a profundidade do golpe.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-bola-curta-smash',
    title: 'Treino de Bola Curta e Smash | AULA DE BEACH TENNIS | Como Defender uma Bola Curta',
    category: 'tecnicas',
    level: 'Intermediário',
    duration: '13 min',
    durationMinutes: 13,
    thumbnail: 'https://img.youtube.com/vi/gJCnXXXYwdI/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/gJCnXXXYwdI',
    instructor: 'Defesa e Ataque',
    exercisesCount: 4,
    description: 'Aprenda a fazer a transição de pernas na areia entre corrida frontal para defender bola curta (drop shot) e recuperação rápida com recuo explosivo para finalizar no Smash.',
    steps: [
      {
        title: 'Arrancada Frontal e Apoio Baixo na Areia',
        repsOrDuration: '3 séries de 6 repetições',
        description: 'Explosão para frente ao perceber o movimento de amortie adversário, abaixando o centro de gravidade.',
        coachingTip: 'Chegue com os joelhos flexionados para ter base sólida e não tropeçar na areia fofa.'
      },
      {
        title: 'Levantamento da Bola Curta (Scoop / Contra-Drop)',
        repsOrDuration: '3 séries de 8 bolas',
        description: 'Defender a bola curta colocando a raquete por baixo e escolhendo entre lob alto de recuperação ou contra-drop.',
        coachingTip: 'Se a bola estiver muito baixa, priorize um lob alto para dar tempo da dupla recompor a posição.'
      },
      {
        title: 'Transição Imediata da Frente para o Fundo',
        repsOrDuration: '4 séries de 1 min',
        description: 'Tocar a bola na rede e imediatamente dar passos de recuo de perfil se preparando para o golpe de cima.',
        coachingTip: 'Não fique parado na rede assistindo o seu golpe; recue imediatamente para cobrir o fundo.'
      },
      {
        title: 'Finalização no Smash após Recuo',
        repsOrDuration: '3 séries de 10 bolas',
        description: 'Completar o exercício executando um smash firme após a corrida de volta ao fundo da quadra.',
        coachingTip: 'Acerte a bola no ponto mais alto com equilíbrio nos pés antes de saltar.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-5-erros-comuns',
    title: '5 Erros Comuns de Beach Tennis e Como Evitá-los',
    category: 'iniciantes',
    level: 'Todos os níveis',
    duration: '10 min',
    durationMinutes: 10,
    thumbnail: 'https://img.youtube.com/vi/6m_ynZG-32k/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/6m_ynZG-32k',
    instructor: 'Dicas e Correções',
    exercisesCount: 5,
    description: 'Descubra os 5 erros mais frequentes que impedem sua evolução no Beach Tennis e aprenda os ajustes fundamentais de posicionamento, postura de espera e tomada de decisão para corrigi-los imediatamente.',
    steps: [
      {
        title: 'Erro 1: Raquete Baixa na Posição de Espera',
        repsOrDuration: '2 min de postura',
        description: 'Manter a cabeça da raquete sempre na linha do peito ou dos olhos entre cada jogada.',
        coachingTip: 'Se a raquete estiver baixa, você perderá milissegundos preciosos para defender bolas rápidas.'
      },
      {
        title: 'Erro 2: Bater na Bola Atrás da Linha do Corpo',
        repsOrDuration: '3 séries de 10 repetições',
        description: 'Dar o passo de ajuste para sempre golpear a bola à sua frente com a face da raquete alinhada.',
        coachingTip: 'Contato atrasado gera bolas descontroladas para fora ou na fita da rede.'
      },
      {
        title: 'Erro 3: Ficar Plantado na Areia sem Split Step',
        repsOrDuration: '3 séries de 1 min',
        description: 'Fazer o pequeno saltinho de ativação (split step) exatamente quando o adversário golpeia a bola.',
        coachingTip: 'Pés cravados na areia dificultam a arrancada para bolas curtas ou nos cantos.'
      },
      {
        title: 'Erro 4: Forçar Potência em Toda Bola',
        repsOrDuration: '4 min de rali controlado',
        description: 'Priorizar colocação tática e segurança até surgir a bola ideal de ataque.',
        coachingTip: 'No Beach Tennis, quem erra menos ganha mais pontos do que quem tenta definir cedo demais.'
      },
      {
        title: 'Erro 5: Indecisão na Bola do Meio com a Dupla',
        repsOrDuration: 'Prática de comunicação ativa',
        description: 'Combinar antecipadamente quem cobre o meio da quadra (geralmente o forehand) e chamar em voz alta.',
        coachingTip: 'Comunicação sonora rápida ("minha!" ou "vai!") evita colisões e pontos perdidos de graça.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-movimentacao-quadra',
    title: 'Melhore o SEU Jogo de Beach Tennis com esse treino e Dicas de Movimentação em Quadra',
    category: 'drills',
    level: 'Intermediário',
    duration: '16 min',
    durationMinutes: 16,
    thumbnail: 'https://img.youtube.com/vi/7ngXSBVxWOI/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/7ngXSBVxWOI',
    instructor: 'Movimentação e Drills',
    exercisesCount: 4,
    description: 'Exercícios práticos e drills específicos de movimentação na areia para cobrir melhor a quadra, antecipar jogadas, manter o equilíbrio dinâmico e sincronizar a cobertura de espaços com a sua dupla.',
    steps: [
      {
        title: 'Drill de Deslocamento em X (Frente e Fundo)',
        repsOrDuration: '4 séries de 45 segundos',
        description: 'Corridas diagonais alternando toque na fita da rede e recuo para o fundo da quadra oposta.',
        coachingTip: 'Use passos curtos e rápidos para não perder aderência nem afundar na areia fofa.'
      },
      {
        title: 'Movimentação em Sincronia com a Dupla (Elástico)',
        repsOrDuration: '5 min de treino tático',
        description: 'Manter a distância ideal entre os parceiros, deslocando-se juntos conforme a bola vai para a esquerda ou direita.',
        coachingTip: 'Imaginem uma corda elástica invisível de 3 a 4 metros conectando você e seu parceiro.'
      },
      {
        title: 'Passada Lateral com Split Step na Chegada',
        repsOrDuration: '3 séries de 10 repetições cada lado',
        description: 'Deslocamento lateral rápido finalizado com base firme e split step para amortecer ou contra-atacar.',
        coachingTip: 'Não cruze as pernas em deslocamentos laterais curtos para não desequilibrar a base de sustentação.'
      },
      {
        title: 'Recuperação Rápida após Bloqueio na Rede',
        repsOrDuration: '4 séries de 8 bolas',
        description: 'Bloquear bola forte na rede e dar dois passos de recuo explosivo antecipando um lob adversário.',
        coachingTip: 'Gire o quadril imediatamente ao iniciar o recuo; nunca recue de costas retas.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-drill-iniciante-01',
    title: 'Drill para beach tennis #01 - Turma iniciante',
    category: 'drills',
    level: 'Iniciante',
    duration: '8 min',
    durationMinutes: 8,
    thumbnail: 'https://img.youtube.com/vi/6gGiCvczTV4/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/6gGiCvczTV4',
    instructor: 'Drills para Iniciantes',
    exercisesCount: 4,
    description: 'Drill dinâmico e educativo estruturado especialmente para quem está começando no Beach Tennis. Desenvolva reflexo rápido de voleio, consistência na face da raquete e coordenação de pernas na areia.',
    steps: [
      {
        title: 'Aquecimento de Voleio Curto em Dupla',
        repsOrDuration: '2 séries de 2 min',
        description: 'Troca de voleios curtos e controlados na altura da fita da rede focando em toque suave e precisão.',
        coachingTip: 'Mantenha a raquete na altura do queixo e faça movimentos curtos e compactos sem swing longo.'
      },
      {
        title: 'Drill Lateral com Voleio de Forehand e Backhand',
        repsOrDuration: '3 séries de 10 bolas alternadas',
        description: 'Deslocamento lateral recebendo uma bola na direita (forehand) e em seguida uma bola na esquerda (backhand).',
        coachingTip: 'Mude o peso do corpo para a perna de apoio ao efetuar cada voleio para ter maior controle.'
      },
      {
        title: 'Alimentação Rápida e Bloqueio Firme na Rede',
        repsOrDuration: '3 séries de 12 repetições',
        description: 'O professor ou parceiro lança bolas sucessivas para treinar tempo de reação e empunhadura firme.',
        coachingTip: 'Trave o punho no momento do impacto para a raquete não vibrar nem oscilar na mão.'
      },
      {
        title: 'Desafio de Regularidade: 10 Bolas sem Erro',
        repsOrDuration: '3 tentativas completas',
        description: 'Manter a bola viva por pelo menos 10 batidas consecutivas entre os parceiros com foco em consistência.',
        coachingTip: 'Priorize direcionar a bola no meio da quadra com altura segura sobre a rede.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-drill-iniciante-02',
    title: 'Drill para beach tennis #02 Turma iniciante',
    category: 'drills',
    level: 'Iniciante',
    duration: '9 min',
    durationMinutes: 9,
    thumbnail: 'https://img.youtube.com/vi/lkFSL3NUGHQ/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/lkFSL3NUGHQ',
    instructor: 'Drills para Iniciantes',
    exercisesCount: 4,
    description: 'Segundo módulo de drills estruturados para turmas iniciantes no Beach Tennis. Aprimore o deslocamento diagonal, o controle de bola em meia quadra, a transição entre ataque e defesa e a leitura rápida da trajetória na areia.',
    steps: [
      {
        title: 'Deslocamento Diagonal com Toque na Rede',
        repsOrDuration: '3 séries de 45 segundos',
        description: 'Corridas diagonais curtas tocando a fita e voltando para a posição base no centro da quadra.',
        coachingTip: 'Mantenha o tronco ligeiramente inclinado para frente para facilitar as arrancadas na areia.'
      },
      {
        title: 'Voleio de Transição em Meia Quadra',
        repsOrDuration: '3 séries de 10 repetições',
        description: 'Golpear bolas lançadas no meio da quadra mantendo a raquete firme e projetando a bola para a frente.',
        coachingTip: 'Não espere a bola cair muito; busque o contato na altura da cintura ou peito.'
      },
      {
        title: 'Ajuste Rápido de Pés e Voleio de Backhand',
        repsOrDuration: '4 séries de 8 bolas',
        description: 'Girar o corpo rapidamente para o lado esquerdo com ombros de perfil e bater firme no backhand.',
        coachingTip: 'Use a mão não dominante apoiando o coração da raquete para dar estabilidade no golpe.'
      },
      {
        title: 'Mini Rali com Troca de Posição',
        repsOrDuration: '4 min contínuos',
        description: 'Troca de bolas com o parceiro em movimento, alternando posições na quadra a cada 3 batidas.',
        coachingTip: 'Comunique-se com seu parceiro para manter a quadra sempre equilibrada e coberta.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-drill-03-04',
    title: 'Drill para beach tennis #03 e #04',
    category: 'drills',
    level: 'Todos os níveis',
    duration: '10 min',
    durationMinutes: 10,
    thumbnail: 'https://img.youtube.com/vi/roaidKJ2mKw/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/roaidKJ2mKw',
    instructor: 'Drills e Fundamentos',
    exercisesCount: 4,
    description: 'Sequência dupla de treinos práticos (Drill #03 e #04) para aprimorar a precisão de direção de bola, velocidade de reação nos voleios na rede e a transição dinâmica entre controle defensivo e definição de pontos.',
    steps: [
      {
        title: 'Drill #03: Direcionamento Paralelo e Cruzado',
        repsOrDuration: '3 séries de 10 bolas alternadas',
        description: 'Volear alternando uma bola paralela e uma cruzada no espaço livre da quadra.',
        coachingTip: 'Mude a direção da bola alterando a inclinação da face da raquete no momento do contato.'
      },
      {
        title: 'Drill #03: Deslocamento com Parada e Bloqueio',
        repsOrDuration: '4 séries de 45 segundos',
        description: 'Deslocar-se lateralmente na areia, fincar a base com split step e bloquear bola rápida na rede.',
        coachingTip: 'Não tente bater na bola ainda em movimento desequilibrado; firme a perna de apoio antes do golpe.'
      },
      {
        title: 'Drill #04: Reação a Bolas Rápidas no Corpo e no Meio',
        repsOrDuration: '3 séries de 12 repetições',
        description: 'Defender bolas disparadas no corpo e definir bolas no meio da quadra com agilidade.',
        coachingTip: 'Mantenha os cotovelos descolados do corpo para ter liberdade de manobrar a raquete.'
      },
      {
        title: 'Drill #04: Transição de Defesa para Voleio de Ataque',
        repsOrDuration: '3 séries de 8 bolas combinadas',
        description: 'Amortecer primeira bola difícil e dar o passo à frente para acelerar a segunda bola na fita.',
        coachingTip: 'Aproveite a bola que sobe para golpear de cima para baixo com agressividade controlada.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-drill-05',
    title: 'Drill para beach tennis #05',
    category: 'drills',
    level: 'Todos os níveis',
    duration: '10 min',
    durationMinutes: 10,
    thumbnail: 'https://img.youtube.com/vi/Zhq6XnxZdZc/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Zhq6XnxZdZc',
    instructor: 'Drills e Precisão',
    exercisesCount: 4,
    description: 'Drill intermediário com foco em controle direcional, aceleração de punho no momento certo, absorção de pancadas e transição rápida de postura defensiva para ataque no meio da quadra.',
    steps: [
      {
        title: 'Controle de Direção com Voleio Cruzado Baixo',
        repsOrDuration: '3 séries de 10 bolas',
        description: 'Volear de forma cruzada buscando os pés do adversário do outro lado da fita.',
        coachingTip: 'Abaixe as pernas para manter o olhar nivelado com a altura da bola.'
      },
      {
        title: 'Bloqueio Reativo de Bola Rápida no Tronco',
        repsOrDuration: '4 séries de 8 repetições',
        description: 'Proteger o próprio corpo bloqueando bolas fortes com a raquete firme e voltada para baixo.',
        coachingTip: 'Não empurre a raquete para trás; apresente a face da raquete na frente do peito.'
      },
      {
        title: 'Aceleração de Punho em Bolas Altas na Fita',
        repsOrDuration: '3 séries de 10 bolas',
        description: 'Atacar bolas que sobram altas próximas à rede com chicotada rápida de punho.',
        coachingTip: 'O golpe deve ser curto e seco, mirando os espaços vazios ou o corpo da dupla rival.'
      },
      {
        title: 'Sequência Dinâmica de Rali em Cruzada Curta',
        repsOrDuration: '3 séries de 1 min contínuo',
        description: 'Manter a bola viva trocando bolas curtas e rápidas na diagonal da quadra.',
        coachingTip: 'Recupere a posição central imediatamente após tocar em cada bola.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-drill-06',
    title: 'Drill para beach tennis #06',
    category: 'drills',
    level: 'Intermediário',
    duration: '9 min',
    durationMinutes: 9,
    thumbnail: 'https://img.youtube.com/vi/Z3Rppm7Esmk/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Z3Rppm7Esmk',
    instructor: 'Drills de Velocidade',
    exercisesCount: 4,
    description: 'Drill focado em velocidade de reação na rede, agilidade nas tomadas de decisão e finalizações rápidas em bolas no meio ou nas linhas laterais, simulando situações reais de pressão em jogo de duplas.',
    steps: [
      {
        title: 'Voleio em Alta Velocidade com Troca Contínua',
        repsOrDuration: '3 séries de 1 min contínuo',
        description: 'Troca de voleios rápidos sem intervalo mantendo os pés em constante vibração na areia.',
        coachingTip: 'Não tente armar o golpe para trás; faça apenas o bloqueio empurrando para frente.'
      },
      {
        title: 'Ataque Rápido na Linha Lateral Aberta',
        repsOrDuration: '3 séries de 10 repetições',
        description: 'Ao receber bola flutuando, dar o passo em direção à bola e direcionar com firmeza na paralela ou cruzada curta.',
        coachingTip: 'Use a rotação do punho para acelerar a bola sem perder o controle da fita.'
      },
      {
        title: 'Recuperação sob Pressão e Bola do Meio',
        repsOrDuration: '4 séries de 8 bolas',
        description: 'Reagir à bola acelerada no meio da quadra fechando o ângulo em conjunto com o parceiro.',
        coachingTip: 'Defina a voz de comando antecipadamente para evitar dúvidas no meio.'
      },
      {
        title: 'Sequência Combinada: Defesa + Voleio de Definição',
        repsOrDuration: '3 séries de 6 sequências',
        description: 'Absorver o primeiro smash do adversário e em seguida finalizar com bola curta ou smash definitivo.',
        coachingTip: 'Mantenha a cabeça fria na defesa para posicionar a bola no ponto fraco adversário.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-drill-07-voleio',
    title: 'Drill - Treino para beach tennis #07 - Voleio',
    category: 'drills',
    level: 'Todos os níveis',
    duration: '9 min',
    durationMinutes: 9,
    thumbnail: 'https://img.youtube.com/vi/vojAzm2Iv8E/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/vojAzm2Iv8E',
    instructor: 'Drills de Voleio',
    exercisesCount: 4,
    description: 'Treino prático dedicado ao aperfeiçoamento minucioso do voleio no Beach Tennis. Trabalhe o ponto de contato adiantado, a firmeza de punho sem recuo desnecessário da raquete e o controle direcional de forehand e backhand.',
    steps: [
      {
        title: 'Ponto de Contato Adiantado e Raquete Alta',
        repsOrDuration: '3 séries de 10 bolas',
        description: 'Receber a bola golpeando-a sempre na frente da linha dos olhos sem deixar a raquete recuar além dos ombros.',
        coachingTip: 'Pense em "bloquear e empurrar" em vez de golpear com amplitude de fundo.'
      },
      {
        title: 'Transição Ágil Forehand / Backhand na Fita',
        repsOrDuration: '4 séries de 12 repetições alternadas',
        description: 'Troca veloz de empunhadura e lado da raquete em bolas lançadas sucessivamente na direita e esquerda.',
        coachingTip: 'Use a mão de apoio para ajudar a guiar a cabeça da raquete na mudança de lado.'
      },
      {
        title: 'Voleio com Passo à Frente e Apoio Firme',
        repsOrDuration: '3 séries de 8 repetições',
        description: 'Dar o passo firme em direção à bola ao mesmo tempo do impacto, transferindo a energia do corpo para a batida.',
        coachingTip: 'Firme o pé contrário (perna oposta ao braço do golpe) para dar sustentação na areia.'
      },
      {
        title: 'Voleio de Profundidade e Bola no Espaço Vazio',
        repsOrDuration: '4 séries de 6 sequências',
        description: 'Direcionar voleios fundos nos cantos da quadra adversária para tirar o tempo de reação da dupla rival.',
        coachingTip: 'Mantenha a bola baixa sobre a fita da rede para não oferecer contra-ataque de smash.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-treino-fisico-areia',
    title: 'Treino físico de Beach Tennis',
    category: 'condicionamento',
    level: 'Todos os níveis',
    duration: '18 min',
    durationMinutes: 18,
    thumbnail: 'https://img.youtube.com/vi/H_A_pDJeK-Q/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/H_A_pDJeK-Q',
    instructor: 'Preparação Física e Areia',
    exercisesCount: 4,
    description: 'Treino físico específico para Beach Tennis focado em resistência muscular, potência nas arrancadas na areia fofa, fortalecimento de core e articulações para suportar longos jogos sem fadiga.',
    steps: [
      {
        title: 'Pliometria e Saltos Verticais na Areia',
        repsOrDuration: '3 séries de 10 saltos',
        description: 'Saltos explosivos saindo da flexão de pernas na areia, amortecendo aterrissagens com joelhos flexionados.',
        coachingTip: 'Use o impulso dos braços para ganhar altura e absorva o impacto dobrando os joelhos suavemente.'
      },
      {
        title: 'Deslocamento Lateral com Cones em Alta Velocidade',
        repsOrDuration: '4 séries de 30 segundos',
        description: 'Tiro lateral rápido contornando cones ou demarcações na quadra com base baixa e trocas de direção.',
        coachingTip: 'Mantenha o tronco ereto e o centro de gravidade rebaixado para não derrapar na areia fofa.'
      },
      {
        title: 'Prancha Dinâmica e Estabilidade de Core',
        repsOrDuration: '3 séries de 45 segundos',
        description: 'Exercícios de sustentação isométrica e rotação de tronco simulando a transferência de torque do saque e smash.',
        coachingTip: 'Um core forte protege a coluna lombar das rotações bruscas comuns nas finalizações aéreas.'
      },
      {
        title: 'Sprints Curtos com Frenagem e Recuo',
        repsOrDuration: '4 séries de 6 repetições',
        description: 'Arrancada rápida em direção à rede, desaceleração controlada e corrida de recuo de perfil com pernas ativas.',
        coachingTip: 'Evite recuar de costas retas; dê passadas cruzadas de perfil para manter a visão e o equilíbrio.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-treino-fisico-insano',
    title: 'TREINO FÍSICO DE BEACH TENNIS - INSANO - ESSE EXECÍCIO QUEIMA MUITO!',
    category: 'condicionamento',
    level: 'Avançado',
    duration: '14 min',
    durationMinutes: 14,
    thumbnail: 'https://img.youtube.com/vi/RwKixYwtFr8/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/RwKixYwtFr8',
    instructor: 'Condicionamento Extremo',
    exercisesCount: 4,
    description: 'Circuito de alta intensidade e queima muscular intensa na areia fofa. Projetado para desenvolver resistência anaeróbica severa, potência explosiva de pernas e recuperação cardiorrespiratória rápida para pontos longos e decisivos.',
    steps: [
      {
        title: 'Circuito Intervalado de Pique e Agachamento Isométrico',
        repsOrDuration: '4 séries de 40 seg por 20 seg descanso',
        description: 'Arrancadas explosivas de 10 metros na areia seguidas imediatamente de sustentação isométrica em agachamento 90 graus.',
        coachingTip: 'Resista à queimação nas coxas mantendo a postura ereta e respiração controlada durante a isometria.'
      },
      {
        title: 'Saltos Unilaterais com Estabilização na Areia',
        repsOrDuration: '3 séries de 8 saltos cada perna',
        description: 'Impulsão em uma única perna na areia fofa com aterrisagem controlada para hipertrofia e estabilização articular do tornozelo e joelho.',
        coachingTip: 'Trave o tornozelo na recepção para não virar o pé na irregularidade da areia.'
      },
      {
        title: 'Passada Rápida em Zigue-Zague com Toque na Areia',
        repsOrDuration: '4 séries de 45 segundos',
        description: 'Deslocamentos diagonais contínuos flexionando o joelho para tocar com a mão na areia a cada mudança de sentido.',
        coachingTip: 'Mantenha os quadris baixos; dobrar os joelhos em vez da lombar previne fadiga nas costas.'
      },
      {
        title: 'Burpee com Salto Vertical Explosivo na Areia',
        repsOrDuration: '3 séries de 10 repetições',
        description: 'Queda controlada em prancha na areia, subida veloz e salto vertical máximo estendendo os braços.',
        coachingTip: 'Conecte a impulsão da subida diretamente no salto para estimular a potência de reação rápida.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-treino-completo',
    title: 'TREINO DE BEACH TENNIS - COMPLETO',
    category: 'drills',
    level: 'Todos os níveis',
    duration: '22 min',
    durationMinutes: 22,
    thumbnail: 'https://img.youtube.com/vi/Fy66nOrrFwY/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/Fy66nOrrFwY',
    instructor: 'Treino Completo Integrado',
    exercisesCount: 5,
    description: 'Sessão completa e estruturada de Beach Tennis englobando desde o aquecimento articular específico e footwork na areia até sequências integradas de saque, transição de voleio, defesa no fundo de quadra e definição de smash.',
    steps: [
      {
        title: 'Aquecimento Articular e Deslocamentos Dinâmicos',
        repsOrDuration: '5 min contínuos',
        description: 'Mobilidade de ombros e punhos com trocas de passada lateral e passos em "X" para ativação na areia.',
        coachingTip: 'Não comece batendo forte; solte os membros superiores e acostume a base com a densidade da areia.'
      },
      {
        title: 'Treino Técnico de Voleio Curto e Médio',
        repsOrDuration: '4 séries de 12 repetições',
        description: 'Voleios alternados de forehand e backhand com raquete alta e transferência de peso para frente.',
        coachingTip: 'Encoste na bola na frente do plano corporal para garantir direção e sustentação do rali.'
      },
      {
        title: 'Combinação: Saque Colocado + Entrada para Fechar a Rede',
        repsOrDuration: '4 séries de 6 sequências',
        description: 'Executar o saque com efeito buscando as laterais ou corpo e dar imediatamente dois passos para ocupar a fita.',
        coachingTip: 'Ao sacar, use a queda do salto para projetar o corpo para dentro da quadra.'
      },
      {
        title: 'Defesa no Fundo e Contra-Ataque de Gancho / Smash',
        repsOrDuration: '3 séries de 8 bolas',
        description: 'Recuperar bola funda na quadra com lob defensivo alto e preparar a recuperação para smash em bola curta.',
        coachingTip: 'Ganhe tempo com um lob com altura suficiente para recompor a posição de ataque.'
      },
      {
        title: 'Simulação de Pontos Reais sob Pressão',
        repsOrDuration: '6 min de jogo dirigido',
        description: 'Mini games com regras específicas de finalização rápida para testar a tomada de decisão sob cansaço.',
        coachingTip: 'Mantenha a comunicação constante com a dupla para definir quem pega as bolas do meio.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-musculacao-completo',
    title: 'COMO TREINAR MUSCULAÇÃO para Beach Tennis (Treino Completo)',
    category: 'condicionamento',
    level: 'Todos os níveis',
    duration: '16 min',
    durationMinutes: 16,
    thumbnail: 'https://img.youtube.com/vi/ofrSEhX1lsw/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/ofrSEhX1lsw',
    instructor: 'Preparação Física na Academia',
    exercisesCount: 5,
    description: 'Guia completo de musculação e preparação funcional aplicada especificamente ao Beach Tennis. Aprenda os exercícios ideais para fortalecer o manguito rotador, gerar potência rotacional no tronco, estabilizar joelhos e tornozelos para a areia e prevenir lesões típicas da modalidade.',
    steps: [
      {
        title: 'Fortalecimento do Manguito Rotador com Elástico ou Polia',
        repsOrDuration: '3 séries de 15 repetições cada braço',
        description: 'Rotação externa e interna com cotovelo junto ao tronco para estabilidade da articulação glenoumeral do ombro.',
        coachingTip: 'Movimento controlado sem usar o tronco para compensar; o ombro precisa estar isolado e seguro.'
      },
      {
        title: 'Agachamento Búlgaro e Fortalecimento Unilateral',
        repsOrDuration: '3 séries de 10 a 12 repetições cada perna',
        description: 'Trabalho de força e estabilidade unilateral dos membros inferiores, simulando as frenagens assimétricas na areia.',
        coachingTip: 'Mantenha o joelho alinhado com a ponta do pé para preservar a patela e ativar os glúteos.'
      },
      {
        title: 'Potência Rotacional de Tronco (Woodchopper no Cabo ou Medicine Ball)',
        repsOrDuration: '3 séries de 12 repetições cada lado',
        description: 'Rotação explosiva do tronco da diagonal alta para a baixa ou média, transferindo força das pernas para os braços.',
        coachingTip: 'Pivoteie o pé de trás e trave o abdômen no final do movimento para simular o smash e saque.'
      },
      {
        title: 'Remada Unilateral com Haltere / Apoio',
        repsOrDuration: '3 séries de 12 repetições',
        description: 'Fortalecimento da cadeia posterior dorsal e trapézio para contrabalançar os esforços de batidas frontais repetitivas.',
        coachingTip: 'Puxe com o cotovelo apontando para trás e sinta as escápulas se fecharem no ápice da puxada.'
      },
      {
        title: 'Elevação Pélvica e Ativação de Isquiotibiais',
        repsOrDuration: '3 séries de 15 repetições',
        description: 'Ponte de glúteos com sobrecarga para suporte de cadeia posterior essencial na corrida e impulsão na areia fofa.',
        coachingTip: 'Aperte os glúteos no topo por 2 segundos antes de descer de forma suave.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-profissionais-masculino',
    title: 'BEACH TENNIS | TREINO DE ATLETAS PROFISSIONAIS [MASCULINO]',
    category: 'drills',
    level: 'Avançado',
    duration: '20 min',
    durationMinutes: 20,
    thumbnail: 'https://img.youtube.com/vi/e_WpqY-A8LY/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/e_WpqY-A8LY',
    instructor: 'Circuito Profissional',
    exercisesCount: 5,
    description: 'Acompanhe a rotina de alta intensidade técnica e tática dos atletas profissionais masculinos de Beach Tennis. Inclui drills de potência na rede com trocas em velocidade máxima, cobertura de quadra sob pressão extrema, antecipação de smashes defensivos e tomadas de decisão cirúrgicas.',
    steps: [
      {
        title: 'Aquecimento Rápido de Rede com Alta Cadência',
        repsOrDuration: '4 min contínuos sem interrupção',
        description: 'Voleios cruzados e paralelos em ritmo de torneio profissional, mantendo o braço relaxado e o impacto no ponto ideal.',
        coachingTip: 'Não recue a raquete na preparação; use a força da bola do adversário devolvendo com bloco rápido.'
      },
      {
        title: 'Drill de Defesa sob Ataque Contínuo de Smash',
        repsOrDuration: '4 séries de 10 bolas de alta velocidade',
        description: 'Defender smashes pesados no fundo e meia-quadra buscando contra-atacar com dropshot ou amortie curta.',
        coachingTip: 'Mantenha a base alargada e os olhos fixos na cabeça da raquete do atacante até o último milissegundo.'
      },
      {
        title: 'Smash em Salto com Deslocamento em Diagonal',
        repsOrDuration: '4 séries de 8 finalizações',
        description: 'Recuo explosivo na areia fofa, impulsão vertical para smash no ponto mais alto e recuperação imediata para a fita.',
        coachingTip: 'Arme a raquete antes de iniciar o salto para bater na fase ascendente da impulsão.'
      },
      {
        title: 'Fechamento de Rede em Dupla e Cobertura do Meio',
        repsOrDuration: '5 séries de 6 ralis dirigidos',
        description: 'Movimentação sincronizada em bloco com o parceiro para fechar os ângulos de passagem e anular bolas centrais.',
        coachingTip: 'A sincronia visual com o parceiro deve ser automática; a dupla se move conectada como uma parede única.'
      },
      {
        title: 'Simulação de Match Point com Pressão Real',
        repsOrDuration: '5 min de disputa de pontos críticos',
        description: 'Disputa de pontos curtos iniciando em desvantagem posicional para desenvolver frieza tática e definição em momentos decisivos.',
        coachingTip: 'Em momentos de pressão, confie no seu golpe de maior porcentagem e evite riscos desnecessários.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-taticas-vencer-jogos',
    title: 'As Táticas Que Todo Jogador de Beach Tennis Precisa Para Vencer Mais Jogos',
    category: 'taticas',
    level: 'Todos os níveis',
    duration: '15 min',
    durationMinutes: 15,
    thumbnail: 'https://img.youtube.com/vi/gQZSq7tP9Pc/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/gQZSq7tP9Pc',
    instructor: 'Estratégia e Inteligência de Jogo',
    exercisesCount: 5,
    description: 'Domine os pilares táticos essenciais que separam amadores de vencedores no Beach Tennis. Aprenda a explorar o elo mais vulnerável da dupla rival, utilizar o vento e o sol a seu favor, escolher a bola certa no meio e controlar o ritmo do jogo com consistência e paciência.',
    steps: [
      {
        title: 'Mapeamento e Identificação do Ponto Vulnerável da Dupla Rival',
        repsOrDuration: 'Leitura tática nos primeiros 3 games',
        description: 'Observar nos ralis iniciais qual adversário tem dificuldade de locomoção, defesa de backhand ou retorno de saque.',
        coachingTip: 'Direcione 70% das bolas de rali para o lado vulnerável para colocar a dupla rival em desconforto contínuo.'
      },
      {
        title: 'A "Bola do Meio" sem Risco de Contra-Ataque',
        repsOrDuration: '4 séries de 8 repetições com parceiro',
        description: 'Atacar com voleios firmes exatamente no centro da quadra, gerando dúvida sobre quem deve bater a bola.',
        coachingTip: 'A bola do meio reduz os ângulos de devolução do adversário e força erros de comunicação.'
      },
      {
        title: 'Uso Estratégico do Vento e Condições Climáticas',
        repsOrDuration: 'Análise tática e ajuste de profundidade',
        description: 'Ajustar a força e altura das bolas: a favor do vento acelere por baixo da fita; contra o vento aumente a altura com lobs e bolas fundas.',
        coachingTip: 'Nunca jogue balões altos a favor do vento, pois a bola ganhará velocidade e sairá da quadra.'
      },
      {
        title: 'Transição: Paciência na Construção vs. Aceleração Decisiva',
        repsOrDuration: '3 séries de ralis dirigidos de 10 bolas',
        description: 'Construir o ponto com bolas seguras no meio e nos cantos até forçar uma bola flutuante para a definição de smash.',
        coachingTip: 'Não tente matar o ponto na primeira bola difícil; a vitória vem da consistência e da paciência.'
      },
      {
        title: 'Gestão Emocional e Rituais entre os Pontos',
        repsOrDuration: 'Aplicação contínua em partidas',
        description: 'Respirar fundo, alinhar a tática com a dupla antes de cada saque ou devolução e esquecer o erro do ponto anterior.',
        coachingTip: 'Um toque de mãos e uma palavra de incentivo após um erro restauram a confiança imediatamente.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-dicas-saque-infaliveis',
    title: 'DICAS INFALÍVEIS SOBRE SAQUE NO BEACH TENNIS',
    category: 'tecnicas',
    level: 'Todos os níveis',
    duration: '12 min',
    durationMinutes: 12,
    thumbnail: 'https://img.youtube.com/vi/_9ClkjJGBmc/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/_9ClkjJGBmc',
    instructor: 'Técnicas de Saque e Potência',
    exercisesCount: 5,
    description: 'Aprenda as dicas fundamentais e infalíveis para transformar o seu saque no Beach Tennis em uma arma letal de pontos diretos. Domine o lançamento de bola (toss) consistente, o impacto na extensão máxima, a empunhadura continental correta, os efeitos de slice e a colocação estratégica nos pontos fracos da dupla adversária.',
    steps: [
      {
        title: 'Toss Perfeito e Estável na Areia',
        repsOrDuration: '3 séries de 10 lançamentos',
        description: 'Lançamento da bola ligeiramente à frente do corpo com braço estendido e sem girar a bola nos dedos.',
        coachingTip: 'Se deixar a bola cair, ela deve atingir a areia cerca de 30 a 50 cm à frente da linha do seu pé dianteiro.'
      },
      {
        title: 'Empunhadura Continental e Impacto no Ápice',
        repsOrDuration: '4 séries de 8 repetições técnicas',
        description: 'Uso da empunhadura continental permitindo a pronação de antebraço e impacto no ponto mais alto possível.',
        coachingTip: 'Estenda completamente o braço e alcance a bola na altura máxima para abrir um ângulo descendente sobre a fita.'
      },
      {
        title: 'Saque Chapado com Pronação Acelerada',
        repsOrDuration: '4 séries de 8 saques de potência',
        description: 'Batida reta e veloz buscando o corpo do recebedor ou o meio da quadra com chicotada de punho.',
        coachingTip: 'Conecte a descida da raquete com a rotação de ombros para transferir o peso corporal para o golpe.'
      },
      {
        title: 'Saque Aberto com Efeito Slice Curvado',
        repsOrDuration: '3 séries de 8 saques direcionados',
        description: 'Raspar a bola na lateral externa para gerar rotação lateral e jogar o recebedor para fora da quadra.',
        coachingTip: 'Acelere a raquete de dentro para fora, buscando a quina externa da quadra adversária.'
      },
      {
        title: 'Variação Tática e Mira nos Espaços Vulneráveis',
        repsOrDuration: '4 séries de 6 sequências táticas',
        description: 'Alternar intencionalmente alvos no corpo do recebedor, na quina aberta e no centro dividido.',
        coachingTip: 'Nunca repita o mesmo saque 3 vezes seguidas; a previsibilidade facilita a devolução agressiva da dupla rival.'
      }
    ],
    isFeatured: true
  },
  {
    id: 'bt-diferentes-tipos-defesas',
    title: 'BEACH TENNIS | DIFERENTES TIPOS DE DEFESAS [ATUALIZADO]',
    category: 'tecnicas',
    level: 'Todos os níveis',
    duration: '14 min',
    durationMinutes: 14,
    thumbnail: 'https://img.youtube.com/vi/LVMZvFowJKo/hqdefault.jpg',
    videoUrl: 'https://www.youtube.com/embed/LVMZvFowJKo',
    instructor: 'Defesa e Reação na Quadra',
    exercisesCount: 5,
    description: 'Guia atualizado e minucioso sobre todos os recursos de defesa no Beach Tennis. Aprenda a neutralizar smashes rápidos e bolas no pé com defesa de bloco firme, lob defensivo de recuperação, defesa amortecida na rede e contra-ataques que viram o ponto.',
    steps: [
      {
        title: 'Posicionamento e Postura de Prontidão Baixa',
        repsOrDuration: '3 séries de 40 segundos de postura ativa',
        description: 'Base alargada com pés ativos na areia, joelhos semiflexionados e cabeça da raquete na altura do peito/olhos.',
        coachingTip: 'Não fique estático na areia; mantenha pequenos saltos de ativação (split step) quando o adversário armar o golpe.'
      },
      {
        title: 'Defesa de Bloco Firme contra Smash no Corpo',
        repsOrDuration: '4 séries de 8 bolas de alta velocidade',
        description: 'Bloqueio sem balanço de raquete contra ataques potentes, usando a firmeza do punho para devolver a bola rente à fita.',
        coachingTip: 'Absorva o impacto travando o punho e direcionando a face da raquete ligeiramente para cima.'
      },
      {
        title: 'Lob Defensivo Alto de Fundo de Quadra',
        repsOrDuration: '4 séries de 6 bolas fundas',
        description: 'Recuperação de bolas fundas ou anguladas gerando uma parábola alta e profunda para ganhar tempo de reposicionamento.',
        coachingTip: 'Suba a raquete de baixo para cima com controle para a bola passar bem alta e forçar o rival a recuar.'
      },
      {
        title: 'Defesa Amortecida Curta (Amortie Defensiva)',
        repsOrDuration: '3 séries de 8 repetições',
        description: 'Amortecer uma bola pesada de smash deixando-a cair suavemente rente à fita da rede adversária.',
        coachingTip: 'Amorteça o impacto soltando levemente a pressão dos dedos na empunhadura no exato momento da batida.'
      },
      {
        title: 'Defesa com Contra-Ataque Direcional no Meio',
        repsOrDuration: '4 séries de 6 sequências completas',
        description: 'Reagir à bola de ataque acelerando a devolução no meio da dupla adversária ou no espaço desprotegido.',
        coachingTip: 'Se a bola vier com altura média confortável, não apenas bloqueie: acelere firme no espaço aberto.'
      }
    ],
    isFeatured: true
  }
];
