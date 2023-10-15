const readFileContent = require("../read-file-content")

// Read input
const bingoRows = readFileContent('day-04-input.txt')
  .split('\n')

const bingoBoards = []
let bingoRow = []

// Create 2D bingo board arrays
for (let i = 1; i < bingoRows.length; i++) {
  const row = bingoRows[i]

  if (row !== '\r') {
    tempRow = row.split(' ').filter((row) => row !== '')
    tempRow = tempRow.map((numStr) => numStr.includes('\r') ? numStr.replace('\r', '') : numStr)

    bingoRow.push(tempRow.map((numStr) => {
      return { value: numStr, drawn: false }
    }))
  }

  if (bingoRow.length === 5) {
    bingoBoards.push(bingoRow)

    bingoRow = []
  }
}

// Iterate over drawn numbers
let drawnNumbers = bingoRows[0].split(',')
let currentDrawnNumber
let rowWinnerBoardIndex
let colWinnerBoardIndex

// Not elegant
outerLoop:
for (let drawnNumber of drawnNumbers) {
  currentDrawnNumber = drawnNumber

  // Find board that won with a row
  for (let i = 0; i < bingoBoards.length; i++) {
    counter = 0

    for (let row of bingoBoards[i]) {
      for (let numObj of row) {
        if (drawnNumber === numObj.value) {
          numObj.drawn = true
        }
      }

      for (let numObj of row) {
        if (numObj.drawn) {
          counter++
        }
      }
  
      if (counter === 5) {
        winnerBoard = bingoBoards[i]
        rowWinnerBoardIndex = i
  
        break outerLoop
      }
  
      counter = 0
    }

    for (let i = 0; i < 5; i++) {
      if (bingoBoards[i])
    }
  }

  // Find board that won with a column <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FAZER
}

// Sum not drawn numbers of winner board
let notDrawnSum = 0

for (let row of winnerBoard) {
  for (let numObj of row) {
    if (!numObj.drawn) {
      notDrawnSum += Number(numObj.value)
    }
  }
}

console.log(notDrawnSum * Number(currentDrawnNumber))