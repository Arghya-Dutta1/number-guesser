import {
  getRandomGuess,
  getMid,
  isValidLowUpdate,
  isValidHighUpdate,
  isRangeValid,
} from "./logic.js";

let low, high, guess;
let attempts;
let isFirstGuess;

// Start game
function startGame() {
  low = 1;
  high = 100;
  attempts = 0;
  isFirstGuess = true;

  document.getElementById("error").innerText = "";
  updateRange();
  makeGuess();
}

// Make a guess
function makeGuess() {
  attempts++;

  if (!isRangeValid(low, high)) {
    showError("🤨 Something's off... are you cheating?");
    return;
  }

  if (isFirstGuess) {
    // 🎲 Random first guess
    guess = getRandomGuess(low, high);
    updateInfo("Trying a random guess...");
    isFirstGuess = false;
  } else {
    // 🧠 Binary search
    guess = getMid(low, high);
    updateInfo("Narrowing it down using binary search...");
  }

  document.getElementById("guess").innerText = `Is it ${guess}?`;
  document.getElementById("attempts").innerText = attempts;
}

// Too low
function tooLow() {
  if (guess === undefined) return;

  if (!isValidLowUpdate(guess, high)) {
    showError("🚨 That doesn't make sense!");
    return;
  }

  low = guess + 1;
  updateRange();
  makeGuess();
}

// Too high
function tooHigh() {
  if (guess === undefined) return;

  if (!isValidHighUpdate(guess, low)) {
    showError("🚨 That doesn't make sense!");
    return;
  }

  high = guess - 1;
  updateRange();
  makeGuess();
}

// Correct guess
function correct() {
  document.getElementById("guess").innerText = `🎉 Got it! It's ${guess}`;

  updateInfo(`Solved in ${attempts} attempts!`);
}

// Update range UI
function updateRange() {
  document.getElementById("range").innerText = `${low} - ${high}`;
}

// Update info text
function updateInfo(message) {
  document.getElementById("info").innerText = message;
}

// Show error
function showError(msg) {
  document.getElementById("error").innerText = msg;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", startGame);
  document.getElementById("tooLowBtn").addEventListener("click", tooLow);
  document.getElementById("tooHighBtn").addEventListener("click", tooHigh);
  document.getElementById("correctBtn").addEventListener("click", correct);
});
