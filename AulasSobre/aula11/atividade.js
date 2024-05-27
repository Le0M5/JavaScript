// 1 - Dado o array numbers = [1, 2, 3, 4, 5], utilize o método map para criar um novo array contendo o dobro de cada elemento.

let numbers = [1, 2, 3, 4, 5]

let dobroNumbers = numbers.map((dobro) => {
    return dobro * 2
})

console.log(dobroNumbers);