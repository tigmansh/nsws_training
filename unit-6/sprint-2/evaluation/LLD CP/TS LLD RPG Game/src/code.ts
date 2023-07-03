export class Entity {
    constructor(public health: Number, public strength: Number, public defense: Number, public name: String) { }
    movement() { }
}


// Different Player Characters
export class Player extends Entity {
    public level: number = 0;
    constructor(public health: Number,public strength: Number, public defense: Number, public name: String, level: number = 1) {
        super(health, strength, defense, name);
    }
    attack() { }
}

export class Swordsman extends Player {
    constructor(health: Number, strength: Number, defense: Number) {
        super(health, strength, defense, "Swordsman");
    }
    slashAttack() { }
}

export class Mage extends Player {
    constructor(health: Number, strength: Number, defense: Number) {
        super(health, strength, defense, "Mage");
    }
    magicAttack() { }
}

export class Spearman extends Player {
    constructor(health: Number, strength: Number, defense: Number) {
        super(health, strength, defense, "Spearman");
    }
    stabAttack() { }
}

// All Enemies
export class Enemy extends Entity {
    constructor(public health: Number,public strength: Number, public defense: Number, public name: String) {
        super(health, strength, defense, name);
    }
    followPlayer() { }
}

export class Zombies extends Enemy {
    constructor(health: Number, strength: Number, defense: Number) {
        super(health, strength, defense, "Zombie");
    }
    poisonAttack() { }
}

export class Werewolf extends Enemy {
    constructor(health: Number, strength: Number, defense: Number) {
        super(health, strength, defense, "Werewolf");
    }
    biteAttack() { }
    roar() { }
}
