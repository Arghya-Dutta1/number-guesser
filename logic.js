function getRandomGuess(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

function getMid(low, high) {
  return Math.floor((low + high) / 2);
}

function isValidLowUpdate(guess, high) {
  return guess < high;
}

function isValidHighUpdate(guess, low) {
  return guess > low;
}

function isRangeValid(low, high) {
  return low <= high;
}

module.exports = {
  getRandomGuess,
  getMid,
  isValidLowUpdate,
  isValidHighUpdate,
  isRangeValid
};