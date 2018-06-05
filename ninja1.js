function Ninja(name){
    this.name = name;
    this.health = 100;
    const speed = 3;
    const strength = 3;

    this.sayName = function (){
        console.log("Hi my name is " + this.name + " san!");
    }
    this.showStats = function(){
        console.log("Name: " + this.name, "Health:" + this.health,"Speed:" + speed,"Strength:" + strength);
    }
    this.drinkSake = function(){
        this.health += 10;
    }   
}
Ninja.prototype.punch = function(obj){
    if (obj instanceof Ninja){
        this.health -= 5;
        console.log(this.name + " was punched by " + obj.name + " and lost 5 health!")
    }
}
Ninja.prototype.kick = function(obj){
    if (obj instanceof Ninja){
        this.health -= 15;
        console.log(this.name + " roundhouse kicked " + obj.name + " in the face and lost 15 health!")
        console.log(this.showStats());
    }
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
var ninja2 = new Ninja("Kawasaki");
ninja2.sayName();
ninja2.showStats();
// 
var ninja3 = new Ninja("Suzuki");
ninja3.sayName();
ninja3.showStats();
//
var blueNinja = new Ninja("Goemon");
//
var redNinja = new Ninja("Bill Gates");
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
// blueNinja.kick(redNinja);
redNinja.punch(blueNinja);
var godNinja = new Ninja("Chuck Norris");
godNinja.kick(redNinja);
