export class BadSort {
  constructor(public collection: number[] | string) {}

  sortWithBubble(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {
          // Type Guard, gets properties of collections just for Array, BAD WAY!!
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
      }
    }
  }
}

export class GoodSort {
  constructor(public collection: ) {}

  sortWithBubble(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

class NumbersCollection {
  constructor(public numbersToBeSorted: number[]){

  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.numbersToBeSorted[leftIndex] > this.numbersToBeSorted[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void{
    const leftHand = this.numbersToBeSorted[leftIndex]
    this.numbersToBeSorted[leftIndex] = this.numbersToBeSorted[rightIndex];
    this.numbersToBeSorted[rightIndex] = leftHand;

  }


}
