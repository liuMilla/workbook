var arg = process.argv;
var count = 0;
arg.forEach(function(i){
	var number = parseInt(i);
	if(!isNaN(number)) {
		count= number+count;
	};
});
console.log(count); 
