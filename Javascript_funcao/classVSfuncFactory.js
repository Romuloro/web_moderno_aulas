class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa ('Joaquim')
pessoa1.falar()

const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Ana')
p2.falar()

// Desafio função construtura
function Pessoa2(nome){
    this.nome = nome

    this.falar = function (){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa2('Yago')
p3.falar()