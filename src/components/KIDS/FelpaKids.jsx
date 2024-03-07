import { useDispatch, useSelector } from "react-redux";
import { ActionTypes, getFelpaKids } from "../../Redux/action";
import { useEffect } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const FelpaKids = () => {
  const token = useSelector((state) => state.token);
  const felpaKids = useSelector((state) => state.felpaKids);
  const cartId = useSelector((state) => (state.cart ? state.cart.id : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getFelpaKids(token));
      console.log("ecco il token", token);
    }
  }, [dispatch, token]);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="">
      <h4 className="text-center pt-3 mb-4 textStyle">Felpe per bambini</h4>
      <Link
        to="#"
        onClick={handleGoBack}
        style={{ position: "absolute", left: "10px", top: "10px" }}
        className="text-black"
      >
        <ArrowLeft size={20} />
      </Link>
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={5} className="g-4">
          {felpaKids ? (
            felpaKids.map((product, index) => (
              <Col md={3} key={index}>
                <Card
                  className="text-truncate animationCard"
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
                  <Card.Body>
                    <Button
                      className="ms-4 me-4 text-black border border-black bg bg-body-secondary "
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
export default FelpaKids;
