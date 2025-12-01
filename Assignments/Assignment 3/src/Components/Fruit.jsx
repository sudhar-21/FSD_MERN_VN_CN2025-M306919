// src/FruitList.jsx
import React, { useState } from "react";

export default function FruitList() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry"]);  // initial list
  const [newFruit, setNewFruit] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const f = newFruit.trim();
    if (!f) return;
    setFruits([...fruits, f]);
    setNewFruit("");
  };

  const handleDelete = (fruitToDelete) => {
    setFruits(prevFruits =>
      prevFruits.filter(fruit => fruit !== fruitToDelete)
    );
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "400px" }}>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} style={{ marginBottom: "0.5rem" }}>
            {fruit}{" "}
            <button
              onClick={() => handleDelete(fruit)}
              style={{ marginLeft: "0.5rem" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAdd} style={{ marginTop: "1rem" }}>
        <input
          type="text"
          placeholder="Add a new fruit"
          value={newFruit}
          onChange={(e) => setNewFruit(e.target.value)}
          style={{ padding: "0.5rem", width: "70%", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Add Fruit
        </button>
      </form>
    </div>
  );
}
