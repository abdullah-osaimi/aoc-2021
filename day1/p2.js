const fs = require('fs')

const filename = 'input.txt'
const file = fs.readFileSync(filename).toString('utf8')

const depthReading = file.split('\n').map(x => parseInt(x, 10))

let count = 0;
let sum = 0;
let prev = 0;

for (let i = 0; i < depthReading.length; i++) {
    // do i have enough?
    if (i + 2 < depthReading.length) {
        sum = depthReading[i] + depthReading[i + 1] + depthReading[i + 2];
        if (sum > prev && i != 0)
            count += 1;

        prev = sum;
    }
}
console.log(count)
