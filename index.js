"use strict";
const prompt = require("prompt-sync")();
const Player = require("./player");

let player = new Player();

player.ComputerChoices();
console.log("We did it!");
