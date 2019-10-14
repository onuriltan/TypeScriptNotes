"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var badSorter = new sorter_1.BadSort([10, 3, -5, 0]);
badSorter.sortWithBubble();
console.log(badSorter.collection);
