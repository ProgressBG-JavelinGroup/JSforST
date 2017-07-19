var pesho1 = {
	gender: 	"male",
	age: 		42,
	fName: 	"pesho2",
	lName: 	"Nikolov2",
	showFullName: function(){
		console.log( this.fName +" "+ this.lName);
	}
};

var outNode = document.getElementById("out");




function f(){
	var userChoice = document.getElementById("uc").value;
	console.log("userChoice = " + userChoice);

	outNode.innerHTML = pesho1[userChoice];
}

// console.log( pesho1[userChoice]);