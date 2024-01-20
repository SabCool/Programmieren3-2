class Lebewesen {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.neighbors = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
  }
  findFields(symbol, symbol2 = 100) {
    let found = [];
    for (let i = 0; i < this.neighbors.length; i++) {
      let pos = this.neighbors[i];
      let posX = pos[0];
      let posY = pos[1];
      if (
        posX >= 0 &&
        posY >= 0 &&
        posX < matrix[0].length &&
        posY < matrix.length
      ) {
        if (matrix[posY][posX] === symbol || matrix[posY][posX] === symbol2) {
          found.push(pos);
        }
      }
    }
    return found;
  }
}

class Grass extends Lebewesen {
  constructor(x, y) {
    super(x, y);
    this.colorCode = 1;
    this.rounds = 0;
  }

  mul() {
    this.rounds += 1;
    if (this.rounds >= 6) {
      let emptyFields = this.findFields(0, 5);
      if (emptyFields.length > 0) {
        let pos = random(emptyFields);
        let newX = pos[0];
        let newY = pos[1];
        // grassArr.push(new Grass(newX, newY));
        if (newX >= 0 && newY >= 0 && newX < 100 && newY < 100) {
          matrix[newY][newX] = this.colorCode;
          grassArr.push(new Grass(newX, newY));
        }
      }
      this.rounds = 0;
    }
  }
}

class Fresser extends Lebewesen {
  constructor(x, y) {
    super(x, y);
    this.eaten = 0;
    this.notEaten = 0;
    this.colorCode = 2;
    this.rounds = 0;
    // Nachbarfelder
  }

  findFields(symbol, symbol2 = 100) {
    this.neighbors = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
    return super.findFields(symbol, symbol2);
  }

  move() {
    // this.rounds += 1
    // if (this.rounds >= 1) {
    // Problem - Meteor ... wird überschrieben aber meteor liste ggf. nicht
    //let emptyFields = this.findFields(0, 5)
    let emptyFields = this.findFields(0, 5);
    if (emptyFields.length > 0) {
      let pos = random(emptyFields);
      let newX = pos[0];
      let newY = pos[1];
      matrix[this.y][this.x] = 0;
      matrix[newY][newX] = this.colorCode;
      this.x = newX;
      this.y = newY;
    }
    // this.rounds = 0
    // }
  }
  eat() {
    // this.rounds += 1
    // let returnTrue = false
    // if (this.rounds >= 1) {
    let grassFields = this.findFields(1);
    if (grassFields.length > 0) {
      let pos = random(grassFields);
      let newX = pos[0];
      let newY = pos[1];
      matrix[this.y][this.x] = 0;
      matrix[newY][newX] = this.colorCode;
      this.x = newX;
      this.y = newY;
      for (let i = 0; i < grassArr.length; i++) {
        let grassObj = grassArr[i];
        if (grassObj.x === this.x && grassObj.y === this.y) {
          grassArr.splice(i, 1);
        }
      }
      this.plusEat();
      return true;

      // }
      // this.rounds = 0
    } else {
      this.resetEat();
      this.move();
      if (this.notEaten >= 5) {
        this.die();
      }
      return false;
    }
  }
  resetEat() {
    this.eaten = 0;
    this.notEaten++;
  }
  plusEat() {
    this.eaten++;
    this.notEaten = 0;
  }

  mul() {
    // let returnEaten = false
    if (this.eaten >= 5) {
      // Problem - Meteor ... wird überschrieben aber meteor liste ggf. nicht
      //let emptyFields = this.findFields(0, 5)
      let emptyFields = this.findFields(0, 5);
      if (emptyFields.length > 0) {
        // returnEaten = true
        let pos = random(emptyFields);
        let newX = pos[0];
        let newY = pos[1];
        fressArr.push(new Fresser(newX, newY));
        matrix[newY][newX] = this.colorCode;
        this.eaten = 0;
      }
    }
    // return returnEaten
  }

  die() {
    matrix[this.y][this.x] = 0;
    for (let i = 0; i < fressArr.length; i++) {
      let fressObj = fressArr[i];
      if (fressObj.x === this.x && fressObj.y === this.y) {
        fressArr.splice(i, 1);
        break;
      }
    }
  }
}
class Predator extends Lebewesen {
  constructor(x, y) {
    super(x, y);
    this.eaten = 0;
    this.notEaten = 0;
    this.colorCode = 3;
    this.rounds = 0;
  }

