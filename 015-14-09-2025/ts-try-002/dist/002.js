"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
    callDog() {
        console.log(`come on ${this.name}`);
    }
}
const a1 = new Animal("bosi");
a1.speak();
const d = new Dog("Rex");
d.speak(); // Rex barks
d.callDog();
//# sourceMappingURL=002.js.map