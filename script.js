"use strict";

// Storing all needed doms in a variable
let personEl0 = document.querySelector(".person--0");
let personEl1 = document.querySelector(".person--1");

let totalScoreEl0 = document.querySelector(".total-score--0");
let totalScoreEl1 = document.querySelector(".total-score--1");

// let currentScoreEl0 = document.querySelector(".current-score--0");
// let currentScoreEl1 = document.querySelector(".current-score--1");

let rollDice = document.querySelector("#roll");
let hold = document.querySelector("#hold");

let dicePicture = document.querySelector(".dice-picture");

totalScoreEl0.textContent = 0;
totalScoreEl1.textContent = 0;

let activePlayer = 0;

console.log(totalScoreEl0, totalScoreEl1, rollDice, hold);

let currentScore = 0;

// When the dice is rolled, Generate a random number from 1-6
rollDice.addEventListener("click", function () {
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
    // If the rolled dice is 1, then the current player's score clears and returns to 0
    document.querySelector(`.current-score--${activePlayer}`).textContent = 0;

    // Then switch from the current player to the next (If the active current player is Player 1(0), switch to Player 2(0))
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;

    // Toggle between the active states
    personEl0.classList.toggle("active");
    personEl1.classList.toggle("active");
  }

  return dice;
});
