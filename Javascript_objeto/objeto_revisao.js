// Coleção dinânmica de pares chave/valor

const produto = new Object
produto.preco = 250
produto['marca do produto'] = 'Generico'
console.log(produto)

const carro = {
    modelo: 'C3',
    valor: 45500,
    proprietario: {
        nome: 'Raul',
        idade: 39,
        endereco: {
            logadouro: 'Rua ABC',
            numero: 489
        }
    },
    condutores: [{
        nome: 'Jefferson',
        idade: 19
    }, {
        nome: 'Maria',
        idade: 40
    }]
}

console.log(carro)

// Objeto constante usar o Object.freeze()
