
//Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit.

function converterCelsiusParaFahrenheit(temperaturaEmCelsius){

    f = (temperaturaEmCelsius * 9/5) + 32

    return f
}

let fahrenheit = converterCelsiusParaFahrenheit(29)

console.log(fahrenheit)