  findFields(symbol, symbol2 = 100) {
    this.neighbors = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],
    ];
    return super.findFields(symbol, symbol2);
  }

  move() {
    // this.rounds += 1
    // if (this.rounds >= 1) {
    let emptyFields = this.findFields(0, 5);
    if (emptyFields.length > 0) {
      let pos = random(emptyFields);
      let newX = pos[0];
      let newY = pos[1];
      matrix[this.y][this.x] = 0;
      matrix[newY][newX] = this.colorCode;
      this.x = newX;
      this.y = newY;
    }
    //     this.rounds = 0
    // }
  }
  eat() {
    // this.rounds += 1
    // let returnTrue = false
    // if (this.rounds >= 1) {
    let fresserfields = this.findFields(2);
    if (fresserfields.length > 0) {
      let pos = random(fresserfields);
      let newX = pos[0];
      let newY = pos[1];
      matrix[this.y][this.x] = 0;
      matrix[newY][newX] = this.colorCode;
      this.x = newX;
      this.y = newY;
      for (let i = 0; i < fressArr.length; i++) {
        let fressObj = fressArr[i];
        if (fressObj.x === this.x && fressObj.y === this.y) {
          fressArr.splice(i, 1);
          break;
        }
      }
      this.plusEat();
      return true;
    } else {
      this.resetEat();
      this.move();
      if (this.notEaten >= 8) {
        this.die();
      }
      return false;
    }
    // this.rounds = 0
    // }
    // return returnTrue
  }
  mul() {
    // let returnEaten = false
    if (this.eaten >= 5) {
      let emptyFields = this.findFields(0, 5);
      if (emptyFields.length > 0) {
        // returnEaten = true
        let pos = random(emptyFields);
        let newX = pos[0];
        let newY = pos[1];
        fressArr.push(new Predator(newX, newY));
        matrix[newY][newX] = this.colorCode;
        this.eaten = 0;
      }
    }
    // return returnEaten
  }
  resetEat() {
    this.eaten = 0;
    this.notEaten++;
  }
  plusEat() {
    this.eaten++;
    this.notEaten = 0;
  }
  die() {
    matrix[this.y][this.x] = 0;
    for (let i = 0; i < predatorArr.length; i++) {
      let preObj = predatorArr[i];
      if (preObj.x === this.x && preObj.y === this.y) {
        predatorArr.splice(i, 1);
        break;
      }
    }
  }
}
// Das Wasser wird zufällig auf dem Bildschirm gespawnt, es kennt seine Nachbarfelder und kann sich alle 6 Runden in max. 3 umliegende freiliegende Felder vermehren.
// Die Farbe ist blau. Hat Gras um sich herum Wasser, so "frisst" es das Wasser. Gleichzeitig kann sich das Grasobjekt, das das Wasser "gefressen" hat in alle umliegenden, freien
// Nachbarfelder vermehren. Das Wasser macht das gras also stärker
class Water extends Lebewesen {
  constructor(x, y) {
    super(x, y);
    this.colorCode = 4;
    this.rounds = 0;
  }
  mul() {
    this.rounds += 1;
    let grasfields = this.findFields(1);
    if (this.rounds >= 6 && grasfields.length > 0) {
      this.giessen(grasfields);
      this.rounds = 0;
    } else if (this.rounds >= 6) {
      let emptyFields = this.findFields(0, 5);
      for (let i = 0; i < emptyFields.length; i++) {
        if (emptyFields.length >= 3 && i >= 3) {
          break;
        }
        let pos = random(emptyFields);
        emptyFields.splice(emptyFields.indexOf(pos));
        let newX = pos[0];
        let newY = pos[1];
        waterArr.push(new Water(newX, newY));
        matrix[newY][newX] = this.colorCode;
      }
      this.rounds = 0;
    }
  }
  giessen(grassfields) {
    let newX = this.x;
    let newY = this.y;

    let removeIndex = waterArr.indexOf(this);
    if (removeIndex > -1) {
      // console.log('habe wasser gefunden.....', `${this.x}, ${this.y}`, this.colorCode);
      // console.log('wasser lebewesen', waterArr[removeIndex]);
      waterArr.splice(removeIndex, 1);
      matrix[newY][newX] = 1;
      /// Befehlsreihenfolge geändert -- setze nur Gras hin, wenn Wasser auch wirklich entfernt wurde
      grassArr.push(new Grass(newX, newY));
    }

    let grassPos = random(grassfields);
    // der Counter vom grassObj soll zurückgesetzt werden????

    for (let i = 0; i < grassArr.length; i++) {
      let grass = grassArr[i];
      if (grass.x === grassPos[0] && grass.y === grassPos[1]) {
        // diese grassobject soll sich vermehren
        grass.rounds = 6;
        grass.mul();
      }
    }

    // emptyFields = grassObj.findFields(0)

    // for (let i = 0; i < emptyFields.length; i++) {
    //     let pos = emptyFields[i]
    //     let newX = pos[0]
    //     let newY = pos[1]
    //     grassArr.push(new Grass(newX, newY))
    //     matrix[newY][newX] = 1
    // }
  }
}

