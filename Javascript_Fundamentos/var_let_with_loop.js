
// Exemplo 1 - Var
for (var i = 0; i < 10; i++){}

console.log('i = ', i)

// Exemplo 2 - Let
for (let k = 0; k < 5; k++){
    k = k+1
    console.log(k)
}

//console.log('k =', k) não está visivel!!

// Exemplo 3 - Var
const funcs = []
for (var i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()


// Exemplo 4 - Let
const funcs_2 = []
for (let i = 0; i<10; i++){
    funcs_2.push(function(){
        console.log(i)
    })
}

funcs_2[2]()
funcs_2[8]()