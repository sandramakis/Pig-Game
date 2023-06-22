"use strict";

// Storing all needed doms in a variable
let personEl0 = document.querySelector(".person--0");
let personEl1 = document.querySelector(".person--1");

let totalScoreEl0 = document.querySelector(".total-score--0");
let totalScoreEl1 = document.querySelector(".total-score--1");

let currentScoreEl0 = document.querySelector(".current-score--0");
let currentScoreEl1 = document.querySelector(".current-score--1");

const rollDiceBtn = document.querySelector("#roll");
const holdBtn = document.querySelector("#hold");
const newGameBtn = document.querySelector("#new-game");

let dicePicture = document.querySelector(".dice-picture");

let activePlayer = 0;
let currentScore = 0;
let scores = [0, 0]; //creating an array that'll hold the index of the total score for the two players

// Initialize game when it restarts
function init() {
  currentScoreEl0.textContent = 0;
  currentScoreEl1.textContent = 0;

  totalScoreEl0.textContent = 0;
  totalScoreEl1.textContent = 0;

  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];

  dicePicture.classList.toggle("hidden");
}

// When the dice is rolled, Generate a random number from 1-6
rollDiceBtn.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;

  // Use the if statement to determine the dice pics to be shown when it is rolled
  if (dice) {
    dicePicture.innerHTML = `<img src="pics/dice ${dice}.png" />`;
  }

  if (dice !== 1) {
    // If the rolled dice is not 1, then add to the current score
    currentScore += dice;
    document.querySelector(`.current-score--${activePlayer}`).textContent =
      currentScore;
  } else {
    /* ** If the rolled dice is 1, then the current player's score clears and returns to 0
     * Then switches to the next player */

    switchPlayer();
  }

  return dice;
});

const switchPlayer = () => {
  document.querySelector(`.current-score--${activePlayer}`).textContent = 0;
  // Switch from the current player to the next (If the active current player is Player 1(0), switch to Player 2(1))
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  // Toggle between the active states
  personEl0.classList.toggle("active");
  personEl1.classList.toggle("active");
};

// Hold Score Btn Function

holdBtn.addEventListener("click", function () {
  // When the hold button is clicked, the score[0] or score[1] is added to the current score
  scores[activePlayer] += currentScore;

  // Score is displayed in the activePlayer
  if (scores[activePlayer] < 100) {
    // if score is < 100, the score should keep updating

    document.querySelector(`.total-score--${activePlayer}`).textContent =
      scores[activePlayer];
  } else {
    document.querySelector(`.total-score--${activePlayer}`).textContent =
      scores[activePlayer];
    alert(`Player ${activePlayer + 1} wins`);
    init();
  }

  switchPlayer();
});

// New Game Function
newGameBtn.addEventListener("click", init);
