function sum(){
	// console.log the sum of the arguments
	var sum=0;
	for(let i=0; i<arguments.length; i++){
		sum += arguments[i];
	}
	console.log(sum);
}

var sumArr = ()=>{
	var sum=0;
	for(let i=0; i<arguments.length; i++){
		sum += arguments[i];
	}
	console.log(sum);
}

sumArr(1,2);
sumArr(1,2,3);
sumArr(1,2,3,4);