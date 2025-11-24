function startExam(callback) {
  console.log("Exam started.");
  
  setTimeout(() => {
    console.log("Exam in progress...");
    callback(); 
  }, 1000); 
}

function evaluateExam(callback) {
  console.log("Evaluating answers...");
 
  setTimeout(() => {
    console.log("Evaluation done.");
    callback(); 
  }, 2000); 
}

function declareResult() {
  console.log("Declaring result...");

  setTimeout(() => {
    console.log("Result declared. Congratulations!");
  }, 1000); 
}

startExam(() => {
  evaluateExam(() => {
    declareResult();
  });
});
