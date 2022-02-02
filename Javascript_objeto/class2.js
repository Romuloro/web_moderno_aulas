class Avo{
    constructor(sobrenome = 'Martins'){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(sobrenome){
        super(sobrenome = 'Silva')
    }
}

const filho = new Filho
const avo = new Avo
const pai = new Pai

console.log(filho)
console.log(avo)
console.log(pai)
