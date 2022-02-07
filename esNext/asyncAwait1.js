const esperarPor = (tempo=2000) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => { resolve('Obrigado pela espera')}, tempo)
    })
}

async function executar(){
    await esperarPor()
    console.log('1')
    await esperarPor()
    console.log('2')
    await esperarPor()
    console.log('3')
}

executar()