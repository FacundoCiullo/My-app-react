import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from './components/Footer';

import ControlledCarousel from "./components/ControlledCarousel" ;
import ControlledTabs from "./components/ControlledTabs" ;



function App() {
  const [cantidadProductos, setCantidadProductos] = useState(0);


  const aumentarCantidadProductos = () => {
    setCantidadProductos(prevCantidad => prevCantidad + 1);
  };


  return (
    <div className="App">
      <Header cantidadProductos={cantidadProductos} />
      <main>
        <div className='carousel'>
          <ControlledCarousel />
        </div>
        <div>
        <h3>Todos los productos</h3>
        <ControlledTabs
        aumentarCantidadProductos={aumentarCantidadProductos}
        />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;