import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import Nav from "../NabBar/Nav";
import Footer from "../Footer/Footer";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Adminlogin = () => {

  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  // console.log("input login: ",login.name);

  
  const navigate = useNavigate()

  const handleChange = (e) => {
    setLogin((pre) => {
      return { ...pre, [e.target.name]: e.target.value };
    });
  };

  const handleClickLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("handle clicked start ....");
      
      const res = await Axios.post("http://localhost:3001/adminlogin", login).then((res) => {
        console.log(res);
        console.log(res.data.message);
        if(res.data.message == "Wrong username and password combination!"){
          alert("Wrong username and password combination!");
          window.location.reload();
        }
        console.log(res.data[0].name); // ei line authentication make kore 

        // console.log("handle clicked end ....");
      })
      
      navigate("/adminDash")
      // console.log("backend data:" ,res.data[0].name);
      // console.log("frontend data:" ,login.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav />

      {/* Login  */}
      <div
        style={{
          marginLeft: 50,
          width: "80%",
          height: 250,
          textAlign: "center",
        }}
      >
        <MDBContainer fluid style={{ marginTop: 50 }}>
          <MDBRow className="d-flex justify-content-center align-items-center h-80">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-4 w-100 d-flex flex-column">
                  <h2 className="fw- mb-2 text-center">Sign in</h2>
                  <p className="text-dark-50 mb-3">
                    Please enter your login and password!
                  </p>

                  <MDBInput
                    wrapperClass="mb-2 w-100"
                    placeholder="Username"
                    name="name"
                    onChange={handleChange}
                    type="text"
                  />

                  <MDBInput
                    wrapperClass="mb-2 w-100"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                  />

                  <div className="d-flex justify-content-between mx-4 mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Remember me"
                    />
                    <a href="!#">Forgot password?</a>
                  </div>

                  <button
                    type="button"
                    onClick={handleClickLogin}
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      {/* footer  */}

      <div style={{ marginTop: 268 }}>
        <Footer />
      </div>
    </>
  );
};

export default Adminlogin;
