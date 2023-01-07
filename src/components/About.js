import React, { useEffect } from 'react'

function About({setProgress}) {
  useEffect(() => {
    setProgress(60);
    setTimeout(() => {  
      setProgress(100);
    }
    , 300);
 // eslint-disable-next-line
  }, []);

  return (
    <div>About</div>
  )
}

export default About