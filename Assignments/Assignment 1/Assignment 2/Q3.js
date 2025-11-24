
let name = "Alice";


let message = `Hello, ${name}! Welcome to JavaScript.`;
console.log(message);


let nameUpper = name.toUpperCase();
console.log(`Name in uppercase: ${nameUpper}`);

if (message.length > 10) {
  console.log("The message has more than 10 characters.");
} else {
  console.log("The message has 10 or fewer characters.");
}

if (message.includes("JavaScript")) { 
  console.log("The message contains the word \"JavaScript\".");
} else {
  console.log("The message does not contain the word \"JavaScript\".");
}
