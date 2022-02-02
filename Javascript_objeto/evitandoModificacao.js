// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualy', preco: 5.65, tag: 'promação'
})

produto.nome = 'Leite'
produto.descricao = 'Leite UHT Integral'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome:'Julia', idade: 46}
Object.seal(pessoa)
delete pessoa.nome
pessoa.idade = 30
console.log(pessoa)
