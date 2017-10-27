/*console.log(toRoman(1))    //=> I
console.log(toRoman(2))    //=> II
console.log(toRoman(3))    //=> III
console.log(toRoman(4))    //=> IV
console.log(toRoman(5))    //=> V
console.log(toRoman(6))    //=> VI
console.log(toRoman(9))    //=> IX
console.log(toRoman(27))   //=> XXVII
console.log(toRoman(48))   //=> XLVIII
console.log(toRoman(59))   //=> LIX
console.log(toRoman(93))   //=> XCIII
console.log(toRoman(141))  //=> CXLI
console.log(toRoman(163))  //=> CLXIII
console.log(toRoman(402))  //=> CDII
console.log(toRoman(575))  //=> DLXXV
console.log(toRoman(911))  //=> CMXI
console.log(toRoman(1024)) //=> MXXIV
console.log(toRoman(3000)) //=> MMM */

function toRoman(number) {
  romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ]
  tam = romanMatrix.length;
  result=""
  	for (let i=0; i<tam; i++){
		if(number >= romanMatrix[i][0]){
			while(number >= romanMatrix[i][0]){
				number -= romanMatrix[i][0]
				result += romanMatrix[i][1]
			}
		}
   } 
    return result;
}

//toRoman(3000);

module.exports = toRoman