class Person {
    public name: string;
    /* private greeting = "Good Night"; */
    protected greeting = "Good Night";

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log(`${this.greeting}, my name is ${this.name}`);
    }
}

class NewGuest extends Person {    
    welcome(): void {
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