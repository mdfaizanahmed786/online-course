import React from 'react'
import Card from './Card'
function FeaturedCourses({courses}) {
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}>{
        courses.slice(0,3).map((course,index)=>{
          return <Card key={index} title={course.courseName} description={course.courseDescription} image={course.courseImage}/>
          }) 
   
       }</div>
  )
}

export default FeaturedCourses