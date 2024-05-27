// 4 - Dado o array students = [{ name: 'John', age: 20 },{ name: 'Jane', age: 25 },{ name: 'Mark', age: 22 }],Utilize o método forEach para exibir o e a idade de cada aluno no console.

let students =
    [
        { name: 'John', age: 20 },
        { name: 'Jane', age: 25 },
        { name: 'Mark', age: 22 }
    ]

students.forEach((nomeEIdade)=>{
    console.log(nomeEIdade.name);
    console.log(nomeEIdade.age);
    console.log("-----");
})

// 5 - Dado o array students = [{ name: 'John', age: 20 },{ name: 'Jane', age: 25 },{ name: 'Mark', age: 22 }], Utilize o método map para criar um novo array contendo apenas os nomes dos alunos.

let nomesStudents = students.map((nomes)=>{
    return nomes.name
})

console.log(nomesStudents);