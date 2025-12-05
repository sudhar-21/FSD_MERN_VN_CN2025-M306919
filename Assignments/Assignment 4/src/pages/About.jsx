import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Our College</h1>

      <section>
        <h2>History</h2>
        <p>
          Founded in 19XX, our college has grown from a small institution to a
          leading center of learning, producing thousands of graduates who
          contribute to society worldwide.
        </p>
      </section>

      <section>
        <h2>Mission & Vision</h2>
        <p><strong>Mission:</strong> To provide quality education and foster innovation.</p>
        <p><strong>Vision:</strong> To become a global leader in technical education and research.</p>
      </section>

      <section>
        <h2>Achievements</h2>
        <ul>
          <li>Accredited with AAA in 20XX.</li>
          <li>100% placement record in 20YY.</li>
          <li>National-level project awards and research grants.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
