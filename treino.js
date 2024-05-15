// Exercício 1: Dado um array de números, let números = [1, 2, 3, 4, 5] calcule a soma de todos os elementos do array. Crie um loop `while` que imprima os números pares de 2 a 10.

// let numeros = [1, 2, 3, 4, 5]

// soma = 0

// for (let i = 0; i < numeros.length; i++) {
//     soma+=numeros[i];
// }
// console.log(soma);

// let num = 2

// while (num<=10) {
//     console.log(num);
//     num+=2
// }



// Exercício 2: Dado um array de números, let números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] crie um novo array apenas com os números pares. Crie um loop `do-while` que solicite ao usuário que insira sua idade. Continue pedindo até que o usuário insira uma idade válida (ou seja, uma idade maior do que 0).

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let Pares = []

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 == 0) {
//         Pares.push(numeros[i]);
//     }
// }

// console.log(Pares);

// let idade = 1

// do {
//     console.log("Sua idade");
// } while (idade == 0) {
//     console.log("Insira uma idade válida");
// };

// console.log("Nice bro!");




// Questão 3: Crie um objeto que represente uma pessoa com as propriedades nome, idade e cidade, e apresente as informações dessa pessoa em uma string.

// let pessoa = {
//     Nome: "Leo",
//     Idade: 16,
//     Cidade: 'SP',
// }

// console.log(pessoa);

// console.log(JSON.stringify(pessoa));



// Questão 4: Crie um programa em JavaScript que calcula e exibe a sequência de Fibonacci até um número de termos especificado pelo usuário. A sequência de Fibonacci começa com 0 e 1, e cada termo subsequente é a soma dos dois termos anteriores.

// let nu = [0, 1]

// let termos = 10

// for (let i = 2; i < termos; i++) {
//     nu.push(nu[i - 2] + nu[i - 1]);
// }

// console.log(nu);



// Questão 5: Atualize a idade de um objeto pessoa para 30 anos e passe o resultado em tela.

// let pessoa = {
//     nome: 'Maria',
//     idade: 28,
//     cidade: 'Rio de Janeiro'
// }

// console.log(pessoa);

// pessoa.idade = 30

// console.log(pessoa);