const readFileContent = require("../read-file-content");

// List with all depth readings
const depthReadings = readFileContent('day-01-input.txt').split('\n').map((depthString) => Number(depthString))
const depthReadingsLength = depthReadings.length

let lastDepth = depthReadings[0]
let depthIncreaseCounter = 0
for (let i = 1; i < depthReadingsLength; i++) {
	if (depthReadings[i] > lastDepth) depthIncreaseCounter++

	lastDepth = depthReadings[i]
}

console.log(depthIncreaseCounter)