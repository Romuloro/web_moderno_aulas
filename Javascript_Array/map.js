const num = [1, 2, 3, 4, 5]

// For com propósito
let resultado = num.map((e)=>{
    return e * 2
})

console.log(resultado)

const div10 = e => e/10

const mult100 = e => e*100

const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado2 = num.map(div10).map(mult100).map(paraDinheiro)
console.log(resultado2)