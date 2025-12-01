// src/ProductList.jsx
import React, { useState, useEffect } from "react";

export default function Pl() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          throw new Error("Network response was not OK");
        }
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading…</p>;
  }

  if (error) {
    return <p>Error loading data</p>;
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "1rem" }}>
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "1rem",
            width: "220px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
          }}
        >
          <h3>{prod.title}</h3>
          <p><strong>Price:</strong> ${prod.price}</p>
          <p><strong>Brand:</strong> {prod.brand}</p>
        </div>
      ))}
    </div>
  );
}
