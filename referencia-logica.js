// ============================================================
//  REFERÊNCIA — LÓGICA DE PROGRAMAÇÃO  |  JavaScript
// ============================================================


// ─────────────────────────────────────────
//  1. VARIÁVEIS
// ─────────────────────────────────────────

var   nome  = "João";   // escopo global/função (evitar)
let   idade = 20;       // escopo de bloco (preferir)
const PI    = 3.14;     // constante (não pode reatribuir)


// ─────────────────────────────────────────
//  2. TIPOS DE DADOS
// ─────────────────────────────────────────

let texto   = "olá";          // string
let numero  = 42;             // number (inteiro ou decimal)
let decimal = 3.14;           // number
let booleano = true;          // boolean: true / false
let vazio   = null;           // null  — ausência intencional
let indefinido = undefined;   // undefined — não atribuído

// verificar tipo
console.log(typeof numero);   // "number"
console.log(typeof texto);    // "string"


// ─────────────────────────────────────────
//  3. OPERADORES
// ─────────────────────────────────────────

// Aritméticos
// +   adição
// -   subtração
// *   multiplicação
// /   divisão
// %   resto da divisão (módulo)
// **  potência

let a = 10, b = 3;
console.log(a + b);   // 13
console.log(a % b);   // 1
console.log(a ** b);  // 1000

// Atribuição
let x = 5;
x += 3;   // x = x + 3  →  8
x -= 2;   // x = x - 2  →  6
x *= 4;   // x = x * 4  →  24
x /= 2;   // x = x / 2  →  12
x++;      // incrementa 1
x--;      // decrementa 1

// Comparação (retornam boolean)
// ==   igual (valor)
// ===  igual (valor E tipo) — preferir
// !=   diferente (valor)
// !==  diferente (valor E tipo)
// >    maior
// <    menor
// >=   maior ou igual
// <=   menor ou igual

console.log(5 == "5");   // true  (só valor)
console.log(5 === "5");  // false (valor + tipo)

// Lógicos
// &&   E  (ambos verdadeiros)
// ||   OU (pelo menos um verdadeiro)
// !    NÃO (inverte)

console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false


// ─────────────────────────────────────────
//  4. ENTRADA E SAÍDA
// ─────────────────────────────────────────

// Saída
console.log("mensagem");          // exibe no console
// alert("mensagem");             // popup (browser)

// Entrada
// let entrada = prompt("Qual seu nome?");   // retorna string (browser)
// Para converter: Number(entrada)  ou  parseInt(entrada)  ou  parseFloat(entrada)

let valorStr = "42";
let valorNum = Number(valorStr);      // 42
let valorInt = parseInt("3.9");       // 3  (trunca decimal)
let valorDec = parseFloat("3.9");     // 3.9


// ─────────────────────────────────────────
//  5. CONDICIONAL — if / else if / else
// ─────────────────────────────────────────

let nota = 7;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// Operador ternário (if/else em uma linha)
let resultado = (nota >= 7) ? "Aprovado" : "Reprovado";


// ─────────────────────────────────────────
//  6. SWITCH
// ─────────────────────────────────────────

let dia = 2;

switch (dia) {
  case 1:
    console.log("Segunda");
    break;
  case 2:
    console.log("Terça");
    break;
  case 3:
    console.log("Quarta");
    break;
  default:
    console.log("Outro dia");
}
// break impede "cair" nos cases seguintes
// default executa quando nenhum case bate


// ─────────────────────────────────────────
//  7. FOR
// ─────────────────────────────────────────

// for (inicialização; condição; incremento)
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0 1 2 3 4
}

// contagem regressiva
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// percorrer array
let frutas = ["maçã", "banana", "uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


// ─────────────────────────────────────────
//  8. WHILE
// ─────────────────────────────────────────

// Testa a condição ANTES de executar
// Use quando não sabe quantas repetições haverá

let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;  // sem isso: loop infinito!
}

// Exemplo: repetir até o usuário acertar
// let senha = "";
// while (senha !== "1234") {
//   senha = prompt("Digite a senha:");
// }
// console.log("Acesso liberado!");


// ─────────────────────────────────────────
//  9. DO...WHILE
// ─────────────────────────────────────────

// Executa o bloco pelo menos UMA VEZ, depois testa a condição
// Diferença do while: a condição é verificada no FINAL

let tentativa = 0;

do {
  console.log("Tentativa: " + tentativa);
  tentativa++;
} while (tentativa < 3);
// Saída: Tentativa: 0 / Tentativa: 1 / Tentativa: 2

// Exemplo clássico — menu que executa ao menos uma vez:
// let opcao;
// do {
//   opcao = prompt("1 - Jogar\n2 - Sair");
// } while (opcao !== "1" && opcao !== "2");


// ─────────────────────────────────────────
//  COMPARATIVO: for vs while vs do...while
// ─────────────────────────────────────────
//
//  for        → nº de repetições conhecido
//  while      → repete enquanto condição for verdadeira (pode nunca executar)
//  do...while → igual ao while, mas executa ao menos 1 vez
//
// ============================================================


// ─────────────────────────────────────────
//  10. VALIDAÇÃO DE ENTRADA
// ─────────────────────────────────────────

// isNaN() — verifica se NÃO é um número válido
console.log(isNaN("abc"));  // true  → não é número
console.log(isNaN("42"));   // false → é número
console.log(isNaN(3.14));   // false → é número

// Verificar campo vazio
let campo = "";
if (campo === "" || campo === null || campo === undefined) {
  console.log("Campo obrigatório!");
}

// Forma curta (falsy check)
if (!campo) {
  console.log("Campo vazio!");
}

// ── Validar número em intervalo ──────────
let nota = Number(prompt("Digite a nota (0 a 10):"));

if (isNaN(nota) || nota < 0 || nota > 10) {
  console.log("Nota inválida!");
} else {
  console.log("Nota aceita:", nota);
}

// ── Repetir até entrada válida (while) ───
let idade;
do {
  idade = Number(prompt("Digite sua idade:"));
} while (isNaN(idade) || idade < 0 || idade > 120);
console.log("Idade válida:", idade);

// ── Validar opção de menu ────────────────
let opcao;
do {
  opcao = prompt("Escolha: 1-Novo  2-Abrir  3-Sair");
} while (opcao !== "1" && opcao !== "2" && opcao !== "3");
console.log("Opção escolhida:", opcao);

// ── Verificar string não vazia ───────────
let nome;
do {
  nome = prompt("Digite seu nome:");
  nome = nome ? nome.trim() : "";  // .trim() remove espaços extras
} while (nome === "");
console.log("Nome:", nome);

// ── Resumo dos checks mais usados ────────
//
//  isNaN(valor)          → true se NÃO for número válido
//  !valor                → true se vazio, null, undefined, 0 ou ""
//  valor.trim() === ""   → true se só tiver espaços
//  valor < min || valor > max  → fora do intervalo permitido
//
// ============================================================
