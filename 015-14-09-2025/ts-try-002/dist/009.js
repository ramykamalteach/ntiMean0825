"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(item) {
    return item.length;
}
console.log(getLength("Hello")); // string has length
console.log(getLength([1, 2, 3, 11, 33, 55, 77])); // array has length
// getLength(123); number doesn’t have length
/* function identity<T>(value: T): T {
  return value;
}

let num = identity<number>(42);   // T = number → returns number
let str = identity("Hello");      // T = string (inferred) → returns string */ 
//# sourceMappingURL=009.js.map