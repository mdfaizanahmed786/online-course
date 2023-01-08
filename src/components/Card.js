import React from "react";

function Card({ title, description, image, user }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="course_image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.slice(0, 60)}</p>
          <a href="https://www.udemy.com/course/web-development-masterclass-complete-certificate-course/" className="btn btn-primary me-3">
            Enroll Now
          </a>
          <button className="btn btn-danger " disabled={!user}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc1pJI-1L473RbznMcWcyvHEsITOpN_YhEErEZlU4p9_WCDzQ/viewform" style={{textDecoration:"none", color:'white'}}>Start Quiz</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
