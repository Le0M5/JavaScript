let cont = 0

const clique = () => {
    cont++
    document.getElementById("Cliques").innerHTML = `${cont} Cliques`
    console.log(`Contador: ${cont}`);
    if (cont % 50 == 0) {
        addFrase()
    }
}

const addFrase = () => {
    const frases = ["Você atingiu 50 cliques!","Outro conjunto de 50 cliques completado!","Continue clicando! Mais 50 cliques alcançados!","Incrível! 50 cliques a mais!","Não pare agora, mais 50 cliques feitos!"];

    const frase = frases[Math.floor(Math.random() * frases.length)];
    const CriarFrase = document.createElement('p');
    CriarFrase.innerHTML = frase;

    document.getElementById('clique').appendChild(CriarFrase);
}