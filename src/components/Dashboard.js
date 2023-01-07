import React, { useEffect } from 'react'

function Dashboard({setProgress}) {
  useEffect(() => {
    setProgress(60);
    setTimeout(() => {  
      setProgress(100);
    }
    , 300);
 // eslint-disable-next-line
  }, []);

  return (
    <div>Dashed post</div>
  )
}

export default Dashboard