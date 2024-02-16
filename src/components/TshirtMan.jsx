import { useDispatch, useSelector } from "react-redux";
import { getTshirtMan } from "../Redux/action";
import { useEffect } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

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
      <h4 className="ms-5 ps-5 mt-2 mb-4">Magliette per uomo</h4>
      <Container>
        <Row>
          {tshirtMan ? (
            tshirtMan.map((product, index) => (
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
export default TshirtMan;
