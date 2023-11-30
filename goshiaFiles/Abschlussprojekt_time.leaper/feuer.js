class Feuer {
    zeile;
    spalte;
    wartezeit = 3;
    energie = 50;
    constructor(z, s) {
        this.zeile = z;
        this.spalte = s;
        matrix[this.zeile][this.spalte] = 3;
    };
    spielzug() {
        //console.log(this.energie)
        if (this.energie === 0) {
            matrix[this.zeile][this.spalte] = 0
            objekteArray.push(new Asche(this.zeile, this.spalte));
            löschObjekt(this.zeile,this.spalte,objekteArray);
        }
        else {
            this.energie--;
            if (this.wartezeit === 0) {
                this.breiteDichAus();

            }
            else {
                this.wartezeit--;
            }
        }

    };
    breiteDichAus() {
        let umgebung = [
            [this.zeile + 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte + 1],
            [this.zeile + 1, this.spalte - 1],
            [this.zeile - 1, this.spalte - 1],
            [this.zeile - 1, this.spalte + 1]
        ];
        let umgebungGefiltert = [];
        for (let i = 0; i < 8; i++) {
            let koordinate = umgebung[i]
            // hier, überprüfe ob die koordinate außerhalb der Matrix liegt
            if (koordinate[0] < 0 || koordinate[0] >= matrix.length || koordinate[1] < 0 || koordinate[1] >= matrix.length) {

            } else if (matrix[koordinate[0]][koordinate[1]] === 1 || matrix[koordinate[0]][koordinate[1]] === 2) 
            {
                umgebungGefiltert.push(koordinate);
            }
        };

        if (umgebungGefiltert.length > 0) {
            let koordinate = umgebungGefiltert[randomNumber(0, umgebungGefiltert.length)];
            löschObjekt(koordinate[0], koordinate[1], objekteArray);
            objekteArray.push(new Feuer(koordinate[0], koordinate[1]));
        }

        return;


    }

};