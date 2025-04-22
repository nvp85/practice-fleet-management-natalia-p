class Vehicle {
    constructor(type, make, model, year, mileage = 0){
       this.type = type;
       this.make = make;
       this.model = model;
       this.year = year;
       this.mileage = mileage;
   }

   drive(distance) {
        this.mileage += distance;
   }

   getDetails() {
        console.log(`Report:\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}\nMileage: ${this.mileage}`);
   }
  }

let car = new Vehicle("car", "toyota", "prius", 2020);
car.getDetails();
car.drive(1000);
car.getDetails(); // mileage is update
let truck = new Vehicle("truck", "tpyota", "tacoma", 2022, 10000);
let motorcycle = new Vehicle("motorcycle", "toyota", "prius", 2020, 4500);
truck.getDetails();
motorcycle.getDetails();
