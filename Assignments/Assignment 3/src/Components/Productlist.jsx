
import React, { useState, useEffect } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // The API returns an object with a "products" array :contentReference[oaicite:1]{index=1}
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

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
