import React from "react";
import Hero from "../components/HEro";
import { Link } from "react-router-dom";
import data from "../data/departments.json";
import DepartmentCard from "../components/DepartmentCard";

const Home = () => {
  const topDepartments = data.departments.slice(0, 4);

  return (
    <>
      <Hero />

      <section style={{ padding: "40px 20px" }}>
        <h2>Why This College?</h2>
        <p>
          Our college offers high-quality education, experienced faculty,
          state-of-the-art infrastructure, and a vibrant community. We strive
          for excellence in academics and holistic development.
        </p>
      </section>

      <section style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
        {topDepartments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            id={dept.id}
            name={dept.name}
            description={dept.shortDesc}
          />
        ))}
      </section>

      <section style={{ padding: "20px", textAlign: "center" }}>
        <Link to="/departments">
          <button>View All Departments</button>
        </Link>
      </section>
    </>
  );
};

export default Home;
