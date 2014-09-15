var fs = require('fs');
var path = require('path');
var fpath = process.argv[2]; 
var ftype = process.argv[3];
fs.readdir(fpath, function callback(err, list) {
 	if (err) {
 		throw err;
 	} else {
 		list.forEach(function(item, index) {
 			if (path.extname(item) === '.' + ftype){
 				console.log(item);
 			} 
 		});
 	};
});