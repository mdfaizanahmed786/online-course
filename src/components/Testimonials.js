import React from 'react'

function Testimonials({name, desc}) {
  return (
    <div style={{backgroundColor:'LightGray', padding:'10px 20px', width:'75%', borderRadius:'5px', height:'50%'}} className="shadow-sm">
      <p>{desc}</p>
      <p style={{fontWeight:'bold'}}>-{name}</p>


    </div>
  )
}

export default Testimonials