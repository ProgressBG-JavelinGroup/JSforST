// var url = 'data/test.txt';
var url = 'https://api.github.com/users/ProgressBG-JavelinGroup/repos';
var outputNode = document.getElementsByClassName('output')[0];
var resultStr;


function processData(data){
	data.forEach(function(obj){
		console.log(`${obj.name}: ${obj.language}`);
	});

	$('.output').append().append('<li>JQUERY: DO NOT DO THAT!</li>');
}

var AJAXcallByXHR = function(){
	// AJAX request:
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
	        new ActiveXObject("Microsoft.XMLHTTP");

	xhr.open("GET", url, true);

	xhr.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	  	// Do something with this.responseText
	    processData(JSON.parse(this.responseText));
	  };
	};

	xhr.send();
}




// AJAXcallByXHR();
var AJAXcallByFetch = function(){
	fetch(url)
		.then(function (response){
	  	response.text()
	  		.then(function (responseText) {
	    		processData(JSON.parse(responseText));
	  		});
		});
}

AJAXcallByFetch();

