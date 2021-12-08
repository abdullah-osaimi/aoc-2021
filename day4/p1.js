const fs = require('fs')

const filename = 'input.txt'
const file = fs.readFileSync(filename).toString('utf8').trim()

let [drawnNumbers, ...boards] = file.split('\n\n')


drawnNumbers = drawnNumbers.split(',')
boards = boards.map(x => x.split('\n'))

boards.forEach((board, boardIndex) => {
    boards[boardIndex] = board.map(x => x.trim().split(/\s+/))
})


let bingoo = false

for (let numberIndex = 0; numberIndex < drawnNumbers.length && !bingoo; numberIndex++) {


    for (let boardIndex = 0; boardIndex < boards.length; boardIndex++) {
        let currentBoard = boards[boardIndex]
        let currentCalledNumber = drawnNumbers[numberIndex]

        markBoard(currentBoard, currentCalledNumber)

        let result = checkIfBingo(currentBoard)
        if (result.bingo) {
            bingoo = true

            result.score = calculateScore(currentBoard, currentCalledNumber)
            result.boardIndex = boardIndex
            showResult(result)

            break
        } 
    }
}


function markBoard(board, number) {
    for (let row = 0; row < board.length; row++) 
    {
        for (let column = 0; column < board[row].length; column++)
        {
            if (number == board[row][column]) {
                board[row][column] = '*'
            }
        }
    }
}

function checkIfBingo(board) {

    let result = {
        bingo: false,
    }

    //check if row starts with an *
    for (let row = 0; row < board.length; row++) 
    {
        let column = 0;

        while (column < board[row].length && board[row][column] == '*')
        {
            column++;
        }

        if (column == board[row].length && board[row].at(-1) == "*") {
            result.bingo = true;
            result.row = row;
            return result
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
            result.bingo = true;
            result.column = column;
            return result
        }
    }


    return result;
}

function calculateScore(board, lastCalledNumber) {
    let sum = 0

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != '*')
                sum += parseInt(board[i][j])
        }
    }

    return sum * lastCalledNumber;
}

function showResult(result) {
    if ('row' in result)
        console.log(`bingooo at row ${result.row}, board ${result.boardIndex}`);
    else
        console.log(`bingooo at column  ${result.column}, board ${result.boardIndex}`);

    console.log(`your score is ${result.score}`);
}
