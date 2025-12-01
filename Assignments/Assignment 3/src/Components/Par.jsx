
import React from "react";

// Child component
function Child({ onAlert }) {
  return (
    <div>
      <button onClick={onAlert}>
        Click me (in Child)
      </button>
    </div>
  );
}

// Parent component
export default function Par() {
  const showAlert = () => {
    alert("Hello from Parent!");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Parent Component</h1>
      <Child onAlert={showAlert} />
    </div>
  );
}
