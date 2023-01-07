import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";


function Navbar({ user }) {
  const logOutUser=()=>{
    signOut(auth).then(() => {
    toast.success('Logged Out Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

    }).catch((error) => {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    });
  }
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg position-sticky top-0 z-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Free Online Courses
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/courses">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {!user ? (
              <div>
                <button className="btn btn-primary">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </button>
                <button className="btn btn-primary">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </button>
              </div>
            ) : (
              <>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 active">
                  <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                      Dashboard
                    </Link>
                  </li>
                </ul>
                <button className="btn btn-danger" onClick={logOutUser}>Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
