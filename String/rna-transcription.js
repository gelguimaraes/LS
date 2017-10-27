
DNAtoRNA = {
	'C' : 'G',
	'G' : 'C',
	'A' : 'U',
	'T' : 'A'
}

function toRnax(dna){
	//'ACGTGGTCTTAA'
	let result = ''
	dna = dna.split('')
  	for (base of dna){
	 let rna = DNAtoRNA[base] //indice literal
	 result += rna
	}
	return result
}


function toRna(dna){
	//'ACGTGGTCTTAA'
	let result = ''
	result = dna.split('').reduce((sum, base) => (sum + DNAtoRNA[base]), '')
	return result
}

module.exports = {toRna}


