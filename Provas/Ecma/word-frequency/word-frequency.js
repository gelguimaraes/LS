
Array.prototype.uniq = function () {
  let uniq = []
  let values = this

  values.forEach(function (v) {
    if (!uniq.includes(v))
      uniq.push(v)
  })

  return uniq
}

class WordFrequency {
  static frequency(message) {
		let result = {}
		let array = message.toLowerCase().split('');
		let json  = {}
		let json2 = {};
		for (let char of array){
			if (json[char])
				json[char] += 1
			else
				json[char] = 1
		}
		for (let key in json){
			//console.log(json[key])
			if(json2[json[key]]) {
				json2[json[key]].push(key)
				json2[json[key]].sort()
			}else
				json2[json[key]] = [key]

		}
		return json2
	}
}
module.exports = WordFrequency
