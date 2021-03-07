// 7 - Crie uma função que receba uma string word , e outra, uma string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .


//Duas formas de resolver o exercício
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split("");
    fimPalavra = fimPalavra.split("");
    controle = true;
    for (let i = 0; i < fimPalavra.length; i++) {
      if (palavra[palavra.length-fimPalavra.length+i] != fimPalavra[i]) {
        controle = false;
      }
    }
    return controle;
  }

  // outra forma
  
  function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split("").reverse().join("");
    let inversoFimPalavra = fimPalavra.split("").reverse().join("");
  
    for (let i = 0; i < inversoFimPalavra.length; i += 1) {
      if (inversoPalavra[i] != inversoFimPalavra[i]) {
        return false;
      } else {
        return true;
      }
    }
  }
  
  console.log(verificaFimPalavra("trybe", "be")); //true
  console.log(verificaFimPalavra("joaofernando", "fernan")); //false