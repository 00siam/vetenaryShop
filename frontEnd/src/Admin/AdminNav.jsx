import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const adminNav = () => {
  return (
    <div>
        <div>
        <h2
          style={{
            color: "orange",
            margin: 20,
            padding: 20,
            backgroundColor: "grey",
          }}
        >
          Admin Panel
        </h2>
      </div>

      <Navbar expand="md" bg="light" variant="light" className="text-secondary">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/adminDash">Home</Nav.Link>
              <Nav.Link href="/adminServices">Services</Nav.Link>
     
            </Nav>

            <Nav>
              <Nav.Link href="/adminlogin">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default adminNav