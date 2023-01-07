import React from "react";
import Card from "../Card";
const courses = [1, 2, 3, 4, 5, 6];
function Course() {
  return (
    <div style={{ height: "100vh", maxWidth: "1000px", margin: "auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "50px",
          marginTop: "50px",
        }}
      >
        {courses.map((course, index) => {
          return <Card key={index} />;
        })}
      </div>
    </div>
  );
}

export default Course;
