function Carro(velocidade = 200, delta=5){
    // metodo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidade){
            velocidadeAtual += delta
        } else{
            velocidadeAtual = velocidadeMax
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function (){
        return velocidadeAtual
    }
}

const uno = new Carro(60, 5)
uno.acelerar()
console.log(uno.getVelocidadeAtual())