const nums =
[
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
]

// console.log(nums);

let x = nums[0].push(0)

// console.log(nums);

let z = nums.shift()

console.log(nums);

let y = nums[0].unshift("OLA")

console.log(nums);

let nums2 = nums.pop()

console.log(nums);

let nums33 = nums.toString()

console.log(z.join("-"));
console.log(typeof nums33);

/**
 * .pop - remove o ultimo elemento do array
 * .push - insere no final do array um elemento
 * .shift - remove o elemento no inicio do array, deslocando todos os elementos de uma posição
 * .unshift - adiciona um elemento no inicio do array
 * .join("***") - transforma em string pode separar por qualquer caractere
 * .toString() - transforma em string
 * delete - remove um elemento especifico deixando (Empty Slot)
 * Todos podem ser armazenados em variáveis: (pop push shift unshift)
 */