Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const cards = [
    {nome: 'Dragão', atk: 1500, def: 2000},
    {nome:'Guerreiro', atk: 1200, def:1000},
    {nome:'Mago', atk: 3500, def:800},
    {nome:'Besta', atk: 900, def:4000}
]

cards2 = cards.filter2(function(c){
    return c.atk >= 1200 && c.def >= 1000
})
console.log(cards2)