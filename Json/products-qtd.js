
function gtZero(products) {
  gtZero = products.filter(value => value.qtd > 0)
 return gtZero;
}

function subTotal(products) {
 	subT = products.map(function(produto){
			return {id: produto.id, subtotal: (produto.qtd * produto.preco) }
			})
	return subT;
}

function total(products) {
  	sum = products.reduce(function(total, produto){ 
			return total + (produto.preco * produto.qtd);
		},0)
	return sum;
}

module.exports = {
  gtZero,
  subTotal,
  total
}
