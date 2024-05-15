// 2 ultimo-

alert("Escolha dois números e eu te darei o resultado da soma entre eles");

let nu1 = parseInt(prompt("Escolha o primeiro número:"));
let nu2 = parseInt(prompt("Escolha o segundo:"));

let resultado = nu1 + nu2;

alert(`A soma desses dois números é de ${resultado}`);

// 3-

let nome = "Leonardo Moura de Sousa";
console.log(nome.replace("Sousa","Moura").replace("Moura","Sousa"));

// 4-

let preçoInicial = Number(prompt("Escolha um preço para o produto e te darei o preço final com um desconto de 20%"));
let desconto = 0.2;
let preçoFinal = preçoInicial - (preçoInicial * desconto);


alert("Agora irei mostrar o resultado final do preço do produto calculado.");
alert(`O valor foi de R$${preçoFinal}`);

// 5- If-Else

let idade = Number(prompt("Qual sua idade?"))

if (idade>=60) {
    alert("Você é um idoso")
} else if (idade>=18) {
    alert("Você é um adulto")
} else {
    alert("Você é um menor de idade")
}

// 6-

let idade2 = Number(prompt("Qual sua idade?"))

if (idade2>=18) {
    alert("Você pode dirigir.")
} else {
    alert("Você ainda não pode dirigir.")
}

//  7-

let numeroInt = parseInt(prompt("Escolha qualquer número inteiro:"))

if (numeroInt>0) {
    alert("O número informado é positivo!")
} else if (numeroInt<0) {
    alert("O número informado é negativo!")
} else {
    alert("O número informado é zero!")
}

// 8-

let alturaEmMetros = Number(prompt("Digite sua altura em metros:"))
let peso = Number(prompt("Digite seu peso em Kg:"))

let IMC = Number(peso/(alturaEmMetros*2))

if (IMC>=18.5 && IMC<=24.9) {
    alert(`Você esta dentro do IMC saudável! ${IMC.toFixed(2)}`)
} else {
    alert(`Você não está saudável! ${IMC.toFixed(2)}`)
}