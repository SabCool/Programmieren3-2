class Gras extends Lebewesen{
    
    energie = 0;
    
    constructor(z,s) {
        super(z,s);
        matrix[this.zeile][this.spalte] = 1;
    };
    spielzug() {
        if (this.energie > 5) {
            this.pflanzNeuesGrasfeld();
            this.energie = 0;
        } else {
            this.energie++;
        }

        if (randomNumber(0, 100000) === 1) {
            objekteArray.push(new Feuer(this.zeile, this.spalte));
        }

        if (randomNumber(0, 1000) === 1) {
            objekteArray.push(new RasenDestroyer(this.zeile, this.spalte));
        }

    };
    pflanzNeuesGrasfeld() {
      let grasListe = this.gefilterteUmgebung(0)
    
         if(grasListe.length > 0){
            let koordinate = grasListe[randomNumber(0,grasListe.length)];
              objekteArray.push(new Gras(koordinate[0],koordinate[1]));
          }
        return;
    }

};