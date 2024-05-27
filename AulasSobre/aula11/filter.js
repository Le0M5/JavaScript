let sla = [10, 15, 21, 23, 24, 36, 32, 16]

let filtroIdade = sla.filter((idade) => {
    return idade >= 16
})

console.log(filtroIdade);