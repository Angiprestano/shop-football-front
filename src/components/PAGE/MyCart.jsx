import { Card, Col, Row, ListGroup, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ActionTypes, addOrder } from "../../Redux/action";
import { useState } from "react";

const MyCart = () => {
  const token = useSelector((state) => state.token);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);

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
    setProductIdToDelete(id);
    setShowConfirmationModal(true);
  };

  const confirmDelete = () => {
    if (productIdToDelete) {
      dispatch({
        type: ActionTypes.REMOVE_TO_CART,
        payload: productIdToDelete,
      });
    }
    setShowConfirmationModal(false);

    setProductIdToDelete(null);
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
          <h4 className="ms-4 mb-2 mt-3 textStyle text-center fw-bold">
            Carrello
          </h4>

          <Row className="ms-2">
            {cart.map((product, i) => {
              return (
                <Col md={3} key={i}>
                  <Card
                    className="text-truncate textStyle"
                    style={{ width: "15rem", marginBottom: "20px" }}
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
                      <Card.Text className="custom-card-text">
                        {product.color}
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        Prezzo: €{product.price.toFixed(2)}
                      </ListGroup.Item>

                      <Button
                        onClick={() => removeToCart(product.id)}
                        className=" bg bg-secondary-subtle border border-black text-black fs-6 custom-button"
                      >
                        Elimina
                      </Button>
                    </ListGroup>
                  </Card>
                </Col>
              );
            })}
          </Row>

          <Modal
            show={showConfirmationModal}
            onHide={() => setShowConfirmationModal(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Conferma eliminazione</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Sei sicuro di voler eliminare questo prodotto dal carrello?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowConfirmationModal(false)}
              >
                Annulla
              </Button>
              <Button variant="warning" onClick={confirmDelete}>
                Elimina
              </Button>
            </Modal.Footer>
          </Modal>

          <p className="fs-4 mt-3 ms-4 fw-semibold textStyle">
            Totale da pagare= {total().toFixed(2)}€
          </p>
          <button
            onClick={checkOutOrder}
            className=" checkButton bg bg-body-secondary ms-4 mt-2 rounded-3 border-1 ps-2 pe-2"
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
