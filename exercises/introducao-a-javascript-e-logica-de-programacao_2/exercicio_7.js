let numbers = [5, 9, 10, 19, 70, 8, 100, 2, 35, 27];
let menorValor = 1000;

for (index = 0; index < numbers.length; index = index + 1) {
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);









// Utilizando for , descubra qual o menor valor contido no array e imprima-o;