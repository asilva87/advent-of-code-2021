var fs = require('fs')

function readFileContent(filePath) {
  try {  
    const input = fs.readFileSync(filePath, 'utf8');

    return input;
  } catch(e) {
    console.log('Error:', e.stack);
    
    return null;
  }
}

module.exports = readFileContent;