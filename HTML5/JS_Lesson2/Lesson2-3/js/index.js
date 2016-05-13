//Global Function
/*
parseInt(var , number)
parseFloat(string)
eval(string)
isFinite(var)
isNaN(var)
*/
var a = 10//Globl
function practice1(){
	var str = "var a = 10 ; var b = 20 ; document.write('a+b =', a+b , '</br>') ;" ;
	return eval(str) ; 
}
function practice2(){
	var nan = '' ;//Local
	return isNaN(nan) ;
}