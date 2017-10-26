module.exports = class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.pets = [];
        //TODO change address to appartment & change move method
        this.address = null;
        this.job = null;

    }

    introduceYourself(){
        console.log('Hello my name is ' + this.name + '.' +
            'I am ' + this.age + ' years old.')
    };

    getPet(pet){
        this.pets.push(pet);
        pet.setOwner(this.name);
        console.log(this.name + " got a " + pet.type + ". The name is " + pet.name + ".");
    }

    rentAnAppartment(appartment){
        this.address = appartment.address;
        appartment.owner = this.name;
        console.log(this.name + " now rents the appartment at " + appartment.address
        + ". There are " + appartment.numberOfRooms + "rooms and" +
            " the rent is " + appartment.rent + " EUR per months. ")
    }

    moveAppartment(oldAppartment, newAppartment){
        oldAppartment.owner = undefined;
        console.log(this.name + " has moved.")
        this.rentAnAppartment(newAppartment);
    }

    getOrChangeJob(job){
        this.job = job;
        console.log()
    }

    getPromotedByPercentage(percentage){
        if(job != null){
            raise = this.job.salary/100 * percentage;
            newSalary = this.job.salary + raise;
            this.job.changeSalary(newSalary);
            console.log('Congratulations, you have been promoted. Your new salary is: ' + newSalary);
        }
    }

    changePosition(position){
        this.job.position = position;
    }
}
