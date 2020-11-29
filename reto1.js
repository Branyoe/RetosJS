var alturaD, alturaR, pesoD, pesoR, nombreD, nombreR;
alturaD = 1.88;
alturaR = 1.92;
pesoD = 82;
pesoR = 88;


var imc = function(altura = 0, peso = 0) {
    return peso/(Math.pow(altura, 2));
};

var imcD = imc(alturaD, pesoD);
var imcR = imc(alturaR, pesoR);

console.log(imcD);
console.log(imcR);

function imcMayor(david, raul) {
    var verdadero = false;
    if (david < raul) {
        verdadero = true; 
    }
    return verdadero;
}

console.log(`Raul tiene el IMC mayor que David: ${imcMayor(imcD, imcR)}`);