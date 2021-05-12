class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res= res;
    }

    attack(target){
        //reduce target res by power
        target.res -= this.power
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if(target instanceof Unit){
            if(this.stat == "resilience"){
                if(magnitude>0){
                    target.res += this.magnitude
                }else{
                    target.res -= this.magnitude
                }
            }
            if(this.stat == "power"){
                if(magnitude>0){
                    target.power += this.magnitude
                }else{
                    target.power -= this.magnitude
                }
            }
        }else{
            throw new Error("Target must be a unit!")
        }

    }
}

