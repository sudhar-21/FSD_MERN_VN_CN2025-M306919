import React from "react";
import data from "../data/departments.json";
import DepartmentCard from "../components/DepartmentCard";

const Departments = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Departments</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.departments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            id={dept.id}
            name={dept.name}
            description={dept.shortDesc}
          />
        ))}
      </div>
    </div>
  );
};

export default Departments;
