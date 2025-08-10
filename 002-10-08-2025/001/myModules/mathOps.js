const sum01 = require("../opSum");

const add = (a, b) => {
    return sum01.summation(a, b);
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}

module.exports = {
    "add": add,
    "subtract": subtract,
    "multiply": multiply,
    "divide": divide
};