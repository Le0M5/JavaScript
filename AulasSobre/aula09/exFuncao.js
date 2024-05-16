function IMC(alt, p) {
    let alturaEmMetros = alt
    let peso = p

    let IMC = Number(peso / (alturaEmMetros * alturaEmMetros))

    if (IMC > 40) {
        console.log(`Obesidade grau III ${IMC.toFixed(2)}`);
    } else if (IMC >= 35) {
        console.log(`Obesidade grau II ${IMC.toFixed(2)}`);
    } else if (IMC >= 30) {
        console.log(`Obesidade grau I ${IMC.toFixed(2)}`);
    } else if (IMC >= 25) {
        console.log(`Acima do peso! ${IMC.toFixed(2)}`);
    } else if (IMC >= 18.5) {
        console.log(`Peso normal! ${IMC.toFixed(2)}`);
    } else if (IMC >= 17) {
        console.log(`Abaixo do peso ${IMC.toFixed(2)}`);
    } else {
        console.log(`Muito abaixo do peso ${IMC.toFixed(2)}`);
    }

    return IMC
}

IMC(1.74, 60)

function converter(r) {
    let real = r
    let converter = real / 5.13

    return converter
}

console.log(converter(10000).toFixed(2))

function converter2(e) {
    let euro = e
    let convertido = euro * 5.13

    return convertido
}

console.log(converter2(10));