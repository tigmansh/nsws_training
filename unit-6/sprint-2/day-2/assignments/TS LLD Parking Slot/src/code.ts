type VehicleType = "Car" | "Bike" | "Bus";

export class Vehicle {
    constructor(public vehicleType: VehicleType, public registrationNumber: number, public color: string) { }
}

export class Bike extends Vehicle {
    constructor(registrationNumber: number, color: string) {
        super("Bike", registrationNumber, color);
    }
}

export class Bus extends Vehicle {
    constructor(registrationNumber: number, color: string) {
        super("Bus", registrationNumber, color);
    }
}

export class Car extends Vehicle {
    constructor(registrationNumber: number, color: string) {
        super("Car", registrationNumber, color);
    }
}

export class Slot {
    constructor(public type: VehicleType, public isBooked: boolean = false) { }
}

export class ParkingSlot {
    private parkingSpots: Slot[] = [];

    constructor(public maxLimit: number) { }

    addSlots(slot: Slot): number {
        if(this.parkingSpots.length < this.maxLimit) {
            this.parkingSpots.push(slot);
        }
        return this.parkingSpots.length;
    }

    availableSlot(vehicleType: VehicleType) {
        return this.parkingSpots.filter((slot)=> slot.type === vehicleType && slot.isBooked === false).length;
    }

    bookSlot(vehicleType: Car | Bike | Bus): boolean {
        const ind = this.parkingSpots.findIndex((slot)=> slot.type === vehicleType.vehicleType && slot.isBooked === false);
        if(ind > -1) {
            this.parkingSpots[ind].isBooked = true;
            return true;
        }
        else {
            return false;
        }
    }
}