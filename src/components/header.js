import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='brand'><i class="fas fa-snowflake fa-2x" style={{color:"#35d0ba"}}></i> Vinrays</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#teams">Teams</Nav.Link>
            {/*<Nav.Link href="#testimonials">Testimonials</Nav.Link>*/}
            <Nav.Link href="#careers">Careers</Nav.Link>
            {/*<Nav.Link href="#blog">Blog</Nav.Link>*/}
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Link to="/signin">
            <Button>Sign In</Button>
            </Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;