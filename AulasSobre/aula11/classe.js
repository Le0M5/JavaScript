class Celular {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    desbloquearCelular() {
        console.log("Celular desbloqueado");
    }
}

let meuCelular = new Celular("Xiaomi", "Poco M3", 2020)

// console.log(meuCelular.marca);
// console.log(meuCelular.modelo);
// console.log(meuCelular.ano);

class Pessoa {
    constructor(Nome, Cabelo, Idade, Sexo) {
        this.Nome = Nome;
        this.Cabelo = Cabelo;
        this.Idade = Idade;
        this.Sexo = Sexo;
    }
}

let pessoa1 = new Pessoa("Leo", "Ondulado", 16, "M")

// console.log("----------------------------");

// console.log(pessoa1.Nome);
// console.log(pessoa1.Cabelo);
// console.log(pessoa1.Idade);
// console.log(pessoa1.Sexo);

class CellGamer extends Celular {
    constructor(marca, modelo, ano, ram, armazenamento, cooler) {
        super(marca, modelo, ano);
        this.ram = ram;
        this.armazenamento = armazenamento;
        this.cooler = cooler;
    }
    ligarGameBooster(){
        console.log("Otimizar o jogo");
    }
}

let cellGamer1 = new CellGamer("Redmagic", "9 Pro+", 2023, "24GB", "1TB", true)

console.log(cellGamer1);