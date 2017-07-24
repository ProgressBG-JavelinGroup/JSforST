function main() {
	var y = 99;

	function sum(x, y=y){
		// var y = 30;
		console.log(x+y);
	}

	sum(1);
}
main();