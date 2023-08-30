const playStart = document.querySelector(".play_expl");
const playWindow = document.querySelector(".play_started");
const comGuess = document.querySelector(".com_guess");
const tooHigh = document.querySelector(".too_High");
const tooLow = document.querySelector(".too_Low");
const correct = document.querySelector(".correct");
const again = document.querySelector(".again");

let guessCount = 0;
let newguess;
let lastguess;
let min;
let max;

window.addEventListener("load", playReady);

function playReady() {
  playWindow.classList.add("hide");
  playStart.classList.remove("hide");
  document.querySelector(".play_btn").addEventListener("click", firstGuess);
}

function firstGuess() {
  guessCount = 1;
  min = 0;
  max = 100;
  console.log("first" + guessCount);

  playWindow.classList.remove("hide");
  playStart.classList.add("hide");
  again.classList.add("hide");

  newguess = 50;
  comGuess.textContent = "I'm guessing " + newguess + "?";

  correct.addEventListener("click", guessCorrect);

  tooHigh.addEventListener("click", lowerGuess);
  tooLow.addEventListener("click", higherGuess);
}

function lowerGuess() {
  console.log("lowerGuess");
  guessCount++;
  console.log("lowerGuess" + guessCount);

  max = newguess;
  newguess = Math.floor((min + max) / 2);

  comGuess.textContent = "I'm guessing " + newguess + "?";

  return newguess;
}

function higherGuess() {
  console.log("higherGuess");
  guessCount++;
  console.log("higherGuess" + guessCount);

  min = newguess;
  newguess = Math.round((max + min) / 2);

  comGuess.textContent = "I'm guessing " + newguess + "?";

  return newguess;
}

function guessCorrect() {
  comGuess.textContent = "Yay, I guessed it! I used " + guessCount + " tries";
  again.classList.remove("hide");
  tooHigh.removeEventListener("click", lowerGuess);
  tooLow.removeEventListener("click", higherGuess);
  again.addEventListener("click", firstGuess);
}
