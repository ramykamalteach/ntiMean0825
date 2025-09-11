
type Operation = (a: number, b: number | string) => string;

const combine: Operation = (a, b) => {
  if (typeof b === "number") {
    return `Sum: ${a + b}`;
  }
  return `Concat: ${a}${b}`;
};

console.log(combine(5, 10));   // Sum: 15
console.log(combine(5, "X"));  // Concat: 5X