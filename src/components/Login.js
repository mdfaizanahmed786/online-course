
import React, { useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login({ setProgress }) {
  const navigate=useNavigate();
  useEffect(() => {
    setProgress(60);
    setTimeout(() => {
      setProgress(100);
    }, 200);
    // eslint-disable-next-line
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let loggedInUser = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      if (loggedInUser.user) {
        toast.success("Login Success!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/")
        // localStorage.setItem("user", JSON.stringify(loggedInUser.user));

      }
    } catch (er) {
      toast.error(er.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
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
