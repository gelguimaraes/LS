
module.exports =  class Order {
  
   constructor(){
	  this.items = []
	  this.item = new Object()
	  this.item.quantity = 0	 
	  this.item.product = {}
	  this.item.total = function(){
		return this.quantity
	  }
	}	
	
	
	
  addProduct(p){
	let isItem
	if(this.items.length == 0){
		this.item.quantity = 1
		this.item.product = p
		this.items.push(this.item)	
	
	}
	else{
		for (let value of this.items){
			if(p.id === value.product.id){
				value.quantity++
				//value.product.price += p.price
				isItem = true
				break	 
			}else
				isItem = false	
		}
		 if(!isItem){
			 	this.item = new Object() 
				this.item.quantity = 1
				this.item.product = p
				this.item.total = function() {return this.quantity}
				this.items.push(this.item)	
		}	
	}
	//console.log(this.item)
	 
	
  }
    
	
  getItems(cat){  
   	if(cat){	
		return this.items.filter(c => (c.product.cat[0] == cat || c.product.cat[1] == cat))
	 }else
	 	return this.items
	}
	
  total(cat){
	  return this.getItems(cat).reduce((sum, p) => sum + (p.product.price * p.total()), 0)
   }
   
   
   toString(){  
		const zeroLeft = (a,b) => ('000' + a).slice(-b)
		const spaceLeft = (a,b) => ('   ' + a).slice(-b)
		const spaceRight = (a,b) => (a+'     ').slice(0, b)
		let text   
		text = this.getItems().map(l => l.product.id + " " + spaceRight(l.product.getNameCompac(), 9) + "  " + zeroLeft(l.total(), 3) + " UN  " + spaceLeft(l.product.price.toFixed(2), 5) + "  " + spaceLeft((l.product.price * l.total()).toFixed(2), 5) + (l.product.id < this.items.length ? "\n      " : ""))
		
		 //console.log(this.items.total())
		
		return text.join('') 
	}
	 
}
