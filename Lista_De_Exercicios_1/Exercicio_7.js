/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra. */
function calcularPrecoTotalDaCompra(quantidade) {
    let precoUnitario;

    if (quantidade < 12) {
        precoUnitario = 0.30;
    } else {
        precoUnitario = 0.25;
    }

    let precoTotal = quantidade * precoUnitario;
    return precoTotal.toFixed(2); 
}

// Exemplo de uso:
let numeroDeMaca = parseInt(prompt("Digite o número de maçãs compradas:"));
let precoTotal = calcularPrecoTotalDaCompra(numeroDeMaca);
console.log("O valor total da compra é R$ " + precoTotal);
