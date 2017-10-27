function citation(person) {
 let names = person.split(' ')
 //console.log(names)
 let lastName = names[names.length-1]
 //console.log(lastName)
 let firstNames = names.slice(0, names.length-1).join(' ')
 //console.log(firstNames)
 lastName = lastName.toUpperCase()
 
 result = lastName+ "; " + firstNames
 return result
}

function compactCitation(person) {
 let names = person.split(' ')
 let firstLetters = ''
 let lastName = names[names.length-1]
 lastName = lastName.toUpperCase()
 
 let firstNames = names.slice(0, names.length-1)
 //console.log (firstNames)
 for(let ind in firstNames)
 	firstLetters += firstNames[ind][0] + ((ind < firstNames.length-1) ? ". " : ".")
 //console.log (firstLetters)
 result = lastName+ "; " + firstLetters
 return result
}

module.exports = {
  citation,
  compactCitation
}
