
/*
let new_arr = old_arr.filter(callback)
let new_arr = old_arr.filter(callback, thisArg)
let array = [1, 2, 3, 4, 5, 6]
console.log(array.filter((value) => value % 2 == 0)) //=> [ 2, 4, 6 ]*/

function gtZero(products) {
 	gtZero = products.filter(value => value[2]>0)//retotno de forma lógica (true or false) // ate 3 parametros (element, index, array)
	return gtZero;
}

function subTotal(products) {
  		subT = products.map(function(produto){   //var new_array = arr.map(function callback(currentValue, index, array)
			return [produto[0], produto[1]*produto[2]];
		})
	return subT;
}

function total(products) {
		sum = products.reduce(function(total, produto){ //arr.reduce(callback) or arr.reduce(callback, initialValue)
			return total + (produto[1]*produto[2]);
		},0)
	return sum;
}

function total(products) {
    const sum = (total, produto) => total + produto[1]*produto[2]
    return  products.reduce(sum,0)
}

module.exports = {
  gtZero,
  subTotal,
  total
}
