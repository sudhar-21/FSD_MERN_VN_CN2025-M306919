
import React from 'react';
import products from '../data.json'

export default function Pc() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {products.map(product => (
        <div
          key={product.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            width: '200px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <h3>{product.name}</h3>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
