"use strict";
exports.__esModule = true;
var Scorer = /** @class */ (function () {
    function Scorer() {
        this.totalScore = 0;
        this.listOfBatsMan = [];
        this.playerOnStrike = null;
    }
    Scorer.prototype.addBatsman = function (batsman) {
        this.listOfBatsMan.push(batsman);
    };
    Scorer.prototype.changeStrike = function () {
        if (this.playerOnStrike === this.listOfBatsMan[0]) {
            this.playerOnStrike = this.listOfBatsMan[1];
        }
        else {
            this.playerOnStrike = this.listOfBatsMan[0];
        }
    };
    Scorer.prototype.calculateScore = function (arr) {
        var _this = this;
        // Computation Logic
        // 1. Check if the run scored is odd or even.
        // 2. If odd, update score of player on strike and change strike
        // 3. If even, update score of player on strike.
        // 4. Increment total score by the run scored.
        // 5. If number of balls bowled is a mutiple of six, change strike.
        this.playerOnStrike = this.listOfBatsMan[0];
        arr.forEach(function (runScored, ballNumber) {
            if (runScored % 2 === 1) {
                if (_this.playerOnStrike) {
                    _this.playerOnStrike.addRuns(runScored);
                    // Change strike
                    _this.changeStrike();
                }
            }
            else {
                if (_this.playerOnStrike) {
                    _this.playerOnStrike.addRuns(runScored);
                }
            }
            _this.totalScore += runScored;
            if ((ballNumber + 1) % 6 === 0) {
                _this.changeStrike();
            }
        });
    };
    Scorer.prototype.printScore = function () {
        console.log("Total score: " + this.totalScore);
        this.listOfBatsMan.forEach(function (batsman) {
            console.log(batsman.playerName + " scored " + batsman.numberOfRuns);
        });
    };
    return Scorer;
}());
exports.Scorer = Scorer;
