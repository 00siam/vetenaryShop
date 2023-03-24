import React, { useState } from "react";
import Nav from "../NabBar/Nav";
import Footer from "../Footer/Footer";
import Axios from "axios";

const ContactUs = ({foo = false, header = false}) => {

  // state for input name, email and message
  const [contact, SetContact] = useState({
    nm : "", // name same to same input name = "name" if input name 
    email: "",
    message: ""
  });

  // each input (name, email, message) onchange function  
  const handleChange = (e) =>{
    SetContact((pre)=>{
      return { ...pre, [e.target.name]: e.target.value }
    });
  }
  
  console.log(contact);

  const handleClick = async (e) =>{
    e.preventDefault();
    try{
      // console.log("handle clicked start ....");
      await Axios.post("http://localhost:3001/contact", contact);
      // console.log("handle clicked closed ....");
    }catch(err){
      console.log(err);
    }
  }
  
  return (
    <>
      <Nav />

      {/* heading */}
      {
        header ? " ":  <div className="container">
        <h2 style={{ color: "orange", marginTop: 80 }}>Contact Us</h2>
      </div>
     }


      {/* body  */}
      <div style={{backgroundColor: "#B5B5B5", padding:30}}>
        <div
          className="center"
          style={{ width: "70%", marginLeft: "15%", marginTop: 25 }}
        >
          <div className="container-fluid bg-grey">
            {/* <h2 style={{ color: "orange", marginTop: 80 }}>Contact Us</h2> */}
            <div className="row">
              <div className="col-sm-5">
                <p>Contact us and we'll get back to you within 24 hours.</p>
                <p> Banglaesh</p>
                <p>+8801600000000</p>
                <p> myemail@something.com</p>
              </div>
              <div className="col-sm-7">
                <div className="row">
                  <div className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      id="name"
                      name="nm"
                      onChange = { handleChange }
                      placeholder="Name"
                      type="text"
                      require = "required"
                    />
                    <br />
                  </div>
                  <div className="col-sm-6 form-group">
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      onChange = { handleChange }
                      placeholder="Email"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <br />

                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  onChange = { handleChange }
                  placeholder="message"
                  rows="5"
                ></textarea>

                <div className="row">
                  <div className="col-sm-12 form-group">
                    <button
                      onClick= { handleClick }
                      type="button"
                      class="btn btn-success"
                      style={{
                        marginTop: 20,
                        width: 300,
                        padding: 10,
                        borderRadius: 20,
                      }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* footer  */}
       <div style={{marginTop: 100}}>
        {
          foo ? " " : <div> <Footer/> </div>
        }
       </div>
    </>
  );
};

export default ContactUs;