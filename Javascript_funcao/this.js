const cachorro = {
    especie: 'Labrador',
    som : 'Latir',
    emitir_som (){
        console.log(this.som)
    }
}

cachorro.emitir_som()

// funcao bind -> determina onde estara o this

const ze = cachorro.emitir_som.bind(cachorro)
ze()

function latido_continuo(){
    this.som = 'AuAu'
    const self = this
    setInterval(function(){
        console.log(`${self.som}`)
    }, 1000)
}

new latido_continuo

