import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Course from "./components/Course/Course";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import About from "./components/About";
import Home from "./components/Home";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
function App() {
  const [progress, setProgress] = useState(0);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem("user");
        setUser(null);
      }
    });
  }, [user]);
  return (
    <div
      className="App"
      style={{
        backgroundImage:
          "url(https://t4.ftcdn.net/jpg/02/98/70/45/360_F_298704550_x2ck5Rk3xnxUYEAr3kNUt7Ri1dHssBrg.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <LoadingBar
        color="#00aeff"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <ToastContainer />
      <Navbar user={user} />
      <div>
        <Routes>
          <Route
            element={<Course setProgress={setProgress} user={user} />}
            path="/courses"
          />
          <Route element={<Login setProgress={setProgress} />} path="/login" />
          <Route
            element={<Signup setProgress={setProgress} />}
            path="/signup"
          />
          <Route element={<About setProgress={setProgress} />} path="/about" />
          <Route
            element={<Home setProgress={setProgress} user={user} />}
            path="/"
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
