module.exports = class Product {
 
 
  constructor(id, name, price, cat){
	  this.id = id
	  this.name = this.getNameCompac(name)
	  this.price = price
	  this.cat = cat
	  
	}
	getNameCompac(name){
		let arrName = name.split(' ')
		if(arrName.length > 1)
			return arrName.slice(0, arrName.length-1).join(' ')
		else
			return name
	}
}
