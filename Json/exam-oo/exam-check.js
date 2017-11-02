// JavaScript Document

class ExamCheck {
	
	//weight = new Object();
	//answer = new Object();
	
	constructor(answer, weight){
		this.weight = weight
		this.answer = answer
		}
		
		grade(student){
			let result
			result = Object.keys(student).reduce((sum, k) => sum + (student[k] === this.answer[k] ? this.weight[k] : 0), 0)
			return result	
		}
	
}

module.exports = ExamCheck