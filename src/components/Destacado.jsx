import Destacado2 from "./Destacado2";
import { NavLink } from "react-router-dom";

const Destacado = () => {
    return (
        <>
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col text-center">
                    <img src={"/img/abrigos/01.jpg"} alt="Preparate para el Invierno" className="img-fluid" />
                    <h2 className="my-3">PREPARATE PARA EL INVIERNO</h2>
                    <NavLink className="btn btn-dark" activeclassname="text-danger" to={"/category/Abrigos"}>Ver</NavLink>
                </div>
            </div>
        </div>
        <Destacado2 />
        </>
    )
}

export default Destacado;