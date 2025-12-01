// src/ProductFilter.jsx
import React, { useState } from "react";

export default function Pf() {
  const products = [
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "T-Shirt", category: "Clothes" },
    { id: 3, name: "Headphones", category: "Electronics" },
    { id: 4, name: "Jeans", category: "Clothes" },
    { id: 5, name: "Novel Book", category: "Books" }
  ];

  // derive categories automatically (plus “All”)
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // filter products based on category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Products</h2>
      <div style={{ marginBottom: "1rem" }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              marginRight: "0.5rem",
              padding: "0.5rem 1rem",
              background: selectedCategory === cat ? "#007bff" : "#eee",
              color: selectedCategory === cat ? "white" : "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul>
        {filteredProducts.map(prod => (
          <li key={prod.id}>
            {prod.name} — <em>{prod.category}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
