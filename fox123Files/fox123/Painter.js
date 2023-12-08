class Painter extends Lebewesen{
    // zeile;
    // spalte;
    // Farbe = 250;
    constructor(z,s){
        this.zeile = z
        this.spalte = s
        this.Farbe = 250
    };

    inMatrixEinfügen(){
        matrix[this.zeile][this.spalte] = 4
    };

    spielzug(){
        if (this.Farbe > 0){
            this.Schritt()
            this.Farbe--
        } 
        else {
            //fertig
            console.log ("Das Bild ist fertig!")
        }
    };

    Schritt(){
        // let Feld = this.erstelleFelderTabelle()
        let Feld = this.erstelleUmgebungsTabelleOhneWesen(6)
        if (Feld.length > 0){
            let gewähltesFeld = Feld[Math.floor(random(0,Feld.length))];
            matrix[this.zeile][this.spalte] = 5;
            //für magischen Farbeimer = 6 zu = 5 ändern
            this.zeile = gewähltesFeld[0];
            this.spalte = gewähltesFeld[1];
            matrix[this.zeile][this.spalte] = 4;
        }
        else this.Farbe = 0
    };

    // erstelleFelderTabelle(){
    //     let benachbarteFelder =[
    //     [this.zeile+1,this.spalte],
    //     [this.zeile-1,this.spalte],
    //     [this.zeile,this.spalte+1],
    //     [this.zeile,this.spalte-1],
    //     [this.zeile+1,this.spalte+1],
    //     [this.zeile-1,this.spalte-1],
    //     [this.zeile-1,this.spalte+1],
    //     [this.zeile+1,this.spalte-1],
    //     ]
    //     return benachbarteFelder.filter(this.istfreiesFeld)
    // };

    // istfreiesFeld(koordinatenPaar){
    //     let zeile = koordinatenPaar[0];
    //     let spalte = koordinatenPaar[1];
    //     if (zeile >= 0
    //         && spalte >= 0
    //         && zeile < matrix.length
    //         && spalte < matrix.length
    //         && matrix[zeile][spalte] !== 6
    //         ) {
    //             return true;

    //         } else {
    //             return false;
    //         }
    // };
}

