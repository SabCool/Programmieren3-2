// random Number
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

// Matrix zeichnen
function zeichneMatrix() {
    for (let z = 0; z < matrix.length; z++) {
        for (let s = 0; s < matrix.length; s++) {
            // console.log(matrix[z][s])
            let r = randomNumber(0,255)
            let g = randomNumber(0,255)
            let b = randomNumber(0,255)
            if (matrix[z][s] === 0) {
                fill("#f2d491")
            } else if (matrix[z][s] === 1) {
                fill("green")
            } else if (matrix[z][s] === 2) {
                fill("darkgrey")
            } else if (matrix[z][s] === 3) {
                fill("red")
            } else if (matrix[z][s] === 4) {
                fill("white") 
            } else if (matrix[z][s] === 5) {
                fill(r,g,b)
            } else if (matrix[z][s] === 6) {
                fill("turquoise") 
            } else {
                fill("black")
            }
            rect(s * (500 / matrix.length), z * (500 / matrix.length),
                (500 / matrix.length), (500 / matrix.length))
        }
    }
}

//Matrix erstellen
function erstelleMatrix(){
    let matrix=[];
    for (let zeile = 0; zeile < 50; zeile++) {
        let z =[];
        for (let spalte = 0; spalte < 50; spalte++) {
            z.push(0);           
        }
        matrix.push(z)
    }
    return matrix
}





