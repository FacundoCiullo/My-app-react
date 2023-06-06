import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Carrito({ cantidadProductos}) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  return (
    <>
      <Button variant="dark" onClick={handleShowOffcanvas}>
        <i className="bi bi-cart3"></i>
        <Badge bg="danger">{cantidadProductos}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Aquí puedes agregar el contenido del carrito */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Carrito;