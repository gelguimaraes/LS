Array.prototype.rotate = function(n) {
    return this.slice(n, this.length).concat(this.slice(0, n));
}

class Cipher {

  complent(rotate){
    let complent = {}
    let inputChars = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let outputChars = inputChars.rotate(rotate)

    inputChars.forEach((char, index) => {
      complent[char.toLowerCase()] = outputChars[index].toLowerCase()
      complent[char.toUpperCase()] = outputChars[index].toUpperCase()
    })

    return complent
  }

  rot(str, rotate) {
    
    let substitution = this.complent(rotate)

    return str
      .split('')
      .map(char => substitution[char] || char)
      .join('')
 }

 allRots(str) {
	let result = {}
	let rot = "rot"
	for (let i=1; i<=25; i++){
		result[rot+i] = this.rot(str, i)
	}
	return result
	}
}

module.exports = Cipher
