const readFileContent = require("../read-file-content");

// Convert command-units strings into tuples with units (string) converter to number
const commandReadings = readFileContent('day-02-input.txt')
  .split('\n')
  .map((reading) => reading
    .split(' '))
    .map((readingTuple) => [readingTuple[0], Number(readingTuple[1])])

let horizontalPos = 0
let depth = 0
for (let commandAndUnits of commandReadings) {
  if (commandAndUnits[0] === 'forward') horizontalPos += commandAndUnits[1]
  if (commandAndUnits[0] === 'up') depth -= commandAndUnits[1]
  if (commandAndUnits[0] === 'down') depth += commandAndUnits[1]
}

console.log(horizontalPos * depth)