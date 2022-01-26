// Guardar em uma variavel

const soma = function(x,y){
    return x + y
}

const divisao = (x,y) => x/y

const imprimirResultado = (a,b,operacao = soma) =>{
    console.log(operacao(a, b))
}

imprimirResultado(4,6)
imprimirResultado(7, 8, divisao)
