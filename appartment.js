module.exports = class Appartment {
    constructor(address, numberOfRooms, rent){
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.rent = rent;
        this.owner = undefined;
    }

    isOccupied(){
        return typeof this.owner !== 'undefined';
    }
}
