var fs = require('fs');
var file = process.argv[2];
var bufObj = fs.readFileSync(file);
console.log(bufObj.toString().split('\n').length-1);