const Appartment = require('../model/appartment.js');
const database = require('../database/database.js')

exports.save = async (appartments) => {
    await database.save(appartments, 'appartmentData')
}

exports.load = async() => {
    let loadedAppartments = await database.load('appartmentData');
    return loadedAppartments.map(Appartment.create);
}

exports.create4TestAppartments = () => {
    const appInSteglitz = new Appartment("Schlossstrasse 1, 12163 Berlin", 4, 800);
    const appInKreuzberg = new Appartment("Kreuzberstr. 1, 10969 Berlin", 2, 900);
    const appInNeukölln = new Appartment("Weserstr. 5, 12504 Berlin", 3, 600);
    const appInMitte = new Appartment("Lindenstrasse 8, 10012 Berlin", 5, 1100);
    const appInWedding = new Appartment("Müllerstrasse 20, 13353 Berlin", 1, 400);

    const appartments = [appInKreuzberg, appInWedding, appInNeukölln, appInMitte, appInSteglitz];
    appartments.forEach(appartment => appartment.stateAddressAndOccupancy());
    return appartments;
}

