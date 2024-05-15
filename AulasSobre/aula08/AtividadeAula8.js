// 1- Dado um array de números, let números = [1, 2, 3, 4, 5] calcule a soma de todos os elementos do array.  Crie um loop `while` que imprima os números pares de 2 a 10


// let numeros = [1, 2, 3, 4, 5];

// let soma = 0;

// for (let i = 0; i < numeros.length; i++) {
//     soma+=numeros[i]
// }

// console.log(soma);



// let nums = 2

// while (nums <=10) {
//     console.log(nums);
//     nums+=2
// }




// 2- Dado um array de números, let números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] crie um novo array apenas com os números pares. Crie um loop `do-while` que solicite ao usuário que insira sua idade. Continue pedindo até que o usuário insira uma idade válida (ou seja, uma idade maior do que 0).


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let numsPares = []

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 == 0) {
//         numsPares.push(numeros[i])
//     }
// }

// console.log(numsPares);

// let idade = 1

// do {
//     console.log("Insira sua idade:");
// } while (idade == 0) {
//     console.log("Insira uma idade válida:");
// }



// 3- Crie um objeto que represente uma pessoa com as propriedades nome, idade e cidade, e apresente as informações dessa pessoa em uma string. 

// let pessoa = {
//     nome: "Fabrício",
//     idade: "17",
//     cidade: "BH",
// }

// console.log(JSON.stringify(pessoa));



// 4-Crie um programa em JavaScript que calcula e exibe a sequência de Fibonacci até um número de termos especificado pelo usuário. A sequência de Fibonacci começa com 0 e 1, e cada termo subsequente é a soma dos dois termos anteriores.

// let sequencia = [0, 1];

// let numeroDeTermos = 10

// for (let i = 2; i < numeroDeTermos; i++) {
//     sequencia.push(sequencia[i - 2] + sequencia[i - 1]);
// }

// console.log(sequencia);



// 5- Atualize a idade de um objeto pessoa para 30 anos e passe o resultado em tela.

// let pessoa = {
//     nome: 'Maria',
//     idade: 28,
//     cidade: 'Rio de Janeiro'
// }

// console.log(pessoa);

// pessoa.idade = 30

// console.log(pessoa);