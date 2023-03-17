//css
import './App.css';

//router
import { Routes, Route } from "react-router-dom";

//import file
import Adminlogin from "../src/Admin/Adminlogin";
import Home from "../src/Home/Home";
import Blogs from "../src/Blogs/Blogs";
import Doctorinfomation  from './Doctorinformation/Doctorinfomation';
import Games from './Games/Games';
import RandomDog from './Games/RandomDog';
import ContactUs from './Contact/ContactUs';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/Doctorinfomation" element={<Doctorinfomation/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/games" element={<Games/>}/>
        <Route path="/games/randomDog" element={<RandomDog/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
