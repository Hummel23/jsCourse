const Pet = require('./pet.js');
module.exports = class Cat extends Pet {
    constructor(name, age, ownerName) {
        super(name, age);
        this.type = 'Cat';
        this.response = 'meeouw';
    }
}