// src/StudentSearch.jsx
import React, { useState } from "react";

export default function Stud() {
  const students = [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Lee" },
    { id: 4, name: "David Kim" },
    { id: 5, name: "Eve Martinez" }
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <input
        type="text"
        placeholder="Search students by name..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
          boxSizing: "border-box"
        }}
      />

      <ul>
        {filteredStudents.length > 0 ? (
          filteredStudents.map(student => (
            <li key={student.id}>{student.name}</li>
          ))
        ) : (
          <li>No matching students</li>
        )}
      </ul>
    </div>
  );
}
