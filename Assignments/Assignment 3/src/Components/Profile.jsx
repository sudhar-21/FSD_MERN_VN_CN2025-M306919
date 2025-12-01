// src/Profile.jsx
import React from "react";

function ProfileCard({ name, role, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      width: "220px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      textAlign: "center"
    }}>
      <img
        src={image}
        alt={name}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "0.5rem"
        }}
      />
      <h2 style={{ margin: "0.5rem 0 0.25rem" }}>{name}</h2>
      <p style={{ margin: 0, color: "#555" }}>{role}</p>
    </div>
  );
}

// This is the “root” component exported from this file.
export default function Profile() {
  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <ProfileCard
        name="Alice Johnson"
        role="Frontend Developer"
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
      <ProfileCard
        name="Bob Smith"
        role="Backend Engineer"
        image="https://randomuser.me/api/portraits/men/32.jpg"
      />
      <ProfileCard
        name="Cathy Lee"
        role="UI/UX Designer"
        image="https://randomuser.me/api/portraits/women/68.jpg"
      />
    </div>
  );
}
