// union
/* type Status = "success" | "error" | "loading";
const studentStatus: Status = "loading"; */

// tuple
/* type Point = [number, number];
const policeLocation : Point = [64.4545, 15.55]; */

// function type
type calcTwoNumbers = (a: number, b: number) => number;

const add: calcTwoNumbers = (x: number, y: number): number => {
    return x + y;
}
const subtract: calcTwoNumbers = (x: number, y: number): number => {
    return x - y;
}
const multiply: calcTwoNumbers = (x: number, y: number): number => {
    return x * y;
}
