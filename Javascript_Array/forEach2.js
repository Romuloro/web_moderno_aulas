Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const chegaram2 = ['Comp1', 'Comp2', 'Comp3', 'Comp4', 'Comp5']

chegaram2.forEach2(function(comp, ind){ // 3 parametros (valor, indices, array)
    console.log(`O ${comp} chegou em ${ind + 1}`)
})