// Der Meteorid ist kein Lebewesen im natürlichen Sinn. Er tritt zufällig im Spiel auf (nicht realistisch). Wenn er einschlägt, dann vernichtet er
// andere Lebewesen. Seine Farbe ist braun. Nach dem Einschlag kann jedes Lebewesen wieder in Das Gebiet zurückkehren. Manchmal kommt es auch vor, dass
// der Einschlag eine WasserQuelle freilegt.

class Meteor extends Lebewesen {
  constructor(x, y) {
    super(x, y);
    this.waterquelle = false;
    if (randomNumber(0, 2) === 1) {
      this.waterquelle = true;
    }
    this.colorCode = 5;
    // beinhaltete Felder
    this.fields = [
      [this.x, this.y],
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1],

      [this.x, this.y - 2],
      [this.x + 2, this.y - 2],
      [this.x - 2, this.y],
      [this.x + 2, this.y],
      [this.x - 2, this.y + 1],
      [this.x, this.y + 2],
      [this.x + 2, this.y + 2],

      [this.x + 2, this.y + 1],
      [this.x + 2, this.y - 1],
      [this.x + 3, this.y + 1],
      [this.x + 3, this.y - 1],
      [this.x + 3, this.y],

      [this.x - 2, this.y + 1],
      [this.x - 3, this.y - 1],
      [this.x - 3, this.y],
      [this.x - 3, this.y + 1],
      [this.x - 2, this.y + 2],
      [this.x - 1, this.y + 2],

      [this.x - 2, this.y - 2],
      [this.x - 2, this.y - 1],
      [this.x - 1, this.y - 3],
      [this.x, this.y - 3],
      [this.x + 1, this.y - 3],
      [this.x - 1, this.y + 3],
      [this.x + 1, this.y + 3],
      [this.x + 1, this.y + 3],

      [this.x + 1, this.y - 2],
      [this.x - 1, this.y - 2],
      [this.x + 1, this.y + 2],
      [this.x, this.y + 3],
    ];
  }

  einschlag() {
    for (let i = 0; i < this.fields.length; i++) {
      let pos = this.fields[i];
      let posX = pos[0];
      let posY = pos[1];
      if (posX >= 0 && posY >= 0 && posX < 100 && posY < 100) {
        matrix[posY][posX] = this.colorCode;
      }
    }

    if (waterArr.length !== 0) {
      for (let i = 0; i < waterArr.length; i++) {
        for (let j = 0; j < this.fields.length; j++) {
          if (
            waterArr[i] &&
            waterArr[i].x === this.fields[j][0] &&
            waterArr[i].y === this.fields[j][1]
          ) {
            waterArr.splice(i, 1);
          }
        }
      }
    }

    if (grassArr.length !== 0) {
      for (let i = 0; i < grassArr.length; i++) {
        for (let j = 0; j < this.fields.length; j++) {
          if (
            grassArr[i] &&
            grassArr[i].x === this.fields[j][0] &&
            grassArr[i].y === this.fields[j][1]
          ) {
            grassArr.splice(i, 1);
          }
        }
      }
    }

    if (fressArr.length !== 0) {
      for (let i = 0; i < fressArr.length; i++) {
        for (let j = 0; j < this.fields.length; j++) {
          if (
            fressArr[i] &&
            fressArr[i].x === this.fields[j][0] &&
            fressArr[i].y === this.fields[j][1]
          ) {
            fressArr.splice(i, 1);
          }
        }
      }
    }

    if (predatorArr.length !== 0) {
      for (let i = 0; i < predatorArr.length; i++) {
        for (let j = 0; j < this.fields.length; j++) {
          if (
            predatorArr[i] &&
            predatorArr[i].x === this.fields[j][0] &&
            predatorArr[i].y === this.fields[j][1]
          ) {
            predatorArr.splice(i, 1);
          }
        }
      }
    }

    if (
      randomNumber(0, 3) === 1 &&
      this.x >= 0 &&
      this.y >= 0 &&
      this.x < 100 &&
      this.y < 100
    ) {
      matrix[this.y][this.x] = 4;
      waterArr.push(new Water(this.x, this.y));
    }
  }
}
