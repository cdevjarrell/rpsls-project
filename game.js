"use strict";

//Properly incorporate inheritance into my game
//Account for and handle bad user input, ensuring that any user input is validated and reobtained if necessary (validation)
//Store all of the gestture options/choices in an array. Find a way to utilize array of gestures within code (display options, assign a player a gesture, etc.)
//Correct player to win a given round based on the choices made by each player
//RPSLS to be a minimum of "best of three" to decide a winner
//Option of a single player (human vs AI) or a multipplayer (human vs human) game

class Game {
  constructor() {
    this.playerOne = new Player(nameInput());
    this.playerTwo = new Player(nameInput());
  }

  DisplayRules() {
    console.log("Welcome to Rock, Paper, Scissors, Lizard, Spock!!!");
    console.log("Two players will go head to head to see who wins.");
    console.log("Rock crushes Sciossors");
    console.log("Scissors cuts Paper");
    console.log("Paper covers Rock");
    console.log("Rock crushes Lizard");
    console.log("Lizard poisons Spock");
    console.log("Spock smashes Scissors");
    console.log("Scissors decapitates Lizard");
    console.log("Lizard eats Paper");
    console.log("Paper disproves Spock");
    console.log("Spock vaporizes Rock");
    console.log("The first player to three wins is the winner. Good luck!");
  }

  DisplayGameWinner() {
    if (this.playerOne.score > this.playerTwo.score) {
      console.log(this.playerOne.name + " wins the game!!!!!");
    } else {
      console.log(this.playerTwo.name + " wins the game!!!!!");
    }
  }
}

//Rock crushes Scissors
//Scissors cuts Paper
//Paper covers Rock
//Rock crushes lizard
//Lizard poisons Spock
//Spock smashes Scissors
//Scissors decapitates Lizard
//Lizard eats Paper
//Paper disproves Spock
//Spock vaporizes Rock
