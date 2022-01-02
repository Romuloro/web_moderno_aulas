function tratarErroELancar(erro){
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}


function digitarNomeCapsLock(obj){
    try{
    console.log(obj.name.toUppercase()+ '!!!')
    } catch (e){
        tratarErroELancar(e)
    }
    finally{
        console.log('final')
    }
}


const obj = {nome: 'Rômulo'}

digitarNomeCapsLock(obj)
