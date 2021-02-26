let xadrez = "Rainha";
switch (xadrez.toLowerCase()) {
    case "bispo":
        console.log("se move em diagonal")
        break;
    case "rei":
        console.log("se move na vertical e na horizontal")
        break;
    case "torre" :
        console.log("se move reto")
        break;
    case "rainha" :
        console.log("se move de todas as formas")
        break;;
    case "pipa" :
        console.log("erro")
        break;
}

// Poderia ter feito assim também