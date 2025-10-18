// Mini-surpresas secretas que aparecem durante o jogo

export interface Surprise {
  id: number;
  trigger: "level_start" | "correct_answer" | "hint_used" | "level_complete";
  level?: number;
  message: string;
  emoji: string;
  rarity: "common" | "rare" | "legendary";
}

export const surprises: Surprise[] = [
  {
    id: 1,
    trigger: "level_start",
    level: 1,
    message: "Uma variável misteriosa apareceu do nada e sussurrou: 'Eu guardo segredos...'",
    emoji: "👻",
    rarity: "common"
  },
  {
    id: 2,
    trigger: "correct_answer",
    message: "Um pato de borracha quântico aplaudiu sua resposta! 🦆✨",
    emoji: "🦆",
    rarity: "rare"
  },
  {
    id: 3,
    trigger: "hint_used",
    message: "O Oráculo do Python revelou: 'As respostas estão dentro de você... ou no console.'",
    emoji: "🔮",
    rarity: "common"
  },
  {
    id: 4,
    trigger: "level_complete",
    level: 3,
    message: "ACHIEVEMENT SECRETO DESBLOQUEADO: 'Domador de Loops Temporais' - Você fez o tempo dançar!",
    emoji: "⏰",
    rarity: "legendary"
  },
  {
    id: 5,
    trigger: "correct_answer",
    message: "Um gato de Schrödinger comentou: 'Essa resposta existe e não existe ao mesmo tempo... mas está correta!'",
    emoji: "🐱",
    rarity: "rare"
  },
  {
    id: 6,
    trigger: "level_start",
    level: 5,
    message: "Os loops sussurram... 'Repita comigo: for i in range(infinito)...'",
    emoji: "🌀",
    rarity: "common"
  },
  {
    id: 7,
    trigger: "hint_used",
    message: "Uma função recursiva gritou de longe: 'AJUDA! NÃO CONSIGO PARAR DE ME CHAMAR!'",
    emoji: "📞",
    rarity: "rare"
  },
  {
    id: 8,
    trigger: "level_complete",
    level: 6,
    message: "CONQUISTA CÓSMICA: Você transcendeu! As funções agora te chamam de 'Mestre'.",
    emoji: "🌟",
    rarity: "legendary"
  }
];

// Frases de efeito surreais e profissionais
export const catchphrases = [
  "🚀 'Onde a lógica encontra o absurdo, nasce um programador excepcional.'",
  "🧙‍♂️ 'Python não é apenas uma linguagem, é uma filosofia... que às vezes fala sozinha.'",
  "✨ 'No reino quântico do código, suas variáveis podem estar certas e erradas ao mesmo tempo.'"
];

// Mensagens motivacionais surreais
export const motivationalMessages = [
  "Você está reprogramando a realidade, um loop por vez! 🌌",
  "Suas funções estão mais organizadas que o universo! 🎯",
  "Continue assim e você vai debugar o próprio espaço-tempo! ⚡",
  "A matriz está impressionada com seu código! 🖥️",
  "Você acabou de fazer uma variável chorar de felicidade! 😭"
];
