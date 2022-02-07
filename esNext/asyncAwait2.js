const gerarNumerosEntre = (min, max, numProibidos) =>{
    if (min >= max){
        let [min, max] = [max, min]
    }

    return new Promise((resolve, reject) =>{
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        if (numProibidos.includes(aleatorio)){
            reject('Número repetido!')
        }else{
        resolve(aleatorio)
        }
    })
}

const gerarMegaSena = async(qtdNumeros) =>{
    try{
        const numeros =[]
        for (let _ of Array(qtdNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1,60, numeros))
        }
        return numeros
    } catch (e) {
        throw "Que chato em!"
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)