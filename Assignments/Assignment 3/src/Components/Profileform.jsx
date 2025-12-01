// src/ProfileForm.jsx
import React, { useState } from "react";

export default function Profileform() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <h2>Edit Profile</h2>
      <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter name"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Enter email"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>
      </form>

      <div style={{ marginTop: "1rem" }}>
        <h3>Current Profile Data:</h3>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
      </div>
    </div>
  );
}
