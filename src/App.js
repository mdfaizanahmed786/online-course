import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Course from './components/Course/Course';
import Login from './components/Login';
import Signup from './components/Signup';

import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{maxWidth:"800px", margin:'auto'}}>

      <Routes >
        <Route element={<Course />} path="/courses" />
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
        <Route element={<About />} path="/about" />
        <Route element={<Home />} path="/" />
        
      </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
