import React from 'react'
import FeaturedCourses from './FeaturedCourses'
import HeroSection from './HeroSection'

function Home() {
  return (
    <div style={{ maxWidth: "1000px", margin: "auto"}}>
        <HeroSection/>
        <FeaturedCourses/>
    </div>
  )
}

export default Home