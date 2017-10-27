// JavaScript Document

//=>
// DOM SEG TER QUA QUI SEX SAB
//      01  02  03  04  05  06
//  07  08  09  10  11  12  13
//  14  15  16  17  18  19  20
//  21  22  23  24  25  26  27
//  28  29  30  31


//essa funcao recebe uma string no parametro s

function calendar(s, d){
	var sem = "DOM SEG TER QUA QUI SEX SAB\n"
	var iString=sem.indexOf(s), ws='';
	
	for (let i=1; i<=(iString); i++){
		ws+=' ';
	}
	var dia='', cont=0;
	var pulo = iString/4;
	for (let i=1; i<=d; i++){
		i <= 9 ? dia += ' 0'+i: dia+=' '+i;
		cont++
		if (cont > 6-pulo){
			dia+='\n';
			cont=0;
			pulo=0;
		}else if(cont < 6 && i==d)
			dia+= '';
		else
			dia+=' ';
	}
	return sem+ws+dia
}


//console.log(calendar('SEG', 31))

module.exports = calendar