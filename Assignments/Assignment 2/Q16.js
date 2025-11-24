function placeOrder(callback) {
  console.log("Order placed.");
  
  setTimeout(() => {
    console.log("Order is being processed...");
    callback();  
  }, 1000); 
}

function cookFood(callback) {
  console.log("Food cooking started.");

  setTimeout(() => {
    console.log("Food is ready!");
    callback(); 
  }, 2000); 
}

function deliverFood() {
  console.log("Food is out for delivery.");
 
  setTimeout(() => {
    console.log("Food delivered. Enjoy your meal!");
  }, 1500); // 1.5 seconds delay
}


placeOrder(() => {
  cookFood(() => {
    deliverFood();
  });
});
