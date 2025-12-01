// src/NameEmailForm.jsx
import React, { useState } from "react";

export default function Name() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();        // prevent page reload :contentReference[oaicite:0]{index=0}
    setSubmittedData({ name, email });
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "0.5rem" }}>
          <label htmlFor="nameInput">Name:</label><br />
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <div style={{ marginBottom: "0.5rem" }}>
          <label htmlFor="emailInput">Email:</label><br />
          <input
            id="emailInput"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "1rem", background: "#f9f9f9", padding: "1rem", borderRadius: "4px" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
}
