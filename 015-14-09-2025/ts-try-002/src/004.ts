abstract class Item {
    name : string;

    constructor(name: string) {
        this.name = name;
    }

    fullName() : void {
        console.log(`${this.name} made in Egypt`);
    }
}

class ItemDescription extends Item {
    private price: number = 0;
    getPrice(price: number) {
        this.price = price;
    }
    fullDescription(): void {
        console.log(`${this.name} its price is ${this.price}`);
    }
}

/* const lamp = new Item("12v LED Lamp"); */
const lamp = new ItemDescription("12v LED Lamp");
lamp.getPrice(77);
lamp.fullName();
lamp.fullDescription();