import { readFileSync } from "fs";
import { join } from "path";
import { EOL } from "os";

let acc: number;
let acc2: number;
let input: string[];

acc = 0;
acc2 = 0;
input = readFileSync(join(__dirname, "input.txt")).toString().split(EOL);
for (let idx = 0; idx < input.length; idx++) {
    if (false === isNaN(parseInt(input[idx]))) {
        acc2 += parseInt(input[idx]);
    } else {
        acc2 = 0;
    }
    acc = acc < acc2 ? acc2 : acc;
}

console.log(acc);