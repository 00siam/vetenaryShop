import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const CollapsibleExample = () => {
  return (
    
    <Navbar expand="md" bg="light" variant="light" fixed='top' className='text-secondary'>




      <Container >
      
          <Navbar.Brand href="/">
            <img
              src="https://mobirise.com/extensions/mentorm5/life-coach/assets/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

      <Navbar.Brand href="/">Vetenary Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="me-auto ">
        
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/Doctorinfomation">Doctor Information</Nav.Link>
            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
            <Nav.Link href="/games">Games</Nav.Link>
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