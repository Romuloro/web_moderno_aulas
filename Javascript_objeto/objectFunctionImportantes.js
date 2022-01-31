const funcionario = {
    nome: 'Patricia',
    idade: 35,
    matricula: '12ac78'
}

console.log(Object.keys(funcionario))
console.log(Object.values(funcionario))
console.log(Object.entries(funcionario))

Object.defineProperty(funcionario, 'tempoDeFirma', {
    enumerable: true,
    writable: false,
    value: '16 meses'
} )

funcionario.tempoDeFirma = '9 meses'
console.log(funcionario.tempoDeFirma)


// Object.assing(concatenação de objetos)