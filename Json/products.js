
function total(products) {
 return products.reduce((s, p) => s + p.preco, 0)
  //console.log(p.preco)
}


module.exports = total
