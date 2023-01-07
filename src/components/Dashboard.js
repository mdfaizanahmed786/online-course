import React, { useEffect } from 'react'

function Dashboard({setProgress}) {
  useEffect(() => {
    setProgress(50);
    setTimeout(() => {  
      setProgress(100);
    }
    , 300);

  }, []);

  return (
    <div>Dashed post</div>
  )
}

export default Dashboard