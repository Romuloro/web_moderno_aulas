function int_numeric_random(min, max){
    const value = Math.random()* (max - min) + min
    return Math.floor(value)
}

let sorted_number = 0

while (sorted_number != 14) {
    sorted_number = int_numeric_random(-20, 20)
    console.log(`Opção escolhida foi ${sorted_number}.`)
}

console.log('Até a proxima!')


