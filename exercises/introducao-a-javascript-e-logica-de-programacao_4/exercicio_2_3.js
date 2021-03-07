// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.


function numbers(numeros) {
    let menorNumero = 0;
    for (let indice in numeros) {
        if (numeros[menorNumero] > numeros[indice]) {
            menorNumero = indice;
        }
    }
    return menorNumero;
}

console.log(numbers([11, 3, 15, 2, -1, -7]));