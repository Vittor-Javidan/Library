/**
 * @description Animal is the Parent Class
 */
class Animal{

    constructor(){
        this.alive = true;
    }
    eat(){
        console.log("This animal is eating");
    }
}

/**
 * @description Rabbit is a child class from Animal
 */
class Rabbit extends Animal{
    run(){
        console.log("This rabbit is running")
    }
}

/**
 * @description Fish is a child class from Animal
 */
class Fish extends Animal{
    swim(){
        console.log("This fish is swimming")
    }
}

/**
 * @description Hawk is a child class from Animal
 */
class Hawk extends Animal{
    fly(){
        console.log("This hawn is flying")
    }
}

let rabbit_object = new Rabbit();
let fish_object = new Fish();
let hawk_object = new Hawk();





/*-----------------------------------------------------------------*/
console.log(`Is Rabbit alive?: ${rabbit_object.alive}`);
console.log(`Is Fish alive?: ${fish_object.alive}`);
console.log(`Is Hawk alive?: ${hawk_object.alive}`);

console.log(`--------------------------------------`);
rabbit_object.eat();
rabbit_object.run();

console.log(`--------------------------------------`);
fish_object.eat();
fish_object.swim();

console.log(`--------------------------------------`);
hawk_object.eat();
hawk_object.fly();