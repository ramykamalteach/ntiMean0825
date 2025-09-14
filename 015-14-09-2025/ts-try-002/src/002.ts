class Animal {
  constructor(public name: string) {}
  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak(): void {
    console.log(`${this.name} barks`);
  }
  callDog(): void {
    console.log(`come on ${this.name}`);
  }
}

const a1 = new Animal("bosi");
a1.speak();

const d = new Dog("Rex");
d.speak(); // Rex barks
d.callDog();