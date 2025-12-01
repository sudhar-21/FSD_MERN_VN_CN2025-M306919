// App.js (or StudentsList.js)

import React from "react";

function Array() {
  const students = [
    { name: "Alice", dept: "ECE", year: 2 },
    { name: "Bob", dept: "CSE", year: 3 },
    { name: "Charlie", dept: "EEE", year: 1 },
    { name: "David", dept: "Mech", year: 4 }
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {students.map((student, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            width: "200px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{student.name}</h3>
          <p><strong>Dept:</strong> {student.dept}</p>
          <p><strong>Year:</strong> {student.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Array;
