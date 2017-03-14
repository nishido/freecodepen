var fs = require('fs');

function myFirstIO(inputFile) {
    var fileContents = fs.readFileSync(inputFile).toString();
    var fileArray = fileContents.split(/\r|\n/);
    
    var arrayLength = fileArray.length;
    var numNewLines = arrayLength - 1;
    
    return numNewLines;
    
}


console.log(myFirstIO(process.argv[2]));