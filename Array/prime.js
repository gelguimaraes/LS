// JavaScript Document
//console.log(prime(4))     //=> 2, 3, 5, 7
//console.log(prime(6))     //=> 2, 3, 5, 7, 11, 13
//console.log(prime(2, 10)) //=> 2, 3, 5, 7
//console.log(prime(2, 20)) //=> 2, 3, 5, 7, 11, 13, 17, 19

function prime(n1, n2){
	let prime = [];
	let num=2;
	let ini = n2 ? n1 : num
	let end = n2 ? n2 : num  
	
		for (let i=ini; i<=end; i++){
			if (isPrime(ini)) 
				prime.push(ini==2 ? ""+i : " "+i)
			ini++
			if(!n2){
			end++
				if(prime.length >= n1)
					break
			}
		}
	
	return "" + prime;	
}

function isPrime(num) {
  let prime = num;
	for (let i = 2; i < num; i++) {
		if (num % i === 0) {
			prime = false;
			break;
		}
	}
	return prime;
}