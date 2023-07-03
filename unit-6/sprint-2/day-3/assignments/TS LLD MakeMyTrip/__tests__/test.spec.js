const cp = require("child_process");
const fs = require("fs");
const execPromise = () => {
  return new Promise((resolve, reject) => {
    cp.exec("npx ts-node src/index.ts", (e, data) => {
      if (e) {
        reject({ ...e, isErrorFromExec: true });
      } else {
        resolve(data);
      }
    });
  });
};
const fsPromise = (path = "", content = "") => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) {
        return reject({ err, isErrorFromExec: false });
      }
      resolve("Created File");
    });
  });
};
global.score = 1;
global.passed = new Array(7).fill(false);

const FileContentPass = [
  `import { BusTrip, SeatType, Trip } from "./code";
  const trip: Trip<SeatType<"Sleeper" | "Seater">> = new BusTrip("b-1",new Date(2023, 6,12), new Date(2023, 6,14), true, [] );
  console.log(trip);`,
  `import { BusTrip } from "./code";
  const trip = new BusTrip("b-1",new Date(2023, 6,12), new Date(2023, 6,14), true, [
      {
          type: "Seater",
          price: 200,
          noOfSeats: 20,
      }
  ] );
  trip.bookSeat("Seater");
  console.log(trip.seats[0].noOfSeats);`,
  `import { SeatType, TrainTrip, Trip } from "./code";
  const trip:Trip<SeatType<"UR" | "2S" | "SL" | "3A" | "2AC" | "1AC" | "1A" | "CC">> = new TrainTrip("t-1", new Date(2023, 6,12), new Date(2023, 6,14),[]);
  console.log(trip);`,
  `import { TrainTrip } from "./code";
  const trip = new TrainTrip("t-1", new Date(2023, 6,12), new Date(2023, 6,14),[
      {
          noOfSeats: 3,
          price: 100,
          type: "1A",
          hasAC: false
      }
  ]);
  trip.bookSeat("1A");
  console.log(trip.seats[0].noOfSeats);
  `,
  `import { PlaneTrip, SeatType, Trip } from "./code";
  const trip:Trip<SeatType<"Economy Class" | "Premium Economy Class" | "Business Class" | "First-Class">> = new PlaneTrip("p-1", new Date(2023, 6,12), new Date(2023, 6,14), []);
  console.log(trip);`,
  `import { PlaneTrip } from "./code";
  const trip = new PlaneTrip("p-1", new Date(2023, 6,12), new Date(2023, 6,14), [
      {
          noOfSeats: 2,
          type: "First-Class",
          price: 500,
      }
  ]);
  trip.bookSeat("First-Class");
  console.log(trip.seats.length);`,
  `import { PlaneTrip } from "./code";
  const trip = new PlaneTrip("p-1", new Date(2023, 6,12), new Date(2023, 6,14), [
      {
          noOfSeats: 2,
          type: "First-Class",
          price: 500,
      }
  ]);
  trip.bookSeat("First-Class");
  trip.bookSeat("First-Class");
  trip.bookSeat("First-Class");
  trip.bookSeat("First-Class");
  console.log(trip.seats.length);`,
];
const FileContentFail = [
  `import { BusTrip } from "./code";
  const trip = new BusTrip(10,new Date(2023, 6,12), new Date(2023, 6,14), true, [] );`,
  `import { TrainTrip } from "./code";
  const trip = new TrainTrip(10, new Date(2023, 6,12), new Date(2023, 6,14),[]);`,
  `import { PlaneTrip } from "./code";
  const trip = new PlaneTrip(true, new Date(2023, 6,12), new Date(2023, 6,14), []);`,
  `import { SeatType, Trip, TripType } from "./code";
  const t = new Trip<SeatType<"">>("",TripType.bus,new Date(1222,2,3),new Date(1222,2,3),[]);`,
];
describe("TS Testing", () => {
  beforeEach(() => {
    const tsFileExists1 = fs.existsSync(`${__dirname}/../src/index.ts`);
    expect(tsFileExists1).toBe(true);
    const tsFileExists2 = fs.existsSync(`${__dirname}/../src/code.ts`);
    expect(tsFileExists2).toBe(true);
  });
  it("BusTrip Class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[0]);
      expect(data).toContain("name");
      expect(data).toContain("type");
      expect(data).toContain("departureDate");
      expect(data).toContain("arrivalDate");
      expect(data).toContain("seats");
      global.score += 1;
      global.passed[0] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  });
  it("Booking seat in buses works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[1]);
      expect(data).toContain("19");
      global.score += 1;
      global.passed[1] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  });
  it("TrainTrip Class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[2]);
      expect(data).toContain("name");
      expect(data).toContain("type");
      expect(data).toContain("departureDate");
      expect(data).toContain("arrivalDate");
      expect(data).toContain("seats");
      global.score += 1;
      global.passed[2] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  });
  it("Booking seat in Trains works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[3]);
      expect(data).toContain("2");
      global.score += 1;
      global.passed[3] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  });
  it("PlaneTrip Class works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[4]);
      expect(data).toContain("name");
      expect(data).toContain("type");
      expect(data).toContain("departureDate");
      expect(data).toContain("arrivalDate");
      expect(data).toContain("seats");
      global.score += 1;
      global.passed[4] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  });
  it("Booking seat in Planes works fine", async () => {
    try {
      let data = await OnPass(FileContentPass[5]);
      expect(data).toContain("1");
      global.score += 1;
      global.passed[5] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  });
  it("If no seat available no decrement in seat number", async () => {
    try {
      let data = await OnPass(FileContentPass[6]);
      expect(data).toContain("1");
      global.score += 1;
      global.passed[6] = true;
    } catch (error) {
      console.log(error);
      expect(error).toBeFalsy();
    }
  });

  it("BusTrip class has proper types", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[0]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
  it("TrainTrip class has proper types", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[1]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
  it("PlaneTrip class has proper types", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[2]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });

  it("Creating instance of Trip class shouldn't work", async () => {
    AllPassed(global.passed);
    try {
      let data = await OnFail(FileContentFail[3]);
      global.score += 1;
    } catch (error) {
      expect(error).toBeFalsy();
    }
  });
  afterAll(() => {
    console.log("Final Score is", global.score);
  });
});

const AllPassed = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    expect(arr[i]).toBeTruthy();
  }
};
const OnPass = (FileContent) => {
  return new Promise(async (resolve, reject) => {
    let data;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent);
      data = await execPromise();
    } catch (error) {
      reject(error);
    }
    resolve(data);
  });
};

const OnFail = (FileContent) => {
  return new Promise(async (resolve, reject) => {
    let error;
    try {
      await fsPromise(`${__dirname}/../src/index.ts`, FileContent);
      data = await execPromise();
    } catch (err) {
      error = err;
      resolve(err);
    }
    if (error) resolve(error);
    expect(error).toBeTruthy();
  });
};
