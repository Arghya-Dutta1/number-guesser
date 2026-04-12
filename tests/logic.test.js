import {
  getRandomGuess,
  getMid,
  isValidLowUpdate,
  isValidHighUpdate,
  isRangeValid,
} from "../logic.js";

describe("Game Logic Tests", () => {
  test("getMid returns correct middle", () => {
    expect(getMid(1, 100)).toBe(50);
    expect(getMid(1, 99)).toBe(50);
  });

  // test("random guess is within range", () => {
  //   for (let i = 0; i < 10; i++) {
  //     const val = getRandomGuess(1, 100);
  //     expect(val).toBeGreaterThanOrEqual(1);
  //     expect(val).toBeLessThanOrEqual(100);
  //   }
  // });

  // test("valid low update", () => {
  //   expect(isValidLowUpdate(50, 100)).toBe(true);
  //   expect(isValidLowUpdate(100, 100)).toBe(false);
  // });

  // test("valid high update", () => {
  //   expect(isValidHighUpdate(50, 1)).toBe(true);
  //   expect(isValidHighUpdate(1, 1)).toBe(false);
  // });

  // test("range validity", () => {
  //   expect(isRangeValid(1, 100)).toBe(true);
  //   expect(isRangeValid(50, 40)).toBe(false);
  // });
});
