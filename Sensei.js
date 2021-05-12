class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength =3;

    }

    sayName(){
        console.log("This Ninja's name is " + this.name)
    }

    showStats(){
        console.log("This Ninja's health is " +this.health+", this Ninja's speed is "+this.speed+", this Ninja's strength is "+this.strength)
    }

    drinkSake(){
        this.health += 10;
        console.log("This Ninja's health is now "+this.health)
    }
}

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){
        super(name, 200, 10, 10)
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }
    
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    sayName(){
        super.sayName()
    }

    showStats(){
        super.showStats()
    }
}

const ninja1 = new Ninja("Jon", 20)
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()

const sensei1 = new Sensei("Dom")
sensei1.sayName()
sensei1.showStats()
sensei1.speakWisdom()