import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/departments.json";

const DepartmentDetail = () => {
  const { deptId } = useParams();
  const dept = data.departments.find((d) => d.id === deptId);

  if (!dept) {
    return <p>Department not found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{dept.name}</h1>
      <p>{dept.fullDesc}</p>

      <h3>Courses Offered</h3>
      <ul>
        {dept.courses.map((course, idx) => (
          <li key={idx}>{course}</li>
        ))}
      </ul>

      <h3>Faculty</h3>
      <ul>
        {dept.faculty.map((f, idx) => (
          <li key={idx}>
            {f.name} — {f.designation}
          </li>
        ))}
      </ul>

      <h3>Labs / Facilities</h3>
      <ul>
        {dept.labs.map((lab, idx) => (
          <li key={idx}>{lab}</li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentDetail;
