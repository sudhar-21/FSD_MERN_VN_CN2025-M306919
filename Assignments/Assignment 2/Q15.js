function printTotalExpenses(expenses) {
  const total = expenses.reduce((acc, curr) => acc + curr, 0);  
  console.log(`Total money spent: ₹${total}`);
}


const monthlyExpenses = [2000, 1500, 3500, 4000];
printTotalExpenses(monthlyExpenses);
