import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "bootstrap-icons/font/bootstrap-icons.css";



const Item = ({ producto }) => {

  return (
    <Col 
    className="g-4"
    xs={12} sm={6} md={4} lg={3} 
    >
      <Card className="producto-detalles">
        <Card.Body>
          <Link to={"/item/" + String(producto.id)} className="text-dark text-decoration-none">

            <Card.Img variant="top" className="producto-imagen" src={producto.imagen} />

            <Card.Title className="producto-titulo">{producto.titulo}</Card.Title>

            <Card.Text>{producto.descripcion}</Card.Text>

            <Card.Text>{`Precio: ${ "$" + producto.precio}`}</Card.Text>
            
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
