import React, { useEffect } from "react";
import { auth } from "../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";

function Signup({setProgress}) {
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

  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {email, password}=user;
    try{
      const uuid=await createUserWithEmailAndPassword(auth, email, password);
      if(uuid.user){
        toast.success('User Created Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          localStorage.setItem("user", JSON.stringify(uuid.user));
      }


    }
    catch(er){
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

    localStorage.setItem("check", check);
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
        <h2 className="mb-5">Signup to get started!</h2>
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            onChange={(e) => setCheck(!check)}
            checked={check}
            name="check"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
