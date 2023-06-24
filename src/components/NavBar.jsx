import CartWidget from "./CartWidget";
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Theme from "../js/theme"
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
  <>
    {['md'].map((expand) => (
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
              <NavLink className="nav-link" aria-current="page" to={"/destacados"}>Destacados</NavLink>
              <NavLink className="nav-link" aria-current="page" to={"/"}>Productos <i className="bi bi-arrow-bar-right"></i></NavLink>
              <NavLink className="nav-link" activeclassname="text-danger" to={"/category/Abrigos"}>Abrigos</NavLink>
              <NavLink className="nav-link" activeclassname="text-danger" to={"/category/Remeras"}>Remeras</NavLink>
              <NavLink className="nav-link" activeclassname="text-danger" to={"/category/Pantalon"}>Pantalones</NavLink>
              <NavLink className="nav-link" activeclassname="text-danger" to={"/category/Zapatillas"}>Zapatillas</NavLink>
            </Nav>

            <CartWidget />

            <Nav>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                  <i className="bi bi-person-circle"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  <Dropdown.Item href="#/action-1"><i className="bi bi-box-seam"></i> Pedidos</Dropdown.Item>
                  <Dropdown.Item href="#/action-2"><i className="bi bi-pencil-square"></i> Editar</Dropdown.Item>
                  <Dropdown.Item href="#/action-3"><i className="bi bi-box-arrow-left"></i> Log Out</Dropdown.Item>
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
