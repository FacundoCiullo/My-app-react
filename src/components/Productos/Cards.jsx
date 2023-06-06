import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


function Cards({ aumentarCantidadProductos }) {
  const [productos, setProductos] = useState([]);


  useEffect(() => {
    async function fetchProductos() {
      const response = await fetch("/Productos.json");
      const data = await response.json();
      setProductos(data);
    }
    fetchProductos();
  }, []);

  const handleAgregar = (producto) => {
    aumentarCantidadProductos();
  };

  return (
    <Row 
    xs={1} md={3} lg={6} 
    className="g-4"
    >
      {productos.map((producto, idx) => (
        <Col key={idx}>
        <Card className="producto-detalles">
          <Card.Img variant="top" className="producto-imagen" src={producto.imagen} />
          <Card.Body>
            <Card.Title className="producto-titulo">{producto.titulo}</Card.Title>
            <Card.Text>{producto.descripcion}</Card.Text>
            <Card.Text>{producto.precio}</Card.Text>
            <Button variant="primary" onClick={() => handleAgregar(producto)}>
              Agregar
            </Button>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
  );
}

export default Cards;


