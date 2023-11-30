class RasenDestroyer extends Lebewesen{
  energie = 15;
  // zeile;
  // spalte;
  
  platziereSelbstInMatrix() {
      matrix[this.zeile][this.spalte] = 2;
  };

//   constructor(z,s) {
//     this.zeile = z;
//     this.spalte = s;
//     this.platziereSelbstInMatrix();
// }
constructor(z,s) {
  super(z,s);
  this.platziereSelbstInMatrix();
};
  spielzug() {
    if (this.energie > 30) {
      this.platzierNeuesObjekt();
      this.energie = 15;
    } else if (this.energie > 0) {
      this.machSchritt();
    } else {
        matrix[this.zeile][this.spalte] = 0;
      löschObjekt(this.zeile,this.spalte,objekteArray);
    }
  };
  platzierNeuesObjekt() {
      // let umgebung = [
      //     [this.zeile + 1, this.spalte],
      //     [this.zeile, this.spalte + 1],
      //     [this.zeile - 1, this.spalte],
      //     [this.zeile, this.spalte - 1],
      //     // schräge Bewegung
      //     [this.zeile + 1, this.spalte + 1],
      //     [this.zeile - 1, this.spalte - 1],
      //     [this.zeile - 1, this.spalte + 1],
      //     [this.zeile+ 1, this.spalte - 1]
      // ];
      // let umgebungGefiltert = [];
      // for (let i = 0; i < 4; i++) {
      //     let koordinate = umgebung[i]
      //     // hier, überprüfe ob die koordinate außerhalb der Matrix liegt
      //     if (koordinate[0] < 0 || koordinate[0] >= matrix.length || koordinate[1] < 0 || koordinate[1] >= matrix.length) {
  
      //     } else if (matrix[koordinate[0]][koordinate[1]] === 0) {
      //         umgebungGefiltert.push(koordinate);
      //     }
      // };
  
      // if(umgebungGefiltert.length > 0){
      //   let koordinate = umgebungGefiltert[randomNumber(0,umgebungGefiltert.length)];
      //     objekteArray.push(new RasenDestroyer(koordinate[0],koordinate[1]));
      // }
      // return;

      
        let erdeListe = this.gefilterteUmgebung(0)
      
           if(erdeListe.length > 0){
              let koordinate = erdeListe[randomNumber(0,erdeListe.length)];
                objekteArray.push(new RasenDestroyer(koordinate[0],koordinate[1]));
            }
          return;
      }
      
  
  machSchritt() {
      // let umgebung = [
      //   [this.zeile + 1, this.spalte],
      //   [this.zeile, this.spalte + 1],
      //   [this.zeile - 1, this.spalte],
      //   [this.zeile, this.spalte - 1],
      //   [this.zeile + 1, this.spalte + 1],
      //   [this.zeile + 1, this.spalte - 1],
      //   [this.zeile - 1, this.spalte - 1],
      //   [this.zeile - 1, this.spalte + 1]
      // ];
      // let umgebungGefiltert = [];
      // for (let i = 0; i < 8; i++) {
      //     let koordinate = umgebung[i]
      //     // hier, überprüfe ob die koordinate außerhalb der Matrix liegt
      //     if (koordinate[0] < 0 || koordinate[0] >= matrix.length || koordinate[1] < 0 || koordinate[1] >= matrix.length) {
  
      //     } else if (matrix[koordinate[0]][koordinate[1]] === 1) {
      //         umgebungGefiltert.push(koordinate);
      //     }
      // };
  
      this.getNewCoordinates();
      let grasListe = this.gefilterteUmgebung(1)

      if(grasListe.length > 0){
        let koordinate = grasListe[randomNumber(0,grasListe.length)];
        matrix[this.zeile][this.spalte] = 0;
          löschObjekt(koordinate[0],koordinate[1],objekteArray);
        this.zeile = koordinate[0];
        this.spalte = koordinate[1];
        matrix[this.zeile][this.spalte] = 2;
        this.energie++
      }
        else{
        this.energie--
      }
      return;
  };
}
  // };