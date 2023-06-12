"use strict";

// Storing all needed doms in a variable

let scoreEl1 = document.querySelector(".total-score--1");
let scoreEl2 = document.querySelector(".total-score--2");

let rolledScoreEl1 = document.querySelector(".saved-score--1");
let rolledScoreEl2 = document.querySelector(".saved-score--2");

let rollDice = document.querySelector("#roll");
let hold = document.querySelector("#hold");

let sectionEl1 = document.querySelector("section");
let sectionEl2 = document.querySelector("section");

let dicePicture = document.querySelector(".dice-picture");

scoreEl1.textContent = 0;
scoreEl2.textContent = 0;

console.log(scoreEl1, scoreEl2, rollDice, hold);

// rolledScoreEl1.textContent = 0;
// rolledScoreEl2.textContent = 0;

let sum = 0;
// Generate a random number from 1-6
const dicePictureFunc = function () {
  let randomNo = Math.trunc(Math.random() * 6) + 1;

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

  sum += randomNo;
  rolledScoreEl2.textContent = sum;

  console.log(randomNo);

  return randomNo;
};

rollDice.addEventListener("click", function () {
  dicePictureFunc();
  // if (sectionEl1.classList.contains("active")) {
  //   dicePictureFunc();
  // } else if (sectionEl2.classList.contains("active")) {
  //   dicePictureFunc();
  // }
});
