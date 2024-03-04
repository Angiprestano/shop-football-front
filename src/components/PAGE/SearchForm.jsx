import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ActionTypes } from "../../Redux/action";

const SearchForm = () => {
  const location = useLocation();
  const searchResults = location.state.searchResults;
  const dispatch = useDispatch();

  if (!searchResults || searchResults.length === 0) {
    return <div>Nessun risultato trovato</div>;
  }

  return (
    <div>
      <h4 className="text-center mt-2 textStyle mb-2">
        Risultati della ricerca
      </h4>

      <Row xs={1} md={2} lg={3} className="g-4 mx-4 ps-5 ms-5 mt-2">
        {searchResults.map((product, index) => (
          <Col key={index}>
            <Link
              to={`/products/${product.id}`}
              className="text-black"
              style={{ textDecoration: "none" }}
            >
              <Card
                className="col-12 col-sm-6 col-md-4 col-lg-2 custom-card text-truncate textStyle"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt="Immagine product"
                  className="img-fluid"
                />
                <Card.Body className="custom-card-body">
                  <Card.Title className="text-truncate fs-6 w-100">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="custom-card-text text-truncate">
                    {product.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Prezzo:</strong> {product.price} €
                  </Card.Text>
                  <Card.Text>
                    <strong>Categoria:</strong> {product.categories}
                  </Card.Text>
                  <Card.Text>
                    <strong>Colore:</strong> {product.color}
                  </Card.Text>
                  <Card.Text>
                    <strong>Misura:</strong> {product.size}
                  </Card.Text>
                  <Card.Text>
                    <strong>Tipo di prodotto:</strong> {product.typeofproduct}
                  </Card.Text>
                  <Button
                    className="bg bg-body-secondary text-black border border-black ms-2 custom-button"
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
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SearchForm;
