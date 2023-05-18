import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carrito from '../Carrito';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';

function Header({ cantidadProductos }) {
  return (
    <Navbar collapseOnSelect  bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><i className="bi bi-boxes"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../inicio">inicio</Nav.Link>
            <Nav.Link href="../Productos">Productos</Nav.Link>
          </Nav>
          <Nav>
            
            <Carrito cantidadProductos={cantidadProductos} />
            
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                <i className="bi bi-person-circle"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Perfil</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Pedidos</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

