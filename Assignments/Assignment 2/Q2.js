function evaluate(marks, age) {
  if (marks < 0 || marks > 100 || typeof marks !== 'number') {
    console.log(`Invalid marks: ${marks}. Must be between 0 and 100.`);
  } else {
    let grade;
    if (marks >= 90) {
      grade = 'A';
    } else if (marks >= 75) {
      grade = 'B';
    } else if (marks >= 60) {
      grade = 'C';
    } else {
      grade = 'F';
    }
    console.log(`Marks: ${marks} → Grade: ${grade}`);
  }

  const status = (age >= 18) ? 'Adult' : 'Minor';
  console.log(`Age: ${age} → ${status}`);
}


evaluate(92, 20);

