let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let totalImpar = 0

for (index = 0; index < numbers.length; index = index + 1) {
    if (numbers[index] % 2 !== 0) {
        totalImpar = totalImpar + 1;
    }
}

if (totalImpar === 0) {
    console.log("nenhum valor ímpar encontrado");
}

else {
    console.log(totalImpar);
}








// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";