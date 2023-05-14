//css
import "./App.css";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import file
import Adminlogin from "../src/Admin/Adminlogin";
import AdminServices from "../src/Admin/AdminServices";
import AdminDash from "../src/Admin/AdminDash";
import Home from "../src/Home/Home";
import Blogs from "../src/Blogs/Blogs";
import Doctorinfomation from "./Doctorinformation/Doctorinfomation";
import Games from "./Games/Games";
import RandomDog from "./Games/RandomDog";
import QuizGame from "./Games/QuizGame";
import YearInDate from "./Games/YearInDate";
import ContactUs from "./Contact/ContactUs";
import AboutUs from "./AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Doctorinfomation" element={<Doctorinfomation />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/QuizGame" element={<QuizGame />} />
          <Route path="/games/randomDog" element={<RandomDog />} />
          <Route path="/games/yearsInDate" element={<YearInDate />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/adminServices" element={<AdminServices />} />
          <Route path="/adminDash" element={<AdminDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
