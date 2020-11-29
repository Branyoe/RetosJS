//declaración de variables
var scoreAvir = [89, 120, 103];
var scoreJorge = [116, 94, 123];

// 1. Calculo de promedio de ambos equipos
function promedio (vec) {
    var suma = 0;
    for (let i = 0; i < vec.length; i++) {
        suma += vec[i];
    }
    var prom = suma/(vec.length);
    return prom;
}

// 2. Impresion en consola del ganador 
console.log(`El ganador es ${promedio(scoreJorge) < promedio(scoreAvir) ? 'Avir' : 'Jorge'}`);

//3. Cambio de puntos e impresion en consola 
scoreAvir[0] = 300;
console.log(`El ganador es ${promedio(scoreJorge) < promedio(scoreAvir) ? 'Avir' : 'Jorge'}`);

//agregación de Alexa
var scoreAlexa = [97, 134, 105];
function ganador(vecAv, vecJo, vecAl){
    var promAv = promedio(vecAv);
    var promJo = promedio(vecJo);
    var promAl = promedio(vecAl);
 
    if(promAv > promJo){
        if (promAv > promAl) {
            return 'Avir';
        }
        else{
            return 'Alexa';
        }
    }
    else{
        if (promJo > promAl) {
            return 'Jorge';
        }
        else{
            return 'Alexa';
        }
    }
}
console.log(`El ganador es ${ganador(scoreAvir, scoreJorge, scoreAlexa)}`);