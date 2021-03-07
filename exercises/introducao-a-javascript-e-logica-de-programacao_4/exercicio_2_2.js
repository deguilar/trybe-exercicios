// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.


function numbers(numeros) {
    let maiorNumero = 0;
    for (let indice in numeros) {
        if (numeros[maiorNumero] < numeros[indice]) {
            maiorNumero = indice;
        }
    }
    return maiorNumero;
}

console.log(numbers([1, 3, 15, 2, 1, 7]));