import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";

import Footer from './components/Footer';
import ControlledTabs from "./components/ControlledTabs";

function App() {
  const [cantidadProductos, setCantidadProductos] = useState(0);

  const aumentarCantidadProductos = () => {
    setCantidadProductos(prevCantidad => prevCantidad + 1);
  };

  return (
    <div className="App">
      <Header cantidadProductos={cantidadProductos} />
      <main>
        <h3>Todos los productos</h3>
        <ControlledTabs
          cantidadProductos={cantidadProductos}
          aumentarCantidadProductos={aumentarCantidadProductos}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;