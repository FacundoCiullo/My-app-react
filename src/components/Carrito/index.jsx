import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Items from '../Items'; // Importar el componente Items

function Carrito({ cantidadProductos, productosSeleccionados = [], actualizarProductosSeleccionados }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const calcularSubtotal = (producto) => {
    return producto.precio * producto.cantidad;
  };

  const restarCantidadProducto = (id) => {
    const productosActualizados = productosSeleccionados.map((producto) => {
      if (producto.id === id && producto.cantidad > 1) {
        return {
          ...producto,
          cantidad: producto.cantidad - 1
        };
      }
      return producto;
    });
    actualizarProductosSeleccionados(productosActualizados);
  };

  const sumarCantidadProducto = (id) => {
    const productosActualizados = productosSeleccionados.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          cantidad: producto.cantidad + 1
        };
      }
      return producto;
    });
    actualizarProductosSeleccionados(productosActualizados);
  };

  const eliminarProducto = (id) => {
    const productosActualizados = productosSeleccionados.filter(
      (producto) => producto.id !== id
    );
    actualizarProductosSeleccionados(productosActualizados);
  };

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
          <Items
            productosSeleccionados={productosSeleccionados}
            restarCantidadProducto={restarCantidadProducto}
            sumarCantidadProducto={sumarCantidadProducto}
            eliminarProducto={eliminarProducto}
            calcularSubtotal={calcularSubtotal}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Carrito;