
const mudarCor = () => {
    document.querySelector('h1').style.color = 'blue'
}


const mudarCor2 = () => {
    let ara = document.querySelectorAll('.teste')
    for (let i = 0; i < ara.length; i++) {
        ara[i].style.color = 'blue'
    }
    let p = document.createElement('p')
    document.getElementsByClassName('teste')[0].appendChild(p)
    p.innerText = "Você mudou o h1 para a cor azul e este parágrafo está em azul"
}