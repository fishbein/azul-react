import { moves, alternateEnding } from "./moves";
import { bonusesForGame, scoreRound } from "./gameUtils";

describe("scoreRound", () => {
  it("scores each move properly", () => {
    expect(scoreRound(moves[0], moves[1], 0)).toEqual(2);
    expect(scoreRound(moves[1], moves[2], 0)).toEqual(2);
    expect(scoreRound(moves[2], moves[3], 0)).toEqual(3);
    expect(scoreRound(moves[3], moves[4], 0)).toEqual(7);
    expect(scoreRound(moves[4], moves[5], 0)).toEqual(1);
    expect(scoreRound(moves[5], moves[6], 0)).toEqual(9);
    expect(scoreRound(moves[6], moves[7], 0)).toEqual(7);
    expect(scoreRound(moves[7], moves[8], 0)).toEqual(2);
  });
});

describe("bonusesForGame", () => {
  it("scores the end wall of a game properly", () => {
    expect(bonusesForGame(moves[8])).toEqual(17);
    expect(bonusesForGame(alternateEnding)).toEqual(29);
  });
});
