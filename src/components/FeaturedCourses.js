import React from 'react'
import Card from './Card'
const courses=[1,2,3]
function FeaturedCourses() {
  return (
    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}>{
        courses.map((course,index)=>{
          return <Card key={index} />
          }) 
   
       }</div>
  )
}

export default FeaturedCourses