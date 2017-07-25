function Car(model, year) {
	// var this = {};
	console.dir(this);
	this.model = model;
	this.year = year;

	// return this
}

var ford = new Car('Ford', 2010);
var bmw = Car('BMW', 1990);

// 127.0.0.1:8080 => dev
// 127.0.0.1: => production

console.log(ford);
logger.log(ford);

