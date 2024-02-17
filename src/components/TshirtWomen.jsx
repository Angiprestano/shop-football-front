import { useDispatch, useSelector } from "react-redux";
import { getTshirtWomen } from "../Redux/action";
import { useEffect } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

const TshirtWomen = () => {
  const token = useSelector((state) => state.token);
  const tshirtWomen = useSelector((state) => state.tshirtWomen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getTshirtWomen(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  return (
    <div className="">
      <h4 className="ms-5 ps-3 pt-3 mb-4">Magliette per Donna</h4>
      <Container>
        <Row>
          {tshirtWomen ? (
            tshirtWomen.map((product, index) => (
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
export default TshirtWomen;
