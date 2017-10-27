// JavaScript Document
function sum(arr) {
	let tam = arr.length;
	let soma=0;
	for (let i=0;i<tam;i++){
		soma+=arr[i];
	}
	return soma;
}

function product() {
	let tam = arr.length;
	let prod=1;
	for (let i=0;i<tam;i++){
		prod*=arr[i];
	}
	return prod;

}

function sumOdds(a) {
   let soma = 0
  for (let i=0; i<a.length; i++) {
    if(a[i] % 2 !=0)
      soma += a[i]
  }
  return soma
}

function addingMatrix(a,b) {
  let tam = a.length;
  let tam2 = a[0].length;
  let arrFull =[];
  for (let lin=0;lin<tam;lin++){
	   let arrSum =[];
  		for (let col=0; col<tam2;col++)
		arrSum[col] = a[lin][col] + b[lin][col]
		arrFull.push(arrSum);
		//arrSum[lin]= [a[lin][k] + b[lin][k], a[lin][k+1] + b[lin][k+1]]	
  }
	return arrFull;
}

function multiplyingMatrix(a, b) {
    let result = []
  for (var x = 0; x < a.length; x++) {
    let temp = []
    for (var y = 0; y < a.length; y++) {
      let sum = 0
      for (var z = 0; z < b.length; z++) {
        sum += a[x][z] * b[z][y]
      }
      temp.push(sum)
    }
    result.push(temp)
  }
  return result
}

module.exports = {
  sum,
  product,
  sumOdds,
  addingMatrix,
  multiplyingMatrix
}