// src/AddPost.jsx
import React, { useState } from "react";
import axios from "axios";

export default function Addpost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://dummyjson.com/posts/add", {
        title,
        body,
        userId: 1  // you can pass userId or other required fields as per API
      });
      console.log("Response:", response.data);
      setStatusMessage("Post Added!");
      setTitle("");
      setBody("");
    } catch (error) {
      console.error("Error posting data:", error);
      setStatusMessage("Error adding post");
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "500px" }}>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>

        <label>
          Body:
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            required
            rows={4}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </label>

        <button type="submit" style={{ padding: "0.5rem 1rem", marginTop: "0.5rem" }}>
          Submit
        </button>
      </form>

      {statusMessage && (
        <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{statusMessage}</p>
      )}
    </div>
  );
}
