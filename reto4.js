
var David = {
    nombre: 'David',
    masa: 82,
    altura: 1.88,
    calcIMC: function(){
        this.IMC = this.masa / Math.pow(this.altura, 2);
        return this.IMC;
    }
}

var Raul = {
    nombre: 'Raul',
    masa: 88,
    altura: 1.92,
    calcIMC: function(){
        this.IMC = this.masa / Math.pow(this.altura, 2);
        return this.IMC;
    }
}

function imcMayor(imcRaul, imcDavid) {
    if (imcRaul > imcDavid) {
        return `${Raul.calcIMC()} ${Raul.nombre} tiene el mayor IMC`;
    }
    else if(imcRaul < imcDavid){
        return `${David.calcIMC()} ${David.nombre} tiene el mayor IMC`;
    }else if(imcDavid === imcRaul){
        return `${David.calcIMC()} El IMC es igual en ambos`;
    }
    
}

console.log(`IMC de ${Raul.nombre}: ${Raul.calcIMC()}`);
console.log(`IMC de ${David.nombre}: ${David.calcIMC()}`);
console.log(`\nCon un valor de ${imcMayor(Raul.IMC, David.IMC)}`);