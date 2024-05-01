/*Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.*/

function verificarNumero(numero) {
    if (numero % 2 === 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}


function lerValor() {
    while (true) {
        let valor = parseInt(prompt("Digite um valor (digite 0 para sair):"));

        if (valor <= 0 || isNaN(valor)) {
            console.log("Programa encerrado.");
            break;
        }

        if (valor !== 0) {
            console.log(`${valor} é ${verificarNumero(valor)}.`);
        }
    }
}

lerValor();
