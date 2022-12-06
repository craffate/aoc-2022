import { readFileSync } from "fs";
import { join } from "path";
import { EOL } from "os";

const input: string[] = readFileSync(join(__dirname, "input.txt"), "utf-8").split(EOL);
const packetSize: number = 4;

function findMarker(input: string): number {
    let idx: number;
    let dupl: boolean;

    idx = -1;
    dupl = true;
    while (true === dupl && input.length > ++idx) {
        dupl = /(.).*\1/.test(input.substring(idx, idx + packetSize));
    }
    return (packetSize + idx);
}

input.forEach((val) => {
    console.log(findMarker(val));
});