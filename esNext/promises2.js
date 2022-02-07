const esperarPor = (tempo=2000) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('Executando o resolve...')
            resolve('Obrigado pela espera')
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)
    .then(esperarPor)
    .then(esperarPor)
    .then(console.log)