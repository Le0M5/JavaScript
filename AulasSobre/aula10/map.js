let nums = [4, 9, 16, 25, 36, 49, 64, 81, 100]

let raizDeNums = nums.map(Math.sqrt)

console.log(raizDeNums);

let alunos = [
    {
        Nome: "Leo",
        RA: 20240101,
        Matriculado: true,
    },
    {
        Nome: "Algm",
        RA: 20240102,
        Matriculado: true,
    },
    {
        Nome: "Algm2",
        RA: 20240103,
        Matriculado: false,
    },
]

let Nomealunos = alunos.map((Nome)=>{
    return Nome.Nome
})

let RAalunos = alunos.map((Ra)=>{
    return Ra.RA
})

console.log(Nomealunos);
console.log(RAalunos);