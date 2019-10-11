class Sort {
  constructor(public collection: number[] | string) {}

  sortWithBubble(): void {
    const { length } = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {
          // Type Guard, gets properties of collections just for Array
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }
        if (this.collection instanceof String) {
        }
      }
    }
  }
}

const sorter = new Sort([10, 3, -5, 0]);
sorter.sortWithBubble();
console.log(sorter.collection);
