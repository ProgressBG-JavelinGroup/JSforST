var pesho1 = {};
pesho1.gender = "male";
pesho1.age = 42;
pesho1.fName = "pesho1";
pesho1.lName = "Nikolov1";

var pesho2 = {
	gender: "male",
	age: 42,
	fName: "pesho2",
	lNAme: "Nikolov2"
};
var pesho3 = {
	gender: "male",
	age: 18,
	fName: "pesho3",
	lNAme: "Nikolov3"
};
var pesho4 = {
	gender: "male",
	age: 33,
	fName: "pesho4",
	lNAme: "Nikolov4"
};

var peshos = [pesho1, pesho2, pesho3, pesho4];
var minPesho = findYungestPatient(peshos);
console.log("The younger Patient is: " + minPesho.fName + " - " + minPesho.age);

function findYungestPatient(arr) {
	var minAge = arr[0].age;
	var minEle;

	for (var i = 0; i < arr.length; i++) {
		var pesho = arr[i];

		if (pesho.age < minAge) {
			minAge = pesho.age;
			minEle = pesho;
		}
	}

	return minEle;
}

// дефинирайте функцията findOldestPatient, която аналогично на findYungestPatient() да показва в конзолата името и възрастта на най-стария пациент
function findOldestPatient() {}
