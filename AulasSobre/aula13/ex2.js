function IMC() {
    let alturaEmMetros = Number(document.getElementById('Altura').value)
    let peso = Number(document.getElementById('Peso').value)

    let imc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2)

    let paragrafo = document.getElementById('resultadoIMC')

    paragrafo.innerHTML = imc

    if (imc > 40) {
        paragrafo.innerText = `Obesidade grau III com um IMC de : ${imc}`;
        paragrafo.style.color = 'red'
    } else if (imc >= 35) {
        paragrafo.innerText = `Obesidade grau II com um IMC de : ${imc}`;
        paragrafo.style.color = 'red'
    } else if (imc >= 30) {
        paragrafo.innerText = `Obesidade grau I com um IMC de : ${imc}`;
        paragrafo.style.color = 'red'
    } else if (imc >= 25) {
        paragrafo.innerText = `Acima do peso! com um IMC de : ${imc}`;
        paragrafo.style.color = 'red'
    } else if (imc >= 18.5) {
        paragrafo.innerText = `Peso normal! com um IMC de : ${imc}`;
        paragrafo.style.color = 'green'
    } else if (imc >= 17) {
        paragrafo.innerText = `Abaixo do peso com um IMC de : ${imc}`;
        paragrafo.style.color = 'red'
    } else {
        paragrafo.innerText = `Muito abaixo do peso com um IMC de : ${imc}`;
        paragrafo.style.color = 'red'
    }
}

let calcularImc = document.querySelector('#calcularIMC')

calcularImc.addEventListener('click', IMC)