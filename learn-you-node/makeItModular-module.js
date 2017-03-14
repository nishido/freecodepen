var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
        
        if (err) return callback(err);
        
        list = list.filter(function (file) {
            return path.extname(file) === "."+ext;
        })
        
        callback(null, list);
    })
}

// https://github.com/leochilds/learnyounode-walkthrough/blob/master/6.%20Make%20it%20Modular/walkthrough.md