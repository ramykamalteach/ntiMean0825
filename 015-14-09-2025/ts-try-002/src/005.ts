interface Person {
    setFullName (s: string) : void;
    getFullName () : void;
}

class Guest implements Person {
    name! : string;
    setFullName (name : string) : void {
        this.name = name;
    }
    getFullName () : void {

    }
    greet () : void {
        console.log(`Hello, ${this.name}`);
    }
}
class Proffesor implements Person {
    name! : string;
    setFullName (name : string) : void {
        this.name = name;
    }
    getFullName () : void {

    }
    greet () : void {
        console.log(`Hello, Prof. ${this.name}`);
    }
}
class Engineer implements Person {
    name! : string;
    setFullName (name : string) : void {
        this.name = name;
    }
    getFullName () : void {

    }
    greet () : void {
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

const engs: Engineer[] = [
    new Engineer(),
    new Engineer(),
    new Engineer()
];

let engNames: string[] = ["ali samy", "reda elsaid", "fath farouk"];

engs.forEach((oneEngineer, index) => {
    const engName = engNames[index];
    if (engName !== undefined) {
        oneEngineer.setFullName(engName);
    }
    oneEngineer.greet();
});