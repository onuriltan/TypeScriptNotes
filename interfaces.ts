interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.broken);
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true
};

printVehicle(oldCivic);
