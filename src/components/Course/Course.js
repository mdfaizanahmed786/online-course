import React, { useEffect, useState } from "react";
import Card from "../Card";

function Course({ setProgress }) {
  const [courses, setCourses]=useState([]);
  useEffect(() => {
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 300);
     // eslint-disable-next-line
  }, []);
const fetchData=async ()=>{
  const data=await fetch("https://courses-backend-2rjr.onrender.com/");
  const response=await data.json();
  setCourses(response);
}
  useEffect(()=>{
     fetchData();
  },[])
  return (
    <div style={{  maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Courses</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "50px",
          marginTop: "50px",
        }}
      >
        {courses.map((course, index) => {
          return <Card key={index} title={course.courseName} description={course.courseDescription} image={course.courseImage}/>;
        })}
      </div>
    </div>
  );
}

export default Course;
