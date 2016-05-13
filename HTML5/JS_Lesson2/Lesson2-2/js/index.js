function practice1(){
	var arr = new Array(10) ;
	return arr[0]+"</br>" ;
}
function practice2(){
	var arr = new Array(1,2,3,4) ;
	return arr[0] +"</br>" ;
}
function practice3(){
	//copy
	var result = '' ;
	var arr1 = new Array(1,2,3,4,5) ;
	var arr2 = new Array(5) ;
	for(var index = 0 ; index <5 ; index++){
		arr2[index] = arr1[index] ;
		result += arr2[index]+'</br>';
	}
	//copy 2
	var arr3 = arr1 ;
	return result ;
}
function practice4(){
	var result = '' ;
	var arr1 = new Array() ;
	arr1[0] = new Array(1,2,3,4,5) ;
	arr1[1] = new Array(11,12,13,14,15) ;
	result = arr1[1][2] ;
	return result+'</br>' ;
}
function practice5(){
	var result ='' ;
	var arr = new Array(3) ;
	for(var index = 0 ; index < 3 ; index++){
		arr[index] = new Array(3) ;
	}
	for(var index1 = 0 ; index1 < arr.length ; index1++){
		for(var index2 = 0 ; index2 < arr[index1].length ; index2++){
			arr[index1][index2] = (index1+1)*(index2+1) ;
		}
	}
	return arr[1][1]+'</br>' ;
}