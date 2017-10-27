// JavaScript Document


function triangleText(num){
	var l,c,m='';
	for(l=1;l<=num;l++)
		for (c=1; c<=num; c++){
			 if(c < num || l < 1)
			 	l>=c ? m+='#' : m+=' ';
			 else if (c == num && l==num)
				 m+='#';
			 else 
			 	l>=c ? m+='#\n' : m+=' \n';
		 }
	return m;
}

//console.log(triangleText(1))


function halfDiamondText(num){
	var l,c,m='';
	for(l=1;l<=2*(num-1);l++)
		for (c=1; c<=num; c++){
			 if(c<num)
			 l>=c && (l+c <= 2*num) ? m+='#' : m+=' ';
			 else
			 l>=c && (l+c <= 2*num)  ? m+='#\n' : m+=' \n';
		 }
	return m;
}

//console.log(halfDiamondText(3))


module.exports = {
  triangleText,
  halfDiamondText
}