// src/ProductTable.jsx
import React from "react";

export default function Product() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
    { id: 3, name: "Tablet", price: 299 },
    { id: 4, name: "Headphones", price: 99 }
  ];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Product List</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "1rem"
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{product.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{product.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                ${product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
