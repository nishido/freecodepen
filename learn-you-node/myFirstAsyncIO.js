var fs = require('fs');
var inputFile = process.argv[2];

fs.readFile(inputFile, function(err, data){
    if (err) return console.error(err);
    var numNewLines = data.toString().split(/\r|\n/).length-1;
    console.log(numNewLines);
})

