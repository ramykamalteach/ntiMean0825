"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    /* private greeting = "Good Night"; */
    greeting = "Good Night";
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`${this.greeting}, my name is ${this.name}`);
    }
}
class NewGuest extends Person {
    welcome() {
        console.log(`${this.greeting}, my name is ${this.name}`);
    }
}
const p1 = new Person("Alice");
p1.greet();
p1.name = "Yasser";
// p1.greeting = "good morning";
p1.greet();
const Osama = new NewGuest("Osama Ali");
Osama.welcome();
//# sourceMappingURL=003.js.map