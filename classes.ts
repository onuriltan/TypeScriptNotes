class Vehicle {
  constructor(public color: string) {}
  drive(): void {
    console.log('chugga chugga');
  }
  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
vehicle.drive();

class Car extends Vehicle {
  honk(): void {
    console.log('hoooonk');
  }
}

const theCar = new Car('blue');
theCar.honk();
console.log(theCar.color);
