import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Orders = () => {
  const token = useSelector((state) => state.token);
  const param = useParams();
  const [lastOrder, setlastOrder] = useState(null);

  const getlastOrder = () => {
    const URL = "http://localhost:3001/orders/" + param.id;

    fetch(URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella richiesta");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setlastOrder(data);
      })
      .catch((error) => {
        console.error("Si è verificato un errore:", error);
      });
  };

  useEffect(() => {
    getlastOrder();
  }, []);

  return (
    <div>
      {lastOrder ? (
        <div>
          <div>
            <h3>Ordine</h3>
            <p>ID Ordine: {lastOrder.id}</p>
            <p>Totale da pagare: €{lastOrder.toPay}</p>
            {lastOrder.utente && (
              <div>
                <p>
                  Utente: {lastOrder.user.name} {lastOrder.user.surname}
                </p>
                <p>Email: {lastOrder.user.email}</p>
                <p>Indirizzo: {lastOrder.user.address}</p>
              </div>
            )}
            <h4>Dettagli ordine:</h4>
            <ul>
              {lastOrder.detailsProduct &&
                lastOrder.detailsProduct.map((detail) => (
                  <li key={detail.idProduct}>
                    <img
                      src={detail.image}
                      alt={detail.name}
                      style={{
                        maxWidth: "100px",
                        maxHeight: "100px",
                        marginRight: "10px",
                      }}
                    />
                    <p>Nome prodotto: {detail.title}</p>
                    <p>Descrizione: {detail.description}</p>
                    <p>Prezzo: €{detail.price.toFixed(2)}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Non ci sono ordini disponibili.</p>
      )}
    </div>
  );
};

export default Orders;
