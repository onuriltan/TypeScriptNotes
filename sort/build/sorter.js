"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BadSort = /** @class */ (function () {
    function BadSort(collection) {
        this.collection = collection;
    }
    BadSort.prototype.sortWithBubble = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection instanceof Array) {
                    // Type Guard, gets properties of collections just for Array, BAD WAY!!
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        }
    };
    return BadSort;
}());
exports.BadSort = BadSort;
var GoodSort = /** @class */ (function () {
    function GoodSort(collection) {
        this.collection = collection;
    }
    GoodSort.prototype.sortWithBubble = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    var leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    };
    return GoodSort;
}());
exports.GoodSort = GoodSort;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(numbersToBeSorted) {
        this.numbersToBeSorted = numbersToBeSorted;
    }
    NumbersCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.numbersToBeSorted[leftIndex] > this.numbersToBeSorted[rightIndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this.numbersToBeSorted[leftIndex];
        this.numbersToBeSorted[leftIndex] = this.numbersToBeSorted[rightIndex];
        this.numbersToBeSorted[rightIndex] = leftHand;
    };
    return NumbersCollection;
}());
