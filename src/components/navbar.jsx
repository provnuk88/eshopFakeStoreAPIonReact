import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const navbar = () =>{
return (
    <Navbar bg="white" shadow='white' expand="lg">
      <Container>
        <Navbar.Brand className='fw-bold fs-4 mx-auto' href="#">
        
            eshop
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-4"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
            <i class="bi bi-house"></i>
                Home</Nav.Link>
            <Nav.Link href="#action2">Product</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          <Button variant="outline-dark"> 
          <i class="bi bi-door-open-fill"></i>
          Login</Button>
          <Button variant="outline-dark"> 
          <i className="bi bi-person-plus"></i>
          Register</Button>
          <Button variant="outline-dark"> 
          <i className="bi bi-bag"></i>
          Cart</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}

export default navbar;