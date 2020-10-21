// Exemplos de funções

function print_Soma(a, b){
    console.log(a + b)
}

print_Soma(2, 3)

// Armazenando uma função em uma variável
const func_test = function (a, b){
    return a** b
}
console.log(func_test(2, 2))

// Armazenando uma função arrow em uma variável
const test_arrow = (a, b) => {
    return a - b
}
console.log(test_arrow(9, 14))

// Return implícito
const multiplicacao = (a, b) => a * b
console.log(multiplicacao(5, 4))

