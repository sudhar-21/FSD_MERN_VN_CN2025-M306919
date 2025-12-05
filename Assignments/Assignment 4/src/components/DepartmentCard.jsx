import React from "react";
import { Link } from "react-router-dom";

const DepartmentCard = ({ id, name, description }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      margin: "10px",
      width: "280px"
    }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/departments/${id}`}>
        <button>View More</button>
      </Link>
    </div>
  );
};

export default DepartmentCard;
