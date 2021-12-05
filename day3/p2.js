const fs = require('fs')

const filename = 'input.txt'
const file = fs.readFileSync(filename).toString('utf8')
const numbers = file.split('\n').slice(0, -1)


// lifeSupportRating = oxygen * co2
let bit = 0;
let numberWithOne = [];
let numberWithZero = [];
let oxygenRating = [...numbers];
let co2Rating = [...numbers];

while (oxygenRating.length != 1 || co2Rating.length != 1) {


    if (oxygenRating.length != 1) {
        for (let i = 0; i < oxygenRating.length; i++) {
            let number = oxygenRating[i].split('')[bit]

            if (number == '1') {
                numberWithOne.push(oxygenRating[i])
            } else {
                numberWithZero.push(oxygenRating[i])
            }
        }

        if (numberWithOne.length >= numberWithZero.length) {
            oxygenRating = [...numberWithOne];
        } else {
            oxygenRating = [...numberWithZero];
        }

        numberWithOne = []
        numberWithZero = []
    }




    if (co2Rating.length != 1) {
        for (let i = 0; i < co2Rating.length; i++) {
            let number = co2Rating[i].split('')[bit]

            if (number == '1') {
                numberWithOne.push(co2Rating[i])
            } else {
                numberWithZero.push(co2Rating[i])
            }
        }

        if (numberWithOne.length >= numberWithZero.length) {
            co2Rating = [...numberWithZero];
        } else {
            co2Rating = [...numberWithOne];
        }

        numberWithOne = []
        numberWithZero = []

    }

    bit++;
}

const lifeRating = parseInt(co2Rating[0], 2) * parseInt(oxygenRating[0], 2);
console.log(lifeRating)
