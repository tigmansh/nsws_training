# TS LLD MakeMyTrip:-

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
✅ able to submit the app - 1 mark ( minimum score )
✅ BusTrip Class works fine - 1 mark.
✅ Booking seat in buses works fine - 1 mark.
✅ TrainTrip Class works fine - 1 mark.
✅ Booking seat in Trains works fine - 1 mark.
✅ PlaneTrip Class works fine - 1 mark.
✅ Booking seat in Planes works fine - 1 mark.
✅ If no seat available no decrement in seat number - 1 mark.
✅ BusTrip class has proper types - 1 marks
✅ TrainTrip class has proper types - 1 marks
✅ PlaneTrip class has proper types - 1 marks
✅ Creating instance of Trip class shouldn't work - 1 marks

```

## Installation

- Use node version 16.16.0
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate file and then copy the "contents" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- npm install --engine-strict

## Boilerplate:-

- Do not change the given folder structure
- inside src folder you will code.ts file that is where you need to write the code.
- In src will be a file index.ts. Please make sure this file should be always empty
- you can find the testcase under `__tests__ ` folder.

## Description:-

- We have to build a MakeMyTrip like ticket booking app.
- We can have 3 diff types of tickets:-
  1.  Bus
  2.  Train
  3.  Plane
- In this Application we have total 4 classes, 1 enum and some type alias:-
  1.  Trip -> class
  2.  BusTrip -> class
  3.  TrainTrip -> class
  4.  PlaneTrip -> class
  5.  TripType -> enum
  6.  SeatType -> type alias

### Trip:-

- This class will take a generic Type Argument and it will have the following properties:-

  1. name: string;
  2. type : TripType; -> Here TripType is an enum given in the template
  3. departureDate: Date;
  4. arrivalDate: Date;
  5. seats: Array of T; -> Here T is the generic argument

- This class will take all the above values as parameters in the same order and given above.

- This class will also have 1 method:-

  1.  bookSeat

- Make sure it shouldn't be possible to create an instance of this class

### SeatType:-

- It is an interface already given in the template.
- This interface takes a generic argument.
- It should have the following properties:-

  1. type: T, -> Here T is the generic argument
  2. price: number,
  3. noOfSeats: number,

- In the template there should be 3 diff types aliaes that will inherit this `SeatType` interface which are:-

  1.  BusSeatTypes -> Generic Type -> Union of "Sleeper", "Seater"
  2.  TrainSeatTypes -> Generic Type -> Union of "UR","2S","SL","3A","2AC","1AC","1A","CC" and adds another key which is hasAC: boolean
  3.  PlaneSeatType -> Generic type -> Union of "Economy Class", "Premium Economy Class" or "Business Class" or "First-Class"

- These interfaces are already given in the template.

### BusTrip:-

- This class will inherit the `Trip` class.
- This class will take these values as arguments in the same given order:-
  1. name: string,
  2. departureDate: Date,
  3. arrivalDate: Date,
  4. hasAC: boolean,
  5. seats: Array of BusSeatTypes

### TrainTrip:-

- This class will inherit the `Trip` class.
- This class will take these values as arguments in the same given order:-
  1. name: string,
  2. departureDate: Date,
  3. arrivalDate: Date,
  4. seats: Array of TrainSeatTypes

### PlaneTrip:-

- This class will inherit the `Trip` class.
- This class will take these values as arguments in the same given order:-
  1.  name:string,
  2.  departureDate: Date,
  3.  arrivalDate: Date,
  4.  seats: Array of PlaneSeatType

### bookSeat:-

- This is a method of the `Trip` class so this method should be accessible by any class that inherit `Trip`.
- This class will take a string value as parameter.
- It will try to find the seat type given as parameter from the seats array.
- If noOfSeats is greater than 0 it will decrease the noOfSeats

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
