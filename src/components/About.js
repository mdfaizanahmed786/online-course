import React, { useEffect } from 'react'

function About({setProgress}) {
  useEffect(() => {
    setProgress(50);
    setTimeout(() => {  
      setProgress(100);
    }
    , 300);

  }, []);

  return (
    <div>About</div>
  )
}

export default About