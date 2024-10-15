import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({ input, output });

let number = 4;

for (let i = 1; i <= number; i++) {
    let output = '';
    
    for (let j = 1; j <= i; j++) {
        output += i;
    }

    console.log(output);
}
process.exit()