
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("Initial fruits:", fruits);


fruits.push("Fig");
console.log("After push:", fruits);


let popped = fruits.pop();
console.log("Popped item:", popped);
console.log("After pop:", fruits);


let shifted = fruits.shift();
console.log("Shifted item:", shifted);
console.log("After shift:", fruits);


fruits.unshift("Grapefruit");
console.log("After unshift:", fruits);

console.log("Final fruits array:", fruits);
