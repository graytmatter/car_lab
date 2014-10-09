function Car(make, model, year, color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.color = color;
	this.state = "off";
	this.previousOwners = [];
	this.currentOwner = make;
	this.passengers = [];
}

Car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner);
	this.currentOwner = newOwner;
};

Car.prototype.paint = function(newColor){
	this.color = newColor;

Car.prototype.start = function(){
	this.state = "on";
};

Car.prototype.off = function(){
	this.state = "off";
};

Car.prototype.driveTo = function(destination){
	if(this.state === "on"){
		console.log("driving to " +destination);
	}
};

Car.prototype.park = function(){
	if(this.state === "off"){
		console.log("parked!");
	}
};

Car.prototype.pickUp = function(person){
	if(this.state === "on"){
		this.passengers.push(person);
	}
};

Car.prototype.dropOff = function(person){
	if(this.state === "on"){
		console.log("hi");
		this.passengers.splice(this.passengers.indexOf(person), 1);
	}
};
};

module.exports=Car;