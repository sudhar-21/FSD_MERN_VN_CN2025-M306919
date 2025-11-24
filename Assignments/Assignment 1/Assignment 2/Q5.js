
const numbers = [12, 45, 7, 89, 23];
console.log("Numbers:", numbers);

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum);


const largest = Math.max(...numbers);  
console.log("Largest number:", largest);
