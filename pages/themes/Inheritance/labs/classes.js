class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
console.dir(Animal);

var Vehicle = function(minSpeed, maxSpeed){
	this.minSpeed = minSpeed || 0;
	this.maxSpeed = maxSpeed || 400;
}

console.dir(Vehicle);
