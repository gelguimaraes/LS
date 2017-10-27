
function hamming(dna1, dna2){
	dna1= dna1.split('')
	dna2= dna2.split('')
	let result = 0;
   for(let ind in dna1){
	   if(dna1[ind] !== dna2[ind])
			result++;
   }
	return result
}

module.exports = hamming
