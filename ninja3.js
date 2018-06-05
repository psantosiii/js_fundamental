class Ninja {
    constructor (name,health,speed,strength){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log("Health: " + this.health + " Speed: " + this.speed + " Strength :" + this.strength);
    }
    drinkSake(){
        this.health += 10;
    }
}
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health += 100;
        this.speed +=  7;
        this.strength += 7;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programer can do in one month,two programer can do in 2 months")
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
const superSensei1 = new Sensei("Son Goku");
superSensei1.sayName();
superSensei1.speakWisdom();
superSensei1.showStats();
