import React, { useEffect } from "react";
import Card from "../Card";
const courses = [1, 2, 3, 4, 5, 6];
function Course({ setProgress }) {
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
  console.log(response);
}
  useEffect(()=>{
     fetchData();
  },[])
  return (
    <div style={{ height: "100vh", maxWidth: "1000px", margin: "auto" }}>
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
          return <Card key={index} />;
        })}
      </div>
    </div>
  );
}

export default Course;
