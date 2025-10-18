export interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  hint1: string;
  hint2: string;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  concept: string;
  questions: Question[];
}

export const gameLevels: Level[] = [
  {
    id: 1,
    title: "Variáveis e Tipos de Dados",
    description: "Aprenda a armazenar informações em Python",
    concept: "Variáveis são como caixas que guardam informações. Em Python, você pode guardar números, textos e muito mais!",
    questions: [
      {
        id: 1,
        question: "Qual código cria uma variável chamada 'idade' com o valor 25?",
        options: [
          "idade = 25",
          "var idade = 25",
          "int idade = 25",
          "idade == 25"
        ],
        correctAnswer: 0,
        explanation: "Em Python, criamos variáveis simplesmente usando o sinal de igual (=). Não precisamos declarar o tipo!",
        hint1: "Em Python, não usamos 'var' ou tipos antes do nome da variável.",
        hint2: "Use apenas: nome_da_variavel = valor"
      },
      {
        id: 2,
        question: "Qual é o tipo de dado do valor: 'Olá, Python!'?",
        options: [
          "int (número inteiro)",
          "float (número decimal)",
          "str (texto/string)",
          "bool (verdadeiro/falso)"
        ],
        correctAnswer: 2,
        explanation: "Textos entre aspas são do tipo 'str' (string). Strings são usadas para armazenar texto.",
        hint1: "Valores entre aspas são sempre texto.",
        hint2: "str significa 'string', que é texto em programação."
      }
    ]
  },
  {
    id: 2,
    title: "Operadores Básicos",
    description: "Realize cálculos e comparações",
    concept: "Operadores permitem fazer cálculos matemáticos (+, -, *, /) e comparar valores (==, !=, >, <).",
    questions: [
      {
        id: 3,
        question: "Qual o resultado de: 10 + 5 * 2",
        code: "resultado = 10 + 5 * 2\nprint(resultado)",
        options: [
          "30",
          "20",
          "15",
          "25"
        ],
        correctAnswer: 1,
        explanation: "A multiplicação (*) tem prioridade sobre a soma (+). Então: 5 * 2 = 10, depois 10 + 10 = 20.",
        hint1: "Lembre-se da ordem matemática: multiplicação antes de soma.",
        hint2: "Primeiro calcule 5 * 2, depois some com 10."
      },
      {
        id: 4,
        question: "Qual operador verifica se dois valores são iguais?",
        options: [
          "=",
          "==",
          "!=",
          "==="
        ],
        correctAnswer: 1,
        explanation: "O operador == compara valores. O = simples é usado para atribuir valores a variáveis.",
        hint1: "Para atribuir usamos um =, para comparar usamos dois.",
        hint2: "== (dois iguais) compara, = (um igual) atribui."
      }
    ]
  },
  {
    id: 3,
    title: "Entrada e Saída",
    description: "Interaja com o usuário",
    concept: "Use print() para mostrar mensagens e input() para receber dados do usuário.",
    questions: [
      {
        id: 5,
        question: "Como exibir 'Bem-vindo!' na tela?",
        options: [
          "print('Bem-vindo!')",
          "console.log('Bem-vindo!')",
          "echo 'Bem-vindo!'",
          "show('Bem-vindo!')"
        ],
        correctAnswer: 0,
        explanation: "A função print() é usada para mostrar mensagens na tela em Python.",
        hint1: "Em Python, usamos print() para exibir texto.",
        hint2: "A sintaxe é: print('sua mensagem')"
      },
      {
        id: 6,
        question: "Como pedir ao usuário para digitar seu nome?",
        code: "nome = input('Digite seu nome: ')\nprint('Olá,', nome)",
        options: [
          "nome = input('Digite seu nome: ')",
          "nome = scan('Digite seu nome: ')",
          "nome = read('Digite seu nome: ')",
          "nome = get('Digite seu nome: ')"
        ],
        correctAnswer: 0,
        explanation: "A função input() recebe texto do usuário. O texto entre parênteses é a pergunta exibida.",
        hint1: "Use input() para receber dados do usuário.",
        hint2: "input('mensagem') mostra a mensagem e espera o usuário digitar."
      }
    ]
  },
  {
    id: 4,
    title: "Estruturas Condicionais",
    description: "Tome decisões no código",
    concept: "Use if, elif e else para executar códigos diferentes baseado em condições.",
    questions: [
      {
        id: 7,
        question: "Complete o código para verificar se alguém é maior de idade:",
        code: "idade = 20\n___ idade >= 18:\n    print('Maior de idade')",
        options: [
          "if",
          "while",
          "for",
          "def"
        ],
        correctAnswer: 0,
        explanation: "if é usado para verificar uma condição. Se a condição for verdadeira, o código dentro é executado.",
        hint1: "Use if para verificar condições.",
        hint2: "if condição: executa código se condição for verdadeira."
      },
      {
        id: 8,
        question: "Qual estrutura usa para ter 3 opções diferentes?",
        code: "nota = 85\nif nota >= 90:\n    print('A')\n___ nota >= 80:\n    print('B')\nelse:\n    print('C')",
        options: [
          "elif",
          "else if",
          "or",
          "and"
        ],
        correctAnswer: 0,
        explanation: "elif (else if) permite adicionar múltiplas condições. É verificado apenas se o if anterior for falso.",
        hint1: "elif é a abreviação de 'else if'.",
        hint2: "Use elif entre if e else para condições adicionais."
      }
    ]
  },
  {
    id: 5,
    title: "Laços de Repetição",
    description: "Repita ações automaticamente",
    concept: "Laços permitem repetir código. Use for para repetir um número específico de vezes e while para repetir enquanto uma condição for verdadeira.",
    questions: [
      {
        id: 9,
        question: "Como imprimir os números de 1 a 5?",
        code: "for i in ___:\n    print(i)",
        options: [
          "range(1, 6)",
          "range(1, 5)",
          "range(5)",
          "[1, 2, 3, 4, 5]"
        ],
        correctAnswer: 0,
        explanation: "range(1, 6) gera números de 1 até 5 (o último número não é incluído). Então range(1, 6) = 1, 2, 3, 4, 5.",
        hint1: "range(início, fim) - o fim não é incluído.",
        hint2: "Para 1 até 5, use range(1, 6)."
      },
      {
        id: 10,
        question: "Qual laço continua até uma condição ser falsa?",
        options: [
          "while",
          "for",
          "loop",
          "repeat"
        ],
        correctAnswer: 0,
        explanation: "while continua repetindo enquanto a condição for verdadeira. Útil quando não sabemos quantas vezes repetir.",
        hint1: "while = enquanto (repete enquanto condição for verdadeira).",
        hint2: "while condição: repete até condição ser falsa."
      }
    ]
  },
  {
    id: 6,
    title: "Funções",
    description: "Organize e reutilize seu código",
    concept: "Funções são blocos de código reutilizáveis. Use def para criar uma função e return para devolver um valor.",
    questions: [
      {
        id: 11,
        question: "Como criar uma função chamada 'saudacao'?",
        options: [
          "def saudacao():",
          "function saudacao():",
          "func saudacao():",
          "create saudacao():"
        ],
        correctAnswer: 0,
        explanation: "Em Python, usamos 'def' seguido do nome da função e parênteses. Não esqueça os dois pontos (:) no final!",
        hint1: "Use 'def' para definir funções em Python.",
        hint2: "Sintaxe: def nome_funcao():"
      },
      {
        id: 12,
        question: "Como fazer uma função retornar o dobro de um número?",
        code: "def dobro(numero):\n    ___ numero * 2",
        options: [
          "return",
          "print",
          "send",
          "output"
        ],
        correctAnswer: 0,
        explanation: "'return' devolve um valor da função. Isso permite usar o resultado em outras partes do código.",
        hint1: "Use return para devolver valores de uma função.",
        hint2: "return calcula e devolve o resultado para quem chamou a função."
      }
    ]
  }
];

export const badges = [
  {
    id: 1,
    name: "Iniciante Python",
    description: "Complete os primeiros 2 níveis",
    icon: "🐍",
    requiredLevel: 2
  },
  {
    id: 2,
    name: "Praticante",
    description: "Complete 4 níveis",
    icon: "⚡",
    requiredLevel: 4
  },
  {
    id: 3,
    name: "Codificador",
    description: "Complete todos os 6 níveis",
    icon: "🏆",
    requiredLevel: 6
  }
];
