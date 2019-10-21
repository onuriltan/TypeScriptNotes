import { BadSort } from './bad-sort';
import { GoodSort } from './good-sort';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const badSorter = new BadSort([10, 3, -5, 0]);
badSorter.sortWithBubble();
console.log(badSorter.collection);

const collection = new NumbersCollection([10, 3, -5, 0]);
const sortNumArray = new GoodSort(collection);
sortNumArray.sortWithBubble();
console.log(collection.data);

const charCollection = new CharactersCollection('afcgbde');
const sortChars = new GoodSort(charCollection);
sortChars.sortWithBubble();
console.log(charCollection.data);
