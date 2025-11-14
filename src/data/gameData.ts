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
      },
      {
        id: 13,
        question: "Qual é o tipo de dado do valor: 3.14?",
        options: [
          "int (número inteiro)",
          "float (número decimal)",
          "str (texto/string)",
          "bool (verdadeiro/falso)"
        ],
        correctAnswer: 1,
        explanation: "Números com ponto decimal são do tipo 'float' (ponto flutuante). Usado para valores decimais.",
        hint1: "Números com vírgula/ponto decimal são float.",
        hint2: "3.14 é um número decimal, então é float."
      },
      {
        id: 14,
        question: "Como criar uma variável de texto (string)?",
        options: [
          "nome = João",
          "nome = 'João'",
          "nome = (João)",
          "nome = [João]"
        ],
        correctAnswer: 1,
        explanation: "Strings devem estar entre aspas simples '' ou duplas \"\". Sem aspas, Python procura por uma variável.",
        hint1: "Texto sempre precisa estar entre aspas.",
        hint2: "Use aspas simples ou duplas para criar strings."
      },
      {
        id: 15,
        question: "Qual é o valor da variável depois desta operação?",
        code: "x = 10\nx = 20",
        options: [
          "10",
          "20",
          "30",
          "Erro"
        ],
        correctAnswer: 1,
        explanation: "A segunda atribuição substitui o valor anterior. x agora vale 20.",
        hint1: "A última atribuição é a que vale.",
        hint2: "x = 20 substitui o valor anterior de x."
      },
      {
        id: 16,
        question: "Qual é o tipo de dado de: True?",
        options: [
          "int",
          "str",
          "bool",
          "float"
        ],
        correctAnswer: 2,
        explanation: "True e False são valores booleanos (bool). Representam verdadeiro ou falso.",
        hint1: "True/False são valores lógicos.",
        hint2: "bool é o tipo para verdadeiro/falso."
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
      },
      {
        id: 17,
        question: "Qual o resultado de: 20 / 4",
        options: [
          "5.0",
          "5",
          "4",
          "Erro"
        ],
        correctAnswer: 0,
        explanation: "A divisão (/) em Python sempre retorna um float (número decimal), mesmo que o resultado seja exato.",
        hint1: "Divisão sempre retorna decimal em Python.",
        hint2: "20 / 4 = 5.0 (não 5)"
      },
      {
        id: 18,
        question: "Qual operador verifica se dois valores são DIFERENTES?",
        options: [
          "==",
          "!=",
          "<>",
          "=/="
        ],
        correctAnswer: 1,
        explanation: "O operador != significa 'não igual' ou 'diferente'. Retorna True se os valores forem diferentes.",
        hint1: "! significa 'não' em programação.",
        hint2: "!= é 'não igual' (diferente)."
      },
      {
        id: 31,
        question: "Qual o resultado de: 10 % 3",
        code: "resto = 10 % 3\nprint(resto)",
        options: [
          "3",
          "1",
          "10",
          "0"
        ],
        correctAnswer: 1,
        explanation: "O operador % (módulo) retorna o resto da divisão. 10 dividido por 3 dá 3 com resto 1.",
        hint1: "% retorna o resto da divisão.",
        hint2: "10 ÷ 3 = 3 resto 1"
      },
      {
        id: 32,
        question: "Qual operador eleva um número à potência?",
        code: "resultado = 2 ___ 3\nprint(resultado)  # Deve imprimir 8",
        options: [
          "^",
          "**",
          "pow",
          "^^"
        ],
        correctAnswer: 1,
        explanation: "O operador ** eleva um número à potência. 2 ** 3 = 2 × 2 × 2 = 8.",
        hint1: "Não é ^ como em outras linguagens.",
        hint2: "Use ** para potenciação."
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
      },
      {
        id: 33,
        question: "Como exibir múltiplos valores em uma linha?",
        code: "nome = 'Ana'\nidade = 25\nprint('Nome:', nome, 'Idade:', idade)",
        options: [
          "print('Nome:', nome, 'Idade:', idade)",
          "print('Nome:' + nome + 'Idade:' + idade)",
          "print('Nome: {nome} Idade: {idade}')",
          "print.multiple(nome, idade)"
        ],
        correctAnswer: 0,
        explanation: "Use vírgulas para separar múltiplos valores no print(). Python adiciona espaços automaticamente.",
        hint1: "Separe os valores com vírgulas dentro do print().",
        hint2: "print(valor1, valor2, valor3)"
      },
      {
        id: 34,
        question: "Qual o tipo de dado retornado pela função input()?",
        code: "idade = input('Digite sua idade: ')",
        options: [
          "int",
          "str",
          "float",
          "bool"
        ],
        correctAnswer: 1,
        explanation: "input() SEMPRE retorna string (str). Se precisar de número, use int() ou float() para converter.",
        hint1: "input() sempre retorna texto.",
        hint2: "Mesmo digitando números, input() retorna string."
      },
      {
        id: 35,
        question: "Como converter texto em número inteiro?",
        code: "idade_texto = '25'\nidade_numero = ___(idade_texto)",
        options: [
          "str(idade_texto)",
          "int(idade_texto)",
          "float(idade_texto)",
          "number(idade_texto)"
        ],
        correctAnswer: 1,
        explanation: "Use int() para converter string em número inteiro. Exemplo: int('25') resulta em 25.",
        hint1: "int() converte para inteiro.",
        hint2: "int('texto_numero') → número"
      },
      {
        id: 36,
        question: "O que acontece neste código?",
        code: "print('Linha 1')\nprint('Linha 2')\nprint('Linha 3')",
        options: [
          "Imprime tudo na mesma linha",
          "Imprime cada texto em uma linha diferente",
          "Dá erro",
          "Imprime apenas a última linha"
        ],
        correctAnswer: 1,
        explanation: "Cada print() cria uma nova linha automaticamente. Para imprimir na mesma linha, use end=''.",
        hint1: "print() adiciona quebra de linha automaticamente.",
        hint2: "Cada print() é uma nova linha."
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
      },
      {
        id: 37,
        question: "O que será impresso?",
        code: "x = 10\nif x > 5:\n    print('Maior')\nelse:\n    print('Menor')",
        options: [
          "Maior",
          "Menor",
          "Maior Menor",
          "Nada"
        ],
        correctAnswer: 0,
        explanation: "Como 10 > 5 é verdadeiro, o bloco do if é executado e 'Maior' é impresso. O else é ignorado.",
        hint1: "10 é maior que 5?",
        hint2: "Quando if é True, else não executa."
      },
      {
        id: 38,
        question: "Qual operador lógico significa 'E' (ambas condições devem ser verdadeiras)?",
        code: "idade = 25\nif idade >= 18 ___ idade < 65:\n    print('Adulto')",
        options: [
          "or",
          "and",
          "not",
          "&&"
        ],
        correctAnswer: 1,
        explanation: "O operador 'and' exige que AMBAS as condições sejam verdadeiras. Se qualquer uma for falsa, o resultado é falso.",
        hint1: "'and' significa 'E' - ambas devem ser True.",
        hint2: "True and True = True"
      },
      {
        id: 39,
        question: "Qual operador lógico significa 'OU' (pelo menos uma condição deve ser verdadeira)?",
        code: "dia = 'sabado'\nif dia == 'sabado' ___ dia == 'domingo':\n    print('Fim de semana!')",
        options: [
          "and",
          "or",
          "not",
          "||"
        ],
        correctAnswer: 1,
        explanation: "O operador 'or' retorna True se PELO MENOS uma condição for verdadeira.",
        hint1: "'or' significa 'OU' - uma ou outra (ou ambas).",
        hint2: "True or False = True"
      },
      {
        id: 40,
        question: "O que acontece se nenhuma condição for verdadeira?",
        code: "nota = 50\nif nota >= 90:\n    print('A')\nelif nota >= 70:\n    print('B')",
        options: [
          "Imprime 'A'",
          "Imprime 'B'",
          "Não imprime nada",
          "Dá erro"
        ],
        correctAnswer: 2,
        explanation: "Se nenhuma condição for verdadeira e não houver 'else', nada é executado. O código continua normalmente.",
        hint1: "50 não é >= 90 nem >= 70.",
        hint2: "Sem else, nada acontece se todas forem falsas."
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
      },
      {
        id: 41,
        question: "O que range(5) gera?",
        options: [
          "1, 2, 3, 4, 5",
          "0, 1, 2, 3, 4",
          "5",
          "0, 1, 2, 3, 4, 5"
        ],
        correctAnswer: 1,
        explanation: "range(5) começa do 0 e vai até 4 (5 não incluído). Gera: 0, 1, 2, 3, 4.",
        hint1: "range(n) começa do zero.",
        hint2: "range(5) = 0, 1, 2, 3, 4 (5 números)"
      },
      {
        id: 42,
        question: "Como repetir algo 3 vezes?",
        code: "for i in ___:\n    print('Python!')",
        options: [
          "range(3)",
          "range(1, 3)",
          "range(0, 2)",
          "3"
        ],
        correctAnswer: 0,
        explanation: "range(3) gera 0, 1, 2 - são 3 números, então o loop executa 3 vezes.",
        hint1: "range(n) gera n números começando do zero.",
        hint2: "range(3) = 0, 1, 2 (3 repetições)"
      },
      {
        id: 43,
        question: "O que será impresso?",
        code: "contador = 0\nwhile contador < 3:\n    print(contador)\n    contador += 1",
        options: [
          "0 1 2",
          "1 2 3",
          "0 1 2 3",
          "Loop infinito"
        ],
        correctAnswer: 0,
        explanation: "Imprime 0, depois 1, depois 2. Quando contador vira 3, a condição (contador < 3) é falsa e o loop para.",
        hint1: "contador começa em 0 e aumenta de 1 em 1.",
        hint2: "Para quando contador = 3 (não < 3)."
      },
      {
        id: 44,
        question: "Como iterar sobre cada letra de uma palavra?",
        code: "for letra in ___:\n    print(letra)",
        options: [
          "for letra in 'Python':",
          "for letra in ['Python']:",
          "for letra in (Python):",
          "for letra in Python:"
        ],
        correctAnswer: 0,
        explanation: "Pode iterar diretamente sobre strings. Cada caractere é acessado um por vez.",
        hint1: "Strings são iteráveis em Python.",
        hint2: "for letra in 'texto':"
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
      },
      {
        id: 45,
        question: "Como chamar uma função?",
        code: "def saudar():\n    print('Olá!')\n\n___",
        options: [
          "saudar()",
          "call saudar()",
          "run saudar()",
          "execute saudar()"
        ],
        correctAnswer: 0,
        explanation: "Para executar uma função, escreva seu nome seguido de parênteses: nome_funcao().",
        hint1: "Use o nome da função com parênteses.",
        hint2: "nome_funcao()"
      },
      {
        id: 46,
        question: "Como criar uma função que recebe um parâmetro?",
        code: "def saudar_pessoa(___):\n    print('Olá,', nome)",
        options: [
          "nome",
          "(nome)",
          "[nome]",
          "{nome}"
        ],
        correctAnswer: 0,
        explanation: "Parâmetros são colocados entre os parênteses na definição da função, separados por vírgulas se houver mais de um.",
        hint1: "Parâmetros vão entre os parênteses da função.",
        hint2: "def funcao(parametro):"
      },
      {
        id: 47,
        question: "Qual a diferença entre print e return em uma função?",
        code: "def funcao1():\n    print(10)\n\ndef funcao2():\n    return 10",
        options: [
          "São iguais",
          "print mostra na tela, return devolve o valor",
          "return mostra na tela, print devolve o valor",
          "Nenhuma das anteriores"
        ],
        correctAnswer: 1,
        explanation: "print() mostra algo na tela, mas não devolve nada. return devolve um valor que pode ser usado em outras partes do código.",
        hint1: "print é para exibir, return é para devolver.",
        hint2: "Só return permite usar o resultado depois."
      },
      {
        id: 48,
        question: "O que acontece se uma função não tem return?",
        code: "def somar(a, b):\n    resultado = a + b\n\nx = somar(5, 3)\nprint(x)",
        options: [
          "Imprime 8",
          "Imprime None",
          "Dá erro",
          "Imprime 0"
        ],
        correctAnswer: 1,
        explanation: "Funções sem return retornam None (valor especial que significa 'nada'). O cálculo foi feito mas não foi devolvido.",
        hint1: "Sem return, a função retorna None.",
        hint2: "None é o valor padrão de retorno."
      }
    ]
  },
  {
    id: 7,
    title: "Listas (Arrays)",
    description: "Domine coleções ordenadas de dados",
    concept: "Listas são como prateleiras que podem guardar vários itens em ordem. Você pode adicionar, remover e acessar itens por sua posição!",
    questions: [
      {
        id: 19,
        question: "Como criar uma lista com os números 1, 2 e 3?",
        options: [
          "numeros = [1, 2, 3]",
          "numeros = (1, 2, 3)",
          "numeros = {1, 2, 3}",
          "numeros = list(1, 2, 3)"
        ],
        correctAnswer: 0,
        explanation: "Listas em Python são criadas usando colchetes []. Elas são ordenadas e mutáveis.",
        hint1: "Listas usam colchetes, não parênteses ou chaves.",
        hint2: "A sintaxe correta é: nome = [item1, item2, item3]"
      },
      {
        id: 20,
        question: "Como acessar o primeiro item da lista?",
        code: "frutas = ['maçã', 'banana', 'laranja']\nprint(frutas[?])",
        options: [
          "frutas[1]",
          "frutas[0]",
          "frutas[first]",
          "frutas.first()"
        ],
        correctAnswer: 1,
        explanation: "Em Python, a contagem começa do zero! O primeiro item está no índice 0.",
        hint1: "Lembre-se: Python conta a partir do zero.",
        hint2: "O primeiro elemento está no índice 0."
      }
    ]
  },
  {
    id: 8,
    title: "Métodos de String",
    description: "Manipule texto como um mestre",
    concept: "Strings possuem métodos poderosos para transformar e analisar texto. upper(), lower(), replace() são seus aliados!",
    questions: [
      {
        id: 21,
        question: "Como transformar um texto em maiúsculas?",
        code: "texto = 'python quest'\nresultado = texto.?",
        options: [
          "texto.uppercase()",
          "texto.UPPER()",
          "texto.upper()",
          "texto.toUpperCase()"
        ],
        correctAnswer: 2,
        explanation: "O método .upper() transforma todas as letras em maiúsculas. É simples e direto!",
        hint1: "Em Python, métodos de string são em minúsculas.",
        hint2: "Use .upper() sem parâmetros."
      },
      {
        id: 22,
        question: "Como substituir uma palavra em um texto?",
        code: "frase = 'Eu amo Java'\nfrase = frase.?('Java', 'Python')",
        options: [
          "frase.change('Java', 'Python')",
          "frase.substitute('Java', 'Python')",
          "frase.replace('Java', 'Python')",
          "frase.swap('Java', 'Python')"
        ],
        correctAnswer: 2,
        explanation: "O método .replace(old, new) substitui todas as ocorrências da string antiga pela nova.",
        hint1: "O método chama-se 'replace' (substituir em inglês).",
        hint2: "Sintaxe: string.replace(antigo, novo)"
      }
    ]
  },
  {
    id: 9,
    title: "Dicionários (Chave: Valor)",
    description: "Organize dados com chaves e valores",
    concept: "Dicionários são como agendas: você usa uma chave (nome) para encontrar um valor (telefone). Perfeito para dados estruturados!",
    questions: [
      {
        id: 23,
        question: "Como criar um dicionário?",
        options: [
          "pessoa = ['nome': 'João', 'idade': 25]",
          "pessoa = {'nome': 'João', 'idade': 25}",
          "pessoa = ('nome': 'João', 'idade': 25)",
          "pessoa = dict['nome': 'João', 'idade': 25]"
        ],
        correctAnswer: 1,
        explanation: "Dicionários usam chaves {} e o formato chave:valor separados por vírgulas.",
        hint1: "Dicionários usam chaves {}, não colchetes ou parênteses.",
        hint2: "Formato: {chave: valor, chave2: valor2}"
      },
      {
        id: 24,
        question: "Como acessar um valor no dicionário?",
        code: "aluno = {'nome': 'Maria', 'nota': 9.5}\nprint(aluno[?])",
        options: [
          "aluno['nota']",
          "aluno[nota]",
          "aluno.nota",
          "aluno(nota)"
        ],
        correctAnswer: 0,
        explanation: "Para acessar valores, use a chave entre colchetes e aspas: dicionario['chave']",
        hint1: "Use colchetes com a chave entre aspas.",
        hint2: "Sintaxe: dicionario['nome_da_chave']"
      }
    ]
  },
  {
    id: 10,
    title: "Tuplas (Imutabilidade)",
    description: "Entenda coleções que não mudam",
    concept: "Tuplas são como listas, mas imutáveis - uma vez criadas, não podem ser alteradas. Perfeitas para dados constantes!",
    questions: [
      {
        id: 25,
        question: "Como criar uma tupla?",
        options: [
          "coordenadas = [10, 20]",
          "coordenadas = {10, 20}",
          "coordenadas = (10, 20)",
          "coordenadas = tuple[10, 20]"
        ],
        correctAnswer: 2,
        explanation: "Tuplas usam parênteses (). Diferente de listas, tuplas não podem ser modificadas após criação.",
        hint1: "Tuplas usam parênteses, não colchetes.",
        hint2: "Sintaxe: variavel = (item1, item2)"
      },
      {
        id: 26,
        question: "O que acontece ao tentar modificar uma tupla?",
        code: "ponto = (5, 10)\nponto[0] = 15",
        options: [
          "O valor é alterado normalmente",
          "Um aviso é exibido",
          "Gera um erro (TypeError)",
          "A tupla se transforma em lista"
        ],
        correctAnswer: 2,
        explanation: "Tuplas são imutáveis! Tentar modificá-las resulta em TypeError. Use listas se precisar modificar.",
        hint1: "Tuplas não podem ser alteradas após criação.",
        hint2: "Imutável significa que causa erro ao tentar modificar."
      }
    ]
  },
  {
    id: 11,
    title: "While Loops Avançados",
    description: "Controle loops com break e continue",
    concept: "break interrompe o loop completamente, continue pula para a próxima iteração. Ferramentas poderosas para controle de fluxo!",
    questions: [
      {
        id: 27,
        question: "O que o comando 'break' faz em um loop?",
        code: "contador = 0\nwhile contador < 10:\n    if contador == 5:\n        break\n    contador += 1",
        options: [
          "Pula para a próxima iteração",
          "Para o loop completamente",
          "Reinicia o loop do início",
          "Pausa o loop por 1 segundo"
        ],
        correctAnswer: 1,
        explanation: "break interrompe o loop imediatamente, saindo dele. No exemplo, o loop para quando contador chega a 5.",
        hint1: "break 'quebra' ou 'para' o loop.",
        hint2: "O loop é encerrado imediatamente ao executar break."
      },
      {
        id: 28,
        question: "O que o comando 'continue' faz?",
        code: "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
        options: [
          "Imprime: 0 1 2 3 4",
          "Imprime: 0 1 3 4",
          "Para o loop",
          "Imprime apenas 2"
        ],
        correctAnswer: 1,
        explanation: "continue pula a iteração atual e vai para a próxima. Quando i==2, o print é pulado.",
        hint1: "continue faz o loop continuar, mas pula o resto do código atual.",
        hint2: "O número 2 será pulado."
      }
    ]
  },
  {
    id: 12,
    title: "Importando Módulos",
    description: "Use bibliotecas poderosas do Python",
    concept: "Módulos são bibliotecas prontas com funções úteis. math, random, datetime - não reinvente a roda!",
    questions: [
      {
        id: 29,
        question: "Como importar o módulo math?",
        options: [
          "include math",
          "using math",
          "import math",
          "require math"
        ],
        correctAnswer: 2,
        explanation: "Em Python, usamos 'import nome_do_modulo' para importar bibliotecas.",
        hint1: "A palavra-chave em Python é 'import'.",
        hint2: "Sintaxe: import nome_do_modulo"
      },
      {
        id: 30,
        question: "Como usar uma função de um módulo importado?",
        code: "import random\nnumero = ?",
        options: [
          "numero = randint(1, 10)",
          "numero = random.randint(1, 10)",
          "numero = random->randint(1, 10)",
          "numero = randint.random(1, 10)"
        ],
        correctAnswer: 1,
        explanation: "Usamos a sintaxe modulo.funcao() para acessar funções de um módulo importado.",
        hint1: "Use ponto (.) para acessar funções do módulo.",
        hint2: "Sintaxe: nome_modulo.nome_funcao()"
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
    description: "Complete todos os 6 níveis básicos",
    icon: "🏆",
    requiredLevel: 6
  },
  {
    id: 4,
    name: "Explorador Intermediário",
    description: "Desbloqueie o mundo intermediário (Nível 7+)",
    icon: "🌟",
    requiredLevel: 7
  },
  {
    id: 5,
    name: "Mestre Python",
    description: "Complete todos os 12 níveis",
    icon: "👑",
    requiredLevel: 12
  }
];
