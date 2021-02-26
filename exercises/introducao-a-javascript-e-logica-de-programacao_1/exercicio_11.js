let salarioBruto = 3000;
let aliquotaParaInss = 0;
let salarioBase ;

if (salarioBruto < 1556,94) {
    aliquotaParaInss = (8 / 100) * salarioBruto;
}

else if (salarioBruto > 1556,95 && salarioBruto <= 2594,92) {
    aliquotaParaInss = (9 / 100) * salarioBruto;
}

else if (salarioBruto > 2594,92 && salarioBruto <= 5189,82) {
    aliquotaParaInss = (11 / 100) * salarioBruto;
}

else {
    salarioBase = aliquotaParaInss;
}

salarioBase = salarioBruto - aliquotaParaInss
console.log(salarioBase);

