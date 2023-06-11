const readFileContent = require("../read-file-content");

// Submarine debug readings
// Gamma gamma * epsilon = submarine consumption
const debugReadings = readFileContent('day-03-input.txt')
  .split('\n')

const readingLength = debugReadings[0].length

let whileLoopCount = 0
let bit0Count = 0
let bit1Count = 0
let gammaBinary = ''
let epsilonBinary = ''
// For each binary debug reading, from the 1st bit from the left, calculate
// which bit is the most common. Finding it, add to the gammaBinary
// from left to right (as opposed to the traditional right to left).
while (whileLoopCount < readingLength) {
  for (let reading of debugReadings) {
    if (reading[whileLoopCount] === '0') bit0Count++
    else bit1Count++
  }

  // Add most common bit to gamma
  if (bit0Count > bit1Count) gammaBinary += '0'
    else gammaBinary += '1'

  whileLoopCount++
  bit0Count = 0
  bit1Count = 0
}

// Create epsilon based on the inverse of gamma
epsilonBinary = gammaBinary.split('').map((binary) => binary === '0' ? '1' : '0').join('')

console.log(parseInt(gammaBinary, 2) * parseInt(epsilonBinary, 2))
// console.log(operations, debugReadings.length)