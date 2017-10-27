let cep = {
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "lado ímpar",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "unidade": "",
  "ibge": "3550308",
  "gia": "1004"
}

//console.log(getInfo(cep))
//=>
// cep: 01001-000,
// logradouro: Praça da Sé,
// complemento: lado ímpar,
// bairro: Sé,
// localidade: São Paulo,
// uf: SP,
// unidade: ,
// ibge: 3550308,
// gia: 1004


function getInfo(cep) {
	let result=''
		for (let i in cep){
		 result += i + ": " + cep[i]+ ",\n    "
		}
	//result = result.substring(0, result.length-6) // indidice inicial, indice final
	result = result.substr(0, result.length-6)// indici inicial, quantidade de caracteres
	return result
}

module.exports = getInfo