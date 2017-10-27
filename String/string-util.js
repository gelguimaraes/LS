/**
 * text: string
 * action: lowercase, uppercase, camelcase, snakecase, reverse,
 *         countchar, countword, countline
 */
function formatter(text, action) {
  switch (action) {
    case 'lowercase':
      	return text.toLowerCase()
    case 'uppercase':
      	return text.toUpperCase()
    case 'camelcase':
      	return toCamelCase(text) 
	case 'snakecase':
		return toSnakecase(text)
	case 'reverse':
		return toReverse(text)
	case 'countword':
		return toCountWord(text)
	case 'countchar':
		return toCountChar(text)
	case 'countline':
		return toCountLine(text)
	  
  }
}

function toCamelCase(t) {
  let text = t.toLowerCase();	
  let names = text.split(' ')
  let result= ''
  //console.log(names)
  for(let ind in names){
 	result += names[ind].replace(names[ind][0], names[ind][0].toUpperCase()) + (ind < names.length-1 ? " " : "")
	//console.log(result)
}
  return result
}

function toSnakecase(t) {
  let names = t.split(' ')
  let result= ''
  //console.log(names)
  for(let ind in names){
 	result += names[ind] + (ind < names.length-1 ? "_" : "")
	//console.log(result)
}
  return result
}


function toCountWord(t){
  let result = t.split(/[ \n]/g)
  return result.length
}

function toReverse(t){
  let result = t.split('').reverse()
  return result.join('') 
}

function toCountChar(t){
  let result = t.split('')
  return result.length
}

function toCountLine(t){
  let result = t.split(/\n/g)
  return result.length
}


module.exports = formatter
