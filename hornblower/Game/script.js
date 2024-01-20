let matrix = [
  [0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 4],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
];

let grassArr = [];
let fressArr = [];
let predatorArr = [];
let waterArr = [];

let fr = 4;
let side = 10;
function randomNumber(min, max) {
  kommazahl = Math.random();
  return Math.round(kommazahl * max - kommazahl * min + min);
}
function getRandomMatrix(breite, höhe) {
  let matrix = [];
  let array = [];
  for (let x = 0; x <= breite; x++) {
    for (let y = 0; y <= höhe; y++) {
      if (randomNumber(0, 100) > 90) {
        array.push(3);
      } else if (randomNumber(0, 100) > 90) {
        array.push(2);
      } else if (randomNumber(0, 100) > 70) {
        array.push(4);
      } else {
        array.push(1);
      }
    }
    array = [];
    matrix.push(array);
  }
  return matrix;
}

function setup() {
  matrix = getRandomMatrix(100, 100);
  createCanvas(side * matrix[0].length + 1, side * matrix.length + 1);
  background("#acacac");
  frameRate(fr);

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] === 1) {
        grassArr.push(new Grass(x, y));
      } else if (matrix[y][x] === 2) {
        fressArr.push(new Fresser(x, y));
      } else if (matrix[y][x] === 3) {
        predatorArr.push(new Predator(x, y));
      } else if (matrix[y][x] === 4) {
        waterArr.push(new Water(x, y));
      }
    }
  }
}
function draw() {
 // const copyFresserList = [...fressArr];
//   for (let i = 0; i < copyFresserList.length; i++) {
//     if (copyFresserList[i].mul() === false) {
//       if (copyFresserList[i].eat() === false) {
//         copyFresserList[i].resetEat();
//         copyFresserList[i].move();
//       } else {
//         copyFresserList[i].plusEat();
//       }
//     } else {
//       copyFresserList[i].resetEat();
//     }
//     copyFresserList[i].die();
//   }
//   const copyGrassList = [...grassArr];
//   for (let i = 0; i < copyGrassList.length; i++) {
//     copyGrassList[i].mul();
//   }

  for (let i = 0; i < grassArr.length; i++) {
    grassArr[i].mul();
  }

  for (let i = 0; i < fressArr.length; i++) {
    let fresser = fressArr[i];
    fresser.eat();
    fresser.mul();
  }


//   const copyWaterLIst = [...waterArr];
//   for (let i = 0; i < copyWaterLIst.length; i++) {
//     copyWaterLIst[i].mul();
//   }

  for (let i = 0; i < waterArr.length; i++) {
    waterArr[i].mul();
  }

//   const copyPredatorList = [...predatorArr];
//   for (let i = 0; i < copyPredatorList.length; i++) {
//     if (copyPredatorList[i].mul() === false) {
//       if (copyPredatorList[i].eat() === false) {
//         copyPredatorList[i].resetEat();
//         copyPredatorList[i].move();
//       } else {
//         copyPredatorList[i].plusEat();
//       }
//     } else {
//       copyPredatorList[i].resetEat();
//     }
//     copyPredatorList[i].die();
//   }
  for (let i = 0; i < predatorArr.length; i++) {
    let pred = predatorArr[i];
    pred.eat();
    pred.mul();
  }

  if (randomNumber(0, 7) === 1) {
    let meteor = new Meteor(randomNumber(0, 100), randomNumber(0, 100));
    meteor.einschlag();
  }

  // Damit die Fleischfressere nicht so schnell aussterben:

  if (predatorArr.length === 0 && fressArr.length > 49) {
    for (let i = 0; i < 11; i++) {
      predatorArr.push(
        new Predator(randomNumber(0, 100), randomNumber(0, 100))
      );
    }
  }

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      fill("white");
      if (matrix[y][x] === 1) {
        fill("green");
      } else if (matrix[y][x] === 2) {
        fill("gold");
      } else if (matrix[y][x] === 3) {
        fill("red");
      } else if (matrix[y][x] === 4) {
        fill("blue");
      } else if (matrix[y][x] === 5) {
        fill("brown");
      }
      rect(x * side, y * side, side, side);
    }
  }

  console.log("grass", grassArr.length);
  console.log("fress", fressArr.length);
  console.log("pred", predatorArr.length);
  console.log("water", waterArr.length)

}
