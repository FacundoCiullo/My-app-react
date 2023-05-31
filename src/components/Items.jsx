import React from 'react';

function Items({ productosSeleccionados }) {
  const calcularSubtotal = (producto) => {
    return producto.precio * producto.cantidad;
  };

  const restarCantidadProducto = (id) => {
    // Lógica para restar la cantidad de un producto en el carrito
  };

  const sumarCantidadProducto = (id) => {
    // Lógica para sumar la cantidad de un producto en el carrito
  };

  const eliminarProducto = (id) => {
    // Lógica para eliminar un producto del carrito
  };

  return (
    <div>
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
    </div>
  );
}

export default Items;