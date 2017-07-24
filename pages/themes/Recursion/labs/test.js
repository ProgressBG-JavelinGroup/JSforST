function mainFunction( cb ){
	console.log('mainFunction() is invoked');
	cb();
}

function callback() {
	console.log('callback() is invoked');
}

mainFunction( callback);