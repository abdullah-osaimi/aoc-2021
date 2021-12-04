const fs = require('fs')

const filename = 'input.txt'
const file = fs.readFileSync(filename).toString('utf8')

const commands = file.split('\n')

let horizontalPosition = 0;
let depth = 0;

for (let i = 0; i < commands.length; i++)
{
    let command = commands[i].split(' ');
    let value = parseInt(command[1])

    if (command[0] == 'forward')
        horizontalPosition += value;
    else if (command[0] == 'down')
        depth += value;
    else if (command[0] == 'up')
        depth -= value;
}

console.log(horizontalPosition * depth);
