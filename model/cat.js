const Pet = require('./pet.js');
module.exports = class Cat extends Pet {
    constructor(name, age, ownerName) {
        super(name, age, ownerName);
        this.type = 'Cat';
        this.response = 'meeouw';
    }

    static create(cat){
        return new Cat(cat.name, cat.age, cat.ownerName);
    }
}