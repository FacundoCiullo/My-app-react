import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Carrito({ cantidadProductos, productosSeleccionados = [] }) {
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

  const actualizarProductosSeleccionados = (productosActualizados) => {
    // Lógica adicional para actualizar los productos seleccionados en el estado o guardarlos en el almacenamiento, si es necesario
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
          {productosSeleccionados.length > 0 ? (
            <div>
              {productosSeleccionados.map((producto, idx) => (
                <div className="carrito-producto" key={idx}>
                  <img
                    className="carrito-producto-imagen"
                    src={producto.imagen}
                    alt={producto.titulo}
                  />
                  <div className="carrito-producto-titulo">
                    <small>Producto</small>
                    <h3>{producto.titulo}</h3>
                  </div>
                  <div className="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <div className="cantidad-botones">
                      <button
                        className="boton-restar"
                        data-id={producto.id}
                        onClick={() => restarCantidadProducto(producto.id)}
                      >
                        -
                      </button>
                      <p>{producto.cantidad}</p>
                      <button
                        className="boton-sumar"
                        data-id={producto.id}
                        onClick={() => sumarCantidadProducto(producto.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                  </div>
                  <div className="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>${calcularSubtotal(producto)}</p>
                  </div>
                  <div className="carrito-producto-eliminar">
                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Carrito;