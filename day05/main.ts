import { readFileSync } from "fs";
import { join } from "path";
import { EOL } from "os";

const input: string = readFileSync(join(__dirname, "input.txt"), "utf-8");
const [stackInput, insInput]: string[] = input.split(EOL + EOL);
let stackRows: string[][] = stackInput.split(EOL)
.map(val => val.split(" ").join(" ").split("   ")
.flatMap(val => val.trim().replace(/[\[\]']+/g, "").split(" ")));
let ins: string[][] = insInput.split(EOL)
.map(val => val.replace(/\D/g, "").split(""));
let stacks: string[][];

function createStacks(stackRows: string[][]): string[][] {
    let ret: string[][];
    let idx: number;
    let idx2: number;

    ret = [[], [], []];
    idx = stackRows.length;
    while (0 <= --idx) {
        idx2 = stackRows[idx].length;
        while (0 <= --idx2) {
            ret[idx2][idx] = stackRows[idx][idx2];
        }
    }
    ret.forEach(val => val.reverse());
    return (ret.map(val => val.filter(val => val)));
}

function processStacks(stacks: string[][], ins: string[][]): string[][] {
    let ret: string[][];
    let idx: number;
    let idx2: number;

    ret = stacks;
    idx = -1;
    while (ins.length > ++idx) {
        idx2 = 0;
        while (parseInt(ins[idx][0]) > idx2++) {
            ret[parseInt(ins[idx][2]) - 1].push(ret[parseInt(ins[idx][1]) - 1].pop()!);
        }
    }
    return (ret);
}

function peekStacks(stacks: string[][]): string[] {
    let ret: string[];

    ret = [];
    stacks.forEach((val) => {
        ret.push(val[val.length - 1]);
    });
    return (ret);
}

stacks = createStacks(stackRows);
stacks = processStacks(stacks, ins);
console.log(peekStacks(stacks).join(""));