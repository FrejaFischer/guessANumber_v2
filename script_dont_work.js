const playStart = document.querySelector(".play_expl");
const playWindow = document.querySelector(".play_started");
const comGuess = document.querySelector(".com_guess");
const tooHigh = document.querySelector(".too_High");
const tooLow = document.querySelector(".too_Low");
const correct = document.querySelector(".correct");

let guessCount = 0;

window.addEventListener("load", playReady);

function playReady() {
  playWindow.classList.add("hide");
  playStart.classList.remove("hide");
  document.querySelector(".play_btn").addEventListener("click", firstGuess);
}

function firstGuess() {
  guessCount = guessCount + 1;
  console.log("first" + guessCount);

  playWindow.classList.remove("hide");
  playStart.classList.add("hide");
  comGuess.textContent = "50";

  correct.addEventListener("click", guessCorrect);
  tooHigh.addEventListener("click", () => {
    lowerGuess(1, 50);
  });
  tooLow.addEventListener("click", () => {
    higherGuess(50, 100);
  });
}

function lowerGuess(min, max) {
  console.log("lowerGuess");
  guessCount++;
  console.log("lowerGuess" + guessCount);

  let newGuess = Math.floor((max + min) / 2);

  comGuess.textContent = newGuess;
  correct.addEventListener("click", guessCorrect);
  tooHigh.addEventListener("click", () => {
    lowerGuess(min, newGuess);
  });
  tooLow.addEventListener("click", () => {
    higherGuess(newGuess, max);
  });
}

function higherGuess(min, max) {
  console.log("higherGuess");
  guessCount = guessCount + 1;
  console.log("higherGuess" + guessCount);

  let newGuess = Math.round((max + min) / 2);
  comGuess.textContent = newGuess;

  correct.addEventListener("click", guessCorrect);
  tooHigh.addEventListener("click", () => {
    lowerGuess(min, newGuess);
  });
  tooLow.addEventListener("click", () => {
    higherGuess(newGuess, max);
  });
}

function guessCorrect() {
  comGuess.textContent = "Yay, I guessed it! ";
  console.log(guessCount);
}
