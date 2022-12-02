import { readFileSync } from "fs";
import { join } from "path";
import { EOL } from "os";


/**
 * A, X Rock = 1
 * B, Y Paper = 2
 * C, Z Scissors = 3
 * Lose = 0
 * Draw = 3
 * Win = 6
 */

enum RPS {
    Rock = 1,
    Paper = 2,
    Scissors = 3
}

enum GameResult {
    Lose = 0,
    Draw = 3,
    Win = 6
}

function isWin(player: RPS, enemy: RPS): GameResult {
    let ret: GameResult;

    ret = GameResult.Lose;
    if (player === enemy) {
        ret = GameResult.Draw;
    } else if ((player === RPS.Rock && enemy === RPS.Scissors) ||
    (player === RPS.Paper && enemy === RPS.Rock) ||
    (player === RPS.Scissors && enemy === RPS.Paper)) {
        ret = GameResult.Win
    }
    return (ret);
};

const input: string = readFileSync(join(__dirname, "input.txt"), "utf-8");
const strategy: string[] = input.split(EOL);
let acc: number = 0;

strategy.forEach((val) => {
    let player: RPS = RPS.Rock;
    let enemy: RPS = RPS.Rock;

    if (val.includes("Y")) {
        player = RPS.Paper;
    } else if (val.includes("Z")) {
        player = RPS.Scissors;
    }
    if (val.includes("B")) {
        enemy = RPS.Paper;
    } else if (val.includes("C")) {
        enemy = RPS.Scissors;
    }
    acc += isWin(player, enemy) + player;
});

console.log(acc);