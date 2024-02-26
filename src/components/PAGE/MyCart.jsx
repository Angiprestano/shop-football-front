import { Card, Col, Row, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionTypes, addOrder } from "../../Redux/action";
import { FaTrash } from "react-icons/fa";

const MyCart = () => {
  const token = useSelector((state) => state.token);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkOutOrder = () => {
    const body = { listProduct: [] };
    for (let i = 0; i < cart.length; i++) {
      body.listProduct.push(cart[i].id);
    }
    console.log(body);

    dispatch(addOrder(token, body)).then((data) => {
      console.log(data);
      navigate("/orders/" + data);
    });
    dispatch({ type: ActionTypes.EMPTY_CART });
  };

  const removeToCart = (id) => {
    dispatch({
      type: ActionTypes.REMOVE_TO_CART,
      payload: id,
    });
  };

  const total = () => {
    if (!cart || cart.length === 0) {
      return 0;
    }

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i] && cart[i].price) {
        total += cart[i].price;
      }
    }
    return typeof total === "number" ? total : 0;
  };
  console.log(total());

  return (
    <div>
      {cart ? (
        <div>
          <h4 className="ms-4 mb-2 mt-3">Carrello</h4>

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

                      <FaTrash
                        className="mt-2 mb-2"
                        style={{
                          color: "black",
                          cursor: "pointer",
                          display: "block",
                          margin: "auto",
                        }}
                        onClick={() => removeToCart(product.id)}
                      />
                    </ListGroup>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <p className="f fs-4 mt-3 ms-4 fw-semibold">
            Totale da pagare= €{total().toFixed(2)}
          </p>
          <button
            onClick={checkOutOrder}
            className=" checkButton bg bg-body-secondary ms-4 mt-4 rounded-3 border-1 ps-2 pe-2"
          >
            Vai all'ordine
          </button>
        </div>
      ) : (
        <p>total={total}</p>
      )}
    </div>
  );
};

export default MyCart;
