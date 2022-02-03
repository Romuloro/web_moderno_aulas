const { inc } = require('./instancia_unica')
const contador1 = require('./instancia_unica')
const contador2 = require('./instancia_unica')

const contador3 = require('./instanciaNova')() // invocando a função factory
const contador4 = require('./instanciaNova')() // invocando a função factory

contador1.inc()
contador2.inc()
console.log(contador1.valor, contador2.valor)

contador3.inc()
contador3.inc()
console.log(contador3.valor, contador4.valor)