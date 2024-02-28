import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, getTshirtMan } from "../../Redux/action";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const TshirtMan = () => {
  const token = useSelector((state) => state.token);
  const tshirtMan = useSelector((state) => state.tshirtMan);
  const dispatch = useDispatch();
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    if (token) {
      dispatch(getTshirtMan(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  const handleAddToCart = (product) => {
    dispatch({
      type: ActionTypes.ADD_CART,
      payload: product,
    });
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div>
      <h4 className="text-center pt-3 mb-4 text-black textStyle">Magliette</h4>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={5} className="g-4">
          {tshirtMan ? (
            tshirtMan.map((product, index) => (
              <Col md={3} key={index}>
                <Card
                  className="text-truncate animationCard textStyle"
                  style={{ width: "15rem", marginBottom: "20px" }}
                >
                  <Link
                    to={`/products/${product.id}`}
                    className="text-decoration-none text-black "
                  >
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
                  </Link>
                  <Button
                    className="ms-4 me-4 mt-2 mb-2 text-black border border-black bg bg-body-secondary custom-button"
                    onClick={() => handleAddToCart(product)}
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
export default TshirtMan;
