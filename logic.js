export function getRandomGuess(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

export function getMid(low, high) {
  return Math.floor((low + high) / 2);
}

export function isValidLowUpdate(guess, high) {
  return guess < high;
}

export function isValidHighUpdate(guess, low) {
  return guess > low;
}

export function isRangeValid(low, high) {
  return low <= high;
}
