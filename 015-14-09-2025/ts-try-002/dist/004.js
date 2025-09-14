"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    name;
    constructor(name) {
        this.name = name;
    }
    fullName() {
        console.log(`${this.name} made in Egypt`);
    }
}
class ItemDescription extends Item {
    price = 0;
    getPrice(price) {
        this.price = price;
    }
    fullDescription() {
        console.log(`${this.name} its price is ${this.price}`);
    }
}
/* const lamp = new Item("12v LED Lamp"); */
const lamp = new ItemDescription("12v LED Lamp");
lamp.getPrice(77);
lamp.fullName();
lamp.fullDescription();
//# sourceMappingURL=004.js.map