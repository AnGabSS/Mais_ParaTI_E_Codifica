/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

function verificarTipoDeTriangulo(A, B, C) {
    if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
            return "Esse triângulo é equilátero";
        } else if (A === B || A === C || B === C) {
            return "Esse triângulo é isósceles";
        } else {
            return "Esse triângulo é escaleno";
        }
    } else {
        return "Não é um triângulo";
    }
}

let ladoA = parseFloat(prompt("Digite o valor do lado A:"));
let ladoB = parseFloat(prompt("Digite o valor do lado B:"));
let ladoC = parseFloat(prompt("Digite o valor do lado C:"));

let tipoTriangulo = verificarTipoDeTriangulo(ladoA, ladoB, ladoC);
console.log(tipoTriangulo);
