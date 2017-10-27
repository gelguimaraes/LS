// JavaScript Document

//createTable(3, 4)
//=>
// 1.1 1.2 1.3 1.4
// 2.1 2.2 2.3 2.4
// 3.1 3.2 3.3 3.4


//createTable(3, 4, 'Item')
//=>
// Item 1.1 Item 1.2 Item 1.3 Item 1.4
// Item 2.1 Item 2.2 Item 2.3 Item 2.4
// Item 3.1 Item 3.2 Item 3.3 Item 3.4

//createTableHTML(3, 4)
//=>
// <table>
//   <tr>
//     <td>Item 1.1</td>
//     <td>Item 1.2</td>
//     <td>Item 1.3</td>
//     <td>Item 1.4</td>
//   </tr>
//   <tr>
//     <td>Item 2.1</td>
//     <td>Item 2.2</td>
//     <td>Item 2.3</td>
//     <td>Item 2.4</td>
//   </tr>
//   <tr>
//     <td>Item 3.1</td>
//     <td>Item 3.2</td>
//     <td>Item 3.3</td>
//     <td>Item 3.4</td>
//   </tr>
// </table>


function createTable(a,b,c) {
	let result =[]
 	for (let i=1;i<=a;i++)
		for(let j=1; j<=b;j++ ){
			(c) ? result += c+ ' '+ i+'.'+j + (j< 4? ' ':''): result += i+'.'+j + (j< 4? ' ':'')
		if(j==4&& i<3)
		 result +='\n'
	}
	return result
}


function createTableHTML(a,b) {
  let result =[]
  result +='<table>\n'
 	for (let i=1;i<=a;i++){
	result+='  <tr>\n'
		for(let j=1; j<=b;j++ ){
			result += '    <td>Item '+ i+'.'+j + '</td>\n'
	
	}
	result+='  </tr>\n'
	}
	
	result +='</table>'
	return result
}

module.exports = {
  createTable,
  createTableHTML
}