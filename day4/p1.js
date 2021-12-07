const fs = require('fs')

const filename = 'input.txt'
const file = fs.readFileSync(filename).toString('utf8').trim()

let [drawnNumbers, ...boards] = file.split('\n\n')


drawnNumbers = drawnNumbers.split(',')
boards = boards.map(x => x.split('\n'))

boards.forEach((board, boardIndex) => {
    boards[boardIndex] = board.map(x => x.trim().split(/\s+/))
})


let board = boards[0]
let boardWithAsterisk = board.map(element => element.slice())
let currentDrawnNumberIndex = 0

while (currentDrawnNumberIndex < drawnNumbers.length) {
for (let row = 0; row < boardWithAsterisk.length; row++) 
{
    for (let column = 0; column < boardWithAsterisk[row].length; column++)
    {
        if (drawnNumbers[currentDrawnNumberIndex] == board[row][column]) {
            boardWithAsterisk[row][column] = '*'
        }
    }
}

currentDrawnNumberIndex++;
}

checkIfBingo(boardWithAsterisk)

function checkIfBingo(board) {

    //check if row starts with an *
    for (let row = 0; row < board.length; row++) 
    {
        let column = 0;

        while (column < board[row].length && board[row][column] == '*')
        {
            column++;
        }

        if (column == board[row].length && board[row].at(-1) == "*") {
            console.log(`bingoooo row: ${row}`)
        }
    }

    // check of column starts with an *
    for (let column = 0; column < board[0].length; column++)
    {
        let row = 0;

        while (row < board.length && board[row][column] == "*") 
        {
            row++;
        }

        if (row == board.length && board.at(-1)[column] == "*") 
        {
            console.log(`bingoo at column ${column}`)
        }
    }
}
