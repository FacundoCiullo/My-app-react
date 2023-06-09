import ItemCount from "./ItemCount";


const ItemDetail = ({producto}) => {
  return(
    <div className="container my-5">
      <div className="row">
        <div className="col-md-5 offset-md-1">
          <img src={"/img/" + producto.imagen } alt={producto.titulo} className="img-fluid" />
        </div>
        <div className="col-md-5">
          <h1>{producto.titulo}</h1>
          <h3>{producto.descripcion}</h3>
          <p><b>${producto.precio}</b></p>
          <ItemCount stock={producto.stock}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail;