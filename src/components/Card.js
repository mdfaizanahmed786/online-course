import React from "react";

function Card({ title, description, image }) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="course_image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description.slice(0, 60)}</p>
          <a href="/" className="btn btn-primary me-3">
            Enroll Now
          </a>
          <a href="/" className="btn btn-danger ">
            Start Quiz
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
