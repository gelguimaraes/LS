// JavaScript Document

function triangleChecker(a,b,c){
	var a,b,c
	if(a <(b+c) && b <(a+c) && c<(a+b)){
		if(a==b && b==c)
			return "equilátero"
		else if(a==b || b==c || a==c)
			return "isósceles"
		else
			return "escaleno"
	}else
		return "none";
	
}
module.exports = triangleChecker;