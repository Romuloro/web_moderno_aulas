// Intera apartir de valores

for (let letra of 'Rômulo'){
    console.log(letra)
}

const coisas = ['copo', 'caneta', 'folha', 'lápis']

for (let cadaCoisa of coisas){
    console.log(cadaCoisa)
}

const coisasMap = new Map([
    ['copo', {vendido: true}],
    ['caneta', {vendido: false}],
    ['folha', {vendido: true}],
    ['lápis', {vendido: false}]
])

for (let coisa of coisasMap){ //coisasMap.keys().values().entries()
    console.log(coisa)
}
