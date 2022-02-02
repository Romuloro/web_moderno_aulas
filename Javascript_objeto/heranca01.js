const uno = {
    modelo: 'Caixa',
    velMax: 180
}

const chevet = {
    modelo: 'F1996',
    velMax: 200
}

console.log(uno.__proto__)
console.log(chevet.__proto__)

// Herança 2
const avo = {
    attr1: 'A'
}

const pai = {
    __proto__: avo,
    attr2: 'B'
}

const filho = {
    __proto__: pai,
    attr3: 'C'
}

console.log(filho.attr2, filho.attr1)