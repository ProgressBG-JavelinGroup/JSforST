// main
var colors = ['red', 'green', 'blue'];
var index = 2;
var colorFunctions = [];

for(let i = 0; i<colors.length; i++){
		console.log(`1: i = ${i}`);
		colorFunctions[i] = function() {
			console.log(`2: i = ${i}`);  /// i
			console.log(`color: ${colors[i]}`);
		}
}

colorFunctions[1](); // red
// colorFunctions[2](); // red
