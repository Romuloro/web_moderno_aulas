// Parâmetro Variáveis
function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(0.1, 55, 8, 3.78))


// Parâmetro Padrão
function soma2(a = 0, b = 0, c = 0){
    a = isNaN(a)? 1: a
    b = isNaN(b)? 1: b
    c = isNaN(c) ? 1: c
    return a + b + c
}

console.log(soma2(1,NaN,3))
console.log(soma2(1, 22))

// Valor padrão melhorado
