// JavaScript Document
function fibonacci(number){
	var fn = new Array(number);
	if(number>1){
	fn=[0,1]
	}
	for (var i=2; i<number; i++){
		fn[i] = fn[i-1]+fn[i-2];
	}
// return fn;	
 return ''+fn;	
}

module.exports = fibonacci;
//console.log( fibonacci(2))