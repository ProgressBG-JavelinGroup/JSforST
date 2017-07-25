function getEnv() {
	var env = {};
	var prodPort = '22222';


	var port = window.location.port;
	var host = window.location.hovar
	env.prod = (port == prodPort && host== '127.0.0.1 ') ? true : false;
	env.dev  =  (port != prodPort || host!= '127.0.0.1 ') ? true : false;

	return	env;
}

var env = getEnv();
console.dir(env);

if (env.dev){
	console.log(`DEVELOPMENT ENVIRONMENT!`);
}else if(env.prod){
	console.log(`PRODUCTION ENVIRONMENT`);
}else{
	console.log(`UNKNOWN ENVIRONMENT`);
}