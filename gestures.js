"use strict";

class Gestures {
  constructor() {
    this.gestureArray = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  }
}

class Rock extends Gestures {
  constructor() {
    super();
    this.name = "Rock";
    this.beats = ["crushes Scissors", "crushes Lizard"];
  }
}

class Paper extends Gestures {
  constructor() {
    super();
    this.name = "Paper";
    this.beats = ["covers Rock", "disproves Spock"];
  }
}

class Scissors extends Gestures {
  constructor() {
    super();
    this.name = "Scissors";
    this.beats = ["cuts Paper", "decapitates Lizard"];
  }
}

class Lizard extends Gestures {
  constructor() {
    super();
    this.name = "Lizard";
    this.beats = ["poisons Spock", "eats Paper"];
  }
}

class Spock extends Gestures {
  constructor() {
    super();
    this.name = "Spock";
    this.beats = ["smashes Scissors", "vaporizes Rock"];
  }
}

module.exports = Gestures;
module.exports = Rock;
module.exports = Paper;
module.exports = Scissors;
module.exports = Lizard;
module.exports = Spock;
