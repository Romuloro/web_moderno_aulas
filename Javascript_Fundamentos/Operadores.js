/*
Operador Atribuidores
    = passa o endereço de memória
    += atribuição com soma
    -= atribuição com diminuição
    *= atribuição com multiplicação
    /= atribuição com divisão
    %= se a tivição da variavél tem resto ou não
*/

/*
Destructuring - Tirar algo da estrutura
*/

//Exemplo 1 - Objeto
const pessoa = {
    nome: 'Ana',
    idade: 12
}

const { nome, idade } = pessoa

console.log(pessoa)
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

// Exemplo 2 - Array

const [n1, n2, , n4, n5=7] = [10, 45, 8, 6]
console.log(n1,n2,n4,n5)
