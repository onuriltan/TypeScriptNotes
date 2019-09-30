interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}
interface Reportable {
  summary(): string;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
};

// Code Reuse
const printSummary = (item: Reportable): void => {
  console.log(item.summary);
};

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

printVehicle(oldCivic);
printSummary(oldCivic);
