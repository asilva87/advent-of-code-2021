const readFileContent = require("../read-file-content");

// List with all depth readings
const depthReadings = readFileContent('day-01-input.txt').split('\n').map((depthString) => Number(depthString))
const depthReadingsLength = depthReadings.length

let lastWindowSum = depthReadings[0] + depthReadings[1] + depthReadings[2]
let depthIncreaseCounter = 0
for (let i = 1; i < depthReadingsLength; i++) {
	let currentWindowSum = depthReadings[i] + depthReadings[i + 1] + depthReadings[i + 2]

    if (!currentWindowSum) break

    if (currentWindowSum > lastWindowSum) depthIncreaseCounter++

    lastWindowSum = currentWindowSum
}

console.log(depthIncreaseCounter)