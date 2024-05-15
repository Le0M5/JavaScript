// 1-

// let preçoOrigin = 500.00
// let desc1 = 0.05
// let desc2 = 0.1
// let desc3 = 0.15
// let desc4 = 0.20
// let desc5 = 0.25

// let preçoFim1 = preçoOrigin - (preçoOrigin * desc1)
// let preçoFim2 = preçoOrigin - (preçoOrigin * desc2)
// let preçoFim3 = preçoOrigin - (preçoOrigin * desc3)
// let preçoFim4 = preçoOrigin - (preçoOrigin * desc4)
// let preçoFim5 = preçoOrigin - (preçoOrigin * desc5)

// let cupom = prompt("Insira um código de desconto válido:").toUpperCase()

// switch (cupom) {
//     case "DESC1":
//         alert(`O preço do produto era de ${preçoOrigin} e com o desconto aplicado foi para ${preçoFim1}`)
//         break;
//     case "DESC2":
//         alert(`O preço do produto era de ${preçoOrigin} e com o desconto aplicado foi para ${preçoFim2}`)
//         break;
//     case "DESC3":
//         alert(`O preço do produto era de ${preçoOrigin} e com o desconto aplicado foi para ${preçoFim3}`)
//         break;
//     case "DESC4":
//         alert(`O preço do produto era de ${preçoOrigin} e com o desconto aplicado foi para ${preçoFim4}`)
//         break;
//     case "DESC5":
//         alert(`O preço do produto era de ${preçoOrigin} e com o desconto aplicado foi para ${preçoFim5}`)
//         break;

//     default:
//         alert(`Erro`)
//         break;
// }

// 2-

let numeroAleatorio = Math.round(Math.random()*10+1);

let numeroEscolhido

numeroEscolhido = parseInt(prompt("Escolha um número aleatório de 0 a 10, caso acerte parabéns, caso contrário tente até acertar.:"))

if (numeroEscolhido != numeroAleatorio) {
    while (numeroEscolhido != numeroAleatorio) {
        alert("Tente novamente até acertar!")
        numeroEscolhido = parseInt(prompt("Escolha um número"))
    }
}
alert("Você acertou!")