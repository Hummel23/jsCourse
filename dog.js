const Pet = require('./pet.js');
module.exports =  class Dog extends Pet{
    constructor(name, age){
        super(name, age);
        this.type = 'Dog';
        this.response = 'woef';
    }
}