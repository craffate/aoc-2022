import { readFileSync } from "fs";
import { join } from "path";
import { EOL } from "os";

const input: string = readFileSync(join(__dirname, "input.txt"), "utf-8");
const pairs: string[] = input.split(EOL);
let acc: number;

acc = 0;

function inRange(l1: number, h1: number, l2: number, h2: number): boolean {
    return ((l1 <= l2) && (h2 <= h1));
}

pairs.forEach((val) => {
    const pair: string[] = val.split(",");
    const l1: number = parseInt(pair[0].charAt(0));
    const h1: number = parseInt(pair[0].charAt(2));
    const l2: number = parseInt(pair[1].charAt(0));
    const h2: number = parseInt(pair[1].charAt(2));

    if (inRange(l1, h1, l2, h2) || inRange(l2, h2, l1, h1)) {
        acc = acc + 1;
    }
});

console.log(acc);