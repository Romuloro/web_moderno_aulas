const peso1 = 2.0
const peso2 = Number('3.0')

console.log(peso1, peso2)
console.log(typeof peso1, typeof peso2)

 let prova1 = 8.45
 let prova2 = 6.78

const nota_media_ponderada = ((prova1 * peso1) + (prova2*peso2))/ (peso1 + peso2)
console.log('A nota do aluna(o) é :', nota_media_ponderada.toFixed(2))

/*
A função .toFixed(n) fixa a casa decimal em n casas decimais.

Numbers - pode colocar os inteiros e floats.
*/

console.log((23.55555555555555555).toFixed(3))
