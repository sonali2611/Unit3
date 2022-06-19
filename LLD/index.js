//  LLD :- Low Level Design
//  High Level Design

// Road :- Head of village (LLD)
// NH :- Nitin Gatkari (HLD)

// Parking System

class Vehice {
    constructor(type, regNumber, color) {
        this._type = type;
        this._regNumber = regNumber;
        this._color = color;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }
}

// var v1 = new Vehice("car", "DL-1234", "Black");

// Car

class Car extends Vehice {
    constructor(regNumber, color) {
        super("car", regNumber, color);
    }
}

// let c1 = new Car("UP-1234", "red");

//Bike 

class Bike extends Vehice {
    constructor(regNumber, color) {
        super("bike", regNumber, color);
    }
}

// let b1 = new Bike("WB-1234", "blue");

// Truck

class Truck extends Vehice {
    constructor(regNumber, color) {
        super("truck", regNumber, color);
    }
}

// let t1 = new Truck("UP-1234", "red");

// Bicycle

class Bicycle extends Vehice {
    constructor(color) {
        super("bycyle", "No Number", color);
    }
}

// let by1 = new Bicycle("UP-1234", "red");

// console.log(c1);
// console.log(b1);
// console.log(t1);
// console.log(by1);


// Parking Spot 


class Slot{
    constructor(type,number){
        this.number=number
        this.type=type
        this._isBooked=false
    }

    get isBooked(){
        return this.isBooked
    }
    set isBooked(value){
        this._isBooked=value
    }
}



// Individual Floor 

class ParkingFloor{
    constructor(floorNumber,maxSpots){
        this.floorNumber=floorNumber
        this._parkingSpots = [];

        for(let i=0;i<maxSpots;i++){
            if(i==0){
                // Push the slots 
                this._parkingSpots.push(new Slot("car",i))
            }
            else if(i==1){
                // Push the slots
                this._parkingSpots.push(new Slot("bike",i))
            }
            else{
                // push the slots 
                this._parkingSpots.push(new Slot("truck",i))
            }
        }
        
    }

    get parkingSpots(){
        return this._parkingSpots
    }
}

// Parking Lot or the building

class ParkingLot{
    constructor(number){
        this._floors = []
        this._numberOfFloors = number
for(let i=0;i<number;i++){
    this._floors.push(new ParkingFloor(i,3))
}

    }

    get numberOfFloors(){
        return this._numberOfFloors
    }
    get floors(){
return this._floors
    }

parkVehicle(vehicle){
    let slot = this.findSlot(vehicle.type)

    if(slot){
        this.bookSlot(slot);
        let ticket = new Ticket(slot.floorNumber,slot.number)
        console.log("Ticket :",ticket)
    }
    else{
console.log("No slots")
return false;
    }
}

    findSlot(type){
        for(let i=0;i<this.numberOfFloors;i++){
            for(let slot of this.floors[i]._parkingSpots){
if(slot.type===type && !slot._isBooked){
return {floorNumber:i, foundSlot:slot}
}
            }
        }
        return false;
    }
    bookSlot(slot){
slot.isBooked=true
console.log("slot is booked")
return true
    }
}

// Ticket
class Ticket{
    constructor(floorNumber,slotNumber){
        this.floorNumber = floorNumber
        this.slotNumber = slotNumber
        this.issuedAt = new Date()
    }
}

let b1 = new Bike("DL- 1234","Red");
let b2 = new Bike("DL- 2234","Red");
let b3 = new Bike("DL- 2234","Red");
let b4 = new Bike("DL- 2234","Red");

let pl1 = new ParkingLot(3)

pl1.parkVehicle(b1)
pl1.parkVehicle(b2)
pl1.parkVehicle(b3)
pl1.parkVehicle(b4)

