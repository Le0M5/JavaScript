// Exercício 1: Dado um array de números, let números = [1, 2, 3, 4, 5] calcule a soma de todos os elementos do array. Crie um loop `while` que imprima os números pares de 2 a 10.

let numeros = [1, 2, 3, 4, 5]

let soma = 0

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);

let par = 2

while (par <= 10) {
    console.log(par);
    par += 2
}

// Exercício 2: Dado um array de números, let números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] crie um novo array apenas com os números pares. Crie um loop `do-while` que solicite ao usuário que insira sua idade. Continue pedindo até que o usuário insira uma idade válida (ou seja, uma idade maior do que 0).

console.log("------------------------------");

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let pares = []

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        pares.push(nums[i])
    }
}

console.log(pares);

let idade = 16

do {
    console.log("Insira sua idade:");
} while (idade<=0) {
    console.log("Insira sua idade:");
};

console.log(idade);


console.log("------------------------------");

// 3- Crie um objeto que represente uma pessoa com as propriedades nome, idade e cidade, e apresente as informações dessa pessoa em uma string. 

let pessoa1 = {
    nome: "Fabrício",
    idade: "17",
    cidade: "BH",
}

console.log(JSON.stringify(pessoa1));

console.log(`Me chamo ${pessoa1.nome}, tenho ${pessoa1.idade} anos e moro em ${pessoa1.cidade}.`);

console.log("------------------------------");

// Questão 4: Crie um programa em JavaScript que calcula e exibe a sequência de Fibonacci até um número de termos especificado pelo usuário. A sequência de Fibonacci começa com 0 e 1, e cada termo subsequente é a soma dos dois termos anteriores.

let Fibonacci = [0, 1]

let termos = 10

termos = termos - 2

for (let i = 0; i < termos; i++) {
    Fibonacci.push(Fibonacci[i] + Fibonacci[i + 1]);
}

console.log(Fibonacci);

console.log("------------------------------");

// 5- Atualize a idade de um objeto pessoa para 30 anos e passe o resultado em tela.

let pessoa2 = {
    nome: 'Maria',
    idade: 28,
    cidade: 'Rio de Janeiro'
}

console.log(pessoa2);

pessoa2.idade = 30

console.log(pessoa2);