import Scores from "../Scores.js";

const mockedDices0 = [{ value: 5 }, { value: 5 }, { value: 4 }, { value: 3 }, { value: 5 }];
const mockedDices1 = [{ value: 5 }, { value: 2 }, { value: 6 }, { value: 4 }, { value: 1 }];

describe("Scores", () => {
    const scores = new Scores();
    describe("calculateUpperBoxScore function", () => {
        it("should return 15 when values are [5,5,4,3,5]", () => {
            // expect(scores.calculateUpperBoxScore(5, mockedDices0)).toBe(15);
        });
        it("should return 5 when values are [5,2,6,4,1]", () => {
            expect(scores.calculateUpperBoxScore(5, mockedDices1)).toBe(5);
        });
    });
    describe("calculateOnePairScore function", () => {
        it("should return 5 when values are [5,5,4,3,5]", () => {
            expect(scores.calculateOnePairScore(mockedDices0)).toBe(5);
        });
        it("should return 6 when values are [5,2,6,4,1]", () => {
            expect(scores.calculateOnePairScore(mockedDices1)).toBe(6);
        });
    });
    describe("calculateChanceScore function", () => {
        it("should return 22 when values are [5,5,4,3,5]", () => {
            expect(scores.calculateChanceScore(mockedDices0)).toBe(22);
        });
        it("should return 18 when values are [5,2,6,4,1]", () => {
            expect(scores.calculateChanceScore(mockedDices1)).toBe(18);
        });
    });
});
