const gerarNumerosEntre = (min, max, tempo) =>{
    if (min >= max){
        let [min, max] = [max, min]
    }

    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

Promise.all([gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 1000)])
    .then(console.log)