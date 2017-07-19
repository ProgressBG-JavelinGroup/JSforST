var userAgeNode = document.getElementsByTagName('input')[0];
var userCountryNode = document.getElementsByTagName('input')[1];

document.getElementsByTagName('button')[0].addEventListener('click',isUserAdult);


function isUserAdult() {
		var userAge = userAgeNode.value;
		var userCountry = userCountryNode.value;

		if( userAge > 16 && userCountry === "USA"){
			console.log(`Welcome USA!!!!`);
		}else if( userAge > 18 ){
			console.log(`Welcome World`);
		}else{
				console.log('Ask your mother!!!!')
		}
}


