/*studend1 = {q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b'}
studend2 = {q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}
weight =   {q1:  2 , q2:  2 , q3:  2 , q4:  2 , q5:  2 }
answer =   {q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd'}*/

function grade(studend, weight, answer){
	let result=0;
	for(let ind in studend){
		if(answer[ind]==studend[ind])
		result += weight[ind]
	}
	return result
}

//console.log(grade(studend1, weight, answer)) //=> 4
//console.log(grade(studend2, weight, answer)) //=> 8

/*students = [
  {"student": "Fulano", "grade": 10},
  {"student": "Sicrano", "grade": 5},
  {"student": "Beltrano", "grade": 7},
]*/


function avg(students){
	let sum=0
	for (let value of students)
	//console.log(value.grade)
		sum += value.grade
	return sum/students.length
}



function min(students, qtd){
	end = qtd ? qtd : 1
	let or = students.sort(function(a, b) {
		//if(a.grade > b.grade){ return 1}
		//else if (a.grade < b.grade){return -1}
		//else { return 0}
		return a.grade - b.grade
	})
	//console.log(or)
	result = or.map(grades => grades.grade)
	//console.log(result)	
	let minvalues = result.slice(0, end)
	minvalues = qtd ? minvalues : minvalues[0]
	//console.log(minvalues)
	return minvalues
}

function max(students, qtd){
	begin= qtd ? - qtd : -1
	
	let or = students.sort(function(a, b) {
		//if(a.grade > b.grade){ return 1}
		//else if (a.grade < b.grade){return -1}
		//else { return 0}
		return a.grade-b.grade
	})
	//console.log(or)
	result = or.map(notas => notas.grade)
	//console.log(result)
	let maxvalues = result.slice(begin)
	maxvalues  = qtd ? maxvalues : maxvalues [0]
	//console.log(maxvalues)
	return maxvalues
}


function lt(students, value) {
  let or = students.sort(function(a, b) {
		return a.grade-b.grade
	})
	//console.log(or)
	ltgr = or.map(notas => notas.grade)
	result = ltgr.filter(notas => notas < value)
	return result
	
}

function gt(students, value) {
    let or = students.sort(function(a, b) {
		return a.grade-b.grade
	})
	//console.log(or)
	ltgr = or.map(notas => notas.grade)
	result = ltgr.filter(notas => notas > value)
	return result
}


//console.log(avg(students))                   //=> 7.333333333333333
//console.log(min(students))                   //=> 5
//console.log(min(students, 2))                //=> [5, 7]
//console.log(max(students))                   //=> 10
//console.log(max(students))                   //=> 10
//console.log(lt(students, 6))                 //=> [5]
//console.log(gt(students, 6))                 //=> [7, 10]

module.exports = {
	grade,
	avg, 
	max,
	min,
	lt,
	gt
}

