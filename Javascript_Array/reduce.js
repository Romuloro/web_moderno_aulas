num = [1, 2, 3, 4]

const num2 = num.reduce(function(e, eAtual){
    console.log(e, eAtual)
    return e + eAtual 
}, 10)

console.log(num2)

const cards = [
    {nome: 'Dragão', atk: 1500, def: 2000},
    {nome:'Guerreiro', atk: 1200, def:1000},
    {nome:'Mago', atk: 3500, def:800},
    {nome:'Besta', atk: 900, def:4000}
]

const pickAtk = a => a.atk >= 1000 ? true : false

const pickdef = a => a.def >= 800 ? true : false


const acima = (b, c) => b && c

acima1000 = cards.map(pickAtk).reduce(acima)
console.log(acima1000)

acima800 = cards.map(pickdef).reduce(acima)
console.log(acima800)
