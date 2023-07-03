// Problem 1. 

function Character(name){
this.name = "unnamed";
}

Character.prototype.setName = function(name){
    this.name = name;
}

Object.setPrototypeOf(Warrior.prototype, Character.prototype);

Warrior.prototype.increaseStrength = function(){
this.strength += 100;
}

Warrior.prototype.decreaseStrength = function(){
    this.strength -= 100;
    }

function Warrior(name,strength) {
    Character.call(this,name);
    // this.name = "unnamed";
    this.strength = 0;
}

Object.setPrototypeOf(Knight.prototype, Warrior.prototype);

Knight.prototype.setWeapon = function(x){
this.weapon = x;
}

function Knight(name,strength,weapon) {
    Warrior.call(this,name,strength);this.weapon = 'no weapon';
}

// Problem 2.

class Vehicle {
constructor(make){
this.make = make;
}

setMake(x){
this.make = x;
}

}

class Car extends Vehicle {
constructor(make,model){
    super(make);
    this.model = model;
}
}

class Truck extends Vehicle {
constructor(make,bedSize){
    super(make);
    this.bedSize = bedSize;
}
}

class Motorcycle extends Vehicle {
constructor(make,engineSize){
    super(make);
    this.engineSize = engineSize;
}
}

export { Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle}