
let abc = undefined;
const def = null;

function getData(): string | undefined {
    return '';
}

const someData = getData();

if (someData) {
    const someOtherData = someData;
}

let input: unknown;
input = "Some Input";
let someSensetiveValue: string;

if (typeof input === "string") {
    someSensetiveValue = input;
}

function doTasks(tasks: number): void | never {
    if(tasks > 5){
        throw new Error("Too many tasks");
    }
}

const stuff = doTasks(2);