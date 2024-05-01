/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente. */
function ordenarVetor(a, b) {
    if (a < b) {
        return [a, b];
    } else {
        return [b, a];
    }
}

// Exemplo de uso:
let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 !== valor2) {
    let valoresOrdenados = ordenarVetor(valor1, valor2);
    console.log("Valores em ordem crescente:", valoresOrdenados[0], valoresOrdenados[1]);
} else {
    console.log("Os valores iguais, portanto não é possível coloca-los em ordem crescente. Por favor, insira valores diferentes.");
}
