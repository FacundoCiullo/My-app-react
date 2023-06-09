import CartWidget from "./CartWidget";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Theme from "../js/theme"
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';


const NavBar = () => {
    return (
    <>
      {['sm'].map((expand) => (
        <Navbar 
          key={expand} 
          bg="dark" 
          variant="dark" 
          expand={expand} 
          className="mb-3"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="/">
              <i className="bi bi-boxes"></i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">inicio</Nav.Link>
                <Nav.Link href="/">Productos</Nav.Link>
              </Nav>

              <CartWidget />

              <Nav>
                <Dropdown>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <i className="bi bi-person-circle"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-1"><i class="bi bi-box-seam"></i> Pedidos</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><i class="bi bi-pencil-square"></i> Editar</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><i class="bi bi-box-arrow-left"></i> Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <Nav>
                <div className="d-flex justify-content-center">
                  <Theme />{/* Swich modo oscuro */}
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </>
    );
  }
  
export default NavBar;
