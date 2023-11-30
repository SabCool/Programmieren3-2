function löschObjekt(zeile,spalte,array) {
    for(let i =0;i<array.length;i++){
      	let gras = array[i]
        if(gras.zeile === zeile && gras.spalte === spalte){
          array.splice(i,1)
          return;
        }
    
    }

}




function createMatrix(length) {
    let matrix = [];
    for (let zeile = 0; zeile < length; zeile++) {
        matrix.push([]);
        for (let spalte = 0; spalte < length; spalte++) {
            matrix[zeile][spalte] = 0;
        }
    }
    return matrix
}

function randomNumber(min,max) {
    return Math.floor(Math.random()*(max-min) + min);
}

function zeichneMatrix() {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            //console.log(j)
            quadrat(i, j, matrix[i][j])
        }
    }
}

let jahreszeitenFarben=[
    [235,235,235],
    [34,139,34],
    [147,154,84],
    [166,94,47]
]

function quadrat(zeile, spalte, sw) {
    let farbe=jahreszeitenFarben[jahreszeiten]
    if (sw === 1) {
        fill(farbe[0],farbe[1],farbe[2])
    } else if (sw === 2) {
        fill(255, 0, 0)
    } else if (sw === 3) {
        fill(255, 191, 0)
    }else if (sw === 4){
        fill(143,143,142)
    }else {
        fill(209, 188, 138)
    }

    

    let seite = 500 / matrix.length
    rect(spalte * seite, zeile * seite, seite, seite)
};


