let low, high, guess;

function startGame() {
  low = 1;
  high = 100;
  makeGuess();
}

function makeGuess() {
  guess = Math.floor((low + high) / 2);
  document.getElementById("guess").innerText = `Is it ${guess}?`;
}

function tooLow() {
  low = guess + 1;
  makeGuess();
}

function tooHigh() {
  high = guess - 1;
  makeGuess();
}

function correct() {
  document.getElementById("guess").innerText = `🎉 I guessed it! It's ${guess}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", startGame);
  document.getElementById("tooLowBtn").addEventListener("click", tooLow);
  document.getElementById("tooHighBtn").addEventListener("click", tooHigh);
  document.getElementById("correctBtn").addEventListener("click", correct);
});
