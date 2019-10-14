import { BadSort, GoodSort, NumbersCollection } from './sorter';

const badSorter = new BadSort([10, 3, -5, 0]);
badSorter.sortWithBubble();
console.log(badSorter.collection);

const collection = new NumbersCollection([10, 3, -5, 0]);
const goodSorter = new GoodSort(collection);
goodSorter.sortWithBubble();
console.log(collection.data);
