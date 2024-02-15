import { useDispatch, useSelector } from "react-redux";
import { getTshirtMan } from "../Redux/action";
import { useEffect } from "react";

const TshirtMan = () => {
  const token = useSelector((state) => state.token);
  const tshirtMan = useSelector((state) => state.tshirtMan);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getTshirtMan(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  return (
    <div>
      <h3>Magliette per uomo</h3>
      {TshirtMan.length >
        0(
          TshirtMan.map((products, index) => (
            <div key={index}>
              <h4>{products.title}</h4>
              <img src={products.image} alt={products.title} />
              <p>{products.description}</p>
              <p>Categoria: {products.categories}</p>
              <p>Prezzo: {products.price}</p>
              <p>Colore: {products.color}</p>
              <p>Taglia: {products.size}</p>
              <p>Tipo di prodotto: {products.typeofproducts}</p>
            </div>
          ))
        )(<p>Nessuna maglietta disponibile al momento.</p>)}
    </div>
  );
};
export default TshirtMan;
