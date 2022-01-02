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

// Exemplo 3 - Dentro de Funções
function rand({min = 0, max = 1000}){
    const valor = Math.random( ) * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min:500, max:920}))


// Exemplo 4 - Array dentro de funções
function rand_array([min = 0, max =1000]){
    if (min>max) [min, max] = [max, min]
    const valor = Math.random( ) * (max - min) + min
    return Math.floor(valor)
}

console.log(rand_array([59, 2]))


/*
Relacionais - True or False
*/

console.log('1 -', '1' == 1) //É igual, comparou só os valores
console.log('2 -', '1' === 1) //É extritamente igual, comparou os tipos
console.log('3 -', '3' != 3) //É diferente
console.log('4 -', '3' !== 3) //É extritamente diferente


/*
Lógicos 
*/

function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2 //ou
    const comprarTv50 = trab1 && trab2 // e
    const comprarTv32 = trab1 != trab2 //simulação de ou exclusivo
    const comprarnada = !comprarSorvete // operador unário
    return {comprarSorvete, comprarTv32, comprarTv50, comprarnada}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


/*
Unário
*/

let num1 = 2
let num2 = 15

num1++ // posterior ele é compilado depois
--num2 // anterior ele é compilado primeiro
console.log(num1)
console.log(num2)


/*
Ternário
*/

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Primeira parte relacional ? o que vai acontecer se for True ou False.
console.log(resultado(8.9))
console.log(resultado(6.5))



