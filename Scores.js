class Scores {
    constructor() {
        this.totalScore = 0;
        //upper
        this.upperTotalScore = 0;
        this.isUpperBonusGiven = false;
        this.fivesScore = null;

        //lower
        this.onePairScore = null;
        this.chanceScore = null;
    }

    calculateUpperBoxScore(number, dices) {
        return dices.reduce((acc, { value }) => {
            if (value === number) {
                return acc + value;
            }
            return acc;
        }, 0);
    }

    calculateOnePairScore(dices) {
        return Math.max(...dices.map(({ value }) => value));
    }

    calculateChanceScore(dices) {
        return dices.reduce((acc, { value }) => value + acc, 0);
    }

    increaseUpperTotalScore(score) {
        this.upperTotalScore += score;
        if (this.upperTotalScore >= 63 && !this.isUpperBonusGiven) {
            this.isUpperBonusGiven = true;
            this.totalScore += 35;
        }
    }

    setFivesScore(dices) {
        const score = this.calculateUpperBoxScore(5, dices);
        this.totalScore += score;
        this.increaseUpperTotalScore(score);
        this.fivesScore = score;
    }

    setOnePairScore(dices) {
        const score = this.calculateOnePairScore(dices);
        this.totalScore += score;
        this.onePairScore = score;
    }

    setChanceScore(dices) {
        const score = this.calculateChanceScore(dices);
        this.totalScore += score;
        this.chanceScore = score;
    }
}

export default Scores;
