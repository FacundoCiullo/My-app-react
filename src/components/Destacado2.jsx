import { NavLink } from "react-router-dom";

const Destacado2 = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <p><img src={"/img/pantalones/01.jpg"} alt="San Lorenzo" className="img-fluid" /></p>
          <h3>Pantalones</h3>
          <NavLink className="btn btn-dark" activeclassname="text-danger" to={"/category/Pantalon"}>Ver</NavLink>
        </div>
        <div className="col-md-6 text-center">
          <p><img src={"/img/remeras/01.jpg"} alt="Para los Peques" className="img-fluid" /></p>
          <h3>Remeras</h3>
          <NavLink className="btn btn-dark" activeclassname="text-danger" to={"/category/Remeras"}>Ver</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Destacado2;