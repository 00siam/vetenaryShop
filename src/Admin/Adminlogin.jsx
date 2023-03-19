import React from "react"
import Nav from "../NabBar/Nav"
import Footer from "../Footer/Footer"


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
  return (
    <>
      <Nav />

      {/* Login  */}
      <div style={{marginLeft: 50,width: "80%", height: 250, textAlign:"center"}}>
        <MDBContainer fluid style={{marginTop:50}}>
          <MDBRow className="d-flex justify-content-center align-items-center h-80">
            <MDBCol col="12">
              <MDBCard
                className="bg-white my-5 mx-auto"
                style={{ borderRadius: "1rem", maxWidth: "500px" }}
              >
                <MDBCardBody className="p-5 w-100 d-flex flex-column">
                  <h2 className="fw- mb-2 text-center">Sign in</h2>
                  <p className="text-dark-50 mb-3">
                    Please enter your login and password!
                  </p>

                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    placeholder="Email address"
                    id="formControlLg"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4 w-100"
                    placeholder="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                  />
                  
                <div className="d-flex justify-content-between mx-4 mb-4">
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                  <a href="!#">Forgot password?</a>
                </div>

                  <MDBBtn size="lg">Login</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
  



         {/* footer  */}

         <div style={{marginTop:268}}>
          <Footer />
        </div>
    </>
  );
};

export default Adminlogin;
