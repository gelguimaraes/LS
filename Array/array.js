
function min(x) {
let valueMin = x[0];
	for	(let value of x){
		if (value < valueMin)
			valueMin = value;
	}
	return valueMin;
}

function max(x) {
  let valueMax = x[0];
	for	(let value of x){
		if (value > valueMax)
			valueMax = value;
	}
	return valueMax;
}

function range(first, last, step) {
	let start = last ? first : 0;
	//console.log(start)
	let end = last ? last : first;
	//console.log(end)
	let jump = step ? step : 1;
	//console.log(jump)
	var arNumber = [];
	var i=0
	for (let number = start; number < end; number+=jump){
		arNumber[i] = number;
		i++;
	}	
	return arNumber

}

function zip(strings, inteiros, boleanos) {
  let tam = strings.length;
  var arFull = [];
  for(let i=0;i<tam; i++){
	if(boleanos) 
	  arFull[i]=[strings[i], inteiros[i], boleanos[i]]
	else	
	  arFull[i]=[strings[i], inteiros[i]]  		  
  }
	return arFull;
	
}

function zipx(...arrays) {
	let newArr = [];
	for (let value of arrays)
		newArr = value;
	return newArr;
	
}

function uniq(arr) {
	let tam = arr.length;
	let newArr = [];
    newArr[0]=arr[0];
	for (let i=0;i<tam;i++){
		if(newArr.indexOf(arr[i])===-1)
		newArr.push(arr[i]);	 
	}
	return newArr
}

function uniq2(arr) {
	let newArr = [];
	for (let value of arr){
		if(!newArr.includes(value))
			newArr.push(value) 
	}
	return newArr
}

function uniq3(arr) {
	let newArr = [];
	for(let nums in arr){
		if(!newArr.includes(arr[nums]))
		 newArr.push(arr[nums])
	}
	return newArr
}	

//uniq([1, 2, 1, 4, 1, 3]);
//uniq([1, 2, 1, 3, 3]);

module.exports = {
  min,
  max,
  range,
  zip,
  uniq
}