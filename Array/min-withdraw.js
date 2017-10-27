// JavaScript Document
function withdraw(number) {
	arrayNotas = [100, 50,20,10]
	let notas = [];
	newArr=[]
		
	for (i=0; i<arrayNotas.length; i++){
		notas[i] = parseInt(number/arrayNotas[i]);
		number = number%arrayNotas[i]
		//number -= (arrayNotas[i] * notas [i]);
		newArr.push([arrayNotas[i], notas[i]])
	}
	return newArr	
}
/*
function withdraw(number) {
	arrayNotas = [100, 50,20,10]
	let notas = [];
	newArr=[]
	cont=0	
	do{
		notas[cont] = parseInt(number/arrayNotas[cont]);
		number -= (arrayNotas[cont] * notas [cont]);
		newArr.push([arrayNotas[cont], notas[cont]])
		cont++;
	}while(number)
	return newArr	
}*/



module.exports = withdraw