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
    <div style={{height:'100vh', maxWidth:'1000px', margin:'50px auto'}}>
      <h2>About the team!</h2>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam pariatur consectetur incidunt voluptatem nesciunt et sint quasi aspernatur, sunt eius beatae molestias saepe harum hic temporibus ullam non dicta quaerat maxime possimus, dolorum odio nisi? Debitis ipsum facilis laudantium sequi, quasi, ad ipsa quam nam, doloribus delectus dolore eligendi? Perferendis nihil quasi optio quae ipsum architecto reiciendis tenetur consequuntur quam numquam, deserunt ex impedit officia delectus culpa assumenda eos! Repellat nemo voluptate obcaecati, saepe nesciunt et quas, qui quasi id, ad voluptas. Nobis perspiciatis, rem quaerat corrupti ex, ducimus soluta ratione consectetur explicabo corporis quidem, beatae modi id eligendi accusantium. A, quibusdam. Rem nobis recusandae veritatis iure voluptas dolores aliquam dolorum optio alias doloremque voluptatum natus nostrum minus quasi vitae labore expedita voluptates hic nesciunt consequatur, modi tempore dignissimos dolor officia? Nostrum, fugit suscipit. Debitis esse nihil doloremque eos culpa adipisci non obcaecati ducimus, pariatur animi quidem similique nisi quos unde excepturi enim vero? Possimus fugiat commodi facere sapiente dolores cum obcaecati quasi tempora quam natus! Recusandae dolores iusto natus, magni consequuntur porro adipisci hic quod neque alias accusantium ipsa? Voluptatibus odit sint nihil, quod accusantium velit dolorem earum ut nobis neque beatae optio, magnam soluta numquam eligendi quos unde distinctio, ea expedita obcaecati? Ex obcaecati velit inventore explicabo dolores natus laborum consequatur laudantium, nisi repellendus soluta facilis quibusdam ipsa doloribus eveniet cum sit rem? Laboriosam asperiores nisi commodi perspiciatis natus similique ex sapiente corporis nemo enim, nobis aspernatur maxime praesentium magni quibusdam tenetur eaque, odio at maiores blanditiis vel quas accusantium quis aliquam! Libero deserunt doloribus illum quo ea animi ipsam cupiditate tempore, nemo recusandae ut, voluptatibus, delectus iusto. Reprehenderit repellendus fugiat, esse atque non exercitationem vero, assumenda nulla adipisci consectetur iure? Quis enim quia sapiente vitae soluta id necessitatibus ducimus, repellendus fuga aperiam delectus hic ut vero labore, dolores debitis accusantium modi exercitationem! Deleniti molestias delectus dignissimos sapiente consequatur nobis nemo facilis perspiciatis, distinctio recusandae laudantium illo veniam ullam excepturi nam a placeat minima aut voluptas. Tenetur nulla dolores alias enim accusantium velit temporibus? Labore tempora, blanditiis id odio ut excepturi? Ipsa reiciendis distinctio itaque quo, iste expedita nesciunt! Libero iure quos aliquid reiciendis dolores corrupti, minus mollitia nobis fugit quam deserunt expedita iusto quo perspiciatis culpa harum modi soluta atque nemo officia recusandae cupiditate magnam vitae? Aut magni quae unde dolore eum repellat explicabo, nam, saepe illum cum nostrum veritatis praesentium, ad deserunt consequatur dicta vel officia!
    </div>
  )
}

export default About