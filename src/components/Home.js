import React, { useEffect } from 'react'
import FeaturedCourses from './FeaturedCourses'
import HeroSection from './HeroSection'

function Home({setProgress}) {
  useEffect(() => {
    setProgress(50);
    setTimeout(() => {  
      setProgress(100);
    }
    , 300);

  }, []);

  return (
    <div style={{ maxWidth: "1000px", margin: "auto"}}>
        <HeroSection/>
        <FeaturedCourses/>
    </div>
  )
}

export default Home