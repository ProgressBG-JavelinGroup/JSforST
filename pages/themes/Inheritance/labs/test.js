var Vehicle = function(minSpeed, maxSpeed){
	this.minSpeed = minSpeed || 0;
	this.maxSpeed = maxSpeed || 400;
}
Vehicle.prototype.drive = function () {
	console.log(`I'm driving with ${this.maxSpeed} km/h`);
}

var Car = function(minSpeed, maxSpeed, model, year){
	Vehicle.apply(this,[minSpeed, maxSpeed]);
	this.model = model;
	this.year = year || 1990;
};

Car.prototype = Vehicle.prototype;
Car.prototype.stop = function() {
	console.log(`I've stopped!`);
}

var bmw = new Car(100, 300, 'Ford');
bmw.drive();
bmw.stop();
// bike.drive();
// ford.drive();
