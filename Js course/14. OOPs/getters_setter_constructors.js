class CarSpeed {
  // Constructor
  constructor(model, speed) {
    // this points to the object
    this.model = model;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 20;
    console.log(`${this.model} is going at ${this.speed} km/hr`);
  }

  brake() {
    this.speed -= 20;
    console.log(`${this.model} is going at ${this.speed} km/hr`);
  }

  get speedUS() {
    return console.log(`getter ${this.model} is going at ${this.speed / 1.2} mi/hr`);
  }

  set speedUS(speed) {
    return this.speed = speed * 1.6;
  }
}

const car = new CarSpeed("ferrari", 120);
console.log(car.speed);
car.accelerate();
car.brake();
car.speedUS;
car.speedUS = 120;
console.log(car);