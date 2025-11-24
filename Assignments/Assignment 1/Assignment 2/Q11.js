function rechargeType(choice) {
  switch (choice) {
    case 1:
      console.log("Data Pack");
      break;
    case 2:
      console.log("Talktime");
      break;
    case 3:
      console.log("Validity Recharge");
      break;
    default:
      console.log("Invalid Choice");
      break;
  }
}


rechargeType(1); 
rechargeType(2);
rechargeType(3);  
rechargeType(4);  
