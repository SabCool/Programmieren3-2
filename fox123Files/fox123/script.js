// Hauptscript
let matrix = erstelleMatrix();
let objektliste = [new Grasfresser(20,20)];
    //new Painter(20,20)];


//Anzahl der random platzierten Objekten
    for (let i = 0; i < 500; i++) {
        let zeile = randomNumber(0,matrix.length)
        let spalte = randomNumber(0,matrix.length)
        objektliste.push(new Gras(zeile,spalte))
    };

function setup() {
    createCanvas(500, 500)
    background("lightgray")
    frameRate (20)
    // gras in der Matrix auftauchen lassen
    for (let z = 0; z < objektliste.length; z = z+1){
        objektliste[z].inMatrixEinfügen()
    }

};

function draw() {
    // gras um ein Feld bewegen
    for (let z = 0; z < objektliste.length; z = z+1){
        objektliste[z].spielzug()
    }
    // console.log(objektliste.length)
    zeichneMatrix();
    

};
