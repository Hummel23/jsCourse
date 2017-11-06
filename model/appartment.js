module.exports = class Appartment {
    constructor(address, numberOfRooms, rent){
        this.address = address;
        this.numberOfRooms = numberOfRooms;
        this.rent = rent;
        this.owner = undefined;
    }

    static create(appartment){
        return new Appartment(appartment.address, appartment.numberOfRooms, appartment.rent);
    }
    
    stateAddressAndOccupancy(){
        const status = this.isOccupied() ? 'occupied' : 'not occupied';
        console.log("The address of this appartment is: " + this.address + ". The appartment is " + status + ".\n" );
    }

    isOccupied(){
        return typeof this.owner !== 'undefined';
    }
}
