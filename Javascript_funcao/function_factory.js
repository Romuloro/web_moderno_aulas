// Factory simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'souza'
    }
}

function criarProduto(produto, preco){
    desconto = 0.05
    precoDescontado = preco - (preco*desconto)
    return{
        produto: produto,
        preco: preco,
        precoDescontado
    }
}

carne = criarProduto('carne', 9.78)
console.log(carne)
 
