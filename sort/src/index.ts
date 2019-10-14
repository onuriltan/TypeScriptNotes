import { BadSort } from './sorter';

const badSorter = new BadSort([10, 3, -5, 0]);
badSorter.sortWithBubble();
console.log(badSorter.collection);
