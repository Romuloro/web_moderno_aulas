function meuObjeto(){}
console.log(meuObjeto.prototype)

const objt1 = new meuObjeto
const objt2 = new meuObjeto
console.log(objt1.__proto__ === objt2.__proto__)

meuObjeto.prototype.nome = 'Rômulo'
meuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

objt1.falar()
objt2.nome = 'Rafael'
objt2.falar()

// Herança 5 - Adicionar metodos as funções já existentes
String.prototype.reverve = function(){
    return this.split('').reverse().join('')
}

console.log('Aprendendo Javascript'.reverve())

