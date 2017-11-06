const Pet = require('./pet.js');
module.exports =  class Dog extends Pet{
    constructor(name, age, ownername){
        super(name, age, ownername);
        this.type = 'Dog';
        this.response = 'woef';
    }

    static create(dog){
        return new Dog(dog.name, dog.age, dog.ownername);
    }
}