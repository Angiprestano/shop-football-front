import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { ArrowLeft } from "react-bootstrap-icons";
import { ActionTypes } from "../../Redux/action";

const PageProduct = () => {
  const token = useSelector((state) => state.token);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    // Verifico che l'ID sia una stringa valida prima di eseguire la chiamata API
    if (id && typeof id === "string") {
      fetch(`http://localhost:3001/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Dati ricevuti:", data);
          setProduct(data);
        })
        .catch((error) => {
          console.error(
            "Errore durante il recupero dei dettagli del prodotto:",
            error
          );
        });
    }
  }, [id, token]);
  if (!product) {
    return <p>Caricamento in corso...</p>;
  }
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Container fluid className="mt-3">
      <Card className="textStyle" style={{ maxWidth: "100%" }}>
        <Link
          to="#"
          onClick={handleGoBack}
          style={{ position: "absolute", left: "10px", top: "10px" }}
          className="text-black"
        >
          <ArrowLeft size={20} />
        </Link>
        <Row>
          <Col sm={6}>
            <Card.Img
              className="prodotto-image"
              variant="top"
              src={product.image}
              alt={product.title}
            />
          </Col>
          <Col sm={6} className="mt-3 d-flex align-content-center ">
            <Card.Body>
              <Card.Title>
                <h2>{product.title}</h2>
              </Card.Title>
              <Card.Body className="text-custom">
                <Card.Text className="mt-1">
                  <h4>Descrizione:</h4>
                  {product.description}
                </Card.Text>
                <Card.Text>Prezzo: €{product.price.toFixed(2)}</Card.Text>
                <Card.Text>Categoria: {product.categories}</Card.Text>
                <Card.Text>Tipo di prodotto: {product.typeofproduct}</Card.Text>
                <Card.Text>Taglia: {product.size}</Card.Text>
                <Card.Text>Colore: {product.color}</Card.Text>
              </Card.Body>
              <Button
                className="ms-4 me-4 mt-2 mb-2 text-black border border-black bg bg-body-secondary custom-button"
                onClick={() => {
                  dispatch({
                    type: ActionTypes.ADD_CART,
                    payload: product,
                  });
                }}
              >
                Aggiungi al carrello
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default PageProduct;
