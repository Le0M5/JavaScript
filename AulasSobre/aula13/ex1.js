const Calcular = () => {
    let nota1 = Number(document.querySelector('#nota1').value)
    let nota2 = Number(document.querySelector('#nota2').value)

    let media = (nota1 + nota2) / 2

    let p = document.querySelector('#mediaDoAluno')
    p.innerText = `${media}`
    p.style.fontWeight = 'bold'

    if (media < 6) {
        p.style.color = 'red'
    } else if (media < 10) {
        p.style.color = 'green'
    } else {
        p.innerHTML = `${media}`
        p.style.color = 'blue'
    }
}

let botao = document.querySelector('#EnviarButton')

botao.addEventListener('click', Calcular)