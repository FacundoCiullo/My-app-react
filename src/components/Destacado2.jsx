import { Link } from "react-router-dom";

const Destacado2 = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <p><img src={"/img/pantalones/01.jpg"} alt="Pantalones" className="img-fluid producto-detalles" /></p>
          <h3>Pantalones</h3>
          <Link className="btn btn-dark" activeclassname="text-danger" to={"/category/Pantalon"}>Ver mas</Link>
        </div>
        <div className="col-md-6 text-center">
          <p><img src={"/img/remeras/01.jpg"} alt="Remeras" className="img-fluid producto-detalles" /></p>
          <h3>Remeras</h3>
          <Link className="btn btn-dark" activeclassname="text-danger" to={"/category/Remeras"}>Ver mas</Link>
        </div>
      </div>
    </div>
  )
}

export default Destacado2;