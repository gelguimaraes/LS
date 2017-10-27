


function primeFactors(number) {
  let primesFact = [];
 
	for (let i=2; i<=number; i++){
		while ((number%i)===0){
				number = number/i
				primesFact.push(i)
		}
	}
	return  primesFact
	//return ""+primes
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
/*
function primeFactors(number) {
  let factors = []
  for (let i = 2; i <= number; i++) {
    while ((number % i) === 0) {
        factors.push(i)
        number /= i
    }
  }
  return factors
}
*/


module.exports = primeFactors