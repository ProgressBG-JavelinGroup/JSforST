var a = 1;

function scopeA(){
	var a = 2;

	function scopeB() {
		var a = 3;
		a = 9;
		console.log(`scopeB: a = ${a}`); // 9
	}
	scopeB();
	console.log(`scopeA: a = ${a}`);
}
scopeA();

console.log(`window.a = ${a}`);