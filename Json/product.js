module.exports = class Product {
 
 
  constructor(id, name, price, cat){
	  this.id = id
	  this.name = name
	  this.price = price
	  this.cat = cat
	  this.getNameCompac = function(){
		let arrName = this.name.split(' ')
		if(arrName.length > 1)
			return arrName.slice(0, arrName.length-1).join(' ')
		else
			return this.name
		}
	}
	
}
