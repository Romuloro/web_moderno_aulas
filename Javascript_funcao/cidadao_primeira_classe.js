// Função pode ser trabalhada como dado. FUNÇÃO DE ALTA ORDEM.

// criar uma função de forma literal

function func1(){}

// Armazenar em uma variável
const fun2 = function(){}

// Armazenar dentro de uma array
const array = [function(a,b) {return a + b}, fun2()]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return 'Opa'}
console.log(obj.falar())

// Passar função como parametro
const run = function(fun){
    fun()
}

run(function(){console.log('Vamos a praia')})

// função como retorno de outra função
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(6)
  