module.exports = class Pet {
    constructor(name, age, ownerName) {
        this.name = name;
        this.age = age;
        this.response = " ";
        this.ownerName = ownerName;
    }

    static create(pet){
        return new Pet(pet.name, pet.age, pet.ownerName);
    }

    giveResponse() {
        let ownerName = typeof this.ownerName === 'undefined' || this.ownerName === null ? "I don't " +
            "have an owner yet. " : "My owner is called " + this.ownerName + ".";

        console.log(this.response + "... my name is " + this.name + "!" + ownerName + ". \n");
    }

    setOwner(ownerName) {
        this.ownerName = ownerName;
        console.log(this.response + " ...I have a new owner." +
            "His/her name is " + ownerName + "... " + this.response + " \n");
    }
}


