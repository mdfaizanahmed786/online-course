import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Course from './components/Course/Course';
import Login from './components/Login';
import Signup from './components/Signup';
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes >
    <Route element={<Course/>} path="/course" />
    <Route element={<Login/>} path="/login" />
    <Route element={<Signup/>} path="/signup" />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
