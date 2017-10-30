
module.exports =  class Order {
  
   constructor(){
	  this.items = []
	  this.item = new Object()
	  this.item.quantity = 0	 
	  this.item.product = {}
	 /* this.item.total = function(){
		return this.item.quantity
		}*/
	}	
	
	
  addProduct(p){
	let isItem
	if(this.items.length == 0){
		this.item.quantity = 1
		this.item.product = p
		this.items.push(this.item)	
		//console.log(this.item)
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
				this.item.quantity = 1
				this.item.product = p
				this.items.push(this.item)	
		}	
	}
	this.item = new Object()  
  }
    
	
  getItems(cat){  
   	if(cat){	
		return this.items.filter(c => (c.product.cat[0] == cat || c.product.cat[1] == cat))
	 }else
	 	return this.items
	}
	
  total(cat){
	  return this.getItems(cat).reduce((sum, p) => sum + (p.product.price * p.quantity), 0)
   }
   
   
   toString(){  
		const zeroLeft = (a,b) => ('000' + a).slice(-b)
		const spaceLeft = (a,b) => ('   ' + a).slice(-b)
		const spaceRight = (a,b) => (a+'     ').slice(0, b)
		let text   
		text = this.getItems().map(l => l.product.id + " " + spaceRight(l.product.name, 9) + "  " + zeroLeft(l.quantity, 3) + " UN  " + spaceLeft(l.product.price.toFixed(2), 5) + "  " + spaceLeft((l.product.price * l.quantity).toFixed(2), 5) + (l.product.id < this.items.length ? "\n      " : ""))
		
		return text.join('') 
	}
	 
}
