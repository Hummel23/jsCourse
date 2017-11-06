const Cat = require('../model/cat.js');
const Dog = require('../model/dog.js');
const Pet = require('../model/pet.js');
const database = require('../database/database.js');

exports.save = async(pets) => {
    await database.save(pets, 'petData');
}

exports.load = async() => {
    const petData = await database.load('petData')
    const pets = this.determinePetType(petData);
    return pets;
}

exports.determinePetType = async(petData) =>{
    const pets = [];
    for(let i = 0; i < petData.length; i+= 1){
        if(petData[i]["response"] === 'meeouw'){
            pets.push(Cat.create(petData[i]));
        } else{
            pets.push(Dog.create(petData[i]));
        }
    }
    return pets;
}

exports.create4TestPets = () => {
    const catPueppi = new Cat('Püppi', 8, null);
    const dogPedro = new Dog('Pedro', 3, null);
    const catMcPhee = new Cat('McPhee', 12, null);
    const dogMartha = new Dog('Martha', 20, null);

    const pets = [catPueppi, dogPedro, catMcPhee, dogMartha];
    pets.forEach(pet => pet.giveResponse());
    return pets;
}
