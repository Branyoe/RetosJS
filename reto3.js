var cuentas = [450, 50, 600];

function rangoDeValor(x){
    if (x<100) {
        return 'a';
    }
    else if(x >= 100 & x <= 500){
        return 'b';
    }
    else{
        return 'c';
    }
}

function propinas(vec){
    var vecFinal = [];
    for (let i = 0; i < vec.length; i++) {
        if(rangoDeValor(vec[i]) === 'a'){
            vecFinal[i] = vec[i] * .20;
        }else if(rangoDeValor(vec[i]) === 'b'){
            vecFinal[i] = vec[i] * .15;
        }else if(rangoDeValor(vec[i]) === 'c'){
            vecFinal[i] = vec[i] * .10;
        }
    }
    return vecFinal;
}

function total(vecCuentas){
    var vecPropinas = propinas(cuentas);
    var vecTotal = [];
    for (let i = 0; i < vecCuentas.length; i++) {
        vecTotal[i] = vecCuentas[i] + vecPropinas[i];
    }
    return vecTotal
}

function main(){
    console.log(`Sub total: ${cuentas}`);
    console.log(`Propinas: ${propinas(cuentas)}`);
    console.log(`Total: ${total(cuentas)}`);
}

main();