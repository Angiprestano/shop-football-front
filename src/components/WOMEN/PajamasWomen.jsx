import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, getPajamasWomen } from "../../Redux/action";
import { useEffect } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const PajamasWomen = () => {
  const token = useSelector((state) => state.token);
  const pajamasWomen = useSelector((state) => state.pajamasWomen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getPajamasWomen(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  return (
    <div className="">
      <h4 className="ms-5 ps-5 pt-3 mb-4">Pigiami Donna</h4>
      <Container>
        <Row>
          {pajamasWomen ? (
            pajamasWomen.map((product, index) => (
              <Col md={3} key={index}>
                <Card style={{ width: "15rem", marginBottom: "20px" }}>
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="custom-card-body">
                    <Card.Title className="custom-card-title">
                      {product.title}
                    </Card.Title>
                    <Card.Text className="custom-card-text">
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      Prezzo: €{product.price.toFixed(2)}
                    </ListGroup.Item>

                    <ListGroup.Item>Colore:{product.color}</ListGroup.Item>

                    <ListGroup.Item>Taglia: {product.size}</ListGroup.Item>

                    <ListGroup.Item>
                      Categoria: {product.categories}
                    </ListGroup.Item>

                    <ListGroup.Item>
                      Tipo di prodotto: {product.typeofProduct}
                    </ListGroup.Item>
                  </ListGroup>
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
                </Card>
              </Col>
            ))
          ) : (
            <p>Caricamento in corso...</p>
          )}
        </Row>
      </Container>
    </div>
  );
};
export default PajamasWomen;
