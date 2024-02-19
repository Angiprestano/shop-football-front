import { Card, Col, Row, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder } from "../Redux/action";

const MyCart = () => {
  const token = useSelector((state) => state.token);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const checkOutOrder = () => {
    const listProduct = cart.map((product) => product.idProduct);
    const body = { listProduct };
    dispatch(addOrder(token, body));
    navigate("/order");
  };

  const total = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price;
    }
    return total;
  };

  console.log(total());
  return (
    <div>
      {cart ? (
        <div>
          <h4 className="ms-4">Carrello</h4>
          <Row className="ms-2">
            {cart.map((product, i) => {
              return (
                <Col md={3} key={i}>
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
                      <Card.Text className="custom-card-text">
                        {product.color}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Prezzo: €{product.price.toFixed(2)}
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <h5 className="f fs-4 mt-5 ms-4">
            Totale da pagare= €{total().toFixed(2)}
          </h5>
          <button onClick={checkOutOrder} className="bg bg-body-secondary ms-4">
            CheckOut
          </button>
        </div>
      ) : (
        <p>total={total}</p>
      )}
    </div>
  );
};

export default MyCart;
