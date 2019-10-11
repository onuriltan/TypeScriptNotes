"use strict";
var Sort = /** @class */ (function () {
    function Sort(collection) {
        this.collection = collection;
    }
    Sort.prototype.sortWithBubble = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection instanceof Array) {
                    // Type Guard, gets properties of collections just for Array
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                if (this.collection instanceof String) {
                }
            }
        }
    };
    return Sort;
}());
var sorter = new Sort([10, 3, -5, 0]);
sorter.sortWithBubble();
console.log(sorter.collection);
