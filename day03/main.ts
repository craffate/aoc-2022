import { readFileSync } from "fs";
import { join } from "path";
import { EOL } from "os";

const input: string = readFileSync(join(__dirname, "input.txt"), "utf-8");
const items: string[] = input.split(EOL);
const base: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let acc: number;

acc = 0;
items.forEach((val) => {
    const len: number = val.length / 2;
    const split: string[] = [val.slice(0, len), val.slice(len)];
    const longest: string = split[0].length > split[1].length ? split[0] : split[1];
    const shortest: string = split[0].length <= split[1].length ? split[0] : split[1];
    let idx: number;

    idx = -1;
    while (++idx < shortest.length) {
        if (true === longest.includes(shortest.charAt(idx))) {
            acc += (base.indexOf(shortest.charAt(idx)) + 1);
            break ;
        }
    }
});

console.log(acc);