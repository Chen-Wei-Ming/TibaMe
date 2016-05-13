function practice1(){
	var value1 = 60 ;
	var result = null ;
	if(value1 >= 60){
		result = "及格" ;
	}
	else{
		result = "不及格" ;
	}
	return result ;
}
function practice2(){
	var value = 3 ;
	var result = null ;
	switch(value){
		case 1:
			result = "1" ;
			break ;
		case 2 :
			result = "2" ;
			break ;
		case 3 :
			result = "3" ;
			break ;
		default :
			result = "default" ;
			break ; 
	}
	return result ;
}
function practice3(){
	var result = "";
	for(var i = 0 ; i < 10 ; i++){
		result += i+"</br>"
	}
	return result ;
}
function practice4(){
	var result = "" ;
	var index = 0 ;
	while(index < 10){
		result += index+"</br>" ;
		index++ ;
	}
	return result ;
}
function practice5(){
	var result = "" ;
	var index = 0 ;
	do{
		result += index+"</br>"
		index++ ;
	}while(index < 10)
	return result ;
}
function practice6(){
	var result = "" ;
	for(var row = 1 ; row < 10 ; row++){
		for(var col = 1 ; col < 10 ; col++){
			result += row +"*"+col +"="+ (row*col)+"&nbsp";
		}
		result += "</br>" ;
	}
	return result ;
}