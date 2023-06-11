"use strict";

// Storing all needed doms in a variable

let scoreEl1 = document.querySelector(".total-score--1");
let scoreEl2 = document.querySelector(".total-score--2");

let rolledScoreEl1 = document.querySelector(".saved-score--1");
let rolledScoreEl2 = document.querySelector(".saved-score--2");

let rollDice = document.querySelector("#roll");
let hold = document.querySelector("#hold");

let sectionEl1 = document.querySelector(".person--1");
let sectionEl2 = document.querySelector(".person--2");

let dicePicture = document.querySelector(".dice-picture");

scoreEl1.textContent = 0;
scoreEl2.textContent = 0;

console.log(scoreEl1, scoreEl2, rolledScoreEl1, rolledScoreEl2, rollDice, hold);

// Generate a random number from 1-6
const randomNo = function () {
  let randomNo = Math.trunc(Math.random() * 6) + 1;
  // console.log(randomNo);

  // Use the switch statement to determine the dice pics to be shown when it is rolled
  switch (randomNo) {
    case 1:
      dicePicture.innerHTML = `<img src="pics/dice-1.svg.hi.png" />`;
      break;
    case 2:
      dicePicture.innerHTML = `<img src="pics/dice 2.png" />`;
      break;
    case 3:
      dicePicture.innerHTML = `<img src="pics/dice 3.jpg" />`;
      break;
    case 4:
      dicePicture.innerHTML = `<img src="pics/dice 4.png" />`;
      break;
    case 5:
      dicePicture.innerHTML = `<img src="pics/dice 5.png" />`;
      break;
    case 6:
      dicePicture.innerHTML = `<img src="pics/dice 6.jpg" />`;
      break;

    default:
      "No Dice Rolled";
      break;
  }
  return randomNo;
};

let savedScore1 = document.querySelector(".saved-score--1");
let savedScore2 = document.querySelector(".saved-score--2");

rollDice.addEventListener("click", function () {
  // let heededScore = document.querySelector(".saved-score--2").textContent;

  let firstScore;
  let secondScore;
  if (sectionEl1.classList.contains("active")) {
    // randomNo();
    console.log("First person");
  } else if (sectionEl2.classList.contains("active")) {
    // randomNo();
    console.log("Second person");
    firstScore = randomNo();
    secondScore = firstScore + secondScore;
    savedScore2.textContent = secondScore;

    // heededScore += randomNo();
    // firstScore = heededScore;
    // secondScore += firstScore;
    // savedScore2.textContent = secondScore;
  }
});

console.log(
  savedScore1,
  savedScore2
  // heededScore
  // typeof secondScore
);
