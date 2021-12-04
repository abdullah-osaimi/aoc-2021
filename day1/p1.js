const fs = require('fs')

const filename = 'input.txt'
const file = fs.readFileSync(filename).toString('utf8')

const depthReading = file.split('\n').map(x => parseInt(x, 10))

let count = 0;
let prev = depthReading[0];

for (let i = 1; i < depthReading.length; i++) {
    if (depthReading[i] > prev)
        count++;

    prev = depthReading[i];
}
console.log(count)
