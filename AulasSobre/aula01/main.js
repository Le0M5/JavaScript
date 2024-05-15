let nome = 'Leonardo' // string
let sNome = 'Moura' // string
let idade = 16 // number
let sairCedo = false // boolean

// float - número Real - Peso - Altura
// int - número inteiro - RG - Idade - CPF - Celular - etc

/**-----------------------------------------------------------------------------------------------------------------------------------------------------*/

//STRING

let tipoPet = "Cachorro"
let Pet = 'Thor'
let idadePet = `Dois`

console.log('Olá', nome, sNome);
// , concatenará e dará espaço

console.log('Olá ' + nome + ' ' + sNome);
// + concatenará sem espaço, precisando colocar espaço dentro da string digitada

console.log(`Olá ${nome} tudo bem com você? Fiquei sabendo que você tem ${idade} anos de idade, e terá ${idade + 4} anos daqui 4 anos`);
// Necessário a crase para a interpolação, que usa ${var}

// Criando variável

let nome1

let nome2

let nome3, nome4

nome1 = 4
nome2 = 5
nome3 = 6
nome4 = 7

console.log(nome1, nome2, nome4, nome3);

let nomeAluno //camelCase
let NomeAluno //PascalCase
let nome_alno //snake_case
// let nome-aluno - kebab-case / Não é permitido pois (-) -> é menos
