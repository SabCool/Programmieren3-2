class Gras extends Lebewesen {
    energie = 0;

    constructor(z, s){
        super(z,s);
        this.energie = 0;
    }

    inMatrixEinfügen() {
        matrix[this.zeile][this.spalte] = 1
    };

    spielzug() {
        //Geschwindigkeit des Graswachstums
        if (this.energie > 4) {
            this.energie = 0
            this.plantGras();
            //mach etwas
        } else {
            //schlaf
            this.energie++;
        }
    };

    plantGras() {
        let erdeFelder = this.erstelleUmgebungsTabelle(0)
        if (erdeFelder.length > 0) {
            let gewaehltesFeld = erdeFelder[Math.floor(random(0, erdeFelder.length))];
            let newGras = new Gras(gewaehltesFeld[0], gewaehltesFeld[1]);
            newGras.inMatrixEinfügen();
            objektliste.push(newGras);
        }

    };
}