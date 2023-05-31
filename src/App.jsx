import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';
import Cards from './components/Productos/Cards';
import ControlledCarousel from "./components/ControlledCarousel" ;
import ControlledTabs from "./components/ControlledTabs" ;



function App() {
  const [cantidadProductos, setCantidadProductos] = useState(0);


  const aumentarCantidadProductos = () => {
    setCantidadProductos(prevCantidad => prevCantidad + 1);
  };

  const agregarProductoAlCarrito = (producto) => {
    setCantidadProductos(prevCantidad => prevCantidad + 1);
  };

  return (
    <div className="App">
      <Header cantidadProductos={cantidadProductos} />
      <main>
        <div>
          <Cards/>
        </div>
        <div className='carousel'>
          <ControlledCarousel />
        </div>
        <ControlledTabs/>
        <h3>Todos los productos</h3>
        <Cards
          aumentarCantidadProductos={aumentarCantidadProductos}
          agregarProductoAlCarrito={agregarProductoAlCarrito}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;