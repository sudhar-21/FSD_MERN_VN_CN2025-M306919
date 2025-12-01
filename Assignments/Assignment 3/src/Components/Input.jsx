
import React, { useState } from "react";

export default function Input() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <label htmlFor="usernameInput">
        Username:
      </label>
      <input
        id="usernameInput"
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Type your username..."
        style={{ display: "block", margin: "0.5rem 0", padding: "0.5rem", width: "100%" }}
      />
      <p>Entered name: <strong>{username}</strong></p>
    </div>
  );
}
