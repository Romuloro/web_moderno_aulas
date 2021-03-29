/* Usando o var
 conceito = Escopo, até onde essa variável é visível.
 O var no js é visível em todos os locais. Se e somente se não for citada em uma função.

 Variáveis globias podem ser acessadas de qualquer local, porém pode dar problemas de subscrição.

*/

//Exemplo 1

{{{var sera = 'Será??'}}}
console.log(sera)

function testando (){
    var local = 45
    console.log(local)
}


// Exemplo 2
var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)

//testando()
//console.log(local)

