module.exports = class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.pets = [];
        this.address = null;

    }

    static create(person){
        return new Person(person.name, person.age);
    }

    introduceYourself(){
        console.log('Hello my name is ' + this.name + '.' +
            'I am ' + this.age + ' years old.\n')
    };

    getPet(pet){
        this.pets.push(pet);
        pet.setOwner(this.name);
        console.log(this.name + " got a " + pet.type + ". The name is " + pet.name + ". \n");
    }

    rentAnAppartment(appartment){
        this.address = appartment.address;
        appartment.owner = this.name;
        console.log(this.name + " now rents the appartment at " + appartment.address
        + ". There are " + appartment.numberOfRooms + " room(s) and" +
            " the rent is " + appartment.rent + " EUR per months. \n ")
    }

    moveAppartment(oldAppartment, newAppartment){
        oldAppartment.owner = undefined;
        console.log(this.name + " has moved.\n")
        this.rentAnAppartment(newAppartment);
    }

}
