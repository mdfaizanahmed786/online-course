import React, { useEffect, useState } from "react";
import FeaturedCourses from "./FeaturedCourses";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";

function Home({ setProgress, user }) {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 300);
    // eslint-disable-next-line
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://courses-backend-2rjr.onrender.com/");
    const response = await data.json();
    setCourses(response);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ maxWidth: "1100px", margin: "auto" }}>
      <HeroSection />
      <FeaturedCourses courses={courses} user={user} />
      <div className="mt-5">
        <h2>Testimonials</h2>
        <div className="d-flex justify-content-center gap-xxl-5 p-4">
          <Testimonials desc="This website provides all learning benefits to each and everyone"name="Imtiyaz Ali"/>
          <Testimonials desc="This website provides all learning benefits to each and everyone"name="Furqan Hasan"/>
          <Testimonials desc="Amazing effort by the team! Such a pleasant to learn from this website..."name="Mehraj Ahmed"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
