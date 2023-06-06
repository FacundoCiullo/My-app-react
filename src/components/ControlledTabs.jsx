// ControlledTabs.js
import React, { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Cards from "./Productos/Cards";
import CardsAbrigos from "./Productos/CardsAbrigos";
import CardsRemeras from "./Productos/CardsRemeras";
import CardsPantalones from "./Productos/CardsPantalones";
import CardsZapatillas from "./Productos/CardsZapatillas";

function ControlledTabs({ aumentarCantidadProductos }) {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [cantidadProductos, setCantidadProductos] = useState(0);

  const agregarProductoAlCarrito = (producto) => {
    setProductosSeleccionados([...productosSeleccionados, producto]);
    setCantidadProductos(cantidadProductos + 1);
  };

  return (
    <Tabs
    defaultActiveKey="Todas"
    id="justify-tab-example"
    className="mb-3"
    justify
    >
      <Tab eventKey="all" title="Todos">
        <Cards
          aumentarCantidadProductos={aumentarCantidadProductos}
        />
      </Tab>
      <Tab eventKey="abrigos" title="Abrigos">
        <CardsAbrigos
          aumentarCantidadProductos={aumentarCantidadProductos}
        />
      </Tab>
      <Tab eventKey="remeras" title="Remeras">
        <CardsRemeras
          aumentarCantidadProductos={aumentarCantidadProductos}
        />
      </Tab>
      <Tab eventKey="pantalones" title="Pantalones">
        <CardsPantalones
          aumentarCantidadProductos={aumentarCantidadProductos}
        />
      </Tab>
      <Tab eventKey="zapatillas" title="Zapatillas">
        <CardsZapatillas
          aumentarCantidadProductos={aumentarCantidadProductos}
        />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;