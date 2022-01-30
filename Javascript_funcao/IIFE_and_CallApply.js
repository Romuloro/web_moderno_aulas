// IIFE => Immediately Invoked Function Expression

(function (){
    console.log('Será executada na hora!')
    console.log('Foge do escopo global')
})()

function getPreco(imposto = 0, moeda = 'R$'){
    return`${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const cadeiraGamer = {
    nome: 'Cadeira Gamer R25F',
    preco: 2850,
    desc: 0.21
}

console.log(getPreco.call(cadeiraGamer))
console.log(getPreco.apply(cadeiraGamer))

console.log(getPreco.call(cadeiraGamer, 0.15, '£'))
console.log(getPreco.apply(cadeiraGamer, [0.15, '¢']))
