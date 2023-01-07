import React, { useEffect } from "react";
import { useState } from "react";

function Login({ setProgress }) {
  useEffect(() => {
    setProgress(50);
    setTimeout(() => {  
      setProgress(100);
    }
    , 300);

  }, []);


  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div
      style={{
        height: "100vh",
        paddingTop: "120px",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2 className="mb-5">Welcome Back!</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={user.email}
            name="email"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleChange}
            value={user.password}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
