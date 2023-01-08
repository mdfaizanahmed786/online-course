import React, { useCallback, useEffect, useState } from "react";
import Card from "../Card";
import { Vortex } from "react-loader-spinner";

function Course({ setProgress, user }) {
  const [courses, setCourses] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 300);
    // eslint-disable-next-line
  }, []);
  const fetchData = async () => {
    setLoader(true);
    const data = await fetch("https://courses-backend-2rjr.onrender.com/");
    setLoader(true);
    const response = await data.json();
    setCourses(response);
    setLoader(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const filterItems = useCallback((e)=>{
   

    setCourses(
      courses.filter((course) =>
        course.courseName.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  },[courses])
  return (
    <div style={{ maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>Courses</h1>
      <div className="d-flex  justify-content-center">
        {loader ? (
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        ) : (
          <>
            <div className="mb-3 w-100">
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="search"
                placeholder="Search for our courses"
                onChange={(e) => {
                  filterItems(e);
                }}
              />
            </div>
          </>
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "50px",
          marginTop: "50px",
        }}
      >
        {courses.map((course, index) => {
          return (
            <Card
              key={index}
              title={course.courseName}
              description={course.courseDescription}
              image={course.courseImage}
              user={user}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Course;
