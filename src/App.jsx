import './App.css';
import Destacado from './components/Destacado';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/destacados"} element={<Destacado />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
