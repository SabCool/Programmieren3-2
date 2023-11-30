let matrix = createMatrix(100);
let objekteArray = [];
let jahreszeiten = 0;

function setup() {
    createCanvas(500, 500);
    frameRate(60);
    objekteArray.push(new Gras(45,45));
    
}

let i = 0;
function draw() {
    zeichneMatrix();
    for (let i = 0; i < objekteArray.length; i++) {
        objekteArray[i].spielzug();
    }
    if (i % 100 === 0) {
        console.log("neue Jahreszeit")
        jahreszeiten++;
        if (jahreszeiten >= 4) {
            jahreszeiten = 0;
        }
    }

    i++;
}









