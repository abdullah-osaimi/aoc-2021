const fs = require('fs')

const filename = 'input.txt'
const file = fs.readFileSync(filename).toString('utf8')

const numbers = file.split('\n')

const numberOfOnes = [];

for (let i = 0; i < numbers.length; i++)
{
    const number = numbers[i].split('');

    number.forEach((digit, index) => {
        if (digit == '1')
            if (isNaN(numberOfOnes[index]))
                numberOfOnes[index] = 1
            else
                numberOfOnes[index] = numberOfOnes[index] + 1;
    })
}

let gamma = '';
let epsilon = '';

for (let i = 0; i < numberOfOnes.length; i++)
{
    if (numberOfOnes[i] > numbers.length - numberOfOnes[i]) {
        gamma += '1';
        epsilon += '0';
    }
    else {
        gamma += '0';
        epsilon += '1';
    }
}

const consumption = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log(consumption)
