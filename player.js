"use strict";

const prompt = require("prompt-sync")();
const Gestures = require("./gestures");
const Rock = require("./gestures");
const Paper = require("./gestures");
const Scissors = require("./gestures");
const Lizard = require("./gestures");
const Spock = require("./gestures");

class Player {
  constructor(name) {
    this.score = 0;
    this.Gestures = new Gestures();
    this.name = name;
  }

  PlayerChoices() {
    console.log(
      "What would you like to choose? \n 1. Rock\n 2. Paper\n 3. Scissors\n 4. Lizard\n 5. Spock"
    );

    let choice = prompt();

    choices(choice);
  }
  ComputerChoices() {
    let computerChoice = Math.floor(Math.random());

    choices(computerChoice);
  }
}

class Human extends Player {
  constructor(name) {
    super(name);
    this.name = name;
    // member variables (properties)
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
    this.name = "Computer";

    this.ComputerChoices();
  }
}

function choices(choice) {
  if (choice !== "" && choice !== null && !isNaN(choice)) {
    switch (choice) {
      case "1":
        Rock;
        console.log("You chose Rock!");
        break;
      case "2":
        Paper;
        console.log("You chose Paper!");
        break;
      case "3":
        Scissors;
        console.log("You chose Scissors!");
        break;
      case "4":
        Lizard;
        console.log("You chose Lizard!");
        break;
      case "5":
        Spock;
        console.log("You chose Spock!");
        break;
      default:
        console.log("Please make a valid selection");
        let newChoice = prompt();
        choices(newChoice);
    }
  } else {
    console.log("Please make a valid selection");
    let newChoice = prompt();
    choices(newChoice);
  }
}

module.exports = Player;
module.exports = Human;
module.exports.computer = Computer;
