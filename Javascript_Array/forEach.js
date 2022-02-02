// for each 1
const chegaram = ['Comp1', 'Comp2', 'Comp3', 'Comp4', 'Comp5']

chegaram.forEach(function(comp, ind){ // 3 parametros (valor, indices, array)
    console.log(`O ${comp} chegou em ${ind + 1}`)
})

chegaram.forEach((comp, ind) => console.log(`O ${comp} chegou em ${ind + 1}`)) // Arrow

const chegada = (comp, ind) => console.log(`O ${comp} chegou em ${ind + 1}`) // guardando em uma variável
chegaram.forEach(chegada)
