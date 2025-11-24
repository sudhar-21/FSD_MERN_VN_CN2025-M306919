const pay1 = 300;
const pay2 = 500;

const result = pay1 > pay2
  ? `Person 1 earns more by ₹${pay1 - pay2}`
  : pay2 > pay1
    ? `Person 2 earns more by ₹${pay2 - pay1}`
    : `Both earn the same (₹${pay1})`;

console.log(result);
