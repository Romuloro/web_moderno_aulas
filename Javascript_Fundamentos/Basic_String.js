const escola = "Nata"

let segundo = escola.charAt(1) 
console.log(segundo)
console.log(escola.charAt(3)) 
console.log(escola.charCodeAt(0)) // O digito do elemento na entrada 0.
console.log(escola.indexOf('t')) // Devolve o índice onde se encontra o 't'.

console.log(escola.substring(1)) // Tira um character da string, começando de frente pra traz.
console.log(escola.substring(0, 2)) // Faz um slice de [0,2]

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(2, '8')) // Substitue a entrada do índice 2 pelo character d.

console.log('Ana, Maria, Pedro'.split(',')) //Transformar uma string em uma array.
