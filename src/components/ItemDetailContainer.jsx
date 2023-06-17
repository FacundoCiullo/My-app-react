import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    const db = getFirestore();
    const producto = doc(db, "items", id ); // No muestra producto en base id en firebase
    getDoc(producto).then(resultado => {
      
      if (resultado.exists()) {
        setItem({id:resultado.id, ...resultado.data()});
        setLoading(false);
      } else {
        console.log("Error! no encuentra el Producto");
      }
    });
  }, [id])

  return(
    <div className="container my-5">
      <div className="row">
        {loading ? <Loading /> : <ItemDetail producto={item} />}  
      </div>
    </div>  
  )
}

export default ItemDetailContainer;