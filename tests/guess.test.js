function getMid(low, high) {
  return Math.floor((low + high) / 2);
}

test("mid calculation works", () => {
  expect(getMid(1, 100)).toBe(50);
});