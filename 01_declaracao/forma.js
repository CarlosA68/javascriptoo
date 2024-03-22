    class Forma {

        constructor(tipoDeForma) {

            this.tipoDeForma = 'Forma Abstrata';
            this.tipoDeForma = tipoDeForma;
        }

        imprimeForma() {

             alert(`Tipo de forma: ${this.tipoDeForma} - Área: ${this.calculaArea()}`);
            //alert(`Tipo de forma: ${this.tipoDeForma}`);

        }

        calculaArea() {
            throw new Error('O método calculaArea() deve ser implementado na subclasse.');

        }
    }