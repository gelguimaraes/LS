// JavaScript Document

/*students = [
  {"student": "Fulano", "grade": 10},
  {"student": "Sicrano", "grade": 5},
  {"student": "Beltrano", "grade": 7},
]*/

class ExamStats{
	
	constructor(student){
		this.grades = student
	}
	
	avg(){
		let sum = this.grades.reduce((sum, g) => sum + g.grade, 0)
		return sum/this.grades.length
	}
	
	min(limit){
	let end = limit ? limit : 1
	let or = this.grades.sort(function(a, b) {return a.grade - b.grade})
	return or.map(grades => grades.grade).slice(0, end)
	}
	
	max(limit){
	let begin = limit ? -limit : -1
	let ordem = this.grades.sort(function(a, b) {
		return a.grade-b.grade
	})
	return ordem.map(grades => grades.grade).slice(begin)

	}
	
	lt(limit){
		let ltgr = this.grades.map(grades => grades.grade)
		return ltgr.filter(grades => grades < limit)
	}
	
	gt(limit){
		let ltgr = this.grades.map(grades => grades.grade)
		return ltgr.filter(grades => grades > limit)
	}
}

module.exports = ExamStats