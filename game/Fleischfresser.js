class Fleischfresser extends LivingCreature {
    // zeile;
    // spalte;
    energie = 200;

    // constructor(z,s) {
    //     this.zeile = z;
    //     this.spalte = s;
    // };
    spielzug() {
        console.log("ENERGIE",this.energie)
        if(this.energie > 300) {
            this.energie = 200;
            this.pflanzNeuesFleischfresserObject();
        } else if (this.energie > 0) {
            this.machSchrittNachVorne();
            this.energie--;
        } else {
            matrix[this.zeile][this.spalte] = 0;
            this.loeschObject(this.zeile,this.spalte);
        }
        
    }
    pflanzNeuesFleischfresserObject() {
        let grasFelder = this.erstelleGrasfelderTabelle();
        if (grasFelder.length > 0) {
            let gewähltesFeld = grasFelder[0];
            this.loeschObject(gewähltesFeld[0],gewähltesFeld[1]);
            let neuesFleischfresserObjekt = new Fleischfresser(gewähltesFeld[0],gewähltesFeld[1]);
            neuesFleischfresserObjekt.platziereSelbstInMatrix();
            objekteListe.push(neuesFleischfresserObjekt);
        }
    }

    platziereSelbstInMatrix() {
        matrix[this.zeile][this.spalte] = 3;
    }
    machSchrittNachVorne() {
        let grasFelder = this.erstelleGrasfelderTabelle();
        let grasfresserFelder = this.erstelleGrasfresserfelderTabelle();
        if (grasFelder.length > 0) {
            if(grasfresserFelder.length > 0) {
                let ausgesuchtesFeld = Math.floor(Math.random() * grasfresserFelder.length)
                let gewähltesFeld = grasfresserFelder[ausgesuchtesFeld];
                matrix[this.zeile][this.spalte] = 0;
                //console.log(gewähltesFeld.toString(),this.zeile,this.spalte);
                this.loeschObject(gewähltesFeld[0],gewähltesFeld[1]);
                this.zeile = gewähltesFeld[0];
                this.spalte = gewähltesFeld[1];
                matrix[this.zeile][this.spalte] = 3;
                this.energie+=25;
            } else {
                let ausgesuchtesFeld = Math.floor(Math.random() * grasFelder.length)
                let gewähltesFeld = grasFelder[ausgesuchtesFeld];
               let neuesGrasObjekt = new Gras(this.zeile,this.spalte);
                neuesGrasObjekt.platziereSelbstInMatrix();
                objekteListe.push(neuesGrasObjekt);
                //console.log(gewähltesFeld.toString(),this.zeile,this.spalte);
                this.loeschObject(gewähltesFeld[0],gewähltesFeld[1]);
                this.zeile = gewähltesFeld[0];
                this.spalte = gewähltesFeld[1];
                matrix[this.zeile][this.spalte] = 3;
            }
        } else if(grasfresserFelder.length > 0) {
            let ausgesuchtesFeld = Math.floor(Math.random() * grasfresserFelder.length);
            let gewähltesFeld = grasfresserFelder[ausgesuchtesFeld];
            matrix[this.zeile][this.spalte] = 0;
            //console.log(gewähltesFeld.toString(),this.zeile,this.spalte);
            this.loeschObject(gewähltesFeld[0],gewähltesFeld[1]);
            this.zeile = gewähltesFeld[0];
            this.spalte = gewähltesFeld[1];
            matrix[this.zeile][this.spalte] = 3;
            this.energie+=25;
        }

    }
    loeschObject(zeile,spalte) {
        let index  = objekteListe.findIndex(function(grasObjekt) {
            if(grasObjekt.zeile === zeile && grasObjekt.spalte === spalte) {
                return true;
            } else {
                return false;
            }
        });
        objekteListe.splice(index,1);
    }

    berechneUmgebung() {
        this.umgebung = [
            [this.zeile - 1, this.y - 1],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte + 1],
            [this.zeile - 1, this.spalte],
            [this.zeile + 1, this.spalte],
            [this.zeile - 1, this.spalte + 1],
            [this.zeile, this.spalte + 1],
            [this.zeile + 1, this.spalte +1]
        ]
    }
    erstelleGrasfresserfelderTabelle() {
        this.berechneUmgebung();
        return this.umgebung.filter((koordinatenpaar) => this.istFeld(koordinatenpaar, 2));
    }

    // erstelleGrasfresserfelderTabelle() {
    //     let benachbarteFelder = [
    //         [this.zeile+1,this.spalte],
    //         [this.zeile-1,this.spalte],
    //         [this.zeile,this.spalte+1],
    //         [this.zeile,this.spalte-1],
    //     ]
    //     return benachbarteFelder.filter(this.istGrasfresser);
    // }
    // istGrasfresser(koordinatenPaar) {
    //     let zeile = koordinatenPaar[0];
    //     let spalte = koordinatenPaar[1];
    //     if (zeile >= 0
    //         && spalte >= 0
    //         && zeile < matrix.length
    //         && spalte < matrix.length
    //         && matrix[zeile][spalte] === 2
    //     ) {
    //         return true;
    //     }  else {
    //         return false;
    //     }
    // }
    erstelleGrasfelderTabelle() {
        let benachbarteFelder = [
            [this.zeile+1,this.spalte],
            [this.zeile-1,this.spalte],
            [this.zeile,this.spalte+1],
            [this.zeile,this.spalte-1],
        ]
        return benachbarteFelder.filter(this.istGras);
    }
    istGras(koordinatenPaar) {
        let zeile = koordinatenPaar[0];
        let spalte = koordinatenPaar[1];
        if (zeile >= 0
            && spalte >= 0
            && zeile < matrix.length
            && spalte < matrix.length
            && matrix[zeile][spalte] === 1
        ) {
            return true;
        }  else {
            return false;
        }
    }
}