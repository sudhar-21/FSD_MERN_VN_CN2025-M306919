function checkBusRoute(busNumber) {
  if (typeof busNumber !== "number" || !Number.isInteger(busNumber)) {
    console.log("Please enter a valid integer bus number.");
    return;
  }

  
  if (busNumber % 2 === 0) {  
    console.log(`Bus number ${busNumber} → Route A (even)`);
  } else {
    console.log(`Bus number ${busNumber} → Route B (odd)`);
  }
}


checkBusRoute(12);  

