type hotelType = "3star" | "5star" | "Resort";

type RoomType = "Standard" | "Delux" | "Premium";

// Hotel Class With Some Basic Parameters

class hotel {
    constructor(public name: String, public location: String, public No_Of_Rooms: Number, public available_rooms: number, public hotelType: hotelType) { }

    // Method to check if a room is available or not this returns number of rooms available
    availableRooms() { return this.available_rooms };
}

// Room Class With Some Basic Parameters

class rooms extends hotel {
    constructor(public name: String, public location: String, public No_Of_Rooms: Number, public available_rooms: number, public hotelType: hotelType, public No_Of_beds: Number, public ac: boolean, public price: Number, public roomType: RoomType) {

        super(name, location, No_Of_Rooms, available_rooms, hotelType);

    }

    // Method to check if a room has ac or not this returns true/false depending on the room and hotel type
    checkAC(room: RoomType, hotel?: hotelType) {
        if (this.roomType == "Premium") {
            this.ac = true;
        }
        if (hotel && this.hotelType == "5star") {
            this.ac = true;
        }
    }

    // Method to book a room in hotel
    bookRoom() {
        if (this.available_rooms > 0) {
            this.available_rooms--;
        } else {
            return `No Rooms Available ❌`
        }
    }
}
