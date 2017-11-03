function rot(message, number) {
  let alfa = "abcdefghijklmnopqrstuvwxyz"
  let i = alfa.indexOf(message)
  let arrLeft = alfa.split('').slice(0, number)
  let arrRight = alfa.split('').slice(number, alfa.length)
  let arrConcat = arrRight.concat(arrLeft).join('')
  return arrConcat.substr(i, message.length)

}

module.exports = rot