
//console.log(substitution('lorem ipsum', 'aegiost', '4361057'))   //=> l0r3m 1p5um
//console.log(substitution('senha secreta', 'aegiost', '!@#$%&*')) //=> &@nh! &@cr@*!


function substitution(message, plaintext, ciphertext ) {
	let result=''
	for(let value of message){
		let iEnc = plaintext.indexOf(value)
		if(iEnc !=-1)
		 	result+=value.replace(value, ciphertext[iEnc])
		else
			result+=value
		}
	return result 
}

module.exports = substitution