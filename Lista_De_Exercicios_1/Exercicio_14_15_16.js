/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.

16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo. */

let soma = 0;
let somaPesos = 0;
let numero;
let peso;
while (true) {
    numero = parseFloat(prompt("Digite um número decimal (digite 0 para sair):"));
    if (numero === 0) {
        break;
    }
    peso = parseFloat(prompt("Digite o peso do número:"));
    soma += numero * peso;
    somaPesos += peso;
}

if (somaPesos !== 0) {
    let mediaPonderada = soma / somaPesos;
    console.log("A média ponderada dos números digitados é:", mediaPonderada);
} else {
    console.log("Nenhum número foi digitado.");
}

let count = 0;
let num = 101; 
while (count < 50) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
        count++;
    }
    num++;
}

