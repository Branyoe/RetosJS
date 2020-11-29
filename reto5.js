var cuentas = {
    valores: [124, 98, 350, 650, 920],
    propinas: [],
    totales: [],
    calcPropYTotal: function(){
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
        for (let i = 0; i < this.valores.length; i++) {
            if(rangoDeValor(this.valores[i]) === 'a'){
                this.propinas[i] = this.valores[i] * .20;
            }else if(rangoDeValor(this.valores[i]) === 'b'){
                this.propinas[i] = this.valores[i] * .15;
            }else if(rangoDeValor(this.valores[i]) === 'c'){
                this.propinas[i] = this.valores[i] * .10;
            }
            this.totales[i] = this.valores[i] + this.propinas[i];
        }
    }
}
cuentas.calcPropYTotal();
console.log(`subtotal: ${cuentas.valores}`);
console.log(`propinas: ${cuentas.propinas}`);
console.log(`total: ${cuentas.totales}`);

