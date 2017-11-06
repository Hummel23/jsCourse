const Person = require('../model/person');
const database = require('../database/database.js');

exports.save = async (people) => {
    await database.save(people, 'personData');
}

exports.load = async() => {
    let loadedPeople = await database.load('personData');
    return loadedPeople.map(Person.create);
}

exports.create4TestPersons = () => {
    const saba = new Person ('Saba', 35);    
    const katha = new Person('Katha', 29);
    const jannis = new Person('Jannis', 24);
    const peter = new Person('Peter', 45);
    const people = [saba, katha, jannis, peter];
    people.forEach(person => person.introduceYourself());
    return people;
}



