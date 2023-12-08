class Lebewesen {
    zeile;
    spalte;

    constructor(z, s) {
        this.zeile = z
        this.spalte = s
        this.benachbarteFelder = [
            [this.zeile + 1, this.spalte],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte + 1],
            [this.zeile - 1, this.spalte - 1],
            [this.zeile - 1, this.spalte + 1],
            [this.zeile + 1, this.spalte - 1]
        ]
    }

    erstelleUmgebungsTabelle(charakter) {
        this.benachbarteFelder = [
            [this.zeile + 1, this.spalte],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile, this.spalte - 1],
            [this.zeile + 1, this.spalte + 1],
            [this.zeile - 1, this.spalte - 1],
            [this.zeile - 1, this.spalte + 1],
            [this.zeile + 1, this.spalte - 1]
        ]
        return this.benachbarteFelder.filter((koordinatenPaar) => this.istWesen(koordinatenPaar, charakter))
    };

    istWesen(koordinatenPaar, charakter) {
        let zeile = koordinatenPaar[0];
        let spalte = koordinatenPaar[1];
        if (zeile >= 0
            && spalte >= 0
            && zeile < matrix.length
            && spalte < matrix.length
            && matrix[zeile][spalte] === charakter
        ) {
            return true;

        } else {
            return false;
        }
    }

    erstelleUmgebungsTabelleOhneWesen(charakter) {
        return this.benachbarteFelder.filter((koordinatenPaar) => this.istNichtWesen(koordinatenPaar, charakter))
    };

    istNichtWesen(koordinatenPaar, charakter) {
        let zeile = koordinatenPaar[0];
        let spalte = koordinatenPaar[1];
        if (zeile >= 0
            && spalte >= 0
            && zeile < matrix.length
            && spalte < matrix.length
            && matrix[zeile][spalte] !== charakter
        ) {
            return true;

        } else {
            return false;
        }
    }

    // erstelleErdeTabelle() {
    //     let benachbarteFelder = [
    //         [this.zeile + 1, this.spalte],
    //         [this.zeile - 1, this.spalte],
    //         [this.zeile, this.spalte + 1],
    //         [this.zeile, this.spalte - 1],
    //         [this.zeile + 1, this.spalte + 1],
    //         [this.zeile - 1, this.spalte - 1],
    //         [this.zeile - 1, this.spalte + 1],
    //         [this.zeile + 1, this.spalte - 1]
    //     ]
    //     return benachbarteFelder.filter(this.istFeld(1))
    // };

    // istErde(koordinatenPaar) {
    //     let zeile = koordinatenPaar[0];
    //     let spalte = koordinatenPaar[1];
    //     if (zeile >= 0
    //         && spalte >= 0
    //         && zeile < matrix.length
    //         && spalte < matrix.length
    //         && matrix[zeile][spalte] === 0
    //     ) {
    //         return true;

    //     } else {
    //         return false;
    //     }
    // }

    // erstelleGrasTabelle() {
    //     let benachbarteFelder = [
    //         [this.zeile + 1, this.spalte],
    //         [this.zeile - 1, this.spalte],
    //         [this.zeile, this.spalte + 1],
    //         [this.zeile, this.spalte - 1],
    //         // Rasendestroyer auch quer bewegen
    //         // [this.zeile+1,this.spalte+1],
    //         // [this.zeile-1,this.spalte-1],
    //         // [this.zeile-1,this.spalte+1],
    //         // [this.zeile+1,this.spalte-1],
    //     ]
    //     return benachbarteFelder.filter(this.istGras)
    // };

    // istGras(koordinatenPaar) {
    //     let zeile = koordinatenPaar[0];
    //     let spalte = koordinatenPaar[1];
    //     if (zeile >= 0
    //         && spalte >= 0
    //         && zeile < matrix.length
    //         && spalte < matrix.length
    //         && matrix[zeile][spalte] === 1
    //     ) {
    //         return true;

    //     } else {
    //         return false;
    //     }
    // };
}