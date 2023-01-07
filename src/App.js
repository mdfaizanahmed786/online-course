import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Course from './components/Course/Course';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Course/>
    <Login/>
    <Footer/>
    </div>
  );
}

export default App;
