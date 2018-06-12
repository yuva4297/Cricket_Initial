import { Player } from "./Player";

export class Batsman extends Player
{
    numberOfRunsScored: number;
    numberOfBallsFaced: number;
    constructor(playerName: string)
    {
        super(playerName);
        this.numberOfBallsFaced = 0;
        this.numberOfRunsScored = 0;
    }
    addRuns(runs: number)
    {
        this.numberOfRunsScored += runs;
    }
    get numberOfRuns()
    {
        return this.numberOfRunsScored;
    }
    get numberOfBallsBatted()
    {
        return this.numberOfBallsFaced;
    }
}