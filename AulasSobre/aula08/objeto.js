/**
    let  aluno1 = {
    RA: 20240101,
    Nome: 'Leo',
    Idade: 16,
    Grade: {
        Curso: 'Comunicação',
        CH: 200,
        Matriculado: true
    }
}

console.log(aluno1); */

let carro1 = {
    Cor: 'Preto',
    Ano: 2021,
    Placa: 'DEF-5678',
    Marca: 'Toyota',
    Motor: {
        Tipo: 'Híbrido',
        Litros: 1.8,
        Potência: '180 cv'
    }
}

let carro2 = {
    Cor: 'Vermelho',
    Ano: 2022,
    Placa: 'ABC-1234',
    Marca: 'Ford',
    Motor: {
        Tipo: 'Gasolina',
        Litros: 2.0,
        Potência: '250 cv'
    }
}

let carro3 = {
    Cor: 'Azul',
    Ano: 2023,
    Placa: 'GHI-9101',
    Marca: 'BMW',
    Motor: {
        Tipo: 'Elétrico',
        Litros: 'N/A Elétrico',
        Potência: '300 cv'
    }
}

console.log(carro1);
console.log(carro2);
console.log(carro3);

console.log("--------------------------------------------------------------------------------------------------------------------------");

console.log(carro1.Marca);
console.log(carro2.Marca);
console.log(carro3.Marca);

let Cor = carro1.Cor;
let MotorTipo = carro2.Motor.Tipo;
let MotorPotencia = carro3.Motor.Potência;

console.log(Cor);
console.log(MotorTipo);
console.log(MotorPotencia);