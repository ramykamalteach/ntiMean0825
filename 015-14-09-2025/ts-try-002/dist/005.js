"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Guest {
    name;
    setFullName(name) {
        this.name = name;
    }
    getFullName() {
    }
    greet() {
        console.log(`Hello, ${this.name}`);
    }
}
class Proffesor {
    name;
    setFullName(name) {
        this.name = name;
    }
    getFullName() {
    }
    greet() {
        console.log(`Hello, Prof. ${this.name}`);
    }
}
class Engineer {
    name;
    setFullName(name) {
        this.name = name;
    }
    getFullName() {
    }
    greet() {
        console.log(`Hello, Eng. ${this.name}`);
    }
}
const g1 = new Guest();
g1.setFullName("Gamal");
g1.greet();
const p1 = new Proffesor();
p1.setFullName("Reda");
p1.greet();
const e1 = new Engineer();
e1.setFullName("Samy");
e1.greet();
/* ------------------------------------ */
const engs = [
    new Engineer(),
    new Engineer(),
    new Engineer()
];
let engNames = ["ali samy", "reda elsaid", "fath farouk"];
engs.forEach((oneEngineer, index) => {
    const engName = engNames[index];
    if (engName !== undefined) {
        oneEngineer.setFullName(engName);
    }
    oneEngineer.greet();
});
//# sourceMappingURL=005.js.map