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