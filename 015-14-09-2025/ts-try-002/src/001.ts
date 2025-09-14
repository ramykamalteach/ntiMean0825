class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const p1 = new Person("Alice");
p1.greet();
const samer = new Person("Samer Sameh");
samer.greet();