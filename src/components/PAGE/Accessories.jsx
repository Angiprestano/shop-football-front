import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, getAccessories } from "../../Redux/action";
import { useEffect } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const Accessories = () => {
  const token = useSelector((state) => state.token);
  const accessories = useSelector((state) => state.accessories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getAccessories(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <h4 className="text-center mt-2 mb-4 textStyle">Accessori</h4>
      <Link
        to="#"
        onClick={handleGoBack}
        style={{ position: "absolute", left: "10px", top: "10px" }}
        className="text-black"
      >
        <ArrowLeft size={20} />
      </Link>
      <Container>
        <Row xs={1} md={2} lg={3} xl={4} xxl={5} className="g-4">
          {accessories ? (
            accessories.map((product, index) => (
              <Col md={3} key={index}>
                <Card
                  className="text-truncate textStyle custom-card"
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
                    className=" ms-4 me-4 mt-3 mb-2 text-black border border-black bg bg-body-secondary custom-button"
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
export default Accessories;
