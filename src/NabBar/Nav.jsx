import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
  return (
    
    <Navbar expand="md" bg="dark" variant="dark" fixed='top'>
      <Container >
        {/* <Navbar.Brand href="/home"><h5>Veteneary</h5></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto ">
        
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/doctorInformation">Doctor Information</Nav.Link>
            <Nav.Link href="/howToBooks">How To Books</Nav.Link>
            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link href="/adminlogin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
    
  );
}

export default CollapsibleExample;