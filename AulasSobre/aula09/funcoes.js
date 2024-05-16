function calcularMedia(n1, n2, n3) {
    let media
    media = (n1 + n2 + n3) / 3
    return media
}

console.log(`A média do aluno foi de ${calcularMedia(8.135, 9.3, 8.5).toFixed(2)}`);