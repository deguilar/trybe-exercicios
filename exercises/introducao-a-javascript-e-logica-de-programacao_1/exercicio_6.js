let peca = "TORre";

if (peca.toLowerCase() === "peao") {
    console.log("vertical");
}

else if (peca.toLowerCase() === "rainha") {
    console.log("se move em qualquer direção");
}

else if (peca.toLowerCase() === "bispo") {
    console.log("se move na diagonal");
}

else if (peca.toLowerCase() === "torre") {
    console.log("se move na horizontal e na vertical");
}

else {
    console.log("erro");
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals