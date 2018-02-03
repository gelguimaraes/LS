const md5 = require('./md5')
const Array = require('./array-combination')

class RainbowTable {
 
  constructor(length){
	  this.length = length
  }
	
 table(length){
	 return Array.letters().combination(length)
 }
	
 cracker(imput){
	let comb = this.table(this.length)
	for (let value of comb){
		if (md5(value) == imput)
		return value
	}
 }
}

module.exports = RainbowTable