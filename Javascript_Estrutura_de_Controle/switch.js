const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log("Quadro de Honra")
            break
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            break
        case 3: case 2: case 1: case 0:
            break
        default:
            console.log("Nota inválida")
    }
}

imprimirResultado(8.5)
