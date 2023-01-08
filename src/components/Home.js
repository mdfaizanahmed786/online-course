import React, { useEffect, useState } from 'react'
import FeaturedCourses from './FeaturedCourses'
import HeroSection from './HeroSection'

function Home({setProgress, user}) {
  const [courses, setCourses]=useState([]);
  useEffect(() => {
    setProgress(60);
    setTimeout(() => {  
      setProgress(100);
    }
    , 300);
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
    <div style={{ maxWidth: "1100px", margin: "auto"}}>
        <HeroSection/>
        <FeaturedCourses courses={courses} user={user}/>
    </div>
  )
}

export default Home