//css
import "./App.css";

//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import file
import Adminlogin from "../src/components/Admin/Adminlogin";
import AdminServices from "../src/components/Admin/AdminServices";
import AdminDash from "../src//components/Admin/AdminDash";
import Home from "../src/components/Home/Home";
import Blogs from "../src/components/Blogs/Blogs";
import Doctorinfomation from "./components/Doctorinformation/Doctorinfomation";
import Games from "./components/Games/Games";
import QuizGame from "./components/Games/quizGame/QuizGame";
import RandomDog from "./components/Games/randomDogImage/RandomDog";
import YearInDate from "./components/Games/yearInDate/YearInDate";
import ContactUs from "./components/Contact/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";

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
          <Route path="/games/Games/QuizGame" element={<QuizGame />} />
          <Route path="/games/Games/randomDog" element={<RandomDog />} />
          <Route path="/games/Games/yearsInDate" element={<YearInDate />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/adminServices" element={<AdminServices />} />
          <Route path="/adminDash" element={<AdminDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
