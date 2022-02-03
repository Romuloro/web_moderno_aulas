Array.prototype.map2 = function(callback){
    newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Lapizeira", "preco": 7.80}',
    '{"nome": "folha", "preco": 0.03}',
]

// Retornar uma array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

carrinho2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(carrinho2)
