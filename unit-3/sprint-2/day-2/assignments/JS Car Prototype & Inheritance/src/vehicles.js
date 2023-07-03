function FourWheeler(speed, model, fuel, color){
    // let obj = {};
    Object.setPrototypeOf(this, FourWheelerObject);
    this.wheels = 4;
    this.model = model;
    this.color = color;
    this.speed = speed;
    this.fuel = fuel;

    // return this;
}

// Parent object for Object.create

let FourWheelerObject = {
    setSpeed : function (speed){
        this.speed = speed;
        return this;
    },
     updateColor : function (color){
        this.color = color;
        return this;
    },
     updateFuel : function (fuel){
        this.fuel = fuel;
        return this;
    }
};

// Store function contructor object here
var car1 = new FourWheeler("2000", "2022", "Petrol", "Blue");

// Store Object.create here
var car2 = new FourWheeler("2000", "2022", "Petrol", "Blue");

export { car1, car2 };
