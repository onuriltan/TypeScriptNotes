// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['white', true, 38];
const tea: Drink = ['brown', false, 0];

// Instead of tuples use objects, because there is no understading of
// what are values stands for inside tuple

type CarStats = {
  horsePower: number;
  weight: number;
};

const toyota: CarStats = {
  horsePower: 400,
  weight: 3453
};
