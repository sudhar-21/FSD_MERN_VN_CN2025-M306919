
const totalSeats = 120;
const bookedSeats = 78;


const availableSeats = totalSeats - bookedSeats;
console.log(`Available seats: ${availableSeats}`);

let status;
if (availableSeats < 20) {
  status = "Almost Full";
} else if (availableSeats >= 20 && availableSeats <= 60) {
  status = "Moderate Availability";
} else {
  status = "Plenty of Seats Available";
}

console.log(`Status: ${status}`);
