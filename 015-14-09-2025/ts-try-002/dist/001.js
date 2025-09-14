"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const p1 = new Person("Alice");
p1.greet();
const samer = new Person("Samer Sameh");
samer.greet();
//# sourceMappingURL=001.js.map