import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Course from './components/Course/Course';
import Login from './components/Login';
import Signup from './components/Signup';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import About from './components/About';
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
function App() {
  const [progress, setProgress] = useState(0)
  return (
    <div className="App">
       <LoadingBar
        color='#00aeff'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <ToastContainer />
      <Navbar />
      <div>

      <Routes >
        <Route element={<Course  setProgress={setProgress} />} path="/courses" />
        <Route element={<Login setProgress={setProgress}/>} path="/login" />
        <Route element={<Signup setProgress={setProgress}/>} path="/signup" />
        <Route element={<About setProgress={setProgress}/>} path="/about" />
        <Route element={<Home setProgress={setProgress}/>} path="/" />
        
      </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
