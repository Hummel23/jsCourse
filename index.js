// nodemon index.js to start js file in nodemon
// npm init to create package.json

// const red = require('ansi-red');
// console.log(red('Hello World!'));
/*
const Person = require('./person.js');
const Database = require('./database.js');


console.log('Hello World!');

const saba = new Person('Saba', 35);
const katha = new Person('Katha', 29);

console.log(saba, katha);
const instructors = [saba, katha];
console.log(instructors);

Database.save(instructors);

const loadedFile = Database.load();
console.log(loadedFile[0]);


*/

// saba.name = 'Sabi';
// console.log(saba);
/*
const add = (num1, num2) => num1 + num2 + 2;

const output = add(3, 5);
console.log(output);
console.log(red('~the end... YEAH~'));
*/
const Person = require('./person.js');
const Cat = require('./cat.js');
const Dog = require('./dog.js');
const Appartment = require('./appartment.js');
const Job = require('./job.js');

const saba = new Person('Saba', 35);
const katha = new Person('Katha', 29);
const jannis = new Person('Jannis', 24);
const peter = new Person('Peter', 45);

const people = [saba, katha, jannis, peter];

people.forEach(person => person.introduceYourself());

const catPueppi = new Cat('Püppi', 8, null);
const dogPedro = new Dog('Pedro', 3, null);
const catMcPhee = new Cat('McPhee', 12, null);
const dogMartha = new Dog('Martha', 20, null);

const pets = [catPueppi, dogPedro, catMcPhee, dogMartha];

pets.forEach(pet => pet.giveResponse());

saba.getPet(catPueppi);
saba.getPet(catMcPhee);
jannis.getPet(dogMartha);

people.forEach(function (person) {
    person.pets.forEach(function (pet) {
        pet.giveResponse();
    });
});

const appInSteglitz = new Appartment("Schlossstrasse 1, 12163 Berlin", 4, 800);
const appInKreuzberg = new Appartment("Kreuzberstr. 1, 10969 Berlin", 2, 900);
const appInNeukölln = new Appartment("Weserstr. 5, 12504 Berlin", 3, 600);
const appInMitte = new Appartment("Lindenstrasse 8, 10012 Berlin", 5, 1100);
const appInWedding = new Appartment("Müllerstrasse 20, 13353 Berlin", 1, 400);

const appartments = [appInKreuzberg, appInWedding, appInNeukölln, appInMitte, appInSteglitz];

saba.rentAnAppartment(appInSteglitz);
katha.rentAnAppartment(appInKreuzberg);
jannis.rentAnAppartment(appInMitte);
peter.rentAnAppartment(appInNeukölln);

const checkWhichAppartmentsAreOccupied = appartments => appartments.forEach(function (appartment) {
    if(appartment.isOccupied()) {
        console.log("This appartment is rented to: " + appartment.owner);
    }else{
        console.log("This appartment is currently not rented out.")
    }
});

checkWhichAppartmentsAreOccupied(appartments);


katha.moveAppartment(appInKreuzberg, appInWedding);
peter.moveAppartment(appInNeukölln, appInKreuzberg);

checkWhichAppartmentsAreOccupied(appartments);

//TODO give job to people and raise some salaries
const programmer = new Job("Junior Programmer", 1500);
const secretary = new Job("Secretary", 1000);
const manager = new Job("Manager", 2000);
const scientist = new Job("Scientist", 1800);



