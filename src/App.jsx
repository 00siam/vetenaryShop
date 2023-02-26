//css
import './App.css';

//router
import { Routes, Route } from "react-router-dom";

//import file
import Footer from "../src/Footer/Footer";
import Home from "../src/Home/Home";
import Blogs from "../src/Blogs/Blogs";
import ContactUs from './Contact/ContactUs';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/>
        <Route path="/footer" element={<Footer/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
