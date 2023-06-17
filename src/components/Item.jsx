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
          <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
            <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
            <div className="card-body">
              <h3>{producto.titulo}</h3>
              <p className="card-text"><span className="text-secondary">{producto.descripcion}</span><br /><b>${producto.precio}</b></p>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
