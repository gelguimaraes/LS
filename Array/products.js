

/*let array = [1, 2, 3, 4, 5, 6]

console.log(array.reduce((addition, value) => addition + value, 0)) //=> 21
console.log(array.reduce((addition, value) => addition + value))    //=> 21
console.log(array.reduce((addition, value) => addition * value))    //=> 720

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

//ES6 example
const numbers = [2, 4, 8, 10];
var halves = numbers.map(x => x / 2);

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
*/

/*
function total(products) {
  sum = products.reduce(function(total, produto){	
	  return total+produto[1];
  },0)
  return sum;
}*/


function total(products) {
  arr = products.map(function(value){
	  return value[1];
  })
  //console.log(arr)
  let sum = 0
  for (let value of arr)
	 sum += value;
  return sum;
}

/*function total(products) {
  const sum = (total, product) => total + product[1]
  console.log(sum);
  return products.reduce(sum, 0)
}*/

module.exports = total
