/*Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N */



function calcularTabuadaDoNumero() {
    for (let i = 1; i <= 5; i++) {
        let N = parseInt(prompt("Digite o valor " + i + " para N:"));
        console.log("Tabuada para N = "+ N + ":");
        for (let i = 1; i <= N; i++) {
            for (let j = 1; j <= N; j++) {
                console.log(i + " X " + j + " = " + (i * j));
            }
            console.log(""); 
        }
    }
}

// Chamada da função principal
calcularTabuadaDoNumero();
