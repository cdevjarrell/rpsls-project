"use strict";

const prompt = require("prompt-sync")();
const Gestures = require("./gestures");

class Player {
  constructor() {
    this.score = 0;
    this.Gestures = new Gestures();
  }

  PlayerChoices() {
    console.log(
      "What would you like to choose? \n 1. Rock\n 2. Paper\n 3. Scissors\n 4. Lizard\n 5. Spock"
    );

    let choice = prompt();

    if (choice !== "" && choice !== null && !isNaN(choice)) {
      switch (choice) {
        case "1":
          this.Gestures.gestureArray[0];
          console.log("You chose Rock!");
          break;
        case "2":
          this.Gestures.gestureArray[1];
          console.log("You chose Paper!");
          break;
        case "3":
          this.Gestures.gestureArray[2];
          console.log("You chose Scissors!");
          break;
        case "4":
          this.Gestures.gestureArray[3];
          console.log("You chose Lizard!");
          break;
        case "5":
          this.Gestures.gestureArray[4];
          console.log("You chose Spock!");
          break;
        default:
          console.log("Please make a valid selection");
          this.PlayerChoices();
      }
    } else {
      console.log("Please make a valid selection");
      this.PlayerChoices();
    }
  }
}

class Human extends Player {
  constructor() {
    super();
  }

  PlayerName() {
    console.log("Please enter your desired name");
    let name = prompt();
    return name;
  }
}

class Computer extends Player {
  constructor() {
    super();
  }
}

module.exports = Player;
module.exports = Human;
module.exports = Computer;
