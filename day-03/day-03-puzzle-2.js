const readFileContent = require("../read-file-content");

// Submarine debug readings
// Gamma gamma * epsilon = submarine consumption
const debugReadings = readFileContent('day-03-input.txt')
  .split('\n')

const readingLength = debugReadings[0].length

let oxGenReadings = debugReadings.map((reading) => reading)
let CO2GenReadings = debugReadings.map((reading) => reading)

let whileLoopCount = 0
let oxGenBit0Count = 0
let oxGenBit1Count = 0
let CO2GenBit0Count = 0
let CO2GenBit1Count = 0

// The repeated while loops below are not elegant or efficient

// Oxigen Generator Filtering
while (whileLoopCount < readingLength) {
  if (oxGenReadings.length === 1) break

  for (let reading of oxGenReadings) {
    if (reading[whileLoopCount] === '0') oxGenBit0Count++
    else oxGenBit1Count++
  }

  const mostCommonBit = oxGenBit0Count > oxGenBit1Count ? '0' : '1'

  oxGenReadings = oxGenReadings.filter((oxGenReading) => oxGenReading[whileLoopCount] === mostCommonBit)

  oxGenBit0Count = 0
  oxGenBit1Count = 0
  whileLoopCount++
}

whileLoopCount = 0

// CO2 Scrubber Filtering
while (whileLoopCount < readingLength) {
  if (CO2GenReadings.length === 1) break

  for (let reading of CO2GenReadings) {
    if (reading[whileLoopCount] === '0') CO2GenBit0Count++
    else CO2GenBit1Count++
  }

  const leastCommonBit = CO2GenBit0Count > CO2GenBit1Count ? '1' : '0'

  CO2GenReadings = CO2GenReadings.filter((CO2GenReading) => CO2GenReading[whileLoopCount] === leastCommonBit)

  CO2GenBit0Count = 0
  CO2GenBit1Count = 0
  whileLoopCount++
}

console.log(parseInt(oxGenReadings[0], 2) * parseInt(CO2GenReadings[0], 2))