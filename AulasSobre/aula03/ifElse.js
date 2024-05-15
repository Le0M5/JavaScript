// media = Number(prompt("Qual foi sua média:"));
// if (media>=9.5) {
//     alert(`Você foi aprovado com uma média igual a ${media}`)
//     console.log("Parabens");
// } else {
//     alert(`Você não foi aprovado porque é burro`)
//     console.log("Burro");
// };
// console.log("FIM");

// let idade = 22

// if (idade>=18) {
//     console.log("Pode");
// } else {
//     console.log("N pode");
// }

// Agora é cmg

/**
    Crie um algoritmo usando a estrutura condicional if-else que deve informar se o condutor foi multado por ultrapassar a velocidade seguindo as seguintes regras
    Se a velocidade for > 80 o console deve retornar multado por excesso de velocidade
    Se a velocidade for < 40 o console deve retornar multado por trafegar abaixo do limite permitido
    Caso contrário o console deve retornar boa viagem
*/

// let velocidade = Number(prompt("Velocidade que você estava na via:"))
let velocidade = 10

if (velocidade > 80) {
    console.log("Multado por excesso de velocidade");
} else if (velocidade >= 40 && velocidade <= 80) {
    console.log("Fez o mínimo né");
} else if (velocidade > 19 && velocidade < 40) {
    console.log("Multado por trafegar abaixo do limite permitido");
} else if (velocidade > 10 && velocidade < 20) {
    console.log("Multado APENAS");
} else {
    console.log("Boa viagem");
}