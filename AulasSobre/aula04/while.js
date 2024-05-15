let contador = 0

console.log(contador);
// contador++ / mesma coisa que = contador + 1

while (contador <=100) {
    console.log(`O valor do número é: ${contador}`);
    contador+=10
    // contador = contador + 10
}

console.log("Fim");

let valor = 1000

while (valor >=0) {
    console.log(`O valor do número é: ${valor}`);
    valor-=100
    // contador = contador - 100
}
console.log("Fim");

do {
    console.log(valor);
    valor -= 100
} while (valor >=0) {
    console.log(valor);
    valor -= 100
}
