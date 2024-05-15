// let numero1, numero2
// numero1 = parseInt(prompt('Digite um número'))
// numero2 = parseInt(prompt('Agora digite outro número'))

// soma = numero1 + numero2

// alert(`Esta é a soma dos números escolhidos: ${soma}`)

// let praia = true

// alert(`${praia}`)

// const pi = Number(3.1415)

// alert(`Este é o número irracional: ${pi}`)

// let nome = prompt("Qual seu nome:")
// let idade = prompt("Qual sua idade:")
// let moraAonde = prompt("Aonde você mora:")

// var nomeMaiusculo = nome.toUpperCase()

// alert(`Este é seu nome em letras maiúsculas: ${nomeMaiusculo}`)

function soma() {
    let numeroA1 = parseInt(document.getElementById("numero1").value);
    let numeroA2 = parseInt(document.getElementById("numero2").value);

    let result = numeroA1 + numeroA2;

    document.getElementById("result").innerText = "O resultado é: " + result;
}
function menos() {
    let numeroA1 = parseInt(document.getElementById("numero1").value);
    let numeroA2 = parseInt(document.getElementById("numero2").value);

    let result = numeroA1 - numeroA2;

    document.getElementById("result").innerText = "O resultado é: " + result;
}
function multiplicar() {
    let numeroA1 = parseInt(document.getElementById("numero1").value);
    let numeroA2 = parseInt(document.getElementById("numero2").value);

    let result = numeroA1 * numeroA2;

    document.getElementById("result").innerText = "O resultado é: " + result;
}
function dividir() {
    let numeroA1 = parseInt(document.getElementById("numero1").value);
    let numeroA2 = parseInt(document.getElementById("numero2").value);

    let result = numeroA1 / numeroA2;

    document.getElementById("result").innerText = "O resultado é: " + result;
}