class Lebewesen {

    constructor(z, s) {
        this.zeile = z;
        this.spalte = s;

        this.umgebung = [
            [this.zeile + 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte - 1],

            [this.zeile + 1, this.spalte + 1],
            [this.zeile - 1, this.spalte - 1],
            [this.zeile - 1, this.spalte + 1],
            [this.zeile + 1, this.spalte - 1]
        ];

    }

    getNewCoordinates() {
        this.umgebung = [
            [this.zeile + 1, this.spalte],
            [this.zeile, this.spalte + 1],
            [this.zeile - 1, this.spalte],
            [this.zeile, this.spalte - 1],

            [this.zeile + 1, this.spalte + 1],
            [this.zeile - 1, this.spalte - 1],
            [this.zeile - 1, this.spalte + 1],
            [this.zeile + 1, this.spalte - 1]
        ];
    }

    gefilterteUmgebung(character) {
        let umgebungGefiltert = [];
        for (let i = 0; i < this.umgebung.length; i++) {
            let koordinate = this.umgebung[i]
            if (koordinate[0] < 0 || koordinate[0] >= matrix.length || koordinate[1] < 0 || koordinate[1] >= matrix.length) {

            } else if (matrix[koordinate[0]][koordinate[1]] === character) {
                umgebungGefiltert.push(koordinate);
            }
        }; 
        return umgebungGefiltert;

    }
}