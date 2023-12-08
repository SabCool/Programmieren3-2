class Grasfresser extends Lebewesen{
    energie = 15;

    constructor(z, s){
        super(z, s);
        this.energie = 15;
    }

    inMatrixEinfügen(){
        matrix[this.zeile][this.spalte] = 3
    };

    spielzug(){
        if (this.energie > 30){
            this.energie = 15;
            this.plantGrasfresser()

        }
        else if (this.energie > 0){
            this.Schritt()
            // let gras = this.erstelleGrasTabelle()
            let gras = this.erstelleUmgebungsTabelle(0)
            if (gras.length > 0){
                this.energie++
            }
            else {
                this.energie--
            }
        } else {
            //stirb
            // console.log ("tot")
            matrix [this.zeile][this.spalte] = 0;
            this.ObjektLöschen(this.zeile,this.spalte)
        }
    };

    plantGrasfresser(){
        
        // let grasFelder = this.erstelleGrasTabelle()
        let grasFelder = this.erstelleUmgebungsTabelle(0)
        if (grasFelder.length > 0){
            let gewähltesFeld = grasFelder[0];
            this.ObjektLöschen(gewähltesFeld[0],gewähltesFeld[1])
             let newGrasfresser = new Grasfresser(gewähltesFeld[0],gewähltesFeld[1]);
             newGrasfresser.inMatrixEinfügen();
             objektliste.push(newGrasfresser);
        }

    };

    Schritt(){
        let gras = this.erstelleUmgebungsTabelle(0)
        if (gras.length > 0){
            let gewähltesFeld = gras[Math.floor(random(0,gras.length))];
            matrix[this.zeile][this.spalte] = 0;
            this.ObjektLöschen(gewähltesFeld[0],gewähltesFeld[1])

            this.zeile = gewähltesFeld[0];
            this.spalte = gewähltesFeld[1];
            matrix[this.zeile][this.spalte] = 3;
        }
        // else
        // console.log ("Fertig, Meister")
    };

    ObjektLöschen(zeile,spalte){
        let index =objektliste.findIndex(function(gras){
            if (gras.zeile === zeile && gras.spalte === spalte){
                return true
            } else {
                return false
            }
        })
         objektliste.splice(index,1)
    };
};