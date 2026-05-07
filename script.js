// Exercicio 1

/*
const nome = prompt("nome: ")
const idade = prompt("idade: ")
const curso = prompt("curso: ")

alert(`Olá, meu nome é ${nome} tenho ${idade} anos e estudo ${curso} na FIAP.`)
*/

// Exercicio 2

/*
let distancia = Number(prompt("Qual a distancia em Metros: "))

let centimetros = distancia * 100

alert(`Distancia em centimetros: ${centimetros}cm`)
*/

// Exercicio 3

/*
let peso = Number(prompt("Peso: "))
let altura = Number(prompt("Altura: "))

let imc = peso / (altura * altura);

alert(`Seu IMC é ${imc.toFixed(2)}`)
*/

// Exercicio 4

/*
let n1 = prompt("Numero 1: ");
let n2 = prompt("Numero 2: ");

let soma = Number(n1) + Number(n1);

alert(soma);
*/

// Exercicio 5

/*
let n1 = Number(prompt("Numero 1: "));
let n2 = Number(prompt("Numero 2: "));
let op = prompt("Qual a operação? (+, ...): ");

let r;

if (op === "+"){
    r = n1 + n2;
    alert(r);
} else if(op === "-"){
    r = n1 - n2;
    alert(r);
} else if(op === "*"){
    r = n1 * n2;
    alert(r);
} else if(op === "/"){
    if (n2 !== 0){
        r = n1 / n2;
        alert(r);
    } else{
        alert("por 0 não vai")
    }
} else{
    alert("Não é isso!!")
}
*/

// Exercicio 6

/*
let n1 = parseFloat(prompt("Numero 1: "));
let n2 = parseFloat(prompt("Numero 2: "));
let op = prompt("Qual a operação? (+, ...): ");

if (
    n1 === null || 
    n1 !== Number || 
    n1 !== "" || 
    isNaN(n1) || 
    n2 === null || 
    n2 !== Number || 
    n2 !== "" ||
    isNaN(n2)
)  {
    alert("Chora")
}

let r;

if (op === "+"){
    r = n1 + n2;
    alert(r);
} else if(op === "-"){
    r = n1 - n2;
    alert(r);
} else if(op === "*"){
    r = n1 * n2;
    alert(r);
} else if(op === "/"){
    if (n2 !== 0){
        r = n1 / n2;
        alert(r);
    } else{
        alert("por 0 não vai")
    }
} else{
    alert("Não é isso!!")
} 
*/

/*
function reNumero(n1, n2) {
    if (n1 > n2) {
        return `O maior numero é o ${n1}`    
    } else if(n1 < n2) {
        return `O maior numero é o ${n2}`
    }
}

let numero1 = prompt("numero 1:")
let numero2 = prompt("numero 2:")

alert(reNumero(numero1, numero2))
*/

/*
function parseText(t){
    let string = t.toUpperCase().trim()
    alert(string)
}

let text = "   Chora na tora    "

parseText(text);
*/

// function getRandomInt(n) {
//     const ale = Math.floor(Math.random() * 11) + 1;
//     console.log(ale)
//     if (n === ale ) {
//         return `vc acertou`
//     } else {
//         return "errou"
//     }
// }

// let numero = prompt("numero:")

// console.log(getRandomInt(numero))

// function aumentarNumero(numero){
//     while (numero < 10) {
//         console.log(numero);
//         numero+=2;
//     }
// }

// aumentarNumero(2)


// function redutorNumero(numero){
//     while (numero >= 1) {
//         console.log(numero);
//         numero--;
//     }
// }

// let n = prompt("Digite um numero: ") 

// redutorNumero(n)

// function perguntaNumero (){
//     const n = Number(prompt("Digite um numero: ") )
// }

// function redutorNumero(numero){
//     if (isNaN(numero)){
//         perguntaNumero()
//     }else{
//         numero = perguntaNumero()
//     }

//     while (numero >= 1) {
//         console.log(numero);
//         numero--;
//     }
//     confole.log("Contagem finalizada!")
// }

// const n = Number(prompt("Digite um numero: ") )

// perguntaNumero()

// redutorNumero(n)


// let nome;
// let idade;
// let salario;
// let genero;
// let estadoCivil;

// do {
//     nome = prompt("Digite seu nome: ")    
//     if ( nome.length < 3) {
//         console.log("Digite um nome de verdade")
//     }
// } while ( nome.length < 3){
//     console.log("chora")
// }

// do {
//     idade = Number(prompt("Digite sua idade: (entre 0 e 150) "))
//     if (!idade > 0 && !idade < 150) {
//         console.log("Digite um idade de verdade")
//     }
// } while (!idade > 0 && !idade < 150){
//     console.log("chora")
// }

// do {
//     salario = Number(prompt("Digite seu salario (maior que 0): "))
//     if (salario < 0) {
//         console.log("Digite um Salario de verdade")
//     }

// } while (salario < 0){
//     console.log("chora")
// }

// do {
//     genero = prompt("Digite seu genero: (f, m) ")
//     if (genero === "f" && genero === "m") {
//         console.log("Digite um Genero de verdade")
//     }
// } while (genero === "f" && genero === "m"){
//     console.log("chora")
// }

// do {
//     estadoCivil = prompt("Digite seu Estado Civil: ('s', 'c', 'v' e 'd')")
//     if (estadoCivil === "s" && estadoCivil === "c" && estadoCivil === "v" && estadoCivil === "d") {
//         console.log("Digite um Estado Civil de verdade")
//     }
// } while (estadoCivil === "s" && estadoCivil === "c" && estadoCivil === "v" && estadoCivil === "d"){
//     console.log("chora")
// }

// const n = Number(prompt("Me da um numero: "))

// for (let i = 0; i < 10; i++) {
//     console.log(`${n} x ${i} = ${n*i}`)
// }


