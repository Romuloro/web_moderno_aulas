/*
O var ele pode ser encontrado de forma global, se tiver fora de uma função. Diferente do let, que é uma estrutura que trabalha somente dentro do escopo, ele só vai sair do escopo, se não tiver a uma variável com o mesmo nome a ele indequisada.

*/

var numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}
console.log('fora =', numero)
