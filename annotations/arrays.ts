const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];

// Inference helps while extracting
const car = carMakers[0];

// helps inside map
carMakers.map((car: string): string => {
  return car;
});

// Flexible Types
const flexibleTypes: (Date | string)[] = [new Date(), 'asd'];
