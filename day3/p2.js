const fs = require('fs')

const filename = 'input.txt'
const file = fs.readFileSync(filename).toString('utf8')
const numbers = file.split('\n').slice(0, -1)

let numberWithOne = [];
let numberWithZero = [];

for (let i = 0; i < numbers[0].split('').length; i++)
{
    // first bit of each number
    console.log('bit number', i);
    let sum = 0;
    for (let j = 0; j < numbers.length; j++) {
        let number = numbers[j].split('')[i]
        if (number == '1') {
            sum++;
            numberWithOne.push(number)
        } else {
            numberWithZero.push(number)
        }
    }
    console.log(`the number of 1's in the ${i} bit is ${sum}`)
    sum = 0;
}


// lifeSupportRating = oxygen * co2
