"use strict";
const prompt = require("prompt-sync")();
const Player = require("./player");

let player = new Player();

player.PlayerChoices();
console.log("We did it!");
